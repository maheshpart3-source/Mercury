import { useNavigate } from 'react-router-dom';
import { Building2, Search, Globe, ArrowRight, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useEntityContext } from '@/contexts/EntityContext';
import { getRoleLabel, getEntityIdentifier, getEntityTypeLabel, getObligationsForEntity } from '@/data/mock';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function SelectEntityPage() {
  const { person } = useAuth();
  const { availableEntities, selectEntity } = useEntityContext();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filtered = availableEntities.filter(ae =>
    ae.entity.name.toLowerCase().includes(search.toLowerCase()) ||
    getEntityIdentifier(ae.entity).toLowerCase().includes(search.toLowerCase())
  );

  function handleSelect(entityId: string) {
    selectEntity(entityId);
    navigate('/workspace');
  }

  const showSearch = availableEntities.length > 3;
  const hasMany = availableEntities.length > 10;

  return (
    <div className="flex min-h-screen flex-col items-center bg-surface-50 px-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-surface-900">
            Welcome, {person?.name}
          </h1>
          <p className="mt-2 text-surface-500">
            {hasMany
              ? `You manage ${availableEntities.length} entities. Search or select one to continue.`
              : 'Select an entity to access its workspace.'}
          </p>
        </div>

        {showSearch && (
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-surface-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search entities by name, CIN, or LLPIN..."
              className="w-full rounded-xl border border-surface-200 bg-white py-3 pl-12 pr-4 text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
              autoFocus
            />
          </div>
        )}

        <div className="space-y-3">
          {filtered.map(({ entity, relationship, authorities }) => {
            const obligations = getObligationsForEntity(entity.id);
            const pending = obligations.filter(o => o.status === 'PENDING' || o.status === 'OVERDUE');
            const overdue = obligations.filter(o => o.status === 'OVERDUE');
            const isConsequential = authorities.some(a => a.level === 'CONSEQUENTIAL');

            return (
              <button
                key={entity.id}
                onClick={() => handleSelect(entity.id)}
                className="group flex w-full items-start gap-4 rounded-xl border border-surface-200 bg-white p-5 text-left shadow-sm transition-all hover:border-primary-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700 font-bold text-lg">
                  {entity.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-surface-900 group-hover:text-primary-700">{entity.name}</p>
                      <p className="text-sm text-surface-500 mt-0.5">{getEntityIdentifier(entity)}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-surface-300 group-hover:text-primary-500 shrink-0 mt-1 transition-colors" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <Badge variant="primary">{getRoleLabel(relationship.roleType)}</Badge>
                    <Badge>{getEntityTypeLabel(entity)}</Badge>
                    <Badge variant={isConsequential ? 'success' : 'warning'}>
                      {isConsequential ? 'Full Authority' : 'Limited Authority'}
                    </Badge>
                  </div>
                  {pending.length > 0 && (
                    <div className="mt-2.5 flex items-center gap-1.5 text-sm">
                      {overdue.length > 0 ? (
                        <AlertTriangle className="h-3.5 w-3.5 text-danger-500" />
                      ) : (
                        <AlertTriangle className="h-3.5 w-3.5 text-warn-500" />
                      )}
                      <span className={overdue.length > 0 ? 'text-danger-600 font-medium' : 'text-surface-600'}>
                        {pending.length} pending obligation{pending.length !== 1 ? 's' : ''}
                        {overdue.length > 0 && ` (${overdue.length} overdue)`}
                      </span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && search && (
          <div className="text-center py-12">
            <p className="text-surface-500">No entities matching "{search}"</p>
          </div>
        )}

        <div className="mt-8 flex justify-center gap-3">
          <Button variant="secondary" onClick={() => navigate('/registry')}>
            <Globe className="h-4 w-4" />
            Browse Public Registry
          </Button>
        </div>
      </div>
    </div>
  );
}
