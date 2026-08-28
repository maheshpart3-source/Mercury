import {
  createContext, useContext, useState, useCallback, useMemo, useEffect, useRef,
  type ReactNode,
} from 'react';
import type { Entity, EntityRelationship, Authority } from '@/types';
import { getAvailableEntitiesForPerson, getEntityById } from '@/data/mock';
import { useAuth } from './AuthContext';

interface AvailableEntity {
  entity: Entity;
  relationship: EntityRelationship;
  authorities: Authority[];
}

interface EntityContextValue {
  activeEntity: Entity | null;
  activeRelationship: EntityRelationship | null;
  activeAuthorities: Authority[];
  availableEntities: AvailableEntity[];
  hasInProgressWork: boolean;
  selectEntity: (entityId: string) => void;
  clearEntity: () => void;
  setHasInProgressWork: (v: boolean) => void;
  canPerformAction: (action: string) => boolean;
}

const EntityContext = createContext<EntityContextValue | undefined>(undefined);

function getStoredEntityId(): string | null {
  try { return sessionStorage.getItem('mca_entity_id'); } catch { return null; }
}

export function EntityProvider({ children }: { children: ReactNode }) {
  const { person } = useAuth();

  const [activeEntityId, setActiveEntityId] = useState<string | null>(getStoredEntityId);
  const [hasInProgressWork, setHasInProgressWork] = useState(false);
  const prevPersonId = useRef(person?.id);

  const availableEntities = useMemo<AvailableEntity[]>(() => {
    if (!person) return [];
    return getAvailableEntitiesForPerson(person.id);
  }, [person]);

  // Clear entity context on person change (Rule EC-11) — skip initial mount
  useEffect(() => {
    if (prevPersonId.current !== person?.id) {
      prevPersonId.current = person?.id;
      setActiveEntityId(null);
      setHasInProgressWork(false);
      try { sessionStorage.removeItem('mca_entity_id'); } catch {}
    }
  }, [person?.id]);

  const active = useMemo(() => {
    if (!activeEntityId) return null;
    return availableEntities.find(ae => ae.entity.id === activeEntityId) ?? null;
  }, [activeEntityId, availableEntities]);

  const selectEntity = useCallback((entityId: string) => {
    const target = getEntityById(entityId);
    if (!target || target.status === 'STRUCK_OFF') return;
    setActiveEntityId(entityId);
    try { sessionStorage.setItem('mca_entity_id', entityId); } catch {}
  }, []);

  const clearEntity = useCallback(() => {
    setActiveEntityId(null);
    try { sessionStorage.removeItem('mca_entity_id'); } catch {}
  }, []);

  const canPerformAction = useCallback((action: string): boolean => {
    if (!active) return false;
    return active.authorities.some(a => a.actions.includes(action));
  }, [active]);

  const value: EntityContextValue = {
    activeEntity: active?.entity ?? null,
    activeRelationship: active?.relationship ?? null,
    activeAuthorities: active?.authorities ?? [],
    availableEntities,
    hasInProgressWork,
    selectEntity,
    clearEntity,
    setHasInProgressWork,
    canPerformAction,
  };

  return (
    <EntityContext.Provider value={value}>
      {children}
    </EntityContext.Provider>
  );
}

export function useEntityContext() {
  const ctx = useContext(EntityContext);
  if (!ctx) throw new Error('useEntityContext must be used within EntityProvider');
  return ctx;
}
