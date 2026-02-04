import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { AdminProvider, useAdmin } from "@/contexts/AdminContext";
import ScrollToTop from "@/components/ScrollToTop";

// Layout
import MainLayout from "./components/layout/MainLayout";

// Páginas Públicas
import HomePage from "./pages/HomePageNew";
import SobrePage from "./pages/SobrePage";
import ServicosPage from "./pages/ServicosPage";
import EsteticaPage from "./pages/EsteticaPage";
import FisioterapiaPage from "./pages/FisioterapiaPage";
import MassoterapiaPage from "./pages/MassoterapiaPage";
import PilatesPage from "./pages/PilatesPage";
import AluguelSalasPage from "./pages/AluguelSalasPage";
import SalaDetalhesPage from "./pages/SalaDetalhesPage";
import NotFound from "./pages/NotFound";

// Área Administrativa
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminSalasPage from "./pages/admin/AdminSalasPage";

const queryClient = new QueryClient();

function AdminProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAdminAuthenticated } = useAdmin();
  if (!isAdminAuthenticated) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Páginas Públicas - sem login obrigatório */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/servicos/estetica" element={<EsteticaPage />} />
        <Route path="/servicos/fisioterapia" element={<FisioterapiaPage />} />
        <Route path="/servicos/massoterapia" element={<MassoterapiaPage />} />
        <Route path="/servicos/pilates" element={<PilatesPage />} />
        <Route path="/aluguel-salas" element={<AluguelSalasPage />} />
        <Route path="/aluguel-salas/:salaId" element={<SalaDetalhesPage />} />
      </Route>

      {/* Área Administrativa */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route 
        path="/admin/dashboard" 
        element={
          <AdminProtectedRoute>
            <AdminDashboard />
          </AdminProtectedRoute>
        } 
      />
      <Route 
        path="/admin/salas" 
        element={
          <AdminProtectedRoute>
            <AdminSalasPage />
          </AdminProtectedRoute>
        } 
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AdminProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </AdminProvider>
  </QueryClientProvider>
);

export default App;
