import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Building2, FileText, Link2,
  MapPin, ChevronRight,
} from 'lucide-react';
import { getEntityById, getEntityIdentifier, getEntityTypeLabel } from '@/data/mock';
import { Card, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { StatusIndicator } from '@/components/ui/StatusIndicator';
import { Alert } from '@/components/ui/Alert';
import { useState } from 'react';

const mockDirectors: Record<string, { name: string; din: string; designation: string; appointedDate: string; status: string }[]> = {
  'entity-001': [
    { name: 'Priya Sharma', din: '00123456', designation: 'Director', appointedDate: '2019-03-15', status: 'Active' },
    { name: 'Vikram Patel', din: '00234567', designation: 'Director', appointedDate: '2019-03-15', status: 'Active' },
    { name: 'Anita Desai', din: '00345678', designation: 'Independent Director', appointedDate: '2021-06-01', status: 'Active' },
  ],
  'entity-002': [
    { name: 'Priya Sharma', din: '00123456', designation: 'Director', appointedDate: '2021-07-22', status: 'Active' },
    { name: 'Arjun Mehta', din: '00456789', designation: 'Director', appointedDate: '2021-07-22', status: 'Active' },
  ],
  'entity-003': [
    { name: 'Ravi Gupta', din: '00567890', designation: 'Designated Partner', appointedDate: '2020-01-10', status: 'Active' },
    { name: 'Sunita Rao', din: '00678901', designation: 'Designated Partner', appointedDate: '2020-01-10', status: 'Active' },
  ],
  'entity-004': [
    { name: 'Suresh Iyer', din: '00789012', designation: 'Managing Director', appointedDate: '2010-06-01', status: 'Active' },
    { name: 'Lakshmi Narayan', din: '00890123', designation: 'Director', appointedDate: '2010-06-01', status: 'Active' },
    { name: 'Kiran Joshi', din: '00901234', designation: 'Independent Director', appointedDate: '2015-04-01', status: 'Active' },
    { name: 'Manoj Tiwari', din: '01012345', designation: 'Director', appointedDate: '2018-09-15', status: 'Active' },
  ],
  'entity-005': [
    { name: 'Deepak Reddy', din: '01123456', designation: 'Director', appointedDate: '2022-11-05', status: 'Active' },
    { name: 'Fatima Khan', din: '01234567', designation: 'Director', appointedDate: '2022-11-05', status: 'Active' },
  ],
};

const mockFilings: Record<string, { form: string; description: string; date: string; srn: string; status: string }[]> = {
  'entity-001': [
    { form: 'MGT-7', description: 'Annual Return FY 2024-25', date: '2025-08-25', srn: 'SRN-2026-001234', status: 'Approved' },
    { form: 'AOC-4', description: 'Financial Statements FY 2024-25', date: '2025-09-05', srn: 'SRN-2026-001567', status: 'Approved' },
    { form: 'MGT-7', description: 'Annual Return FY 2023-24', date: '2024-08-20', srn: 'SRN-2025-001122', status: 'Approved' },
    { form: 'ADT-1', description: 'Auditor Appointment', date: '2024-10-15', srn: 'SRN-2025-001333', status: 'Approved' },
  ],
  'entity-002': [
    { form: 'MGT-7', description: 'Annual Return FY 2023-24', date: '2024-09-10', srn: 'SRN-2025-002234', status: 'Approved' },
  ],
  'entity-004': [
    { form: 'MGT-7', description: 'Annual Return FY 2024-25', date: '2025-09-30', srn: 'SRN-2026-004567', status: 'Approved' },
    { form: 'AOC-4', description: 'Financial Statements FY 2024-25', date: '2025-10-15', srn: 'SRN-2026-004890', status: 'Approved' },
    { form: 'CHG-1', description: 'Creation of Charge', date: '2023-03-15', srn: 'SRN-2023-004111', status: 'Approved' },
  ],
};

const mockCharges: Record<string, { id: string; holder: string; amount: string; dateCreated: string; status: string }[]> = {
  'entity-004': [
    { id: 'CHG-001', holder: 'State Bank of India', amount: '₹ 15,00,00,000', dateCreated: '2023-03-15', status: 'Open' },
    { id: 'CHG-002', holder: 'HDFC Bank Limited', amount: '₹ 5,00,00,000', dateCreated: '2020-11-10', status: 'Satisfied' },
  ],
  'entity-001': [
    { id: 'CHG-003', holder: 'ICICI Bank Limited', amount: '₹ 50,00,000', dateCreated: '2022-06-20', status: 'Open' },
  ],
};

type Tab = 'overview' | 'directors' | 'filings' | 'charges';

export function EntityProfilePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const entity = id ? getEntityById(id) : undefined;

  if (!entity) {
    return (
      <div className="text-center py-16">
        <Building2 className="h-10 w-10 text-surface-300 mx-auto mb-3" />
        <p className="text-surface-500">Entity not found</p>
        <button onClick={() => navigate('/registry')} className="text-primary-600 text-sm mt-2 hover:underline">
          Back to Registry Search
        </button>
      </div>
    );
  }

  const directors = mockDirectors[entity.id] || [];
  const filings = mockFilings[entity.id] || [];
  const charges = mockCharges[entity.id] || [];

  const tabs: { key: Tab; label: string; count?: number }[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'directors', label: 'Directors', count: directors.length },
    { key: 'filings', label: 'Filings', count: filings.length },
    { key: 'charges', label: 'Charges', count: charges.length },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('/registry')}
          className="rounded-lg p-1.5 hover:bg-surface-100 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-surface-400" />
        </button>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-surface-900">{entity.name}</h1>
            <StatusIndicator
              status={entity.status === 'ACTIVE' ? 'active' : 'inactive'}
              label={entity.status}
            />
          </div>
          <div className="mt-1 flex items-center gap-3 text-sm text-surface-500">
            <span>{getEntityIdentifier(entity)}</span>
            <span className="text-surface-300">·</span>
            <span>{getEntityTypeLabel(entity)}</span>
          </div>
        </div>
        <Badge variant="info">Public Registry View</Badge>
      </div>

      <Alert variant="info">
        This is the <span className="font-medium">public view</span> of this entity. Information shown here is available without authentication, as published in the MCA registry.
      </Alert>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-surface-200">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.key
                ? 'border-primary-600 text-primary-700'
                : 'border-transparent text-surface-500 hover:text-surface-700 hover:border-surface-300'
            }`}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span className="ml-1.5 text-xs text-surface-400">({tab.count})</span>
            )}
          </button>
        ))}
      </div>

      {/* OVERVIEW TAB */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card padding="lg">
            <CardTitle>Company Information</CardTitle>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ['Company Name', entity.name],
                [entity.type === 'LLP' ? 'LLPIN' : 'CIN', getEntityIdentifier(entity)],
                ['Type', getEntityTypeLabel(entity)],
                ['Status', entity.status],
                ['Date of Incorporation', new Date(entity.incorporationDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })],
                ['ROC Office', entity.rocCode],
              ].map(([label, value]) => (
                <div key={label as string} className="flex justify-between">
                  <dt className="text-surface-500">{label}</dt>
                  <dd className="font-medium text-surface-900 text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </Card>

          <Card padding="lg">
            <CardTitle>Registered Office</CardTitle>
            <div className="mt-4 flex items-start gap-3">
              <MapPin className="h-5 w-5 text-surface-400 mt-0.5 shrink-0" />
              <div className="text-sm text-surface-700">
                <p>{entity.registeredOffice.address}</p>
                <p>{entity.registeredOffice.city}, {entity.registeredOffice.state} - {entity.registeredOffice.pincode}</p>
              </div>
            </div>
            {entity.authorizedCapital && (
              <dl className="mt-6 space-y-2 text-sm border-t border-surface-100 pt-4">
                <div className="flex justify-between">
                  <dt className="text-surface-500">Authorised Capital</dt>
                  <dd className="font-medium text-surface-900">₹ {entity.authorizedCapital}</dd>
                </div>
                {entity.paidUpCapital && (
                  <div className="flex justify-between">
                    <dt className="text-surface-500">Paid-up Capital</dt>
                    <dd className="font-medium text-surface-900">₹ {entity.paidUpCapital}</dd>
                  </div>
                )}
              </dl>
            )}
          </Card>

          <Card padding="lg">
            <CardTitle>Key People</CardTitle>
            <div className="mt-4 space-y-3">
              {directors.slice(0, 3).map((d, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-100 text-surface-600 text-xs font-bold">
                      {d.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-surface-900">{d.name}</p>
                      <p className="text-xs text-surface-500">{d.designation}</p>
                    </div>
                  </div>
                  <Badge variant="success">{d.status}</Badge>
                </div>
              ))}
              {directors.length > 3 && (
                <button onClick={() => setActiveTab('directors')} className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">
                  View all {directors.length} <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </Card>

          <Card padding="lg">
            <CardTitle>Recent Filings</CardTitle>
            <div className="mt-4 space-y-3">
              {filings.slice(0, 3).map((f, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-surface-400" />
                    <div>
                      <p className="text-sm font-medium text-surface-900">{f.description}</p>
                      <p className="text-xs text-surface-500">{f.form} · {new Date(f.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                    </div>
                  </div>
                  <Badge variant="success">{f.status}</Badge>
                </div>
              ))}
              {filings.length > 3 && (
                <button onClick={() => setActiveTab('filings')} className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">
                  View all {filings.length} <ChevronRight className="h-4 w-4" />
                </button>
              )}
              {filings.length === 0 && <p className="text-sm text-surface-400">No public filings on record</p>}
            </div>
          </Card>
        </div>
      )}

      {/* DIRECTORS TAB */}
      {activeTab === 'directors' && (
        <Card padding="lg">
          <div className="space-y-3">
            {directors.map((d, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-surface-200 px-4 py-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-100 text-surface-600 text-sm font-bold">
                    {d.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-surface-900">{d.name}</p>
                    <p className="text-xs text-surface-500">DIN: {d.din}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge>{d.designation}</Badge>
                  <p className="text-xs text-surface-400 mt-1">
                    Since {new Date(d.appointedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>
            ))}
            {directors.length === 0 && <p className="text-sm text-surface-400 text-center py-6">No director records available</p>}
          </div>
        </Card>
      )}

      {/* FILINGS TAB */}
      {activeTab === 'filings' && (
        <Card padding="lg">
          <div className="space-y-3">
            {filings.map((f, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-surface-200 px-4 py-3">
                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-surface-400" />
                  <div>
                    <p className="text-sm font-medium text-surface-900">{f.description}</p>
                    <p className="text-xs text-surface-500">Form {f.form} · SRN: {f.srn}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="success">{f.status}</Badge>
                  <p className="text-xs text-surface-400 mt-1">
                    {new Date(f.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>
            ))}
            {filings.length === 0 && <p className="text-sm text-surface-400 text-center py-6">No filings on record</p>}
          </div>
        </Card>
      )}

      {/* CHARGES TAB */}
      {activeTab === 'charges' && (
        <Card padding="lg">
          <div className="space-y-3">
            {charges.map((c, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-surface-200 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Link2 className="h-4 w-4 text-surface-400" />
                  <div>
                    <p className="text-sm font-medium text-surface-900">{c.holder}</p>
                    <p className="text-xs text-surface-500">Charge ID: {c.id} · Amount: {c.amount}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={c.status === 'Open' ? 'warning' : 'success'}>{c.status}</Badge>
                  <p className="text-xs text-surface-400 mt-1">
                    Created {new Date(c.dateCreated).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>
            ))}
            {charges.length === 0 && <p className="text-sm text-surface-400 text-center py-6">No charges registered</p>}
          </div>
        </Card>
      )}
      <p className="text-center text-xs text-surface-400 pt-4">Prototype demonstration - entity data shown is simulated.</p>
    </div>
  );
}
