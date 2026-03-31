import { useLocalStorage } from './useLocalStorage';
import { SalaAvailability, WeeklySchedule, DaySchedule } from '../types';

/**
 * Horário padrão para novas salas
 */
const DEFAULT_DAY_SCHEDULE: DaySchedule = {
  enabled: true,
  start: '08:00',
  end: '20:00',
};

const DEFAULT_WEEKLY_SCHEDULE: WeeklySchedule = {
  monday: DEFAULT_DAY_SCHEDULE,
  tuesday: DEFAULT_DAY_SCHEDULE,
  wednesday: DEFAULT_DAY_SCHEDULE,
  thursday: DEFAULT_DAY_SCHEDULE,
  friday: DEFAULT_DAY_SCHEDULE,
  saturday: { enabled: true, start: '08:00', end: '14:00' },
  sunday: { enabled: false, start: '08:00', end: '20:00' },
};

/**
 * Hook para gerenciar disponibilidade de salas no localStorage
 */
export function useSalaAvailability(salaId: string) {
  // Estrutura: { [salaId]: SalaAvailability }
  const [allAvailability, setAllAvailability] = useLocalStorage<Record<string, SalaAvailability>>(
    'salaAvailability',
    {}
  );

  // Disponibilidade da sala específica
  const availability: SalaAvailability = allAvailability[salaId] || {
    blockedDates: [],
    blockedTimeSlots: {},
    weeklySchedule: DEFAULT_WEEKLY_SCHEDULE,
  };

  /**
   * Atualiza a disponibilidade da sala
   */
  const setAvailability = (newAvailability: SalaAvailability) => {
    setAllAvailability({
      ...allAvailability,
      [salaId]: newAvailability,
    });
  };

  /**
   * Bloqueia/desbloqueia um dia inteiro
   */
  const toggleBlockDate = (date: string) => {
    const blockedDates = availability.blockedDates.includes(date)
      ? availability.blockedDates.filter((d) => d !== date)
      : [...availability.blockedDates, date];

    setAvailability({
      ...availability,
      blockedDates,
    });
  };

  /**
   * Bloqueia/desbloqueia horários específicos de um dia
   */
  const setBlockedTimeSlots = (date: string, slots: string[]) => {
    const blockedTimeSlots = { ...availability.blockedTimeSlots };

    if (slots.length === 0) {
      // Se não há slots bloqueados, remove a entrada
      delete blockedTimeSlots[date];
    } else {
      blockedTimeSlots[date] = slots;
    }

    setAvailability({
      ...availability,
      blockedTimeSlots,
    });
  };

  /**
   * Atualiza horário semanal padrão
   */
  const setWeeklySchedule = (schedule: WeeklySchedule) => {
    setAvailability({
      ...availability,
      weeklySchedule: schedule,
    });
  };

  /**
   * Atualiza horário de um dia específico da semana
   */
  const setDaySchedule = (day: keyof WeeklySchedule, schedule: DaySchedule) => {
    setAvailability({
      ...availability,
      weeklySchedule: {
        ...availability.weeklySchedule,
        [day]: schedule,
      },
    });
  };

  /**
   * Verifica se um horário específico está bloqueado
   */
  const isTimeSlotBlocked = (date: string, time: string): boolean => {
    // Dia inteiro bloqueado?
    if (availability.blockedDates.includes(date)) return true;

    // Horário específico bloqueado?
    const daySlots = availability.blockedTimeSlots[date] || [];
    return daySlots.includes(time);
  };

  /**
   * Verifica se um dia está habilitado no horário semanal
   */
  const isDayEnabled = (dayOfWeek: number): boolean => {
    const days: (keyof WeeklySchedule)[] = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ];
    const dayKey = days[dayOfWeek];
    return availability.weeklySchedule[dayKey].enabled;
  };

  /**
   * Pega o horário de funcionamento de um dia da semana
   */
  const getDaySchedule = (dayOfWeek: number): DaySchedule => {
    const days: (keyof WeeklySchedule)[] = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ];
    const dayKey = days[dayOfWeek];
    return availability.weeklySchedule[dayKey];
  };

  return {
    availability,
    setAvailability,
    toggleBlockDate,
    setBlockedTimeSlots,
    setWeeklySchedule,
    setDaySchedule,
    isTimeSlotBlocked,
    isDayEnabled,
    getDaySchedule,
  };
}
