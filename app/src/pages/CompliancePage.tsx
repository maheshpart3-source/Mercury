import { FileCheck, Calendar, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import { useEntityContext } from '@/contexts/EntityContext';
import { getObligationsForEntity } from '@/data/mock';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { EmptyState } from '@/components/ui/EmptyState';
import { Building2 } from 'lucide-react';

export function CompliancePage() {
  const { activeEntity } = useEntityContext();

  if (!activeEntity) {
    return <EmptyState icon={Building2} title="No Entity Selected" description="Select an entity to view compliance status." />;
  }

  const obligations = getObligationsForEntity(activeEntity.id);
  const overdue = obligations.filter(o => o.status === 'OVERDUE');
  const pending = obligations.filter(o => o.status === 'PENDING');
  const upcoming = obligations.filter(o => o.status === 'UPCOMING');
  const completed = obligations.filter(o => o.status === 'COMPLETED');

  const statusConfig: Record<string, { variant: 'danger' | 'warning' | 'info' | 'success'; icon: typeof Clock }> = {
    OVERDUE: { variant: 'danger', icon: AlertTriangle },
    PENDING: { variant: 'warning', icon: Clock },
    UPCOMING: { variant: 'info', icon: Calendar },
    COMPLETED: { variant: 'success', icon: CheckCircle2 },
  };

  function renderSection(title: string, items: typeof obligations, status: string) {
    if (items.length === 0) return null;
    const cfg = statusConfig[status];
    return (
      <div>
        <div className="flex items-center gap-2 mb-3">
          <cfg.icon className="h-4 w-4" />
          <h3 className="text-sm font-semibold text-surface-700">{title}</h3>
          <Badge variant={cfg.variant}>{items.length}</Badge>
        </div>
        <div className="space-y-2">
          {items.map(obl => {
            const due = new Date(obl.dueDate);
            const now = new Date();
            const days = Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
            return (
              <div key={obl.id} className="flex items-center justify-between rounded-lg border border-surface-200 bg-white px-4 py-3">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-4 w-4 text-surface-400" />
                  <div>
                    <p className="text-sm font-medium text-surface-900">
                      {obl.description} ({obl.formNumber})
                    </p>
                    <p className="text-xs text-surface-500">{obl.legalBasis}</p>
                    {obl.filingPeriod && <p className="text-xs text-surface-400 mt-0.5">Period: {obl.filingPeriod}</p>}
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${days < 0 ? 'text-danger-600' : days <= 14 ? 'text-warn-600' : 'text-surface-600'}`}>
                    {due.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                  {status !== 'COMPLETED' && (
                    <p className="text-xs text-surface-400">
                      {days < 0 ? `${Math.abs(days)} days overdue` : `${days} days remaining`}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const actionCount = overdue.length + pending.length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-surface-900">Compliance Centre</h1>
          <p className="text-sm text-surface-500 mt-1">{activeEntity.name} — Regulatory obligations and filing status</p>
        </div>
        {actionCount > 0 && (
          <div className={`flex items-center gap-2 rounded-lg px-4 py-2 ${overdue.length > 0 ? 'bg-danger-50 text-danger-700' : 'bg-warn-50 text-warn-700'}`}>
            <AlertTriangle className="h-4 w-4" />
            <span className="text-sm font-semibold">{actionCount} action{actionCount !== 1 ? 's' : ''} require{actionCount === 1 ? 's' : ''} attention</span>
          </div>
        )}
      </div>

      <Card padding="lg">
        <div className="space-y-6">
          {renderSection('Overdue', overdue, 'OVERDUE')}
          {renderSection('Pending', pending, 'PENDING')}
          {renderSection('Upcoming', upcoming, 'UPCOMING')}
          {renderSection('Completed', completed, 'COMPLETED')}
        </div>
        {obligations.length === 0 && (
          <EmptyState icon={CheckCircle2} title="All Clear" description="No pending obligations for this entity." />
        )}
      </Card>
      <p className="text-center text-xs text-surface-400 pt-4">Prototype demonstration — compliance data shown is simulated.</p>
    </div>
  );
}
