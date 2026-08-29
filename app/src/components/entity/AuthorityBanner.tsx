import { ShieldAlert, ShieldCheck } from 'lucide-react';
import { useEntityContext } from '@/contexts/EntityContext';
import { useAuth } from '@/contexts/AuthContext';
import { getRoleLabel, getEntityIdentifier } from '@/data/mock';
import { Badge } from '@/components/ui/Badge';

export function AuthorityBanner() {
  const { person } = useAuth();
  const { activeEntity, activeRelationship, activeAuthorities } = useEntityContext();

  if (!person || !activeEntity || !activeRelationship) return null;

  const authoritySource = activeAuthorities[0]?.source;
  const authorityLevel = activeAuthorities[0]?.level;
  const isConsequential = authorityLevel === 'CONSEQUENTIAL';

  return (
    <div className="flex items-center gap-3 rounded-lg border border-surface-200 bg-white px-4 py-2.5 text-sm">
      <div className="flex items-center gap-2 text-surface-500">
        {isConsequential ? (
          <ShieldCheck className="h-4 w-4 text-accent-500" />
        ) : (
          <ShieldAlert className="h-4 w-4 text-warn-500" />
        )}
        <span className="text-surface-400">Acting as</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-medium text-surface-900">{person.name}</span>
        <span className="text-surface-300">·</span>
        <Badge variant={isConsequential ? 'success' : 'warning'}>
          {getRoleLabel(activeRelationship.roleType)}
        </Badge>
      </div>

      <span className="text-surface-300">for</span>

      <div className="flex items-center gap-2">
        <span className="font-medium text-surface-900">{activeEntity.name}</span>
        <span className="text-xs text-surface-400">({getEntityIdentifier(activeEntity)})</span>
      </div>

      {authoritySource === 'DELEGATED' && (
        <Badge variant="info">Delegated Authority</Badge>
      )}
      {authoritySource === 'INHERENT' && (
        <Badge variant="success">Inherent Authority</Badge>
      )}

      {!isConsequential && (
        <span className="ml-auto text-xs text-warn-600">Preparatory access only</span>
      )}
    </div>
  );
}
