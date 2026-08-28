import { useState } from 'react';
import { Bell, HelpCircle, Search, User, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useEntityContext } from '@/contexts/EntityContext';
import { EntitySwitcher } from '@/components/entity/EntitySwitcher';
import { getNotificationsForEntity } from '@/data/mock';
import { Badge } from '@/components/ui/Badge';

export function Header() {
  const { person, logout } = useAuth();
  const { activeEntity } = useEntityContext();
  const [showProfile, setShowProfile] = useState(false);

  const notifications = getNotificationsForEntity(activeEntity?.id);
  const unread = notifications.filter(n => !n.read).length;

  return (
    <header className="flex h-16 items-center justify-between border-b border-surface-200 bg-white px-4">
      {/* Left: Logo + Entity Switcher */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-800">
            <span className="text-sm font-bold text-white">M</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-primary-800 leading-tight">MCA</p>
            <p className="text-[10px] text-surface-500 leading-tight">Digital Platform</p>
          </div>
        </div>

        <div className="h-8 w-px bg-surface-200" />

        <EntitySwitcher />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-1">
        <button className="rounded-lg p-2 text-surface-500 hover:bg-surface-100 hover:text-surface-700">
          <Search className="h-5 w-5" />
        </button>

        <button className="relative rounded-lg p-2 text-surface-500 hover:bg-surface-100 hover:text-surface-700">
          <Bell className="h-5 w-5" />
          {unread > 0 && (
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-danger-500 text-[10px] font-medium text-white">
              {unread}
            </span>
          )}
        </button>

        <button className="rounded-lg p-2 text-surface-500 hover:bg-surface-100 hover:text-surface-700">
          <HelpCircle className="h-5 w-5" />
        </button>

        <div className="ml-1 h-8 w-px bg-surface-200" />

        {/* Profile dropdown */}
        <div className="relative ml-1">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-surface-100"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-xs font-medium">
              {person?.name.split(' ').map(n => n[0]).join('')}
            </div>
            <span className="hidden text-surface-700 font-medium sm:block">{person?.name.split(' ')[0]}</span>
            <ChevronDown className="h-3.5 w-3.5 text-surface-400" />
          </button>

          {showProfile && (
            <div className="absolute right-0 top-full z-50 mt-1 w-56 rounded-xl border border-surface-200 bg-white py-1 shadow-xl">
              <div className="px-4 py-3 border-b border-surface-100">
                <p className="text-sm font-medium text-surface-900">{person?.name}</p>
                <p className="text-xs text-surface-500 mt-0.5">{person?.email}</p>
                {person?.din && (
                  <Badge variant="info" className="mt-1.5">DIN: {person.din}</Badge>
                )}
                {person?.professionalMembership && (
                  <Badge variant="info" className="mt-1.5">
                    {person.professionalMembership.type}: {person.professionalMembership.number}
                  </Badge>
                )}
              </div>
              <button className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-surface-600 hover:bg-surface-50">
                <User className="h-4 w-4" /> Account Settings
              </button>
              <button
                onClick={() => { logout(); setShowProfile(false); }}
                className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-danger-600 hover:bg-danger-50"
              >
                <LogOut className="h-4 w-4" /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
