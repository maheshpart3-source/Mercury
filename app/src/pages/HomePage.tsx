import { useNavigate } from 'react-router-dom';
import {
  Building2, Shield, Search, ArrowRight, FileCheck,
  Plus, ChevronRight, AlertTriangle, Clock,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useEntityContext } from '@/contexts/EntityContext';
import { getObligationsForEntity } from '@/data/mock';
import { Badge } from '@/components/ui/Badge';

export function HomePage() {
  const navigate = useNavigate();
  const { person } = useAuth();
  const { activeEntity, availableEntities } = useEntityContext();

  const allObligations = availableEntities.flatMap(ae =>
    getObligationsForEntity(ae.entity.id).filter(o => o.status === 'OVERDUE' || o.status === 'PENDING')
  );
  const overdueCount = allObligations.filter(o => o.status === 'OVERDUE').length;
  const pendingCount = allObligations.filter(o => o.status === 'PENDING').length;
  const attentionCount = overdueCount + pendingCount;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero — restrained institutional header */}
      <div className="rounded-lg border border-surface-200 bg-white p-8">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-surface-400">Ministry of Corporate Affairs</p>
            <h1 className="text-2xl font-bold text-surface-900 mt-2">
              Welcome back, {person?.name?.split(' ')[0]}
            </h1>
            <p className="text-surface-500 mt-1 text-sm max-w-lg">
              Everything your entities need to stay compliant — filings, obligations, transactions, and registry services.
            </p>
          </div>
          {attentionCount > 0 && (
            <div className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ${
              overdueCount > 0 ? 'bg-danger-50 text-danger-600' : 'bg-warn-50 text-warn-600'
            }`}>
              <AlertTriangle className="h-4 w-4" />
              {attentionCount} action{attentionCount !== 1 ? 's' : ''} need attention
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {[
            { icon: Plus, label: 'Start Something', desc: 'New company or filing', path: '/services' },
            { icon: Building2, label: 'My Entities', desc: 'Switch or manage', path: '/select-entity' },
            { icon: Shield, label: 'Compliance', desc: `${attentionCount} pending`, path: activeEntity ? '/workspace/compliance' : '/select-entity', badge: attentionCount },
            { icon: Search, label: 'Search MCA', desc: 'Public registry', path: '/registry' },
          ].map(action => (
            <button
              key={action.label}
              onClick={() => navigate(action.path)}
              className="group relative flex flex-col items-center gap-2 rounded-lg border border-surface-200 bg-surface-50 px-4 py-5 text-center transition-all hover:border-primary-300 hover:bg-primary-50 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-surface-600 group-hover:text-primary-600 transition-colors shadow-sm">
                <action.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-surface-900">{action.label}</span>
              <span className="text-xs text-surface-400">{action.desc}</span>
              {action.badge ? (
                <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-danger-500 text-[10px] font-bold text-white">
                  {action.badge}
                </span>
              ) : null}
            </button>
          ))}
        </div>
      </div>

      {/* Attention Required */}
      {attentionCount > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-surface-700 uppercase tracking-wider">Needs Your Attention</h2>
            {activeEntity && (
              <button
                onClick={() => navigate('/workspace/compliance')}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
              >
                View All <ChevronRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
          <div className="space-y-2">
            {allObligations.slice(0, 4).map(obl => {
              const entity = availableEntities.find(ae => ae.entity.id === obl.entityId)?.entity;
              const due = new Date(obl.dueDate);
              const now = new Date();
              const days = Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
              const isOverdue = days < 0;
              return (
                <div key={obl.id} className="flex items-center justify-between rounded-lg border border-surface-200 bg-white px-4 py-3 transition-colors hover:bg-surface-50">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${isOverdue ? 'bg-danger-50' : 'bg-warn-50'}`}>
                      <FileCheck className={`h-4 w-4 ${isOverdue ? 'text-danger-500' : 'text-warn-500'}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-surface-900">
                        {obl.description} <span className="text-surface-400">({obl.formNumber})</span>
                      </p>
                      <p className="text-xs text-surface-400">{entity?.name}</p>
                    </div>
                  </div>
                  <Badge variant={isOverdue ? 'danger' : 'warning'}>
                    {isOverdue ? `${Math.abs(days)}d overdue` : `${days}d left`}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Your Entities */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-surface-700 uppercase tracking-wider">Your Entities</h2>
          <button
            onClick={() => navigate('/select-entity')}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
          >
            View All <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {availableEntities.slice(0, 6).map(({ entity, relationship }) => {
            const entityObls = getObligationsForEntity(entity.id).filter(o => o.status === 'OVERDUE' || o.status === 'PENDING');
            const entityOverdue = entityObls.filter(o => o.status === 'OVERDUE').length;
            return (
              <button
                key={entity.id}
                onClick={() => navigate('/workspace')}
                className="flex items-start gap-3 rounded-lg border border-surface-200 bg-white p-4 text-left hover:border-primary-300 hover:shadow-sm transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-100 text-surface-600 font-semibold text-sm">
                  {entity.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-surface-900 text-sm truncate">{entity.name}</p>
                  <p className="text-xs text-surface-500 mt-0.5 capitalize">{relationship.roleType.toLowerCase().replace('_', ' ')}</p>
                  {entityObls.length > 0 && (
                    <div className="mt-2 flex items-center gap-1.5">
                      <Clock className="h-3 w-3 text-surface-400" />
                      <span className="text-xs text-surface-500">{entityObls.length} pending</span>
                      {entityOverdue > 0 && <Badge variant="danger">{entityOverdue} overdue</Badge>}
                    </div>
                  )}
                </div>
                <ArrowRight className="h-4 w-4 text-surface-300 shrink-0 mt-1" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-sm font-semibold text-surface-700 uppercase tracking-wider mb-3">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { label: 'Incorporate a Company', desc: 'Start a new Private, Public, or OPC', icon: Building2, path: '/services/incorporate' },
            { label: 'File Annual Return', desc: 'Submit MGT-7 for your company', icon: FileCheck, path: '/services' },
            { label: 'Search Public Registry', desc: 'Find companies, LLPs, directors', icon: Search, path: '/registry' },
          ].map(action => (
            <button
              key={action.label}
              onClick={() => navigate(action.path)}
              className="group flex items-center gap-4 rounded-lg border border-surface-200 bg-white p-4 text-left hover:border-primary-300 hover:shadow-sm transition-all"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-50 text-surface-500 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                <action.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-surface-900">{action.label}</p>
                <p className="text-xs text-surface-500">{action.desc}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-surface-300 group-hover:text-primary-500 transition-colors" />
            </button>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-surface-400 pt-4">Prototype demonstration — data shown is simulated.</p>
    </div>
  );
}
