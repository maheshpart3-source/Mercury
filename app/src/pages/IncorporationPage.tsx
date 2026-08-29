import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2, CheckCircle2, ArrowRight, ArrowLeft,
  FileText, Upload, CreditCard, PenTool, AlertTriangle,
  Info, Check,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useEntityContext } from '@/contexts/EntityContext';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Alert } from '@/components/ui/Alert';

type Step = 'intent' | 'eligibility' | 'requirements' | 'information' | 'documents' | 'review' | 'signature' | 'payment' | 'submission';

const STEPS: { key: Step; label: string }[] = [
  { key: 'intent', label: 'Intent' },
  { key: 'eligibility', label: 'Eligibility' },
  { key: 'requirements', label: 'Requirements' },
  { key: 'information', label: 'Information' },
  { key: 'documents', label: 'Documents' },
  { key: 'review', label: 'Review' },
  { key: 'signature', label: 'Signature' },
  { key: 'payment', label: 'Payment' },
  { key: 'submission', label: 'Submitted' },
];

interface FormData {
  companyType: string;
  companyName1: string;
  companyName2: string;
  objectClause: string;
  authorizedCapital: string;
  registeredAddress: string;
  city: string;
  state: string;
  pincode: string;
  directors: { name: string; din: string; email: string }[];
  subscribers: { name: string; shares: string }[];
  documentsChecked: string[];
  dscConfirmed: boolean;
  paymentMethod: string;
}

const initialForm: FormData = {
  companyType: '',
  companyName1: '',
  companyName2: '',
  objectClause: '',
  authorizedCapital: '1,00,000',
  registeredAddress: '',
  city: '',
  state: '',
  pincode: '',
  directors: [
    { name: '', din: '', email: '' },
    { name: '', din: '', email: '' },
  ],
  subscribers: [
    { name: '', shares: '5000' },
    { name: '', shares: '5000' },
  ],
  documentsChecked: [],
  dscConfirmed: false,
  paymentMethod: 'online',
};

const REQUIRED_DOCUMENTS = [
  { id: 'moa', label: 'Memorandum of Association (MoA)', desc: 'Defines the company\'s objects, scope, and powers' },
  { id: 'aoa', label: 'Articles of Association (AoA)', desc: 'Internal rules governing company management' },
  { id: 'dir-consent', label: 'Director Consent (DIR-2)', desc: 'Written consent from each proposed director' },
  { id: 'addr-proof', label: 'Registered Office Proof', desc: 'Utility bill / rent agreement + NOC from owner' },
  { id: 'id-proof', label: 'Identity Proof of Directors', desc: 'PAN card, Aadhaar, or passport' },
  { id: 'addr-proof-dir', label: 'Address Proof of Directors', desc: 'Bank statement, utility bill, or Aadhaar' },
  { id: 'declaration', label: 'Declaration by Subscribers (INC-9)', desc: 'Declaration of non-conviction and non-disqualification' },
  { id: 'affidavit', label: 'Affidavit from Directors (INC-9)', desc: 'Sworn declaration for each director' },
];

const STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
];

