import { createContext, useContext, useState, useEffect } from 'react';
import { Sala } from '@/types';
import { salas as salasDefault } from '@/data/salasData';

interface SalasContextType {
  salas: Sala[];
  atualizarSala: (id: string, dados: Partial<Sala>) => void;
  carregarSalas: () => void;
}

const SalasContext = createContext<SalasContextType | undefined>(undefined);

export function SalasProvider({ children }: { children: React.ReactNode }) {
  const [salas, setSalas] = useState<Sala[]>(salasDefault);

  // Carregar salas do localStorage ao montar
  useEffect(() => {
    carregarSalas();
  }, []);

  const carregarSalas = () => {
    try {
      const salasArmazenadas = localStorage.getItem('adminSalas');
      if (salasArmazenadas) {
        const parsed = JSON.parse(salasArmazenadas);
        setSalas(parsed);
      } else {
        setSalas(salasDefault);
      }
    } catch (error) {
      console.error('Erro ao carregar salas do localStorage:', error);
      setSalas(salasDefault);
    }
  };

  const atualizarSala = (id: string, dados: Partial<Sala>) => {
    const salaIndex = salas.findIndex((s) => s.id === id);
    if (salaIndex === -1) return;

    const salasAtualizadas = [...salas];
    salasAtualizadas[salaIndex] = {
      ...salasAtualizadas[salaIndex],
      ...dados,
      updatedAt: new Date(),
    };

    setSalas(salasAtualizadas);
    localStorage.setItem('adminSalas', JSON.stringify(salasAtualizadas));
  };

  return (
    <SalasContext.Provider value={{ salas, atualizarSala, carregarSalas }}>
      {children}
    </SalasContext.Provider>
  );
}

export function useSalas() {
  const context = useContext(SalasContext);
  if (!context) {
    throw new Error('useSalas deve ser usado dentro de SalasProvider');
  }
  return context;
}
