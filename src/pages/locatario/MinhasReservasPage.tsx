import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  Building2,
  Plus,
  X,
  AlertTriangle,
} from "lucide-react";
import { toast } from "sonner";

interface Reserva {
  id: number;
  sala: string;
  data: string;
  horarios: string[];
  status: "confirmada" | "pendente" | "cancelada";
  valor: number;
}

const reservasIniciais: Reserva[] = [
  {
    id: 1,
    sala: "Sala 03 - Fisioterapia",
    data: "2026-01-25",
    horarios: ["10:00", "11:00", "13:00"],
    status: "confirmada",
    valor: 165,
  },
  {
    id: 2,
    sala: "Sala 05 - Massoterapia",
    data: "2026-01-28",
    horarios: ["14:00", "15:00"],
    status: "confirmada",
    valor: 90,
  },
  {
    id: 3,
    sala: "Sala 01 - Estética",
    data: "2026-02-01",
    horarios: ["08:00", "09:00", "10:00", "11:00"],
    status: "pendente",
    valor: 200,
  },
];

const historicoReservas: Reserva[] = [
  {
    id: 4,
    sala: "Sala 07 - Consultório",
    data: "2026-01-15",
    horarios: ["16:00", "17:00"],
    status: "confirmada",
    valor: 80,
  },
  {
    id: 5,
    sala: "Sala 03 - Fisioterapia",
    data: "2026-01-10",
    horarios: ["09:00", "10:00", "11:00"],
    status: "confirmada",
    valor: 165,
  },
  {
    id: 6,
    sala: "Sala 05 - Massoterapia",
    data: "2026-01-05",
    horarios: ["14:00"],
    status: "cancelada",
    valor: 45,
  },
];

export default function MinhasReservasPage() {
  const [reservas, setReservas] = useState<Reserva[]>(reservasIniciais);
  const [reservaParaCancelar, setReservaParaCancelar] = useState<Reserva | null>(null);

  const formatarData = (dataStr: string) => {
    const data = new Date(dataStr + "T12:00:00");
    return data.toLocaleDateString("pt-BR", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  const handleCancelar = () => {
    if (reservaParaCancelar) {
      setReservas(reservas.filter((r) => r.id !== reservaParaCancelar.id));
      toast.success("Reserva cancelada com sucesso.");
      setReservaParaCancelar(null);
    }
  };

  const getStatusBadge = (status: Reserva["status"]) => {
    switch (status) {
      case "confirmada":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Confirmada</Badge>;
      case "pendente":
        return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Pendente</Badge>;
      case "cancelada":
        return <Badge className="bg-slate-100 text-slate-500 hover:bg-slate-100">Cancelada</Badge>;
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-slate-900">Minhas Reservas</h1>
            <p className="text-slate-600">Gerencie suas reservas de salas</p>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/locatario/reservas">
              <Plus className="w-4 h-4 mr-2" />
              Nova Reserva
            </Link>
          </Button>
        </div>

        {/* Próximas Reservas */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Próximas Reservas
            </CardTitle>
          </CardHeader>
          <CardContent>
            {reservas.length > 0 ? (
              <div className="space-y-4">
                {reservas.map((reserva) => (
                  <div
                    key={reserva.id}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{reserva.sala}</h3>
                        <div className="flex items-center gap-4 mt-1 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatarData(reserva.data)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {reserva.horarios.join(", ")}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {getStatusBadge(reserva.status)}
                      <span className="font-semibold text-slate-900">
                        R$ {reserva.valor},00
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-600 hover:bg-red-50"
                        onClick={() => setReservaParaCancelar(reserva)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">
                  Nenhuma reserva agendada
                </h3>
                <p className="text-slate-600 mb-6">
                  Você ainda não tem reservas futuras. Que tal fazer uma agora?
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link to="/locatario/reservas">Fazer Reserva</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Histórico */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-slate-400" />
              Histórico de Reservas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {historicoReservas.map((reserva) => (
                <div
                  key={reserva.id}
                  className={`flex items-center justify-between p-4 rounded-xl ${
                    reserva.status === "cancelada" ? "bg-slate-50/50 opacity-60" : "bg-slate-50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-slate-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{reserva.sala}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatarData(reserva.data)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {reserva.horarios.join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {getStatusBadge(reserva.status)}
                    <span className="font-semibold text-slate-900">
                      R$ {reserva.valor},00
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cancel Dialog */}
      <Dialog open={!!reservaParaCancelar} onOpenChange={() => setReservaParaCancelar(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Cancelar Reserva
            </DialogTitle>
            <DialogDescription>
              Tem certeza que deseja cancelar esta reserva?
            </DialogDescription>
          </DialogHeader>

          {reservaParaCancelar && (
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="font-medium">{reservaParaCancelar.sala}</p>
              <p className="text-sm text-slate-600">
                {formatarData(reservaParaCancelar.data)} - {reservaParaCancelar.horarios.join(", ")}
              </p>
              <p className="text-primary font-semibold mt-2">
                Valor: R$ {reservaParaCancelar.valor},00
              </p>
            </div>
          )}

          <p className="text-sm text-slate-600">
            O valor pago será estornado em até 7 dias úteis, conforme nossa política de cancelamento.
          </p>

          <DialogFooter>
            <Button variant="outline" onClick={() => setReservaParaCancelar(null)}>
              Voltar
            </Button>
            <Button variant="destructive" onClick={handleCancelar}>
              Confirmar Cancelamento
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
