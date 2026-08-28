import { useNavigate } from 'react-router-dom';
import {
  Building2, FileText, Users, MapPin, ArrowRight,
  Briefcase, Scale, Shield, Search,
} from 'lucide-react';
import { useState } from 'react';
import { useEntityContext } from '@/contexts/EntityContext';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Alert } from '@/components/ui/Alert';

interface ServiceIntent {
  id: string;
  intent: string;
  description: string;
  icon: typeof Building2;
  category: string;
  requiresEntity: boolean;
  requiredAction?: string;
}

const serviceIntents: ServiceIntent[] = [
  {
    id: 'incorporate-company',
    intent: 'Start a new company',
    description: 'Incorporate a Private Limited, Public Limited, or One Person Company under the Companies Act 2013.',
    icon: Building2,
    category: 'Company Formation',
    requiresEntity: false,
  },
  {
    id: 'file-annual-return',
    intent: 'File annual return',
    description: 'Submit the annual return (MGT-7/MGT-7A) for your company as required under Section 92.',
    icon: FileText,
    category: 'Annual Compliance',
    requiresEntity: true,
    requiredAction: 'FILE_ANNUAL_RETURN',
  },
  {
    id: 'file-financials',
    intent: 'File financial statements',
    description: 'Submit financial statements (AOC-4/AOC-4 XBRL) as required under Section 137.',
    icon: Scale,
    category: 'Annual Compliance',
    requiresEntity: true,
    requiredAction: 'FILE_FINANCIAL_STATEMENTS',
  },
  {
    id: 'appoint-director',
    intent: 'Appoint a new director',
    description: 'File appointment of a director or additional director under Section 152.',
    icon: Users,
    category: 'Company Management',
    requiresEntity: true,
    requiredAction: 'APPOINT_DIRECTOR',
  },
  {
    id: 'change-address',
    intent: 'Change registered office address',
    description: 'File change of registered office address under Section 12.',
    icon: MapPin,
    category: 'Company Management',
    requiresEntity: true,
    requiredAction: 'CHANGE_ADDRESS',
  },
  {
    id: 'director-kyc',
    intent: 'Complete Director KYC',
    description: 'Annual KYC verification for directors as required under Rule 12A.',
    icon: Shield,
    category: 'Director Services',
    requiresEntity: false,
  },
];

export function ServicesPage() {
  const navigate = useNavigate();
  const { activeEntity, canPerformAction } = useEntityContext();
  const [search, setSearch] = useState('');

  const filtered = serviceIntents.filter(s =>
    s.intent.toLowerCase().includes(search.toLowerCase()) ||
    s.description.toLowerCase().includes(search.toLowerCase()) ||
    s.category.toLowerCase().includes(search.toLowerCase())
  );

  const categories = [...new Set(filtered.map(s => s.category))];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Briefcase className="h-5 w-5 text-primary-600" />
          <h1 className="text-xl font-bold text-surface-900">Services</h1>
        </div>
        <p className="text-sm text-surface-500">
          What would you like to do? Start from your intent — not a form number.
        </p>
      </div>

      <Alert variant="info" title="Intent-Based Service Discovery">
        Describe what you need to accomplish. The platform will guide you to the right process, forms, and requirements.
      </Alert>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-surface-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="What do you want to do? e.g., &quot;start a company&quot;, &quot;file annual return&quot;..."
          className="w-full rounded-lg border border-surface-200 bg-white py-3 pl-12 pr-4 text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
        />
      </div>

      {categories.map(category => (
        <div key={category}>
          <h2 className="text-sm font-semibold text-surface-600 mb-3">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filtered.filter(s => s.category === category).map(service => {
              const needsEntity = service.requiresEntity && !activeEntity;
              const hasAuthority = !service.requiredAction || canPerformAction(service.requiredAction);
              const disabled = needsEntity || (service.requiresEntity && !hasAuthority);

              return (
                <button
                  key={service.id}
                  disabled={disabled}
                  onClick={() => {
                    if (service.id === 'incorporate-company') navigate('/services/incorporate');
                  }}
                  className="group flex items-start gap-4 rounded-lg border border-surface-200 bg-white p-4 text-left transition-all hover:border-primary-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-surface-200 disabled:hover:shadow-none"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-surface-900 group-hover:text-primary-700">{service.intent}</p>
                      {!disabled && <ArrowRight className="h-4 w-4 text-surface-300 group-hover:text-primary-600 shrink-0" />}
                    </div>
                    <p className="text-xs text-surface-500 mt-1">{service.description}</p>
                    {needsEntity && (
                      <Badge variant="warning" className="mt-2">Requires active entity</Badge>
                    )}
                    {service.requiresEntity && activeEntity && !hasAuthority && (
                      <Badge variant="danger" className="mt-2">Not authorised for this entity</Badge>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <p className="text-center text-xs text-surface-400 pt-4">Prototype demonstration — only Incorporation (SPICe+) is fully functional.</p>
    </div>
  );
}
