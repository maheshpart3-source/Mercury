import { clsx } from 'clsx';
import { AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  variant?: Variant;
  title?: string;
  children: ReactNode;
  className?: string;
}

const config: Record<Variant, { bg: string; border: string; icon: typeof Info }> = {
  info: { bg: 'bg-primary-50', border: 'border-primary-200', icon: Info },
  success: { bg: 'bg-accent-50', border: 'border-accent-200', icon: CheckCircle },
  warning: { bg: 'bg-warn-50', border: 'border-warn-200', icon: AlertTriangle },
  error: { bg: 'bg-danger-50', border: 'border-danger-200', icon: XCircle },
};

export function Alert({ variant = 'info', title, children, className }: AlertProps) {
  const { bg, border, icon: Icon } = config[variant];
  return (
    <div className={clsx('rounded-lg border p-4 flex gap-3', bg, border, className)}>
      <Icon className="h-5 w-5 mt-0.5 shrink-0 text-current opacity-70" />
      <div className="min-w-0">
        {title && <p className="font-medium text-sm mb-1">{title}</p>}
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}
