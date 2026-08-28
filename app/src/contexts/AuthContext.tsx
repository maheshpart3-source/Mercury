import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Person } from '@/types';
import { getPersonById } from '@/data/mock';

interface AuthContextValue {
  person: Person | null;
  isAuthenticated: boolean;
  login: (personId: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function getInitialPerson(): Person | null {
  try {
    const id = sessionStorage.getItem('mca_person_id');
    return id ? getPersonById(id) ?? null : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [person, setPerson] = useState<Person | null>(getInitialPerson);

  const login = useCallback((personId: string) => {
    const p = getPersonById(personId);
    if (p) {
      setPerson(p);
      try { sessionStorage.setItem('mca_person_id', personId); } catch {}
    }
  }, []);

  const logout = useCallback(() => {
    setPerson(null);
    try { sessionStorage.removeItem('mca_person_id'); sessionStorage.removeItem('mca_entity_id'); } catch {}
  }, []);

  return (
    <AuthContext.Provider value={{ person, isAuthenticated: !!person, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
