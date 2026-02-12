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
import LoginLocatarioPage from "./pages/LoginLocatarioPage";
import NotFound from "./pages/NotFound";

// Páginas de Detalhes de Tratamentos Estéticos
import RugasLinhasPage from "./pages/estetica/RugasLinhasPage";
import RejuvenescimentoPage from "./pages/estetica/RejuvenescimentoPage";
import ManchasPage from "./pages/estetica/ManchasPage";
import FlacidezFacialPage from "./pages/estetica/FlacidezFacialPage";
import FlacidezCorporalPage from "./pages/estetica/FlacidezCorporalPage";
import GorduraLocalizadaPage from "./pages/estetica/GorduraLocalizadaPage";

// Páginas de Detalhes de Fisioterapia
import FisioterapiaOrtopedicaPage from "./pages/fisioterapia/FisioterapiaOrtopedicaPage";
import FisioterapiaNeurologicaPage from "./pages/fisioterapia/FisioterapiaNeurologicaPage";
import RPGPage from "./pages/fisioterapia/RPGPage";
import PilatesClinicoPage from "./pages/fisioterapia/PilatesClinicoPage";
import EletroterapiaPage from "./pages/fisioterapia/EletroterapiaPage";
import FisioterapiaRespiratoriaPage from "./pages/fisioterapia/FisioterapiaRespiratoriaPage";

// Páginas de Detalhes de Massoterapia
import MassagemRelaxantePage from "./pages/massoterapia/MassagemRelaxantePage";
import MassagemDesportivaPage from "./pages/massoterapia/MassagemDesportivaPage";
import DrenagemLinfaticaPage from "./pages/massoterapia/DrenagemLinfaticaPage";
import MassagemModeladoraPage from "./pages/massoterapia/MassagemModeladoraPage";
import QuickMassagePage from "./pages/massoterapia/QuickMassagePage";
import MassagemPedrasQuentesPage from "./pages/massoterapia/MassagemPedrasQuentesPage";

// Páginas de Detalhes de Pilates
import PilatesGestantesPage from "./pages/pilates/PilatesGestantesPage";
import PilatesAparelhosPage from "./pages/pilates/PilatesAparelhosPage";

// Área Administrativa
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminSalasPage from "./pages/admin/AdminSalasPage";
import AdminConfiguracoes from "./pages/admin/AdminConfiguracoes";
import ClientesCadastrados from "./pages/admin/ClientesCadastrados";

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
        
        {/* Páginas de Detalhes de Tratamentos Estéticos */}
        <Route path="/estetica/rugas-linhas" element={<RugasLinhasPage />} />
        <Route path="/estetica/rejuvenescimento" element={<RejuvenescimentoPage />} />
        <Route path="/estetica/manchas" element={<ManchasPage />} />
        <Route path="/estetica/flacidez-facial" element={<FlacidezFacialPage />} />
        <Route path="/estetica/flacidez-corporal" element={<FlacidezCorporalPage />} />
        <Route path="/estetica/gordura-localizada" element={<GorduraLocalizadaPage />} />
        
        {/* Páginas de Detalhes de Fisioterapia */}
        <Route path="/fisioterapia/ortopedica" element={<FisioterapiaOrtopedicaPage />} />
        <Route path="/fisioterapia/neurologica" element={<FisioterapiaNeurologicaPage />} />
        <Route path="/fisioterapia/rpg" element={<RPGPage />} />
        <Route path="/fisioterapia/pilates-clinico" element={<PilatesClinicoPage />} />
        <Route path="/fisioterapia/eletroterapia" element={<EletroterapiaPage />} />
        <Route path="/fisioterapia/respiratoria" element={<FisioterapiaRespiratoriaPage />} />
        
        {/* Páginas de Detalhes de Massoterapia */}
        <Route path="/massoterapia/relaxante" element={<MassagemRelaxantePage />} />
        <Route path="/massoterapia/desportiva" element={<MassagemDesportivaPage />} />
        <Route path="/massoterapia/drenagem-linfatica" element={<DrenagemLinfaticaPage />} />
        <Route path="/massoterapia/modeladora" element={<MassagemModeladoraPage />} />
        <Route path="/massoterapia/quick-massage" element={<QuickMassagePage />} />
        <Route path="/massoterapia/pedras-quentes" element={<MassagemPedrasQuentesPage />} />
        
        {/* Páginas de Detalhes de Pilates */}
        <Route path="/pilates/gestantes" element={<PilatesGestantesPage />} />
        <Route path="/pilates/aparelhos" element={<PilatesAparelhosPage />} />
      </Route>

      {/* Login de Locatário */}
      <Route path="/login" element={<LoginLocatarioPage />} />

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
      <Route 
        path="/admin/configuracoes" 
        element={
          <AdminProtectedRoute>
            <AdminConfiguracoes />
          </AdminProtectedRoute>
        } 
      />
      <Route 
        path="/admin/clientes" 
        element={
          <AdminProtectedRoute>
            <ClientesCadastrados />
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
