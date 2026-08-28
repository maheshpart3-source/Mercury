import { clsx } from 'clsx';
import type { ReactNode } from 'react';

type Variant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';

interface BadgeProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

const styles: Record<Variant, string> = {
  default: 'bg-surface-100 text-surface-700',
  primary: 'bg-primary-100 text-primary-700',
  success: 'bg-accent-50 text-accent-600',
  warning: 'bg-warn-50 text-warn-600',
  danger: 'bg-danger-50 text-danger-600',
  info: 'bg-primary-50 text-primary-600',
};

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span className={clsx('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', styles[variant], className)}>
      {children}
    </span>
  );
}
