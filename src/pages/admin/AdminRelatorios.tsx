import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChart3, TrendingUp, Users, Calendar } from "lucide-react";

export default function AdminRelatorios() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/admin/dashboard")} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Dashboard
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-genki-forest flex items-center justify-center text-white font-bold">
                G
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">GENKI</h1>
                <p className="text-sm text-gray-500">Relatórios e Estatísticas</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-genki-forest" />
            Relatórios e Métricas
          </h2>
          <p className="text-gray-600 mt-2">Visualize estatísticas e desempenho do site</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Visitantes (Mês)</CardTitle>
              <Users className="w-4 h-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,547</div>
              <p className="text-xs text-green-600">+15% vs mês anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Agendamentos</CardTitle>
              <Calendar className="w-4 h-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <p className="text-xs text-green-600">+8% vs mês anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Taxa de Conversão</CardTitle>
              <TrendingUp className="w-4 h-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5.6%</div>
              <p className="text-xs text-green-600">+2.1% vs mês anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Páginas Visitadas</CardTitle>
              <BarChart3 className="w-4 h-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,234</div>
              <p className="text-xs text-green-600">+12% vs mês anterior</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Reports */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Páginas Mais Visitadas</CardTitle>
              <CardDescription>Top 5 páginas do último mês</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { page: "Home", visits: 1250, percentage: 49 },
                  { page: "Serviços - Estética", visits: 580, percentage: 23 },
                  { page: "Aluguel de Salas", visits: 420, percentage: 16 },
                  { page: "Serviços - Fisioterapia", visits: 180, percentage: 7 },
                  { page: "Sobre", visits: 117, percentage: 5 },
                ].map((item) => (
                  <div key={item.page} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.page}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-genki-forest rounded-full h-2"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                    <span className="ml-4 text-sm text-gray-600">{item.visits}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Origem do Tráfego</CardTitle>
              <CardDescription>De onde vêm os visitantes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { source: "Busca Orgânica (Google)", visits: 1420, color: "bg-blue-500" },
                  { source: "Direto", visits: 680, color: "bg-green-500" },
                  { source: "Redes Sociais", visits: 320, color: "bg-purple-500" },
                  { source: "Referências", visits: 127, color: "bg-orange-500" },
                ].map((item) => (
                  <div key={item.source} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.source}</p>
                    </div>
                    <span className="text-sm text-gray-600">{item.visits}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Clientes Cadastrados</CardTitle>
              <CardDescription>Novos registros por mês</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-genki-forest mb-4">
                {JSON.parse(localStorage.getItem("registeredUsers") || "[]").length}
              </div>
              <p className="text-sm text-gray-600">
                Total de clientes cadastrados no sistema
              </p>
              <Button
                className="w-full mt-4 bg-genki-forest hover:bg-genki-forest/90"
                onClick={() => navigate("/admin/clientes")}
              >
                Ver Lista Completa
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Desempenho do Site</CardTitle>
              <CardDescription>Métricas de performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Tempo de Carregamento</span>
                    <span className="text-sm font-medium text-green-600">1.2s</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 rounded-full h-2" style={{ width: "85%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Score de Performance</span>
                    <span className="text-sm font-medium text-green-600">92/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 rounded-full h-2" style={{ width: "92%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Taxa de Rejeição</span>
                    <span className="text-sm font-medium text-yellow-600">32%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 rounded-full h-2" style={{ width: "32%" }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
