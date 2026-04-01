import { createContext, useContext, useState, useEffect } from 'react';
import { Servico } from '@/types/servicos';
import { servicosData as servicosDefault } from '@/data/servicosData';
import { supabase } from '@/lib/supabase';

interface ServicosContextType {
  servicos: Servico[];
  atualizarServico: (id: string, dados: Partial<Servico>) => Promise<void>;
  carregarServicos: () => void;
}

const ServicosContext = createContext<ServicosContextType | undefined>(undefined);

function rowParaServico(row: Record<string, unknown>): Servico {
  return {
    id: row.id as string,
    nome: row.nome as string,
    titulo: (row.titulo as string) ?? '',
    descricao: (row.descricao as string) ?? '',
    heroImage: (row.hero_image as string) ?? '',
    icon: (row.icon as string) ?? '',
    color: (row.color as string) ?? '',
    fotos: (row.fotos as Servico['fotos']) ?? [],
    videoUrl: (row.video_url as string) ?? undefined,
    videoTitulo: (row.video_titulo as string) ?? undefined,
    updatedAt: new Date((row.updated_at as string) ?? Date.now()),
  };
}

function servicoParaRow(s: Servico) {
  return {
    id: s.id,
    nome: s.nome,
    titulo: s.titulo,
    descricao: s.descricao,
    hero_image: s.heroImage,
    icon: s.icon,
    color: s.color,
    fotos: s.fotos,
    video_url: s.videoUrl ?? null,
    video_titulo: s.videoTitulo ?? null,
    updated_at: new Date().toISOString(),
  };
}

export function ServicosProvider({ children }: { children: React.ReactNode }) {
  const [servicos, setServicos] = useState<Servico[]>(servicosDefault);

  useEffect(() => {
    carregarServicos();
  }, []);

  const carregarServicos = async () => {
    try {
      const { data, error } = await supabase
        .from('servicos')
        .select('*')
        .order('id');

      if (error) throw error;

      if (!data || data.length === 0) {
        // Primeira vez: insere dados padrão sem sobrescrever se já existir
        const { error: seedError } = await supabase
          .from('servicos')
          .upsert(servicosDefault.map(servicoParaRow), { onConflict: 'id', ignoreDuplicates: true });
        if (seedError) console.error('Erro ao popular serviços:', seedError);
        setServicos(servicosDefault);
      } else {
        setServicos(data.map(rowParaServico));
      }
    } catch (error) {
      console.error('Erro ao carregar serviços do Supabase:', error);
      // Fallback: dados padrão do código
    }
  };

  const atualizarServico = async (id: string, dados: Partial<Servico>) => {
    const servicoIndex = servicos.findIndex((s) => s.id === id);
    if (servicoIndex === -1) return;

    const servicosAtualizados = [...servicos];
    servicosAtualizados[servicoIndex] = {
      ...servicosAtualizados[servicoIndex],
      ...dados,
      updatedAt: new Date(),
    };
    setServicos(servicosAtualizados);

    const row = servicoParaRow(servicosAtualizados[servicoIndex]);
    const { id: rowId, ...rowSemId } = row;

    const { error } = await supabase
      .from('servicos')
      .update(rowSemId)
      .eq('id', rowId);

    if (error) {
      console.error('Erro ao salvar serviço no Supabase:', error);
      throw new Error(error.message);
    }
  };

  return (
    <ServicosContext.Provider value={{ servicos, atualizarServico, carregarServicos }}>
      {children}
    </ServicosContext.Provider>
  );
}

export function useServicos() {
  const context = useContext(ServicosContext);
  if (!context) {
    throw new Error('useServicos deve ser usado dentro de ServicosProvider');
  }
  return context;
}
