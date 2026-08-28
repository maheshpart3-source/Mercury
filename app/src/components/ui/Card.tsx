import { clsx } from 'clsx';
import type { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: 'sm' | 'md' | 'lg';
}

const padStyles = { sm: 'p-3', md: 'p-5', lg: 'p-6' };

export function Card({ children, padding = 'md', className, ...props }: CardProps) {
  return (
    <div
      className={clsx('bg-white rounded-lg border border-surface-200 shadow-sm', padStyles[padding], className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx('mb-4', className)}>{children}</div>;
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={clsx('text-base font-semibold text-surface-900', className)}>{children}</h3>;
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={clsx('text-sm text-surface-500 mt-1', className)}>{children}</p>;
}
