import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
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
import LoginLocatarioPage from "./pages/LoginLocatarioPage";
import NotFound from "./pages/NotFound";

// Área do Locatário (Protegida)
import PainelReservasPage from "./pages/locatario/PainelReservasPage";
import MinhasReservasPage from "./pages/locatario/MinhasReservasPage";

// Área Administrativa
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Páginas Públicas */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/servicos/estetica" element={<EsteticaPage />} />
        <Route path="/servicos/fisioterapia" element={<FisioterapiaPage />} />
        <Route path="/servicos/massoterapia" element={<MassoterapiaPage />} />
        <Route path="/servicos/pilates" element={<PilatesPage />} />
        <Route path="/aluguel-salas" element={<AluguelSalasPage />} />
      </Route>

      {/* Login */}
      <Route path="/login" element={<LoginLocatarioPage />} />

      {/* Área Protegida do Locatário */}
      <Route path="/locatario" element={<ProtectedRoute><MainLayout isLocatarioArea /></ProtectedRoute>}>
        <Route path="reservas" element={<PainelReservasPage />} />
        <Route path="minhas-reservas" element={<MinhasReservasPage />} />
      </Route>

      {/* Área Administrativa */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
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
  </QueryClientProvider>
);

export default App;
