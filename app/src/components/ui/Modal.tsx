import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: 'max-w-sm',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
};

export function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (isOpen && !el.open) el.showModal();
    else if (!isOpen && el.open) el.close();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className={`${sizeStyles[size]} w-full rounded-xl border border-surface-200 bg-white p-0 shadow-xl backdrop:bg-black/40 backdrop:backdrop-blur-sm`}
      onClick={(e) => { if (e.target === dialogRef.current) onClose(); }}
    >
      <div className="flex items-center justify-between border-b border-surface-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-surface-900">{title}</h2>
        <button onClick={onClose} className="rounded-lg p-1 text-surface-400 hover:bg-surface-100 hover:text-surface-600">
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="px-6 py-5">{children}</div>
    </dialog>
  );
}
