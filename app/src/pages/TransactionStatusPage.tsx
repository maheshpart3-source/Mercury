import { useParams, useNavigate } from 'react-router-dom';
import {
  CheckCircle2, Clock, Circle, ArrowLeft,
  Download, MessageSquare,
  RefreshCw,
} from 'lucide-react';
import { useEntityContext } from '@/contexts/EntityContext';
import { getTransactionsForEntity } from '@/data/mock';
import { Card, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Alert } from '@/components/ui/Alert';

interface StatusStep {
  label: string;
  description: string;
  status: 'completed' | 'current' | 'pending';
  timestamp?: string;
}

const incorporationSteps: StatusStep[] = [
  { label: 'Application Received', description: 'Your SPICe+ application has been received by the Central Registration Centre', status: 'completed', timestamp: '28 Aug 2026, 3:45 PM' },
  { label: 'Identity Verified', description: 'Director identity and DSC verification completed', status: 'completed', timestamp: '28 Aug 2026, 4:12 PM' },
  { label: 'Documents Validated', description: 'MoA, AoA, and supporting documents checked for completeness', status: 'completed', timestamp: '28 Aug 2026, 5:30 PM' },
  { label: 'Processing', description: 'Application is being reviewed by the Registrar of Companies', status: 'current' },
  { label: 'Registry Update', description: 'Company details will be added to the MCA registry', status: 'pending' },
  { label: 'Certificate Issued', description: 'Certificate of Incorporation will be generated and issued', status: 'pending' },
];

export function TransactionStatusPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { activeEntity } = useEntityContext();

  const isNewIncorporation = id === 'inc-new';

  const existingTxn = !isNewIncorporation && activeEntity
    ? getTransactionsForEntity(activeEntity.id).find(t => t.id === id)
    : null;

  const txnTitle = isNewIncorporation
    ? 'Company Incorporation — SPICe+ (INC-32)'
    : existingTxn?.description || 'Transaction';
  const txnSrn = isNewIncorporation ? 'SRN-2026-INC-4821' : existingTxn?.srn || 'Pending';
  const txnForm = isNewIncorporation ? 'INC-32 (SPICe+)' : existingTxn?.formNumber || '';

  let steps: StatusStep[];
  if (isNewIncorporation) {
    steps = incorporationSteps;
  } else if (existingTxn) {
    const stateMap: Record<string, number> = { DRAFT: 0, SUBMITTED: 1, PROCESSING: 2, APPROVED: 3, COMPLETED: 4 };
    const currentIdx = stateMap[existingTxn.state] ?? 0;
    steps = [
      { label: 'Draft Created', description: 'Application started', status: currentIdx > 0 ? 'completed' : 'current' },
      { label: 'Submitted', description: 'Application submitted for review', status: currentIdx > 1 ? 'completed' : currentIdx === 1 ? 'current' : 'pending' },
      { label: 'Processing', description: 'Under review by registrar', status: currentIdx > 2 ? 'completed' : currentIdx === 2 ? 'current' : 'pending' },
      { label: 'Approved', description: 'Application approved', status: currentIdx > 3 ? 'completed' : currentIdx === 3 ? 'current' : 'pending' },
      { label: 'Completed', description: 'Filing complete and registered', status: currentIdx >= 4 ? 'completed' : 'pending' },
    ];
  } else {
    steps = incorporationSteps;
  }

  const currentStepLabel = steps.find(s => s.status === 'current')?.label || 'Processing';
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg p-1.5 hover:bg-surface-100 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-surface-400" />
        </button>
        <div>
          <h1 className="text-xl font-bold text-surface-900">Transaction Status</h1>
          <p className="text-sm text-surface-500">{txnTitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card padding="md">
          <p className="text-xs text-surface-400 uppercase font-medium">SRN</p>
          <p className="font-mono text-sm font-semibold text-surface-900 mt-1">{txnSrn}</p>
        </Card>
        <Card padding="md">
          <p className="text-xs text-surface-400 uppercase font-medium">Form</p>
          <p className="text-sm font-semibold text-surface-900 mt-1">{txnForm}</p>
        </Card>
        <Card padding="md">
          <p className="text-xs text-surface-400 uppercase font-medium">Current Status</p>
          <div className="mt-1">
            <Badge variant="info">{currentStepLabel}</Badge>
          </div>
        </Card>
      </div>

      <Card padding="lg">
        <CardTitle>Processing Steps</CardTitle>
        <div className="mt-6 space-y-0">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <div key={step.label} className="flex gap-4">
                <div className="flex flex-col items-center">
                  {step.status === 'completed' ? (
                    <CheckCircle2 className="h-6 w-6 text-accent-500 shrink-0" />
                  ) : step.status === 'current' ? (
                    <div className="relative">
                      <Clock className="h-6 w-6 text-primary-600 shrink-0" />
                      <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-600" />
                      </span>
                    </div>
                  ) : (
                    <Circle className="h-6 w-6 text-surface-300 shrink-0" />
                  )}
                  {!isLast && (
                    <div className={`w-0.5 flex-1 min-h-8 ${step.status === 'completed' ? 'bg-accent-300' : 'bg-surface-200'}`} />
                  )}
                </div>
                <div className={`pb-6 ${isLast ? 'pb-0' : ''}`}>
                  <p className={`text-sm font-medium ${
                    step.status === 'completed' ? 'text-accent-700' :
                    step.status === 'current' ? 'text-primary-700' :
                    'text-surface-400'
                  }`}>
                    {step.label}
                  </p>
                  <p className="text-xs text-surface-500 mt-0.5">{step.description}</p>
                  {step.timestamp && (
                    <p className="text-xs text-surface-400 mt-1">{step.timestamp}</p>
                  )}
                  {step.status === 'current' && (
                    <div className="mt-2 flex items-center gap-1.5">
                      <RefreshCw className="h-3 w-3 text-primary-400 animate-spin" style={{ animationDuration: '3s' }} />
                      <span className="text-xs text-primary-600">In progress</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card padding="lg">
          <CardTitle>What Happens Next?</CardTitle>
          <div className="mt-4 space-y-3">
            {isNewIncorporation ? (
              <>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 text-xs font-bold">1</div>
                  <p className="text-sm text-surface-600">The Registrar will review your application and documents (typically 2-3 working days)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 text-xs font-bold">2</div>
                  <p className="text-sm text-surface-600">If approved, CIN will be allotted and Certificate of Incorporation issued</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 text-xs font-bold">3</div>
                  <p className="text-sm text-surface-600">PAN and TAN will be allotted automatically</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 text-xs font-bold">4</div>
                  <p className="text-sm text-surface-600">The company will appear in your entities list within this platform</p>
                </div>
              </>
            ) : (
              <p className="text-sm text-surface-500">
                Your filing is being processed. You will receive a notification when the status changes.
              </p>
            )}
          </div>
        </Card>

        <Card padding="lg">
          <CardTitle>Action Required?</CardTitle>
          <div className="mt-4">
            <Alert variant="success" title="No action required">
              Your application is being processed. You will be notified if any additional information or documents are needed.
            </Alert>
          </div>
          <div className="mt-4 space-y-2">
            <button className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium">
              <Download className="h-4 w-4" /> Download Receipt
            </button>
            <button className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium">
              <MessageSquare className="h-4 w-4" /> Raise a Query
            </button>
          </div>
        </Card>
      </div>

      <p className="text-xs text-center text-surface-400">
        This is a prototype demonstration. Transaction status shown is simulated.
      </p>
    </div>
  );
}
