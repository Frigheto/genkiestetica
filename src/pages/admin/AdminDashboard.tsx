import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LogOut, Users, Calendar, Settings, FileText, Image, BarChart3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DashboardCharts from "@/components/admin/DashboardCharts";
import CalendarView from "@/components/admin/CalendarView";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [heroTitle, setHeroTitle] = useState("Cuide do seu bem-estar com excelência");
  const [heroSubtitle, setHeroSubtitle] = useState("Oferecemos tratamentos integrados em Estética, Fisioterapia, Massoterapia e Pilates. Uma estrutura completa para sua saúde e beleza.");

  useEffect(() => {
    // Verifica se está autenticado
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
    });
    navigate("/admin/login");
  };

  const handleSaveContent = () => {
    // Salvar no localStorage ou backend
    localStorage.setItem("heroTitle", heroTitle);
    localStorage.setItem("heroSubtitle", heroSubtitle);
    toast({
      title: "Conteúdo salvo!",
      description: "As alterações foram salvas com sucesso.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold">
              G
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">GENKI</h1>
              <p className="text-sm text-gray-500">Painel Administrativo</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Sair
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Gerenciador do Site</h2>
          <p className="text-gray-600 mt-2">Gerencie conteúdos, reservas e configurações do site</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total de Reservas</CardTitle>
              <Calendar className="w-4 h-4 text-teal-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-gray-500">+12% em relação ao mês passado</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Locatários Ativos</CardTitle>
              <Users className="w-4 h-4 text-teal-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-gray-500">2 novos neste mês</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Salas Disponíveis</CardTitle>
              <Settings className="w-4 h-4 text-teal-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10</div>
              <p className="text-xs text-gray-500">Todas equipadas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Taxa de Ocupação</CardTitle>
              <FileText className="w-4 h-4 text-teal-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-gray-500">Média semanal</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="agenda">Agenda</TabsTrigger>
            <TabsTrigger value="content">Conteúdo</TabsTrigger>
            <TabsTrigger value="services">Serviços</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-4">
            <DashboardCharts />
          </TabsContent>

          <TabsContent value="agenda" className="space-y-4">
            <CalendarView />
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Editar Página Inicial</CardTitle>
                <CardDescription>Personalize o conteúdo da página principal</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="heroTitle">Título Principal</Label>
                  <Input
                    id="heroTitle"
                    value={heroTitle}
                    onChange={(e) => setHeroTitle(e.target.value)}
                    placeholder="Título da seção hero"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="heroSubtitle">Subtítulo</Label>
                  <Textarea
                    id="heroSubtitle"
                    value={heroSubtitle}
                    onChange={(e) => setHeroSubtitle(e.target.value)}
                    placeholder="Descrição da clínica"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="heroImage">Imagem de Fundo</Label>
                  <div className="flex gap-2">
                    <Input id="heroImage" type="file" accept="image/*" />
                    <Button variant="outline" size="icon">
                      <Image className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Button onClick={handleSaveContent} className="bg-teal-600 hover:bg-teal-700">
                  Salvar Alterações
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciar Serviços</CardTitle>
                <CardDescription>Adicione, edite ou remova procedimentos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Estética Facial", "Fisioterapia Ortopédica", "Massoterapia Relaxante", "Pilates"].map((service) => (
                    <div key={service} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{service}</h4>
                        <p className="text-sm text-gray-500">Ativo</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Editar</Button>
                        <Button variant="destructive" size="sm">Remover</Button>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">+ Adicionar Novo Serviço</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>


          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Configurações Gerais</CardTitle>
                <CardDescription>Configure informações básicas do site</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Nome da Clínica</Label>
                  <Input defaultValue="GENKI" />
                </div>
                <div className="space-y-2">
                  <Label>Telefone</Label>
                  <Input defaultValue="(55) 99191-1033" />
                </div>
                <div className="space-y-2">
                  <Label>WhatsApp</Label>
                  <Input defaultValue="(55) 99191-1033" />
                </div>
                <div className="space-y-2">
                  <Label>E-mail</Label>
                  <Input defaultValue="genki.estetica@gmail.com" />
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700">Salvar Configurações</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
