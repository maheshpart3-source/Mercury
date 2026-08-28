import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { EntityProvider } from '@/contexts/EntityContext';
import { AppShell } from '@/components/layout/AppShell';
import { LoginPage } from '@/pages/LoginPage';
import { SelectEntityPage } from '@/pages/SelectEntityPage';
import { HomePage } from '@/pages/HomePage';
import { WorkspacePage } from '@/pages/WorkspacePage';
import { CompliancePage } from '@/pages/CompliancePage';
import { RegistryPage } from '@/pages/RegistryPage';
import { EntityProfilePage } from '@/pages/EntityProfilePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { IncorporationPage } from '@/pages/IncorporationPage';
import { TransactionStatusPage } from '@/pages/TransactionStatusPage';
import { PlaceholderPage } from '@/pages/PlaceholderPage';
import { AuthGuard } from '@/routes/AuthGuard';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EntityProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/select-entity"
              element={<AuthGuard><SelectEntityPage /></AuthGuard>}
            />
            <Route
              path="/"
              element={<AuthGuard><AppShell /></AuthGuard>}
            >
              <Route index element={<Navigate to="/home" replace />} />
              <Route path="home" element={<HomePage />} />
              <Route path="workspace" element={<WorkspacePage />} />
              <Route path="workspace/compliance" element={<CompliancePage />} />
              <Route path="workspace/filings" element={<PlaceholderPage page="filings" />} />
              <Route path="workspace/documents" element={<PlaceholderPage page="documents" />} />
              <Route path="workspace/people" element={<PlaceholderPage page="people" />} />
              <Route path="workspace/charges" element={<PlaceholderPage page="charges" />} />
              <Route path="workspace/notices" element={<PlaceholderPage page="notices" />} />
              <Route path="registry" element={<RegistryPage />} />
              <Route path="registry/:id" element={<EntityProfilePage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="services/incorporate" element={<IncorporationPage />} />
              <Route path="transactions/:id" element={<TransactionStatusPage />} />
            </Route>
          </Routes>
        </EntityProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
