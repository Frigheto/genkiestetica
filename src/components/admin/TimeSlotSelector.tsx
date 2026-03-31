import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Clock, CheckCircle2, XCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface TimeSlotSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  date: Date;
  salaName: string;
  blockedSlots: string[];
  onSave: (slots: string[]) => void;
}

// Gera slots de 07:00 até 20:00 (horários de 1h)
const generateTimeSlots = (): string[] => {
  const slots: string[] = [];
  for (let hour = 7; hour <= 20; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
  }
  return slots;
};

const TIME_SLOTS = generateTimeSlots();

export function TimeSlotSelector({
  open,
  onOpenChange,
  date,
  salaName,
  blockedSlots,
  onSave,
}: TimeSlotSelectorProps) {
  const [selectedSlots, setSelectedSlots] = useState<string[]>(blockedSlots);

  // Sincronizar quando blockedSlots mudar
  useEffect(() => {
    setSelectedSlots(blockedSlots);
  }, [blockedSlots]);

  const handleToggleSlot = (time: string) => {
    setSelectedSlots((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  const handleBlockAll = () => {
    setSelectedSlots(TIME_SLOTS);
  };

  const handleUnblockAll = () => {
    setSelectedSlots([]);
  };

  const handleSave = () => {
    onSave(selectedSlots);
    onOpenChange(false);
  };

  const formattedDate = format(date, "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-genki-forest" />
            Gerenciar Horários
          </DialogTitle>
          <DialogDescription className="space-y-1">
            <p className="font-medium text-genki-forest">{salaName}</p>
            <p className="capitalize">{formattedDate}</p>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Ações rápidas */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleBlockAll}
              className="flex-1"
            >
              <XCircle className="h-4 w-4 mr-2" />
              Bloquear Todos
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleUnblockAll}
              className="flex-1"
            >
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Liberar Todos
            </Button>
          </div>

          {/* Grid de horários */}
          <div className="grid grid-cols-4 gap-2">
            {TIME_SLOTS.map((time) => {
              const isBlocked = selectedSlots.includes(time);
              return (
                <button
                  key={time}
                  onClick={() => handleToggleSlot(time)}
                  className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                    isBlocked
                      ? 'border-red-500 bg-red-50 text-red-700 hover:bg-red-100'
                      : 'border-green-500 bg-green-50 text-green-700 hover:bg-green-100'
                  }`}
                >
                  {time}
                  {isBlocked && <XCircle className="h-3 w-3 mx-auto mt-1" />}
                  {!isBlocked && <CheckCircle2 className="h-3 w-3 mx-auto mt-1" />}
                </button>
              );
            })}
          </div>

          {/* Resumo */}
          <div className="p-4 bg-accent rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Horários bloqueados:</span>
              <Badge variant="destructive">{selectedSlots.length}</Badge>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-muted-foreground">Horários disponíveis:</span>
              <Badge variant="default" className="bg-green-600">
                {TIME_SLOTS.length - selectedSlots.length}
              </Badge>
            </div>
          </div>

          {/* Legenda */}
          <div className="flex gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-green-500"></div>
              <span>Disponível</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-red-500"></div>
              <span>Bloqueado</span>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSave} className="bg-genki-forest hover:bg-genki-forest/90">
            Salvar Alterações
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
