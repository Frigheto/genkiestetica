import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSalaAvailability } from '../../hooks/useSalaAvailability';
import { TimeSlotSelector } from './TimeSlotSelector';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { toast } from 'sonner';

const locales = {
  'pt-BR': ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface SalaCalendarProps {
  salaId: string;
  salaName: string;
}

export function SalaCalendar({ salaId, salaName }: SalaCalendarProps) {
  const {
    availability,
    setBlockedTimeSlots,
    toggleBlockDate,
    isTimeSlotBlocked,
    isDayEnabled,
  } = useSalaAvailability(salaId);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showTimeSlotModal, setShowTimeSlotModal] = useState(false);

  /**
   * Handle clique em um dia do calendário
   */
  const handleSelectSlot = ({ start }: { start: Date; end: Date }) => {
    setSelectedDate(start);
    setShowTimeSlotModal(true);
  };

  /**
   * Salvar horários bloqueados
   */
  const handleSaveTimeSlots = (slots: string[]) => {
    if (!selectedDate) return;

    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    setBlockedTimeSlots(dateStr, slots);

    if (slots.length === 0) {
      toast.success('Todos os horários foram liberados');
    } else {
      toast.success(`${slots.length} horário(s) bloqueado(s)`);
    }
  };

  /**
   * Customiza aparência dos dias no calendário
   */
  const dayPropGetter = (date: Date) => {
    const dayOfWeek = getDay(date);
    const dateStr = format(date, 'yyyy-MM-dd');
    const dayEnabled = isDayEnabled(dayOfWeek);

    // Dia desabilitado no horário semanal
    if (!dayEnabled) {
      return {
        className: 'rbc-day-disabled',
        style: {
          backgroundColor: '#f3f4f6',
          color: '#9ca3af',
        },
      };
    }

    // Dia completamente bloqueado
    if (availability.blockedDates.includes(dateStr)) {
      return {
        className: 'rbc-day-blocked',
        style: {
          backgroundColor: '#fee2e2',
          color: '#dc2626',
        },
      };
    }

    // Dia com alguns horários bloqueados
    const blockedSlots = availability.blockedTimeSlots[dateStr] || [];
    if (blockedSlots.length > 0) {
      return {
        className: 'rbc-day-partial',
        style: {
          backgroundColor: '#fef3c7',
          color: '#d97706',
        },
      };
    }

    // Dia disponível
    return {
      className: 'rbc-day-available',
      style: {
        backgroundColor: '#d1fae5',
        color: '#065f46',
      },
    };
  };

  /**
   * Pega os horários bloqueados do dia selecionado
   */
  const getBlockedSlotsForSelectedDate = (): string[] => {
    if (!selectedDate) return [];
    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    return availability.blockedTimeSlots[dateStr] || [];
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendário de Disponibilidade</CardTitle>
        <CardDescription>
          Clique em um dia para gerenciar os horários disponíveis
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Legenda */}
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#d1fae5] border"></div>
            <span>Disponível</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#fef3c7] border"></div>
            <span>Parcialmente bloqueado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#fee2e2] border"></div>
            <span>Completamente bloqueado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#f3f4f6] border"></div>
            <span>Fechado (horário semanal)</span>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 bg-accent rounded-lg">
            <p className="text-xs text-muted-foreground">Dias bloqueados</p>
            <p className="text-2xl font-bold text-genki-forest">
              {availability.blockedDates.length}
            </p>
          </div>
          <div className="p-3 bg-accent rounded-lg">
            <p className="text-xs text-muted-foreground">Dias com restrições</p>
            <p className="text-2xl font-bold text-amber-600">
              {Object.keys(availability.blockedTimeSlots).length}
            </p>
          </div>
        </div>

        {/* Calendário */}
        <div className="calendar-container" style={{ height: 600 }}>
          <Calendar
            localizer={localizer}
            events={[]}
            startAccessor="start"
            endAccessor="end"
            culture="pt-BR"
            views={['month']}
            defaultView="month"
            selectable
            onSelectSlot={handleSelectSlot}
            dayPropGetter={dayPropGetter}
            messages={{
              next: 'Próximo',
              previous: 'Anterior',
              today: 'Hoje',
              month: 'Mês',
              week: 'Semana',
              day: 'Dia',
            }}
          />
        </div>

        {/* Modal de seleção de horários */}
        {selectedDate && (
          <TimeSlotSelector
            open={showTimeSlotModal}
            onOpenChange={setShowTimeSlotModal}
            date={selectedDate}
            salaName={salaName}
            blockedSlots={getBlockedSlotsForSelectedDate()}
            onSave={handleSaveTimeSlots}
          />
        )}

        {/* Instruções */}
        <div className="p-4 bg-genki-mint/10 rounded-lg border border-genki-mint/20">
          <p className="text-sm text-genki-forest font-medium mb-2">💡 Como usar:</p>
          <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
            <li>Clique em um dia para gerenciar os horários específicos</li>
            <li>Dias em verde estão totalmente disponíveis</li>
            <li>Dias em amarelo têm alguns horários bloqueados</li>
            <li>Dias em vermelho estão completamente bloqueados</li>
            <li>Dias em cinza estão fechados no horário semanal</li>
          </ul>
        </div>
      </CardContent>

      <style>{`
        .calendar-container .rbc-calendar {
          font-family: inherit;
        }
        .calendar-container .rbc-header {
          padding: 10px 3px;
          font-weight: 600;
          border-bottom: 2px solid #e5e7eb;
        }
        .calendar-container .rbc-date-cell {
          padding: 5px;
        }
        .calendar-container .rbc-today {
          background-color: transparent;
        }
        .calendar-container .rbc-off-range-bg {
          background-color: #fafafa;
        }
        .calendar-container .rbc-day-bg {
          cursor: pointer;
          transition: transform 0.1s;
        }
        .calendar-container .rbc-day-bg:hover {
          transform: scale(1.02);
          box-shadow: inset 0 0 0 2px #065f46;
        }
      `}</style>
    </Card>
  );
}
