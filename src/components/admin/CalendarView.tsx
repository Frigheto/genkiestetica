import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock, User, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Agendamento {
  id: number;
  cliente: string;
  servico: string;
  horario: string;
  duracao: string;
  telefone: string;
  status: "confirmado" | "pendente" | "cancelado";
  sala: string;
}

// Dados mockados - em produção viriam de uma API
const agendamentos: Agendamento[] = [
  {
    id: 1,
    cliente: "Maria Silva",
    servico: "Estética Facial",
    horario: "09:00",
    duracao: "1h30",
    telefone: "(11) 98765-4321",
    status: "confirmado",
    sala: "Sala 01",
  },
  {
    id: 2,
    cliente: "João Santos",
    servico: "Fisioterapia",
    horario: "10:30",
    duracao: "1h",
    telefone: "(11) 98765-1234",
    status: "confirmado",
    sala: "Sala 03",
  },
  {
    id: 3,
    cliente: "Ana Costa",
    servico: "Massoterapia",
    horario: "14:00",
    duracao: "1h",
    telefone: "(11) 98765-5678",
    status: "pendente",
    sala: "Sala 05",
  },
  {
    id: 4,
    cliente: "Pedro Oliveira",
    servico: "Pilates",
    horario: "15:30",
    duracao: "1h",
    telefone: "(11) 98765-9876",
    status: "confirmado",
    sala: "Sala 09",
  },
  {
    id: 5,
    cliente: "Carla Mendes",
    servico: "Botox",
    horario: "16:00",
    duracao: "45min",
    telefone: "(11) 98765-3333",
    status: "cancelado",
    sala: "Sala 02",
  },
];

export default function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Dias do mês anterior
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ day: null, isCurrentMonth: false });
    }
    
    // Dias do mês atual
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }

    return days;
  };

  const previousMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmado":
        return "bg-green-100 text-green-800 border-green-300";
      case "pendente":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "cancelado":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const days = getDaysInMonth(selectedDate);
  const today = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Calendário */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">
                {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
              </CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={previousMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Dias da semana */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Dias do mês */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((dayInfo, index) => {
                const isToday = 
                  dayInfo.day === today &&
                  selectedDate.getMonth() === currentMonth &&
                  selectedDate.getFullYear() === currentYear;
                
                return (
                  <button
                    key={index}
                    className={`
                      aspect-square p-2 rounded-lg text-center transition-all
                      ${!dayInfo.isCurrentMonth ? "text-gray-300" : "text-gray-900"}
                      ${isToday ? "bg-teal-600 text-white font-bold" : "hover:bg-gray-100"}
                      ${dayInfo.day ? "cursor-pointer" : "cursor-default"}
                    `}
                    disabled={!dayInfo.day}
                  >
                    {dayInfo.day}
                  </button>
                );
              })}
            </div>

            {/* Legenda */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-teal-600"></div>
                <span className="text-gray-600">Hoje</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-100 border border-green-300"></div>
                <span className="text-gray-600">Confirmado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-yellow-100 border border-yellow-300"></div>
                <span className="text-gray-600">Pendente</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Agendamentos do Dia */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Agendamentos de Hoje</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {agendamentos.map((agendamento) => (
              <div
                key={agendamento.id}
                className={`p-4 rounded-lg border-2 ${getStatusColor(agendamento.status)}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {agendamento.cliente}
                    </h4>
                    <p className="text-sm mt-1">{agendamento.servico}</p>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {agendamento.status}
                  </Badge>
                </div>
                
                <div className="space-y-1 text-sm mt-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{agendamento.horario} ({agendamento.duracao})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{agendamento.telefone}</span>
                  </div>
                  <div className="mt-2 pt-2 border-t">
                    <span className="text-xs font-medium">{agendamento.sala}</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-3">
                  {agendamento.status === "pendente" && (
                    <>
                      <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                        Confirmar
                      </Button>
                      <Button size="sm" variant="destructive" className="flex-1">
                        Cancelar
                      </Button>
                    </>
                  )}
                  {agendamento.status === "confirmado" && (
                    <Button size="sm" variant="outline" className="w-full">
                      Ver Detalhes
                    </Button>
                  )}
                </div>
              </div>
            ))}

            {agendamentos.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <p>Nenhum agendamento para hoje</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
