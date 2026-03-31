import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Pie, PieChart, Cell } from "recharts";
import { TrendingUp, TrendingDown, DollarSign, Users, Calendar, Clock } from "lucide-react";

const revenueData = [
  { month: "Jan", valor: 12000 },
  { month: "Fev", valor: 15000 },
  { month: "Mar", valor: 18000 },
  { month: "Abr", valor: 16000 },
  { month: "Mai", valor: 20000 },
  { month: "Jun", valor: 22000 },
];

const servicosData = [
  { name: "Estética", value: 35, color: "#14b8a6" },
  { name: "Fisioterapia", value: 28, color: "#3b82f6" },
  { name: "Massoterapia", value: 22, color: "#a855f7" },
  { name: "Pilates", value: 15, color: "#22c55e" },
];

const ocupacaoSalas = [
  { sala: "Sala 01", ocupacao: 85 },
  { sala: "Sala 02", ocupacao: 78 },
  { sala: "Sala 03", ocupacao: 92 },
  { sala: "Sala 04", ocupacao: 70 },
  { sala: "Sala 05", ocupacao: 88 },
];

const agendamentosPorDia = [
  { dia: "Seg", agendamentos: 12 },
  { dia: "Ter", agendamentos: 15 },
  { dia: "Qua", agendamentos: 10 },
  { dia: "Qui", agendamentos: 18 },
  { dia: "Sex", agendamentos: 20 },
  { dia: "Sáb", agendamentos: 8 },
  { dia: "Dom", agendamentos: 0 },
];

export default function DashboardCharts() {
  return (
    <div className="space-y-6">
      {/* KPIs principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Receita Mensal</CardTitle>
            <DollarSign className="w-5 h-5 text-teal-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 22.000</div>
            <div className="flex items-center text-sm text-green-600 mt-1">
              <TrendingUp className="w-4 h-4 mr-1" />
              +10% vs mês anterior
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Novos Clientes</CardTitle>
            <Users className="w-5 h-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <div className="flex items-center text-sm text-green-600 mt-1">
              <TrendingUp className="w-4 h-4 mr-1" />
              +18% vs mês anterior
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Agendamentos</CardTitle>
            <Calendar className="w-5 h-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">83</div>
            <div className="flex items-center text-sm text-red-600 mt-1">
              <TrendingDown className="w-4 h-4 mr-1" />
              -5% vs mês anterior
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Taxa de Ocupação</CardTitle>
            <Clock className="w-5 h-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <div className="flex items-center text-sm text-green-600 mt-1">
              <TrendingUp className="w-4 h-4 mr-1" />
              +4% vs mês anterior
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Receita Mensal */}
        <Card>
          <CardHeader>
            <CardTitle>Receita Mensal (Últimos 6 meses)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`}
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="valor" 
                  stroke="#14b8a6" 
                  strokeWidth={2}
                  dot={{ fill: '#14b8a6', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Distribuição de Serviços */}
        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Serviços</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={servicosData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {servicosData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              {servicosData.map((service) => (
                <div key={service.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: service.color }}></div>
                  <span className="text-sm text-gray-600">{service.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Agendamentos por Dia da Semana */}
        <Card>
          <CardHeader>
            <CardTitle>Agendamentos por Dia da Semana</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={agendamentosPorDia}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                />
                <Bar dataKey="agendamentos" fill="#14b8a6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Ocupação de Salas */}
        <Card>
          <CardHeader>
            <CardTitle>Taxa de Ocupação por Sala</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ocupacaoSalas.map((sala) => (
                <div key={sala.sala}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{sala.sala}</span>
                    <span className="text-sm font-semibold text-teal-600">{sala.ocupacao}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        sala.ocupacao >= 80 ? 'bg-green-600' : 
                        sala.ocupacao >= 60 ? 'bg-yellow-500' : 
                        'bg-red-500'
                      }`}
                      style={{ width: `${sala.ocupacao}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
