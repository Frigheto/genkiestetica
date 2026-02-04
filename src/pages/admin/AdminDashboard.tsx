import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, Settings, Building2, BarChart3 } from "lucide-react";
import { toast } from "sonner";
import { useAdmin } from "@/contexts/AdminContext";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { adminLogout } = useAdmin();

  const handleLogout = () => {
    adminLogout();
    toast.success("Desconectado com sucesso!");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Painel Administrativo</h1>
            <p className="text-sm text-gray-600">Gerenciar salas e conteúdo do site</p>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="flex items-center gap-2"
          >
            <LogOut size={18} />
            Sair
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card Salas */}
          <Card 
            className="cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate("/admin/salas")}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Gerenciar Salas</CardTitle>
                <Building2 className="text-blue-600" size={24} />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Edite salas, adicione fotos e vídeos
              </p>
            </CardContent>
          </Card>

          {/* Card Estatísticas */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Estatísticas</CardTitle>
                <BarChart3 className="text-green-600" size={24} />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Visualize métricas do site
              </p>
            </CardContent>
          </Card>

          {/* Card Configurações */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Configurações</CardTitle>
                <Settings className="text-purple-600" size={24} />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Ajuste as configurações do site
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
              <CardDescription>Acesso direto aos gerenciadores</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                onClick={() => navigate("/admin/salas")}
                className="w-full justify-start"
                variant="outline"
              >
                <Building2 className="mr-2" size={18} />
                Gerenciar Salas e Mídias
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BarChart3 className="mr-2" size={18} />
                Ver Relatórios
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Settings className="mr-2" size={18} />
                Configurações do Site
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Informações da Conta</CardTitle>
              <CardDescription>Dados do administrador</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">E-mail</p>
                <p className="font-medium">admin@genki.com.br</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Nível de Acesso</p>
                <p className="font-medium">Administrador</p>
              </div>
              <Button 
                onClick={handleLogout}
                variant="destructive"
                className="w-full"
              >
                <LogOut className="mr-2" size={18} />
                Desconectar
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
