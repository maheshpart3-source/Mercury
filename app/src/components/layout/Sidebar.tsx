import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, FileCheck, FolderOpen, FileText,
  Users, Link2, AlertTriangle, Globe, Plus, Briefcase, Home,
} from 'lucide-react';
import { clsx } from 'clsx';
import { useEntityContext } from '@/contexts/EntityContext';

interface NavItem {
  to: string;
  icon: typeof LayoutDashboard;
  label: string;
  requiresEntity?: boolean;
}

const entityNavItems: NavItem[] = [
  { to: '/workspace', icon: LayoutDashboard, label: 'Overview', requiresEntity: true },
  { to: '/workspace/compliance', icon: FileCheck, label: 'Compliance', requiresEntity: true },
  { to: '/workspace/filings', icon: FolderOpen, label: 'Filings', requiresEntity: true },
  { to: '/workspace/documents', icon: FileText, label: 'Documents', requiresEntity: true },
  { to: '/workspace/people', icon: Users, label: 'People', requiresEntity: true },
  { to: '/workspace/charges', icon: Link2, label: 'Charges', requiresEntity: true },
  { to: '/workspace/notices', icon: AlertTriangle, label: 'Notices', requiresEntity: true },
];

const globalNavItems: NavItem[] = [
  { to: '/home', icon: Home, label: 'Home' },
  { to: '/services', icon: Briefcase, label: 'Services' },
  { to: '/registry', icon: Globe, label: 'Public Registry' },
];

function SidebarLink({ item }: { item: NavItem }) {
  return (
    <NavLink
      to={item.to}
      className={({ isActive }) => clsx(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
        isActive
          ? 'bg-primary-50 text-primary-700'
          : 'text-surface-600 hover:bg-surface-100 hover:text-surface-900',
      )}
    >
      <item.icon className="h-4.5 w-4.5 shrink-0" />
      {item.label}
    </NavLink>
  );
}

export function Sidebar() {
  const { activeEntity } = useEntityContext();

  return (
    <aside className="flex w-56 shrink-0 flex-col border-r border-surface-200 bg-white">
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {activeEntity && (
          <>
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-surface-400">
              Entity Workspace
            </p>
            {entityNavItems.map(item => (
              <SidebarLink key={item.to} item={item} />
            ))}
            <div className="my-4 h-px bg-surface-100" />
          </>
        )}

        <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-surface-400">
          Platform
        </p>
        {globalNavItems.map(item => (
          <SidebarLink key={item.to} item={item} />
        ))}

        {activeEntity && (
          <>
            <div className="my-4 h-px bg-surface-100" />
            <NavLink
              to="/services"
              className="flex items-center gap-2 rounded-lg border border-dashed border-surface-300 px-3 py-2.5 text-sm font-medium text-surface-500 hover:border-primary-400 hover:bg-primary-50 hover:text-primary-700 transition-colors"
            >
              <Plus className="h-4 w-4" />
              New Service
            </NavLink>
          </>
        )}
      </nav>
    </aside>
  );
}
