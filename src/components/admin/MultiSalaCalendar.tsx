import { useState } from 'react';
import { Calendar, dateFnsLocalizer, View, Views } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay, addHours, startOfDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { salas } from '@/data/salasData';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { SalaAvailability, WeeklySchedule } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { Info, Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "../ui/dialog";

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

export function MultiSalaCalendar() {
    const [view, setView] = useState<View>(Views.MONTH);
    const [date, setDate] = useState(new Date());
    const [selectedEvent, setSelectedEvent] = useState<any>(null);

    // Pegamos todas as disponibilidades do localStorage
    const [allAvailability] = useLocalStorage<Record<string, SalaAvailability>>(
        'salaAvailability',
        {}
    );

    /**
     * Transforma os dados de disponibilidade em "eventos" para o calendário
     */
    const events = salas.flatMap((sala) => {
        const availability = allAvailability[sala.id];
        if (!availability) return [];

        const roomEvents: any[] = [];

        // 1. Dias bloqueados completamente
        availability.blockedDates.forEach((dateStr) => {
            const blockedDate = parse(dateStr, 'yyyy-MM-dd', new Date());
            roomEvents.push({
                id: `blocked-${sala.id}-${dateStr}`,
                title: `Indisponível: ${sala.nome}`,
                start: startOfDay(blockedDate),
                end: addHours(startOfDay(blockedDate), 23),
                allDay: true,
                resourceId: sala.id,
                status: 'blocked',
                salaNome: sala.nome,
            });
        });

        // 2. Horários bloqueados específicos
        Object.entries(availability.blockedTimeSlots).forEach(([dateStr, slots]) => {
            slots.forEach((time) => {
                const [hours, minutes] = time.split(':').map(Number);
                const startTime = parse(dateStr, 'yyyy-MM-dd', new Date());
                startTime.setHours(hours, minutes);

                roomEvents.push({
                    id: `slot-${sala.id}-${dateStr}-${time}`,
                    title: `Bloqueado: ${sala.nome}`,
                    start: startTime,
                    end: addHours(startTime, 1),
                    resourceId: sala.id,
                    status: 'partial',
                    salaNome: sala.nome,
                });
            });
        });

        return roomEvents;
    });

    /**
     * Customiza a aparência dos eventos
     */
    const eventPropGetter = (event: any) => {
        let backgroundColor = '#14b8a6'; // Teal-500 (Genki)
        let borderColor = '#0d9488';

        if (event.status === 'blocked') {
            backgroundColor = '#ef4444'; // Red-500
            borderColor = '#dc2626';
        } else if (event.status === 'partial') {
            backgroundColor = '#f59e0b'; // Amber-500
            borderColor = '#d97706';
        }

        return {
            style: {
                backgroundColor,
                borderColor,
                color: 'white',
                fontSize: '12px',
                borderRadius: '4px',
            },
        };
    };

    /**
     * Customiza os dias (background)
     */
    const dayPropGetter = (date: Date) => {
        const today = new Date();
        const isToday = format(date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd');

        if (isToday) {
            return {
                style: {
                    backgroundColor: 'rgba(20, 184, 166, 0.05)',
                },
            };
        }
        return {};
    };

    return (
        <Card className="border-none shadow-xl bg-white/80 backdrop-blur-md overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-genki-forest to-genki-mint p-6 text-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <CardTitle className="text-2xl font-serif">Disponibilidade Global</CardTitle>
                        <CardDescription className="text-white/80">
                            Visualize a ocupação de todas as salas da clínica
                        </CardDescription>
                    </div>
                    <div className="flex gap-2">
                        <Badge variant="outline" className="bg-white/20 text-white border-white/40">
                            {salas.length} Salas Ativas
                        </Badge>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="p-4 flex flex-wrap gap-4 bg-gray-50 border-b text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span>Bloqueio Total</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <span>Bloqueio Parcial</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                        <Info size={14} />
                        <span>As informações são baseadas nas configurações individuais de cada sala.</span>
                    </div>
                </div>

                <div className="h-[600px] p-4 calendar-modern">
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        culture="pt-BR"
                        views={[Views.MONTH, Views.WEEK, Views.DAY]}
                        view={view}
                        onView={setView}
                        date={date}
                        onNavigate={setDate}
                        eventPropGetter={eventPropGetter}
                        dayPropGetter={dayPropGetter}
                        onSelectEvent={(event) => setSelectedEvent(event)}
                        messages={{
                            next: 'Próximo',
                            previous: 'Anterior',
                            today: 'Hoje',
                            month: 'Mês',
                            week: 'Semana',
                            day: 'Dia',
                            agenda: 'Agenda',
                            allDay: 'Dia Inteiro',
                        }}
                    />
                </div>
            </CardContent>

            {/* Modal de Detalhes do Evento */}
            <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
                <DialogContent className="sm:max-w-md border-none shadow-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-serif flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${selectedEvent?.status === 'blocked' ? 'bg-red-500' : 'bg-amber-500'}`} />
                            Detalhes do Bloqueio
                        </DialogTitle>
                        <DialogDescription>
                            Informações sobre a indisponibilidade da sala
                        </DialogDescription>
                    </DialogHeader>

                    {selectedEvent && (
                        <div className="space-y-6 pt-4">
                            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <div className="w-12 h-12 bg-genki-forest/10 rounded-full flex items-center justify-center text-genki-forest">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Sala / Unidade</p>
                                    <p className="font-bold text-gray-900 text-lg">{selectedEvent.salaNome}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <CalendarIcon size={14} />
                                        <span>Data</span>
                                    </div>
                                    <p className="font-medium">{format(selectedEvent.start, "dd 'de' MMMM, yyyy", { locale: ptBR })}</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <Clock size={14} />
                                        <span>Horário</span>
                                    </div>
                                    <p className="font-medium">
                                        {selectedEvent.allDay ? "Dia Inteiro" : `${format(selectedEvent.start, 'HH:mm')} - ${format(selectedEvent.end, 'HH:mm')}`}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl">
                                <p className="text-sm text-amber-900 leading-relaxed font-medium">
                                    {selectedEvent.status === 'blocked'
                                        ? "Esta sala está marcada como indisponível para o dia inteiro nesta data."
                                        : "Esta janela de horário foi bloqueada manualmente nas configurações da sala."}
                                </p>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            <style>{`
        .calendar-modern .rbc-calendar {
          font-family: inherit;
        }
        .calendar-modern .rbc-header {
          padding: 12px 3px;
          font-weight: 600;
          color: #4b5563;
          border-bottom: 2px solid #f3f4f6;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }
        .calendar-modern .rbc-month-view {
          border-radius: 8px;
          border: 1px solid #f3f4f6;
        }
        .calendar-modern .rbc-day-bg {
          transition: background-color 0.2s;
        }
        .calendar-modern .rbc-day-bg:hover {
          background-color: #f9fafb;
        }
        .calendar-modern .rbc-off-range-bg {
          background-color: #fcfcfc;
        }
        .calendar-modern .rbc-today {
          background-color: transparent;
        }
        .calendar-modern .rbc-event {
          padding: 4px 8px;
          border-radius: 4px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
          transition: transform 0.1s;
        }
        .calendar-modern .rbc-event:hover {
          transform: translateY(-1px);
          filter: brightness(1.05);
        }
        .calendar-modern .rbc-toolbar button {
          color: #4b5563;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          font-weight: 500;
          transition: all 0.2s;
        }
        .calendar-modern .rbc-toolbar button:hover {
          background-color: #f3f4f6;
          color: #111827;
        }
        .calendar-modern .rbc-toolbar button.rbc-active {
          background-color: #14b8a6;
          color: white;
          border-color: #14b8a6;
          box-shadow: 0 2px 4px rgba(20, 184, 166, 0.2);
        }
      `}</style>
        </Card>
    );
}
