import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LogOut,
  Settings,
  Building2,
  Users,
  Calendar as CalendarIcon,
  TrendingUp,
  DollarSign,
  Clock,
  ArrowUpRight,
  Plus
} from "lucide-react";
import { toast } from "sonner";
import { useAdmin } from "@/contexts/AdminContext";
import { MultiSalaCalendar } from "@/components/admin/MultiSalaCalendar";
import DashboardCharts from "@/components/admin/DashboardCharts";
import { salas } from "@/data/salasData";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { adminLogout } = useAdmin();

  const handleLogout = () => {
    adminLogout();
    toast.success("Desconectado com sucesso!");
    navigate("/admin/login");
  };

  const activeRooms = salas.filter(s => s.ativo).length;

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-12">
      {/* Header Imersivo */}
      <header className="bg-genki-forest text-white shadow-lg sticky top-0 z-50 backdrop-blur-lg bg-opacity-95">
        <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl md:text-4xl font-serif text-white leading-none">Genki</h1>
            <div className="h-8 w-px bg-white/20 hidden md:block" />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-white/90">Painel Administrativo</p>
              <p className="text-[10px] text-white/60 uppercase tracking-widest">Controle de Gestão</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium">Sistema Online</span>
            </div>
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="text-white hover:bg-white/10 flex items-center gap-2 rounded-xl transition-all duration-300"
            >
              <LogOut size={18} />
              <span className="hidden sm:inline">Sair</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900">Bom dia, Administrador</h2>
            <p className="text-gray-500 mt-1">Aqui está o resumo da sua clínica hoje.</p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => navigate("/admin/salas")}
              className="bg-genki-forest hover:bg-genki-forest/90 rounded-xl shadow-lg shadow-genki-forest/20 flex items-center gap-2"
            >
              <Plus size={18} />
              Adicionar Sala
            </Button>
            <Button
              onClick={() => navigate("/admin/configuracoes")}
              variant="outline"
              className="bg-white border-gray-200 rounded-xl hover:bg-gray-50 flex items-center gap-2 shadow-sm"
            >
              <Settings size={18} />
              Ajustes
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <KpiCard
            title="Ocupação Atual"
            value="82%"
            trend="+4.5%"
            icon={<Clock className="text-teal-600" size={24} />}
            color="bg-teal-50"
          />
          <KpiCard
            title="Receita/Mês"
            value="R$ 22.4k"
            trend="+12%"
            icon={<DollarSign className="text-blue-600" size={24} />}
            color="bg-blue-50"
          />
          <KpiCard
            title="Novos Clientes"
            value="28"
            trend="+18%"
            icon={<Users className="text-purple-600" size={24} />}
            color="bg-purple-50"
          />
          <KpiCard
            title="Salas Ativas"
            value={activeRooms.toString()}
            icon={<Building2 className="text-amber-600" size={24} />}
            color="bg-amber-50"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column: Calendar */}
          <div className="xl:col-span-2 space-y-8">
            <MultiSalaCalendar />
            <DashboardCharts />
          </div>

          {/* Right Column: Sidebar Panels */}
          <div className="space-y-8">
            {/* Quick Actions Panel */}
            <Card className="border-none shadow-xl bg-white overflow-hidden rounded-2xl">
              <CardHeader className="bg-gray-50/50 border-b">
                <CardTitle className="text-lg font-serif">Gerenciamento</CardTitle>
                <CardDescription>Acesse as ferramentas principais</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <ActionLink
                  icon={<Building2 size={20} />}
                  title="Salas & Unid."
                  desc="Gerencie fotos e preços"
                  onClick={() => navigate("/admin/salas")}
                />
                <ActionLink
                  icon={<Users size={20} />}
                  title="Clientes"
                  desc="Base de dados completa"
                  onClick={() => navigate("/admin/clientes")}
                />
                <ActionLink
                  icon={<Settings size={20} />}
                  title="Configurações"
                  desc="Ajustes globais do site"
                  onClick={() => navigate("/admin/configuracoes")}
                />
              </CardContent>
            </Card>

            {/* Account Info Panel */}
            <Card className="border-none shadow-xl bg-gradient-to-br from-white to-gray-50 overflow-hidden rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-serif">Sua Conta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-genki-forest rounded-full flex items-center justify-center text-white font-bold text-xl">
                    AD
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 leading-tight">Administrador Geral</p>
                    <p className="text-sm text-gray-500">admin@genki.com.br</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm py-2 border-b">
                    <span className="text-gray-500">Nível:</span>
                    <span className="font-semibold text-genki-forest">Total</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-b">
                    <span className="text-gray-500">Último Acesso:</span>
                    <span className="font-semibold">Hoje, 14:22</span>
                  </div>
                </div>

                <Button
                  onClick={handleLogout}
                  variant="destructive"
                  className="w-full rounded-xl flex items-center gap-2 py-6 bg-red-50 text-red-600 border-none hover:bg-red-100 font-bold transition-all"
                >
                  <LogOut size={18} />
                  Desconectar com Segurança
                </Button>
              </CardContent>
            </Card>

            {/* Hint Panel */}
            <div className="bg-teal-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-2">Dica Pro</h4>
                <p className="text-teal-50/80 text-sm leading-relaxed">
                  Você pode usar o calendário acima para ter uma visão rápida de quais salas estão com maior demanda esta semana.
                </p>
              </div>
              <ArrowUpRight className="absolute -right-4 -bottom-4 w-24 h-24 text-teal-800/40 group-hover:text-teal-800/60 transition-colors" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Subcomponentes para o Dashboard
function KpiCard({ title, value, trend, icon, color }: { title: string, value: string, trend?: string, icon: React.ReactNode, color: string }) {
  return (
    <Card className="border-none shadow-md bg-white hover:shadow-xl transition-all duration-300 rounded-2xl group">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-xl ${color} group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          {trend && (
            <Badge className="bg-green-100 text-green-700 border-none hover:bg-green-100">
              <TrendingUp size={12} className="mr-1" /> {trend}
            </Badge>
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 mt-1">{value}</h3>
        </div>
      </CardContent>
    </Card>
  );
}

function ActionLink({ icon, title, desc, onClick }: { icon: React.ReactNode, title: string, desc: string, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 p-4 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all text-left group"
    >
      <div className="p-3 bg-white shadow-sm rounded-xl text-gray-600 group-hover:text-genki-forest transition-colors">
        {icon}
      </div>
      <div>
        <p className="font-bold text-gray-900 group-hover:text-genki-forest transition-colors">{title}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
      <ArrowUpRight className="ml-auto w-4 h-4 text-gray-300 group-hover:text-genki-forest opacity-0 group-hover:opacity-100 transition-all" />
    </button>
  );
}