export function IncorporationPage() {
  const navigate = useNavigate();
  const { person } = useAuth();
  const { setHasInProgressWork } = useEntityContext();
  const [currentStep, setCurrentStep] = useState<Step>('intent');
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const stepIndex = STEPS.findIndex(s => s.key === currentStep);

  const updateForm = useCallback(<K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm(prev => ({ ...prev, [key]: value }));
    setErrors(prev => { const n = { ...prev }; delete n[key]; return n; });
    setHasInProgressWork(true);
  }, [setHasInProgressWork]);

  function validateStep(): boolean {
    const e: Record<string, string> = {};
    if (currentStep === 'intent' && !form.companyType) {
      e.companyType = 'Select a company type';
    }
    if (currentStep === 'information') {
      if (!form.companyName1.trim()) e.companyName1 = 'Required';
      if (!form.objectClause.trim()) e.objectClause = 'Required';
      if (!form.registeredAddress.trim()) e.registeredAddress = 'Required';
      if (!form.city.trim()) e.city = 'Required';
      if (!form.state) e.state = 'Required';
      if (!form.pincode.trim()) e.pincode = 'Required';
      if (form.directors.some(d => !d.name.trim())) e.directors = 'All directors need a name';
    }
    if (currentStep === 'documents') {
      if (form.documentsChecked.length < REQUIRED_DOCUMENTS.length) {
        e.documents = 'Confirm all documents are ready';
      }
    }
    if (currentStep === 'signature' && !form.dscConfirmed) {
      e.dsc = 'Confirm DSC signing';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (!validateStep()) return;
    const i = stepIndex;
    if (i < STEPS.length - 1) setCurrentStep(STEPS[i + 1].key);
  }

  function prev() {
    const i = stepIndex;
    if (i > 0) setCurrentStep(STEPS[i - 1].key);
  }

  function handleSubmit() {
    setHasInProgressWork(false);
    setCurrentStep('submission');
  }

  const companyTypes = [
    { value: 'PRIVATE', label: 'Private Limited Company', desc: 'Most common. 2-200 members, limited liability, restricted share transfer.', sections: 'Companies Act 2013, Section 2(68)' },
    { value: 'PUBLIC', label: 'Public Limited Company', desc: 'For companies raising capital from public. Minimum 7 members, no restriction on share transfer.', sections: 'Companies Act 2013, Section 2(71)' },
    { value: 'OPC', label: 'One Person Company', desc: 'Single member company with limited liability. Only natural persons who are Indian citizens and residents.', sections: 'Companies Act 2013, Section 2(62)' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('/services')}
          className="rounded-lg p-1.5 hover:bg-surface-100 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-surface-400" />
        </button>
        <div>
          <h1 className="text-xl font-bold text-surface-900">Incorporate a Company</h1>
          <p className="text-sm text-surface-500">SPICe+ (INC-32) - Simplified Proforma for Incorporating Company Electronically</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="rounded-lg border border-surface-200 bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          {STEPS.map((step, i) => {
            const done = i < stepIndex;
            const active = i === stepIndex;
            return (
              <div key={step.key} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center gap-1.5">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-all ${
                    done ? 'bg-accent-500 text-white' :
                    active ? 'bg-primary-600 text-white shadow-sm shadow-primary-200' :
                    'bg-surface-100 text-surface-400 border border-surface-200'
                  }`}>
                    {done ? <Check className="h-4 w-4" /> : i + 1}
                  </div>
                  <span className={`text-[11px] font-medium whitespace-nowrap ${
                    active ? 'text-primary-700' : done ? 'text-accent-600' : 'text-surface-400'
                  }`}>
                    {step.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`mx-2 h-px flex-1 ${done ? 'bg-accent-400' : 'bg-surface-200'}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <Card padding="lg">
        {/* INTENT */}
        {currentStep === 'intent' && (
          <div className="space-y-4">
            <h2 className="font-semibold text-surface-900">What type of company do you want to incorporate?</h2>
            <div className="space-y-3">
              {companyTypes.map(ct => (
                <button
                  key={ct.value}
                  onClick={() => updateForm('companyType', ct.value)}
                  className={`w-full flex items-start gap-4 rounded-lg border-2 p-4 text-left transition-all ${
                    form.companyType === ct.value
                      ? 'border-primary-600 bg-primary-50/50'
                      : 'border-surface-200 hover:border-surface-300'
                  }`}
                >
                  <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                    form.companyType === ct.value ? 'border-primary-600 bg-primary-600' : 'border-surface-300'
                  }`}>
                    {form.companyType === ct.value && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <div>
                    <p className="font-medium text-surface-900">{ct.label}</p>
                    <p className="text-sm text-surface-500 mt-0.5">{ct.desc}</p>
                    <p className="text-xs text-surface-400 mt-1">{ct.sections}</p>
                  </div>
                </button>
              ))}
            </div>
            {errors.companyType && <p className="text-sm text-danger-600">{errors.companyType}</p>}
          </div>
        )}

        {/* ELIGIBILITY */}
        {currentStep === 'eligibility' && (
          <div className="space-y-4">
            <h2 className="font-semibold text-surface-900">Eligibility Check</h2>
            <Alert variant="success" title="You are eligible to proceed">
              Based on your identity verification level ({person?.verificationLevel}) and selected company type ({form.companyType}).
            </Alert>
            <div className="space-y-3">
              {[
                { check: 'DIN/DPIN Status', result: person?.din ? `Active - ${person.din}` : 'Will be allotted via SPICe+', ok: true },
                { check: 'Identity Verification', result: person?.verificationLevel === 'VERIFIED' || person?.verificationLevel === 'PROFESSIONAL' ? 'Verified' : 'Pending', ok: person?.verificationLevel !== 'UNVERIFIED' },
                { check: 'Digital Signature Certificate', result: 'Required for signing', ok: true },
                { check: 'Minimum Directors', result: form.companyType === 'OPC' ? '1 Director + 1 Nominee' : form.companyType === 'PRIVATE' ? '2 Directors' : '3 Directors', ok: true },
                { check: 'Minimum Subscribers', result: form.companyType === 'OPC' ? '1 Member' : form.companyType === 'PRIVATE' ? '2 Members' : '7 Members', ok: true },
              ].map(item => (
                <div key={item.check} className="flex items-center justify-between rounded-lg border border-surface-200 px-4 py-3">
                  <div className="flex items-center gap-3">
                    {item.ok ? (
                      <CheckCircle2 className="h-5 w-5 text-accent-500" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-warn-500" />
                    )}
                    <span className="text-sm font-medium text-surface-900">{item.check}</span>
                  </div>
                  <span className="text-sm text-surface-500">{item.result}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REQUIREMENTS */}
        {currentStep === 'requirements' && (
          <div className="space-y-4">
            <h2 className="font-semibold text-surface-900">What You Will Need</h2>
            <p className="text-sm text-surface-500">Gather these before proceeding. You can save your progress and return later.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: FileText, title: 'Company Name', desc: 'Up to 2 proposed names (checked for availability)' },
                { icon: Building2, title: 'Registered Office', desc: 'Address proof with NOC from premises owner' },
                { icon: CreditCard, title: 'Capital Structure', desc: 'Authorised and subscribed share capital details' },
                { icon: PenTool, title: 'MoA & AoA', desc: 'Memorandum and Articles of Association (use standard templates or custom)' },
                { icon: Upload, title: 'Director Documents', desc: 'PAN, Aadhaar/Passport, address proof, photos for each director' },
                { icon: PenTool, title: 'Digital Signature', desc: 'Class-3 DSC for all directors/subscribers' },
              ].map(req => (
                <div key={req.title} className="flex items-start gap-3 rounded-lg border border-surface-200 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <req.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-surface-900">{req.title}</p>
                    <p className="text-xs text-surface-500">{req.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Alert variant="info">
              Estimated government fees: <span className="font-semibold">₹500 - ₹15,000</span> (based on authorised capital). Stamp duty varies by state.
            </Alert>
          </div>
        )}

        {/* INFORMATION */}
        {currentStep === 'information' && (
          <div className="space-y-6">
            <h2 className="font-semibold text-surface-900">Company Information</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1">Proposed Name (Choice 1) *</label>
                <input
                  type="text"
                  value={form.companyName1}
                  onChange={e => updateForm('companyName1', e.target.value)}
                  placeholder="e.g., Greenfield Technologies Private Limited"
                  className="w-full rounded-lg border border-surface-200 px-3 py-2 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
                {errors.companyName1 && <p className="text-xs text-danger-600 mt-1">{errors.companyName1}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1">Proposed Name (Choice 2)</label>
                <input
                  type="text"
                  value={form.companyName2}
                  onChange={e => updateForm('companyName2', e.target.value)}
                  placeholder="e.g., Greenfield Innovations Private Limited"
                  className="w-full rounded-lg border border-surface-200 px-3 py-2 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1">Main Objects / Business Activity *</label>
                <textarea
                  value={form.objectClause}
                  onChange={e => updateForm('objectClause', e.target.value)}
                  rows={3}
                  placeholder="Describe the main business activities this company will undertake..."
                  className="w-full rounded-lg border border-surface-200 px-3 py-2 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
                {errors.objectClause && <p className="text-xs text-danger-600 mt-1">{errors.objectClause}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1">Authorised Capital (₹)</label>
                  <input
                    type="text"
                    value={form.authorizedCapital}
                    onChange={e => updateForm('authorizedCapital', e.target.value)}
                    className="w-full rounded-lg border border-surface-200 px-3 py-2 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1">State *</label>
                  <select
                    value={form.state}
                    onChange={e => updateForm('state', e.target.value)}
                    className="w-full rounded-lg border border-surface-200 px-3 py-2 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 bg-white"
                  >
                    <option value="">Select state</option>
                    {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.state && <p className="text-xs text-danger-600 mt-1">{errors.state}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1">Registered Office Address *</label>
                <input
                  type="text"
                  value={form.registeredAddress}
                  onChange={e => updateForm('registeredAddress', e.target.value)}
                  placeholder="Full address"
                  className="w-full rounded-lg border border-surface-200 px-3 py-2 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
                {errors.registeredAddress && <p className="text-xs text-danger-600 mt-1">{errors.registeredAddress}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1">City *</label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={e => updateForm('city', e.target.value)}
                    className="w-full rounded-lg border border-surface-200 px-3 py-2 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
                  />
                  {errors.city && <p className="text-xs text-danger-600 mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1">Pincode *</label>
                  <input
                    type="text"
                    value={form.pincode}
                    onChange={e => updateForm('pincode', e.target.value)}
                    className="w-full rounded-lg border border-surface-200 px-3 py-2 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
                  />
                  {errors.pincode && <p className="text-xs text-danger-600 mt-1">{errors.pincode}</p>}
                </div>
              </div>
            </div>

            <div className="border-t border-surface-200 pt-4">
              <h3 className="text-sm font-semibold text-surface-700 mb-3">
                Proposed Directors
                <span className="text-xs text-surface-400 font-normal ml-2">
                  (Min. {form.companyType === 'OPC' ? '1' : form.companyType === 'PRIVATE' ? '2' : '3'})
                </span>
              </h3>
              <div className="space-y-3">
                {form.directors.map((dir, i) => (
                  <div key={i} className="grid grid-cols-3 gap-3 rounded-lg border border-surface-100 p-3 bg-surface-50">
                    <input
                      type="text"
                      value={dir.name}
                      onChange={e => {
                        const dirs = [...form.directors];
                        dirs[i] = { ...dirs[i], name: e.target.value };
                        updateForm('directors', dirs);
                      }}
                      placeholder="Full Name"
                      className="rounded-lg border border-surface-200 px-3 py-2 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 bg-white"
                    />
                    <input
                      type="text"
                      value={dir.din}
                      onChange={e => {
                        const dirs = [...form.directors];
                        dirs[i] = { ...dirs[i], din: e.target.value };
                        updateForm('directors', dirs);
                      }}
                      placeholder="DIN (if existing)"
                      className="rounded-lg border border-surface-200 px-3 py-2 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 bg-white"
                    />
                    <input
                      type="email"
                      value={dir.email}
                      onChange={e => {
                        const dirs = [...form.directors];
                        dirs[i] = { ...dirs[i], email: e.target.value };
                        updateForm('directors', dirs);
                      }}
                      placeholder="Email"
                      className="rounded-lg border border-surface-200 px-3 py-2 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 bg-white"
                    />
                  </div>
                ))}
                <button
                  onClick={() => updateForm('directors', [...form.directors, { name: '', din: '', email: '' }])}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  + Add Director
                </button>
              </div>
              {errors.directors && <p className="text-xs text-danger-600 mt-1">{errors.directors}</p>}
            </div>

            {person && (
              <Alert variant="info" title="Prefill available">
                Your details (DIN: {person.din || 'N/A'}, Name: {person.name}) can be used as Director 1.{' '}
                <button
                  onClick={() => {
                    const dirs = [...form.directors];
                    dirs[0] = { name: person.name, din: person.din || '', email: person.email };
                    updateForm('directors', dirs);
                  }}
                  className="text-primary-700 font-semibold underline"
                >
                  Autofill
                </button>
              </Alert>
            )}
          </div>
        )}

        {/* DOCUMENTS */}
        {currentStep === 'documents' && (
          <div className="space-y-4">
            <h2 className="font-semibold text-surface-900">Document Checklist</h2>
            <p className="text-sm text-surface-500">Confirm each document is prepared. In the full platform, you would upload them here.</p>
            <div className="space-y-2">
              {REQUIRED_DOCUMENTS.map(doc => {
                const checked = form.documentsChecked.includes(doc.id);
                return (
                  <button
                    key={doc.id}
                    onClick={() => {
                      updateForm(
                        'documentsChecked',
                        checked
                          ? form.documentsChecked.filter(d => d !== doc.id)
                          : [...form.documentsChecked, doc.id]
                      );
                    }}
                    className={`w-full flex items-start gap-3 rounded-lg border p-4 text-left transition-all ${
                      checked ? 'border-accent-300 bg-accent-50/50' : 'border-surface-200 hover:border-surface-300'
                    }`}
                  >
                    <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                      checked ? 'border-accent-500 bg-accent-500' : 'border-surface-300'
                    }`}>
                      {checked && <Check className="h-3 w-3 text-white" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-surface-900">{doc.label}</p>
                      <p className="text-xs text-surface-500 mt-0.5">{doc.desc}</p>
                    </div>
                    {checked && (
                      <Badge variant="success" className="ml-auto shrink-0">Ready</Badge>
                    )}
                  </button>
                );
              })}
            </div>
            {errors.documents && <p className="text-sm text-danger-600">{errors.documents}</p>}
            <div className="flex items-center gap-2 text-sm text-surface-500">
              <Info className="h-4 w-4" />
              {form.documentsChecked.length}/{REQUIRED_DOCUMENTS.length} documents confirmed
            </div>
          </div>
        )}

        {/* REVIEW */}
        {currentStep === 'review' && (
          <div className="space-y-6">
            <h2 className="font-semibold text-surface-900">Review Your Application</h2>
            <Alert variant="warning" title="Please verify all details carefully">
              Incorrect information may lead to rejection and resubmission fees.
            </Alert>

            {[
              {
                title: 'Company Type',
                items: [
                  ['Type', companyTypes.find(c => c.value === form.companyType)?.label || form.companyType],
                  ['Form', 'SPICe+ (INC-32)'],
                ],
              },
              {
                title: 'Company Details',
                items: [
                  ['Proposed Name 1', form.companyName1],
                  ...(form.companyName2 ? [['Proposed Name 2', form.companyName2]] : []),
                  ['Business Activity', form.objectClause],
                  ['Authorised Capital', `₹ ${form.authorizedCapital}`],
                ],
              },
              {
                title: 'Registered Office',
                items: [
                  ['Address', form.registeredAddress],
                  ['City', form.city],
                  ['State', form.state],
                  ['Pincode', form.pincode],
                ],
              },
              {
                title: 'Directors',
                items: form.directors.filter(d => d.name).map((d, i) => [
                  `Director ${i + 1}`,
                  `${d.name}${d.din ? ` (DIN: ${d.din})` : ''}`,
                ]),
              },
            ].map(section => (
              <div key={section.title} className="border border-surface-200 rounded-lg overflow-hidden">
                <div className="bg-surface-50 px-4 py-2 border-b border-surface-200">
                  <h3 className="text-sm font-semibold text-surface-700">{section.title}</h3>
                </div>
                <dl className="divide-y divide-surface-100">
                  {section.items.map(([label, value]) => (
                    <div key={label as string} className="flex justify-between px-4 py-2.5">
                      <dt className="text-sm text-surface-500">{label}</dt>
                      <dd className="text-sm font-medium text-surface-900 text-right max-w-[60%]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}

            <div className="border border-surface-200 rounded-lg px-4 py-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-surface-500">Documents Confirmed</span>
                <Badge variant="success">{form.documentsChecked.length}/{REQUIRED_DOCUMENTS.length}</Badge>
              </div>
            </div>
          </div>
        )}

        {/* SIGNATURE */}
        {currentStep === 'signature' && (
          <div className="space-y-4">
            <h2 className="font-semibold text-surface-900">Digital Signature</h2>
            <Alert variant="info">
              In the production platform, this step would invoke the Digital Signature Certificate (DSC) signing workflow. For this prototype, confirm the signing intent below.
            </Alert>
            <div className="rounded-lg border-2 border-dashed border-surface-300 p-8 text-center">
              <PenTool className="h-10 w-10 text-surface-300 mx-auto mb-3" />
              <p className="text-sm text-surface-600 mb-4">
                All directors and subscribers must sign the incorporation documents using their registered DSC.
              </p>
              <div className="flex items-center justify-center gap-3">
                {form.directors.filter(d => d.name).map((d, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-lg border border-surface-200 px-3 py-2 bg-white">
                    <div className="h-2 w-2 rounded-full bg-accent-500" />
                    <span className="text-sm text-surface-700">{d.name || `Director ${i + 1}`}</span>
                  </div>
                ))}
              </div>
            </div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.dscConfirmed}
                onChange={e => updateForm('dscConfirmed', e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-surface-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-surface-700">
                I confirm that all proposed directors have affixed their Digital Signature Certificate (DSC) to the incorporation documents, and I authorise submission of this application to the Registrar of Companies.
              </span>
            </label>
            {errors.dsc && <p className="text-sm text-danger-600">{errors.dsc}</p>}
          </div>
        )}

        {/* PAYMENT */}
        {currentStep === 'payment' && (
          <div className="space-y-4">
            <h2 className="font-semibold text-surface-900">Fee Summary & Payment</h2>
            <div className="border border-surface-200 rounded-lg overflow-hidden">
              <div className="bg-surface-50 px-4 py-2 border-b border-surface-200">
                <h3 className="text-sm font-semibold text-surface-700">Government Fees</h3>
              </div>
              <div className="divide-y divide-surface-100">
                {[
                  ['SPICe+ Form Filing Fee', '₹ 500'],
                  ['Name Reservation (RUN)', '₹ 1,000'],
                  ['Stamp Duty (varies by state)', `₹ ${form.state === 'Maharashtra' ? '1,300' : form.state === 'Delhi' ? '1,000' : '1,100'}`],
                  ['DIN Allotment (if new)', '₹ 500'],
                  ['PAN & TAN Application', '₹ 0 (included)'],
                ].map(([label, amount]) => (
                  <div key={label} className="flex justify-between px-4 py-3">
                    <span className="text-sm text-surface-600">{label}</span>
                    <span className="text-sm font-medium text-surface-900">{amount}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between px-4 py-3 bg-primary-50 border-t border-primary-200">
                <span className="text-sm font-semibold text-primary-900">Total Payable</span>
                <span className="text-sm font-bold text-primary-900">
                  ₹ {(500 + 1000 + (form.state === 'Maharashtra' ? 1300 : form.state === 'Delhi' ? 1000 : 1100) + 500).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-surface-700">Payment Method</p>
              {[
                { value: 'online', label: 'Net Banking / UPI / Debit Card' },
                { value: 'challan', label: 'Pay Later via Challan' },
              ].map(pm => (
                <button
                  key={pm.value}
                  onClick={() => updateForm('paymentMethod', pm.value)}
                  className={`w-full flex items-center gap-3 rounded-lg border-2 p-3 text-left transition-all ${
                    form.paymentMethod === pm.value ? 'border-primary-600 bg-primary-50/50' : 'border-surface-200'
                  }`}
                >
                  <div className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                    form.paymentMethod === pm.value ? 'border-primary-600 bg-primary-600' : 'border-surface-300'
                  }`}>
                    {form.paymentMethod === pm.value && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                  </div>
                  <span className="text-sm text-surface-700">{pm.label}</span>
                </button>
              ))}
            </div>

            <Alert variant="info">
              This is a prototype. No actual payment will be processed.
            </Alert>
          </div>
        )}

        {/* SUBMISSION */}
        {currentStep === 'submission' && (
          <div className="text-center py-8 space-y-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent-100">
              <CheckCircle2 className="h-8 w-8 text-accent-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-surface-900">Application Submitted Successfully</h2>
              <p className="text-sm text-surface-500 mt-2">
                Your incorporation application for <span className="font-medium text-surface-700">{form.companyName1 || 'your company'}</span> has been submitted to the Registrar of Companies.
              </p>
            </div>

            <div className="inline-block border border-surface-200 rounded-lg p-4 text-left">
              <dl className="space-y-2 text-sm">
                <div className="flex gap-8">
                  <dt className="text-surface-500">SRN</dt>
                  <dd className="font-mono font-semibold text-surface-900">SRN-2026-INC-{Math.floor(Math.random() * 9000 + 1000)}</dd>
                </div>
                <div className="flex gap-8">
                  <dt className="text-surface-500">Form</dt>
                  <dd className="font-medium text-surface-900">SPICe+ (INC-32)</dd>
                </div>
                <div className="flex gap-8">
                  <dt className="text-surface-500">Status</dt>
                  <dd><Badge variant="info">Submitted - Pending Review</Badge></dd>
                </div>
              </dl>
            </div>

            <div className="flex justify-center gap-3">
              <Button onClick={() => navigate('/transactions/inc-new')}>
                Track Status <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary" onClick={() => navigate('/home')}>
                Back to Home
              </Button>
            </div>

            <p className="text-xs text-surface-400 max-w-md mx-auto">
              This is a prototype demonstration. No actual filing has been made with the Ministry of Corporate Affairs.
            </p>
          </div>
        )}

        {/* Navigation */}
        {currentStep !== 'submission' && (
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-surface-200">
            <Button
              variant="ghost"
              onClick={prev}
              disabled={stepIndex === 0}
            >
              <ArrowLeft className="h-4 w-4" /> Previous
            </Button>

            {currentStep === 'payment' ? (
              <Button onClick={handleSubmit}>
                <CreditCard className="h-4 w-4" /> Pay & Submit
              </Button>
            ) : (
              <Button onClick={next}>
                Continue <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}
