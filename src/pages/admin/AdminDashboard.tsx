import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LogOut,
  Settings,
  Building2,
  Users,
  Calendar as CalendarIcon,
  Clock,
  ArrowUpRight,
  Plus,
  User,
  Mail,
  Phone
} from "lucide-react";
import { toast } from "sonner";
import { useAdmin } from "@/contexts/AdminContext";
import { MultiSalaCalendar } from "@/components/admin/MultiSalaCalendar";
import { salas } from "@/data/salasData";

interface RegisteredUser {
  id: string;
  name: string;
  email: string;
  telefone?: string;
  profissao?: string;
  password: string;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { adminLogout } = useAdmin();
  const [recentUsers, setRecentUsers] = useState<RegisteredUser[]>([]);

  useEffect(() => {
    const users = localStorage.getItem("registeredUsers");
    if (users) {
      const parsedUsers = JSON.parse(users) as RegisteredUser[];
      // Ordenar por ID decrescente (mais recentes primeiro)
      const sorted = [...parsedUsers].sort((a, b) => {
        const idA = parseInt(a.id.replace("user-", ""));
        const idB = parseInt(b.id.replace("user-", ""));
        return idB - idA;
      });
      setRecentUsers(sorted.slice(0, 5));
    }
  }, []);

  const handleLogout = () => {
    adminLogout();
    toast.success("Desconectado com sucesso!");
    navigate("/admin/login");
  };

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
            <p className="text-gray-500 mt-1">Gestão de salas e usuários registrados.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => navigate("/admin/salas")}
              className="bg-genki-forest hover:bg-genki-forest/90 rounded-xl shadow-lg shadow-genki-forest/20 flex items-center gap-2"
            >
              <Plus size={18} />
              Salas
            </Button>
            <Button
              onClick={() => navigate("/admin/servicos")}
              variant="secondary"
              className="rounded-xl shadow-sm flex items-center gap-2"
            >
              <Plus size={18} />
              Serviços
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column: Calendar */}
          <div className="xl:col-span-2 space-y-8">
            <MultiSalaCalendar />
          </div>

          {/* Right Column: Sidebar Panels */}
          <div className="space-y-8">
            {/* Recent Registrations Panel */}
            <Card className="border-none shadow-xl bg-white overflow-hidden rounded-2xl">
              <CardHeader className="bg-gray-50/50 border-b flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-serif">Contas Criadas</CardTitle>
                  <CardDescription>Últimos cadastros no site</CardDescription>
                </div>
                <Users className="text-genki-forest opacity-50" size={24} />
              </CardHeader>
              <CardContent className="p-0">
                {recentUsers.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {recentUsers.map((user) => (
                      <div key={user.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-genki-forest/10 flex items-center justify-center text-genki-forest">
                            <User size={20} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-gray-900 truncate">{user.name}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-500 truncate">
                              <Mail size={12} />
                              {user.email}
                            </div>
                          </div>
                        </div>
                        {user.telefone && (
                          <div className="mt-2 flex items-center gap-2 text-xs text-genki-forest font-medium bg-genki-forest/5 py-1 px-2 rounded-lg w-fit">
                            <Phone size={10} />
                            {user.telefone}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <Users className="mx-auto text-gray-300 mb-2" size={40} />
                    <p className="text-gray-500 text-sm">Nenhum usuário cadastrado ainda.</p>
                  </div>
                )}
                <div className="p-4 border-t bg-gray-50/30">
                  <Button
                    variant="ghost"
                    className="w-full text-genki-forest font-bold hover:bg-genki-forest/10 rounded-xl"
                    onClick={() => navigate("/admin/clientes")}
                  >
                    Ver Tudo
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions Panel */}
            <Card className="border-none shadow-xl bg-white overflow-hidden rounded-2xl">
              <CardHeader className="bg-gray-50/50 border-b">
                <CardTitle className="text-lg font-serif">Gerenciamento</CardTitle>
                <CardDescription>Atalhos rápidos</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <ActionLink
                  icon={<Building2 size={20} />}
                  title="Salas & Unid."
                  desc="Gerencie fotos e preços"
                  onClick={() => navigate("/admin/salas")}
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

                <Button
                  onClick={handleLogout}
                  variant="destructive"
                  className="w-full rounded-xl flex items-center gap-2 py-6 bg-red-50 text-red-600 border-none hover:bg-red-100 font-bold transition-all"
                >
                  <LogOut size={18} />
                  Desconectar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
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
