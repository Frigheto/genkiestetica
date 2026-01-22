import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Building2, Clock, CreditCard, Calendar as CalendarIcon, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const salas = [
  { id: 1, nome: "Sala 01 - Estética", area: "18m²", preco: 50 },
  { id: 2, nome: "Sala 02 - Estética", area: "15m²", preco: 50 },
  { id: 3, nome: "Sala 03 - Fisioterapia", area: "20m²", preco: 55 },
  { id: 4, nome: "Sala 04 - Fisioterapia", area: "25m²", preco: 60 },
  { id: 5, nome: "Sala 05 - Massoterapia", area: "16m²", preco: 45 },
  { id: 6, nome: "Sala 06 - Massoterapia", area: "16m²", preco: 45 },
  { id: 7, nome: "Sala 07 - Consultório", area: "14m²", preco: 40 },
  { id: 8, nome: "Sala 08 - Consultório", area: "12m²", preco: 40 },
  { id: 9, nome: "Sala 09 - Multiuso", area: "18m²", preco: 50 },
  { id: 10, nome: "Sala 10 - Premium", area: "30m²", preco: 80 },
];

const horariosDisponiveis = [
  "07:00", "08:00", "09:00", "10:00", "11:00",
  "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
];

export default function PainelReservasPage() {
  const [selectedSala, setSelectedSala] = useState<typeof salas[0] | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedHorarios, setSelectedHorarios] = useState<string[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSalaSelect = (sala: typeof salas[0]) => {
    setSelectedSala(sala);
    setSelectedDate(undefined);
    setSelectedHorarios([]);
  };

  const handleHorarioToggle = (horario: string) => {
    if (selectedHorarios.includes(horario)) {
      setSelectedHorarios(selectedHorarios.filter(h => h !== horario));
    } else {
      setSelectedHorarios([...selectedHorarios, horario].sort());
    }
  };

  const calcularTotal = () => {
    if (!selectedSala) return 0;
    return selectedSala.preco * selectedHorarios.length;
  };

  const handleReservar = () => {
    if (!selectedDate || selectedHorarios.length === 0) {
      toast.error("Selecione data e horários para continuar.");
      return;
    }
    setShowCheckout(true);
  };

  const handleConfirmarPagamento = () => {
    setShowCheckout(false);
    setShowConfirmation(true);

    // Reset selections
    setTimeout(() => {
      setSelectedSala(null);
      setSelectedDate(undefined);
      setSelectedHorarios([]);
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-slate-900">Painel de Reservas</h1>
            <p className="text-slate-600">Escolha uma sala e reserve seu horário</p>
          </div>
          <Button asChild variant="outline">
            <Link to="/locatario/minhas-reservas">Minhas Reservas</Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Salas */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Selecione uma Sala
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {salas.map((sala) => (
                    <button
                      key={sala.id}
                      onClick={() => handleSalaSelect(sala)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        selectedSala?.id === sala.id
                          ? "border-primary bg-primary/5"
                          : "border-slate-200 hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-slate-900">{sala.nome}</h3>
                          <p className="text-sm text-slate-500">{sala.area}</p>
                        </div>
                        <Badge variant="secondary">R$ {sala.preco}/h</Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Calendário e Horários */}
            {selectedSala && (
              <Card className="border-0 shadow-lg mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-primary" />
                    Escolha Data e Horários
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-4">Data</h4>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        className="rounded-lg border"
                      />
                    </div>

                    {selectedDate && (
                      <div>
                        <h4 className="font-medium text-slate-900 mb-4">
                          Horários Disponíveis - {selectedDate.toLocaleDateString("pt-BR")}
                        </h4>
                        <div className="grid grid-cols-3 gap-2">
                          {horariosDisponiveis.map((horario) => {
                            const isSelected = selectedHorarios.includes(horario);
                            // Simular alguns horários ocupados
                            const isOcupado = ["09:00", "14:00", "15:00"].includes(horario);

                            return (
                              <button
                                key={horario}
                                onClick={() => !isOcupado && handleHorarioToggle(horario)}
                                disabled={isOcupado}
                                className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                                  isOcupado
                                    ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                                    : isSelected
                                    ? "bg-primary text-white"
                                    : "bg-slate-100 text-slate-700 hover:bg-primary/10"
                                }`}
                              >
                                {horario}
                              </button>
                            );
                          })}
                        </div>
                        <p className="text-xs text-slate-500 mt-4">
                          * Horários em cinza estão ocupados
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Resumo */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg sticky top-24">
              <CardHeader>
                <CardTitle>Resumo da Reserva</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedSala ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <h4 className="font-semibold text-slate-900">{selectedSala.nome}</h4>
                      <p className="text-sm text-slate-500">{selectedSala.area}</p>
                    </div>

                    {selectedDate && (
                      <div className="flex items-center gap-2 text-slate-700">
                        <CalendarIcon className="w-4 h-4 text-primary" />
                        <span>{selectedDate.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}</span>
                      </div>
                    )}

                    {selectedHorarios.length > 0 && (
                      <div className="flex items-start gap-2 text-slate-700">
                        <Clock className="w-4 h-4 text-primary mt-1" />
                        <div className="flex flex-wrap gap-1">
                          {selectedHorarios.map((h) => (
                            <Badge key={h} variant="outline">{h}</Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-600">Valor por hora</span>
                        <span>R$ {selectedSala.preco},00</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-600">Horas selecionadas</span>
                        <span>{selectedHorarios.length}</span>
                      </div>
                      <div className="flex justify-between items-center text-lg font-semibold">
                        <span>Total</span>
                        <span className="text-primary">R$ {calcularTotal()},00</span>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={handleReservar}
                      disabled={!selectedDate || selectedHorarios.length === 0}
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Reservar e Pagar
                    </Button>
                  </div>
                ) : (
                  <p className="text-slate-500 text-center py-8">
                    Selecione uma sala para começar
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Checkout Dialog */}
      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Finalizar Pagamento</DialogTitle>
            <DialogDescription>
              Confirme os dados e escolha a forma de pagamento
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="font-medium">{selectedSala?.nome}</p>
              <p className="text-sm text-slate-600">
                {selectedDate?.toLocaleDateString("pt-BR")} - {selectedHorarios.join(", ")}
              </p>
              <p className="text-lg font-semibold text-primary mt-2">
                Total: R$ {calcularTotal()},00
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Forma de Pagamento</label>
              <Select defaultValue="pix">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pix">PIX</SelectItem>
                  <SelectItem value="credit">Cartão de Crédito</SelectItem>
                  <SelectItem value="debit">Cartão de Débito</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90" onClick={handleConfirmarPagamento}>
              Confirmar Pagamento
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Reserva Confirmada!</h3>
            <p className="text-slate-600">
              Sua reserva foi realizada com sucesso. Você receberá um email de confirmação.
            </p>
            <Button
              className="mt-6"
              onClick={() => setShowConfirmation(false)}
            >
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
