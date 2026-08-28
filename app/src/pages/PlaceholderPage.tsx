import { useEntityContext } from '@/contexts/EntityContext';
import { Card } from '@/components/ui/Card';
import { EmptyState } from '@/components/ui/EmptyState';
import { Building2, FolderOpen, FileText, Users, Link2, AlertTriangle } from 'lucide-react';

const pageConfig: Record<string, { title: string; description: string; icon: typeof FolderOpen }> = {
  filings: { title: 'Filings', description: 'View and manage all filings and submissions for this entity.', icon: FolderOpen },
  documents: { title: 'Documents', description: 'Access entity documents, certificates, and attachments.', icon: FileText },
  people: { title: 'People', description: 'Directors, partners, key managerial personnel, and their roles.', icon: Users },
  charges: { title: 'Charges', description: 'View registered charges and satisfaction records.', icon: Link2 },
  notices: { title: 'Notices', description: 'Regulatory notices, show-cause notices, and responses.', icon: AlertTriangle },
};

export function PlaceholderPage({ page }: { page: string }) {
  const { activeEntity } = useEntityContext();
  const config = pageConfig[page] || { title: page, description: '', icon: FolderOpen };

  if (!activeEntity) {
    return <EmptyState icon={Building2} title="No Entity Selected" description="Select an entity to access this section." />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-surface-900">{config.title}</h1>
        <p className="text-sm text-surface-500 mt-1">{activeEntity.name} — {config.description}</p>
      </div>
      <Card padding="lg">
        <EmptyState
          icon={config.icon}
          title={`${config.title} — Coming Soon`}
          description="This section will be available in a future iteration of the prototype."
        />
      </Card>
    </div>
  );
}
