import { clsx } from 'clsx';

type Status = 'active' | 'inactive' | 'warning' | 'error' | 'pending' | 'completed';

interface StatusIndicatorProps {
  status: Status;
  label: string;
  className?: string;
}

const dotColor: Record<Status, string> = {
  active: 'bg-accent-500',
  completed: 'bg-accent-500',
  inactive: 'bg-surface-400',
  warning: 'bg-warn-500',
  error: 'bg-danger-500',
  pending: 'bg-primary-600',
};

export function StatusIndicator({ status, label, className }: StatusIndicatorProps) {
  return (
    <span className={clsx('inline-flex items-center gap-1.5 text-sm', className)}>
      <span className={clsx('h-2 w-2 rounded-full', dotColor[status])} />
      {label}
    </span>
  );
}
