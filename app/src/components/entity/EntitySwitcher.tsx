import { useState, useRef, useEffect } from 'react';
import { Building2, ChevronDown, Search, X, Check } from 'lucide-react';
import { clsx } from 'clsx';
import { useEntityContext } from '@/contexts/EntityContext';
import { getRoleLabel, getEntityIdentifier, getEntityTypeLabel } from '@/data/mock';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

export function EntitySwitcher() {
  const {
    activeEntity,
    activeRelationship,
    availableEntities,
    hasInProgressWork,
    selectEntity,
    clearEntity,
  } = useEntityContext();

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [pendingEntityId, setPendingEntityId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearch('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filtered = availableEntities.filter(ae =>
    ae.entity.name.toLowerCase().includes(search.toLowerCase()) ||
    getEntityIdentifier(ae.entity).toLowerCase().includes(search.toLowerCase())
  );

  function handleSelect(entityId: string) {
    if (entityId === activeEntity?.id) {
      setIsOpen(false);
      setSearch('');
      return;
    }
    if (hasInProgressWork) {
      setPendingEntityId(entityId);
    } else {
      selectEntity(entityId);
      setIsOpen(false);
      setSearch('');
    }
  }

  function confirmSwitch() {
    if (pendingEntityId) {
      selectEntity(pendingEntityId);
      setPendingEntityId(null);
      setIsOpen(false);
      setSearch('');
    }
  }

  if (availableEntities.length === 0) return null;

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            'flex items-center gap-2.5 rounded-lg px-3 py-2 text-left transition-colors',
            'border border-transparent hover:border-surface-300 hover:bg-white/80',
            isOpen && 'border-surface-300 bg-white shadow-sm',
          )}
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white">
            <Building2 className="h-4 w-4" />
          </div>
          <div className="min-w-0 max-w-[200px]">
            {activeEntity ? (
              <>
                <p className="truncate text-sm font-medium text-surface-900">{activeEntity.name}</p>
                <p className="truncate text-xs text-surface-500">
                  {activeRelationship ? getRoleLabel(activeRelationship.roleType) : ''} · {getEntityIdentifier(activeEntity)}
                </p>
              </>
            ) : (
              <>
                <p className="text-sm font-medium text-surface-600">Select Entity</p>
                <p className="text-xs text-surface-400">{availableEntities.length} available</p>
              </>
            )}
          </div>
          <ChevronDown className={clsx('h-4 w-4 text-surface-400 transition-transform', isOpen && 'rotate-180')} />
        </button>

        {isOpen && (
          <div className="absolute left-0 top-full z-50 mt-1 w-[360px] rounded-xl border border-surface-200 bg-white shadow-xl">
            {availableEntities.length > 3 && (
              <div className="border-b border-surface-100 p-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-400" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search entities..."
                    className="w-full rounded-lg border border-surface-200 bg-surface-50 py-2 pl-9 pr-8 text-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
                    autoFocus
                  />
                  {search && (
                    <button onClick={() => setSearch('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600">
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            )}

            <div className="max-h-[320px] overflow-y-auto py-1">
              {filtered.length === 0 && (
                <p className="px-4 py-6 text-center text-sm text-surface-400">No entities found</p>
              )}
              {filtered.map(({ entity, relationship }) => {
                const isActive = entity.id === activeEntity?.id;
                return (
                  <button
                    key={entity.id}
                    onClick={() => handleSelect(entity.id)}
                    className={clsx(
                      'flex w-full items-start gap-3 px-4 py-3 text-left transition-colors',
                      isActive ? 'bg-primary-50' : 'hover:bg-surface-50',
                    )}
                  >
                    <div className={clsx(
                      'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-medium',
                      isActive ? 'bg-primary-500 text-white' : 'bg-surface-100 text-surface-600',
                    )}>
                      {entity.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-sm font-medium text-surface-900">{entity.name}</p>
                        {isActive && <Check className="h-4 w-4 shrink-0 text-primary-500" />}
                      </div>
                      <p className="text-xs text-surface-500 mt-0.5">
                        {getEntityIdentifier(entity)}
                      </p>
                      <div className="flex gap-1.5 mt-1.5">
                        <Badge variant={isActive ? 'primary' : 'default'}>{getRoleLabel(relationship.roleType)}</Badge>
                        <Badge>{getEntityTypeLabel(entity)}</Badge>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {activeEntity && (
              <div className="border-t border-surface-100 p-2">
                <button
                  onClick={() => { clearEntity(); setIsOpen(false); }}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm text-surface-500 hover:bg-surface-50 hover:text-surface-700"
                >
                  Clear active entity
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Rule EC-03: Confirmation when switching with in-progress work */}
      <Modal
        isOpen={!!pendingEntityId}
        onClose={() => setPendingEntityId(null)}
        title="Switch Entity?"
        size="sm"
      >
        <div className="space-y-4">
          <div className="rounded-lg bg-warn-50 border border-amber-200 p-3">
            <p className="text-sm text-surface-700">
              You have unsaved work for <span className="font-semibold">{activeEntity?.name}</span>.
              Switching entities will leave this draft open. You can return to it later.
            </p>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="secondary" onClick={() => setPendingEntityId(null)}>Cancel</Button>
            <Button onClick={confirmSwitch}>Switch Anyway</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
