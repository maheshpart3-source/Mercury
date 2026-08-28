import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-surface-100 p-4 mb-4">
        <Icon className="h-8 w-8 text-surface-400" />
      </div>
      <h3 className="text-base font-medium text-surface-700 mb-1">{title}</h3>
      {description && <p className="text-sm text-surface-500 max-w-sm">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
