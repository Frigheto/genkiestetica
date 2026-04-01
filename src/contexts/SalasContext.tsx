import { createContext, useContext, useState, useEffect } from 'react';
import { Sala } from '@/types';
import { salas as salasDefault } from '@/data/salasData';
import { supabase } from '@/lib/supabase';

interface SalasContextType {
  salas: Sala[];
  atualizarSala: (id: string, dados: Partial<Sala>) => void;
  carregarSalas: () => void;
}

const SalasContext = createContext<SalasContextType | undefined>(undefined);

function rowParaSala(row: Record<string, unknown>): Sala {
  return {
    id: row.id as string,
    nome: row.nome as string,
    descricao: (row.descricao as string) ?? '',
    area: (row.area as string) ?? '',
    preco: (row.preco as number) ?? 0,
    ativo: (row.ativo as boolean) ?? true,
    equipamentos: (row.equipamentos as string[]) ?? [],
    fotos: (row.fotos as Sala['fotos']) ?? [],
    video: (row.video as Sala['video']) ?? undefined,
    createdAt: new Date((row.created_at as string) ?? Date.now()),
    updatedAt: new Date((row.updated_at as string) ?? Date.now()),
  };
}

function salaParaRow(s: Sala) {
  return {
    id: s.id,
    nome: s.nome,
    descricao: s.descricao,
    area: s.area,
    preco: s.preco,
    ativo: s.ativo,
    equipamentos: s.equipamentos,
    fotos: s.fotos,
    video: s.video ?? null,
    updated_at: new Date().toISOString(),
  };
}

export function SalasProvider({ children }: { children: React.ReactNode }) {
  const [salas, setSalas] = useState<Sala[]>(salasDefault);

  useEffect(() => {
    carregarSalas();
  }, []);

  const carregarSalas = async () => {
    try {
      const { data, error } = await supabase
        .from('salas')
        .select('*')
        .order('id');

      if (error) throw error;

      if (!data || data.length === 0) {
        // Primeira vez: insere dados padrão
        const { error: seedError } = await supabase
          .from('salas')
          .upsert(salasDefault.map(salaParaRow), { onConflict: 'id', ignoreDuplicates: true });
        if (seedError) console.error('Erro ao popular salas:', seedError);
        setSalas(salasDefault);
      } else {
        setSalas(data.map(rowParaSala));
      }
    } catch (error) {
      console.error('Erro ao carregar salas do Supabase:', error);
      // Fallback: dados padrão do código
    }
  };

  const atualizarSala = async (id: string, dados: Partial<Sala>) => {
    const salaIndex = salas.findIndex((s) => s.id === id);
    if (salaIndex === -1) return;

    const salasAtualizadas = [...salas];
    salasAtualizadas[salaIndex] = {
      ...salasAtualizadas[salaIndex],
      ...dados,
      updatedAt: new Date(),
    };
    setSalas(salasAtualizadas);

    const { error } = await supabase
      .from('salas')
      .upsert(salaParaRow(salasAtualizadas[salaIndex]));

    if (error) console.error('Erro ao salvar sala no Supabase:', error);
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
