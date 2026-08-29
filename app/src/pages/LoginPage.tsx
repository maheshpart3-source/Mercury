import { useNavigate } from 'react-router-dom';
import { Building2, Shield } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { persons } from '@/data/mock';
import { Badge } from '@/components/ui/Badge';
import { getRelationshipsForPerson, getRoleLabel } from '@/data/mock';

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin(personId: string) {
    login(personId);
    navigate('/select-entity');
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary-600 px-4">
      <div className="mb-10 text-center">
        <div className="mb-5 flex justify-center">
          <div className="rounded-lg bg-white px-6 py-3">
            <img src="/mca-logo.svg" alt="Ministry of Corporate Affairs" className="h-12" />
          </div>
        </div>
        <p className="text-sm text-primary-200 max-w-sm">
          Entity-centric regulatory operating platform
        </p>
      </div>

      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white p-6 shadow-2xl animate-fade-in">
          <h2 className="text-base font-semibold text-surface-900 mb-1">Sign In</h2>
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
                  className="flex w-full items-start gap-4 rounded-lg border border-surface-200 p-4 text-left transition-all hover:border-primary-300 hover:bg-primary-50 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-100 text-surface-700 font-semibold text-sm">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-surface-900">{person.name}</p>
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

          <div className="mt-6 rounded-lg bg-surface-50 border border-surface-100 p-3">
            <p className="text-xs text-surface-500 text-center">
              <span className="font-medium text-surface-600">Prototype Mode</span> - These personas demonstrate different authority contexts. In production, authentication uses Aadhaar-based eKYC and Digital Signature Certificates.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-8 text-xs text-primary-300">
        MCA Digital Platform - Future State Prototype
      </p>
    </div>
  );
}
