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

export function AuthProvider({ children }: { children: ReactNode }) {
  const [person, setPerson] = useState<Person | null>(null);

  const login = useCallback((personId: string) => {
    const p = getPersonById(personId);
    if (p) setPerson(p);
  }, []);

  const logout = useCallback(() => {
    setPerson(null);
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
