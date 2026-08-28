import { clsx } from 'clsx';

type Status = 'active' | 'inactive' | 'warning' | 'error' | 'pending' | 'completed';

interface StatusIndicatorProps {
  status: Status;
  label: string;
  className?: string;
}

const dotColor: Record<Status, string> = {
  active: 'bg-green-500',
  completed: 'bg-green-500',
  inactive: 'bg-surface-400',
  warning: 'bg-amber-500',
  error: 'bg-red-500',
  pending: 'bg-blue-500',
};

export function StatusIndicator({ status, label, className }: StatusIndicatorProps) {
  return (
    <span className={clsx('inline-flex items-center gap-1.5 text-sm', className)}>
      <span className={clsx('h-2 w-2 rounded-full', dotColor[status])} />
      {label}
    </span>
  );
}
