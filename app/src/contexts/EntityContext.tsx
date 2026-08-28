import {
  createContext, useContext, useState, useCallback, useMemo, useEffect,
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

export function EntityProvider({ children }: { children: ReactNode }) {
  const { person } = useAuth();

  const [activeEntityId, setActiveEntityId] = useState<string | null>(null);
  const [hasInProgressWork, setHasInProgressWork] = useState(false);

  const availableEntities = useMemo<AvailableEntity[]>(() => {
    if (!person) return [];
    return getAvailableEntitiesForPerson(person.id);
  }, [person]);

  // Clear entity context on person change (Rule EC-11)
  useEffect(() => {
    setActiveEntityId(null);
    setHasInProgressWork(false);
  }, [person?.id]);

  const active = useMemo(() => {
    if (!activeEntityId) return null;
    return availableEntities.find(ae => ae.entity.id === activeEntityId) ?? null;
  }, [activeEntityId, availableEntities]);

  const selectEntity = useCallback((entityId: string) => {
    const target = getEntityById(entityId);
    if (!target || target.status === 'STRUCK_OFF') return;
    setActiveEntityId(entityId);
  }, []);

  const clearEntity = useCallback(() => {
    setActiveEntityId(null);
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
