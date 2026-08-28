import { useNavigate } from 'react-router-dom';
import {
  Building2, Calendar, FileCheck, Clock, ArrowRight,
  AlertTriangle, CheckCircle2, FileText, TrendingUp,
  ChevronRight,
} from 'lucide-react';
import { useEntityContext } from '@/contexts/EntityContext';
import { useAuth } from '@/contexts/AuthContext';
import {
  getObligationsForEntity, getTransactionsForEntity,
  getEntityIdentifier, getEntityTypeLabel, getRoleLabel,
} from '@/data/mock';
import { Card, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { StatusIndicator } from '@/components/ui/StatusIndicator';
import { EmptyState } from '@/components/ui/EmptyState';

export function WorkspacePage() {
  const navigate = useNavigate();
  const { activeEntity, activeRelationship, canPerformAction } = useEntityContext();

  if (!activeEntity) {
    return (
      <EmptyState
        icon={Building2}
        title="No Entity Selected"
        description="Select an entity from the switcher above to access its workspace."
        action={<Button onClick={() => navigate('/select-entity')}>Select Entity</Button>}
      />
    );
  }

  const obligations = getObligationsForEntity(activeEntity.id);
  const transactions = getTransactionsForEntity(activeEntity.id);
  const pending = obligations.filter(o => o.status === 'PENDING' || o.status === 'OVERDUE');
  const overdue = obligations.filter(o => o.status === 'OVERDUE');

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Entity Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-surface-900">{activeEntity.name}</h1>
            <StatusIndicator
              status={activeEntity.status === 'ACTIVE' ? 'active' : 'inactive'}
              label={activeEntity.status}
            />
          </div>
          <div className="mt-1.5 flex items-center gap-2 text-sm text-surface-500">
            <span className="font-mono text-xs">{getEntityIdentifier(activeEntity)}</span>
            <span className="text-surface-300">·</span>
            <span>{getEntityTypeLabel(activeEntity)}</span>
            <span className="text-surface-300">·</span>
            <span>ROC: {activeEntity.rocCode}</span>
          </div>
        </div>
        {canPerformAction('FILE_ANNUAL_RETURN') && (
          <Button onClick={() => navigate('/services')}>
            <FileText className="h-4 w-4" />
            New Filing
          </Button>
        )}
      </div>

      {/* Attention Required */}
      {pending.length > 0 && (
        <div className={`rounded-lg border p-5 ${overdue.length > 0 ? 'border-danger-200 bg-danger-50/40' : 'border-warn-100 bg-warn-50/40'}`}>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className={`h-4.5 w-4.5 ${overdue.length > 0 ? 'text-danger-500' : 'text-warn-500'}`} />
            <h2 className="text-sm font-semibold text-surface-900">Needs Your Attention</h2>
            <Badge variant={overdue.length > 0 ? 'danger' : 'warning'}>
              {pending.length} item{pending.length !== 1 ? 's' : ''}
            </Badge>
          </div>
          <div className="space-y-2">
            {pending.map(obl => {
              const due = new Date(obl.dueDate);
              const now = new Date();
              const daysUntil = Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
              const isOverdue = daysUntil < 0;

              return (
                <div
                  key={obl.id}
                  className="flex items-center justify-between rounded-lg bg-white border border-surface-200 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${isOverdue ? 'bg-danger-100' : 'bg-warn-100'}`}>
                      <FileCheck className={`h-4 w-4 ${isOverdue ? 'text-danger-600' : 'text-warn-600'}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-surface-900">
                        {obl.description}
                        <span className="ml-1.5 text-surface-400">({obl.formNumber})</span>
                      </p>
                      <p className="text-xs text-surface-500 mt-0.5">{obl.legalBasis}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className={`text-sm font-medium ${isOverdue ? 'text-danger-600' : daysUntil <= 7 ? 'text-warn-600' : 'text-surface-700'}`}>
                        {isOverdue ? `${Math.abs(daysUntil)} days overdue` : `Due in ${daysUntil} days`}
                      </p>
                      <p className="text-xs text-surface-400">
                        {due.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                    {canPerformAction('FILE_ANNUAL_RETURN') && (
                      <Button size="sm" variant="secondary">
                        Start Filing <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Pending Obligations', value: pending.length.toString(), icon: AlertTriangle, color: 'text-warn-500' },
          { label: 'Completed (FY)', value: obligations.filter(o => o.status === 'COMPLETED').length.toString(), icon: CheckCircle2, color: 'text-accent-500' },
          { label: 'Active Transactions', value: transactions.filter(t => t.state === 'DRAFT' || t.state === 'PROCESSING').length.toString(), icon: Clock, color: 'text-primary-600' },
          { label: 'Compliance Score', value: overdue.length === 0 ? 'Good' : 'At Risk', icon: TrendingUp, color: overdue.length === 0 ? 'text-accent-500' : 'text-danger-500' },
        ].map(stat => (
          <Card key={stat.label} padding="md">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-surface-50 p-2">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-surface-900">{stat.value}</p>
                <p className="text-xs text-surface-500">{stat.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <CardTitle>Recent Activity</CardTitle>
          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">
            View All <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
        {transactions.length === 0 ? (
          <p className="text-sm text-surface-400 py-6 text-center">No recent activity</p>
        ) : (
          <div className="space-y-1">
            {transactions.slice(0, 5).map(txn => {
              const stateColors: Record<string, string> = {
                DRAFT: 'warning',
                SUBMITTED: 'info',
                PROCESSING: 'info',
                APPROVED: 'success',
                COMPLETED: 'success',
                REJECTED: 'danger',
              };
              return (
                <div key={txn.id} className="flex items-center justify-between rounded-lg px-4 py-3 hover:bg-surface-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-surface-400" />
                    <div>
                      <p className="text-sm font-medium text-surface-900">
                        {txn.description}
                        <span className="ml-1.5 text-surface-400">({txn.formNumber})</span>
                      </p>
                      {txn.srn && <p className="text-xs text-surface-400 mt-0.5 font-mono">{txn.srn}</p>}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={stateColors[txn.state] as 'warning' | 'info' | 'success' | 'danger'}>
                      {txn.state}
                    </Badge>
                    <span className="text-xs text-surface-400">
                      {new Date(txn.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Card>

      {/* Entity Details */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardTitle>Entity Information</CardTitle>
          <dl className="mt-4 space-y-3 text-sm">
            {[
              ['Registered Office', `${activeEntity.registeredOffice.address}, ${activeEntity.registeredOffice.city}`],
              ['State', activeEntity.registeredOffice.state],
              ['Pincode', activeEntity.registeredOffice.pincode],
              ['Date of Incorporation', new Date(activeEntity.incorporationDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })],
              ['ROC', activeEntity.rocCode],
              ...(activeEntity.authorizedCapital ? [['Authorised Capital', `₹ ${activeEntity.authorizedCapital}`]] : []),
              ...(activeEntity.paidUpCapital ? [['Paid-up Capital', `₹ ${activeEntity.paidUpCapital}`]] : []),
            ].map(([label, value]) => (
              <div key={label as string} className="flex justify-between gap-4">
                <dt className="text-surface-500 shrink-0">{label}</dt>
                <dd className="font-medium text-surface-900 text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </Card>

        <Card>
          <CardTitle>Your Authority</CardTitle>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-surface-500">Role</dt>
              <dd><Badge variant="primary">{activeRelationship ? getRoleLabel(activeRelationship.roleType) : '-'}</Badge></dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-surface-500">Since</dt>
              <dd className="font-medium text-surface-900">
                {activeRelationship ? new Date(activeRelationship.effectiveFrom).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '-'}
              </dd>
            </div>
            <div className="flex justify-between items-center">
              <dt className="text-surface-500">Authority Level</dt>
              <dd>
                {canPerformAction('SIGN') ? (
                  <Badge variant="success">Consequential</Badge>
                ) : (
                  <Badge variant="warning">Preparatory Only</Badge>
                )}
              </dd>
            </div>
          </dl>
          <div className="mt-4 pt-4 border-t border-surface-100">
            <p className="text-xs text-surface-400 mb-2">Permitted actions</p>
            <div className="flex flex-wrap gap-1">
              {canPerformAction('FILE_ANNUAL_RETURN') && <Badge>File Returns</Badge>}
              {canPerformAction('FILE_FINANCIAL_STATEMENTS') && <Badge>File Financials</Badge>}
              {canPerformAction('APPOINT_DIRECTOR') && <Badge>Appoint Directors</Badge>}
              {canPerformAction('SIGN') && <Badge>Sign</Badge>}
              {canPerformAction('PAY') && <Badge>Pay</Badge>}
              {canPerformAction('CERTIFY') && <Badge>Certify</Badge>}
              {canPerformAction('VIEW_DOCUMENTS') && <Badge>View Documents</Badge>}
            </div>
          </div>
        </Card>
      </div>
      <p className="text-center text-xs text-surface-400 pt-4">Prototype demonstration — data shown is simulated.</p>
    </div>
  );
}
