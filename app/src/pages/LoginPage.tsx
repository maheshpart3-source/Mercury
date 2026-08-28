import { useNavigate } from 'react-router-dom';
import { Building2, Shield, Users } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { persons } from '@/data/mock';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { getRelationshipsForPerson, getRoleLabel } from '@/data/mock';

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin(personId: string) {
    login(personId);
    navigate('/select-entity');
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-primary-900 to-primary-800 px-4">
      <div className="mb-8 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
            <span className="text-xl font-bold text-white">M</span>
          </div>
          <div className="text-left">
            <h1 className="text-xl font-bold text-white">Ministry of Corporate Affairs</h1>
            <p className="text-sm text-primary-300">Digital Regulatory Platform</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-primary-200 max-w-md">
          Entity-centric regulatory operating platform. Sign in to access your workspace.
        </p>
      </div>

      <div className="w-full max-w-lg">
        <div className="rounded-xl bg-white p-6 shadow-2xl">
          <h2 className="text-lg font-semibold text-surface-900 mb-1">Sign In</h2>
          <p className="text-sm text-surface-500 mb-6">Select a persona to explore the platform</p>

          <div className="space-y-3">
            {persons.map(person => {
              const rels = getRelationshipsForPerson(person.id);
              const entityCount = rels.length;
              const roles = [...new Set(rels.map(r => r.roleType))];

              return (
                <button
                  key={person.id}
                  onClick={() => handleLogin(person.id)}
                  className="flex w-full items-start gap-4 rounded-xl border border-surface-200 p-4 text-left transition-all hover:border-primary-300 hover:bg-primary-50 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-surface-900">{person.name}</p>
                    <p className="text-sm text-surface-500 mt-0.5">{person.email}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {roles.map(role => (
                        <Badge key={role} variant="primary">{getRoleLabel(role)}</Badge>
                      ))}
                      <Badge variant="default">
                        <Building2 className="h-3 w-3 mr-1" />
                        {entityCount} {entityCount === 1 ? 'entity' : 'entities'}
                      </Badge>
                      <Badge variant={person.verificationLevel === 'PROFESSIONAL' ? 'success' : 'info'}>
                        <Shield className="h-3 w-3 mr-1" />
                        {person.verificationLevel}
                      </Badge>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-lg bg-surface-50 p-3">
            <p className="text-xs text-surface-500 text-center">
              <span className="font-medium">Prototype Mode</span> — These personas demonstrate different authority contexts. In production, authentication uses Aadhaar-based eKYC and Digital Signature Certificates.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs text-primary-400">
        MCA Digital Platform — Future State Prototype
      </p>
    </div>
  );
}
