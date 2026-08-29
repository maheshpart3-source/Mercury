import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Building2, ExternalLink, Globe } from 'lucide-react';
import { entities } from '@/data/mock';
import { getEntityIdentifier, getEntityTypeLabel } from '@/data/mock';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { StatusIndicator } from '@/components/ui/StatusIndicator';
import { Alert } from '@/components/ui/Alert';

export function RegistryPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<typeof entities>([]);
  const [searched, setSearched] = useState(false);

  function handleSearch() {
    if (!search.trim()) return;
    const q = search.toLowerCase();
    setResults(
      entities.filter(e =>
        e.name.toLowerCase().includes(q) ||
        (e.cin?.toLowerCase().includes(q)) ||
        (e.llpin?.toLowerCase().includes(q))
      )
    );
    setSearched(true);
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Globe className="h-5 w-5 text-primary-600" />
          <h1 className="text-xl font-bold text-surface-900">Public Registry</h1>
        </div>
        <p className="text-sm text-surface-500">
          Search the public company and LLP registry. No authentication required.
        </p>
      </div>

      <Alert variant="info">
        This is a <span className="font-medium">public view</span>. To file documents, manage compliance, or perform transactions, sign in and select an entity from your workspace.
      </Alert>

      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-surface-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search by company name, CIN, or LLPIN..."
            className="w-full rounded-lg border border-surface-200 bg-white py-3 pl-12 pr-4 text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
        </div>
        <button
          onClick={handleSearch}
          className="rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-primary-700 transition-colors"
        >
          Search
        </button>
      </div>

      {searched && results.length === 0 && (
        <div className="text-center py-12">
          <Building2 className="h-10 w-10 text-surface-300 mx-auto mb-3" />
          <p className="text-surface-500">No entities found for "{search}"</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm text-surface-500">{results.length} result{results.length !== 1 ? 's' : ''}</p>
          {results.map(entity => (
            <Card
              key={entity.id}
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate(`/registry/${entity.id}`)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-100 text-surface-600 font-bold">
                    {entity.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-surface-900">{entity.name}</p>
                    <p className="text-sm text-surface-500 mt-0.5">{getEntityIdentifier(entity)}</p>
                    <div className="mt-2 flex gap-1.5">
                      <Badge>{getEntityTypeLabel(entity)}</Badge>
                      <StatusIndicator
                        status={entity.status === 'ACTIVE' ? 'active' : 'inactive'}
                        label={entity.status}
                      />
                    </div>
                    <div className="mt-2 text-sm text-surface-500">
                      {entity.registeredOffice.city}, {entity.registeredOffice.state}
                      <span className="text-surface-300 mx-1.5">·</span>
                      Incorporated {new Date(entity.incorporationDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-surface-400" />
              </div>
            </Card>
          ))}
        </div>
      )}

      {!searched && (
        <div className="text-center py-16">
          <div className="rounded-full bg-surface-100 p-5 inline-block mb-4">
            <Search className="h-8 w-8 text-surface-400" />
          </div>
          <p className="text-surface-500">Enter a company name, CIN, or LLPIN to search</p>
          <p className="text-xs text-surface-400 mt-1">Try "Acme" or "Bharat"</p>
        </div>
      )}
      <p className="text-center text-xs text-surface-400 pt-4">Prototype demonstration - search results are from simulated data.</p>
    </div>
  );
}
