import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { AuthorityBanner } from '@/components/entity/AuthorityBanner';
import { useEntityContext } from '@/contexts/EntityContext';

export function AppShell() {
  const { activeEntity } = useEntityContext();

  return (
    <div className="flex h-full flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-surface-50">
          {activeEntity && (
            <div className="border-b border-surface-200 bg-surface-50 px-6 py-2.5">
              <AuthorityBanner />
            </div>
          )}
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
