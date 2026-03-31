import { WeeklySchedule, DaySchedule } from '../../types';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

interface WeeklyScheduleEditorProps {
  schedule: WeeklySchedule;
  onChange: (schedule: WeeklySchedule) => void;
}

const DAYS = [
  { key: 'monday', label: 'Segunda-feira' },
  { key: 'tuesday', label: 'Terça-feira' },
  { key: 'wednesday', label: 'Quarta-feira' },
  { key: 'thursday', label: 'Quinta-feira' },
  { key: 'friday', label: 'Sexta-feira' },
  { key: 'saturday', label: 'Sábado' },
  { key: 'sunday', label: 'Domingo' },
] as const;

export function WeeklyScheduleEditor({ schedule, onChange }: WeeklyScheduleEditorProps) {
  const handleDayChange = (dayKey: keyof WeeklySchedule, field: keyof DaySchedule, value: any) => {
    onChange({
      ...schedule,
      [dayKey]: {
        ...schedule[dayKey],
        [field]: value,
      },
    });
  };

  const handleToggleDay = (dayKey: keyof WeeklySchedule, checked: boolean) => {
    handleDayChange(dayKey, 'enabled', checked);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Horário Semanal Padrão</CardTitle>
        <CardDescription>
          Defina o horário de funcionamento padrão para cada dia da semana
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {DAYS.map(({ key, label }) => {
            const daySchedule = schedule[key];
            return (
              <div
                key={key}
                className="flex items-center gap-4 p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
              >
                {/* Checkbox para habilitar/desabilitar */}
                <div className="flex items-center space-x-2 min-w-[140px]">
                  <Checkbox
                    id={`day-${key}`}
                    checked={daySchedule.enabled}
                    onCheckedChange={(checked) => handleToggleDay(key, checked as boolean)}
                  />
                  <Label
                    htmlFor={`day-${key}`}
                    className={`font-medium cursor-pointer ${
                      !daySchedule.enabled ? 'text-muted-foreground line-through' : ''
                    }`}
                  >
                    {label}
                  </Label>
                </div>

                {/* Horários */}
                {daySchedule.enabled ? (
                  <div className="flex items-center gap-2 flex-1">
                    <div className="flex items-center gap-2">
                      <Label htmlFor={`${key}-start`} className="text-sm text-muted-foreground">
                        De:
                      </Label>
                      <Input
                        id={`${key}-start`}
                        type="time"
                        value={daySchedule.start}
                        onChange={(e) => handleDayChange(key, 'start', e.target.value)}
                        className="w-[120px]"
                      />
                    </div>

                    <span className="text-muted-foreground">-</span>

                    <div className="flex items-center gap-2">
                      <Label htmlFor={`${key}-end`} className="text-sm text-muted-foreground">
                        Até:
                      </Label>
                      <Input
                        id={`${key}-end`}
                        type="time"
                        value={daySchedule.end}
                        onChange={(e) => handleDayChange(key, 'end', e.target.value)}
                        className="w-[120px]"
                      />
                    </div>
                  </div>
                ) : (
                  <span className="text-sm text-muted-foreground italic">Fechado</span>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-genki-mint/10 rounded-lg border border-genki-mint/20">
          <p className="text-sm text-genki-forest font-medium mb-2">💡 Dica:</p>
          <p className="text-xs text-muted-foreground">
            Este horário será aplicado como padrão para todos os dias. Você pode bloquear horários
            específicos no calendário abaixo.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
