import { createContext, useContext, useState, useEffect } from 'react';
import { Servico } from '@/types/servicos';
import { servicosData as servicosDefault } from '@/data/servicosData';

interface ServicosContextType {
  servicos: Servico[];
  atualizarServico: (id: string, dados: Partial<Servico>) => void;
  carregarServicos: () => void;
}

const ServicosContext = createContext<ServicosContextType | undefined>(undefined);

export function ServicosProvider({ children }: { children: React.ReactNode }) {
  const [servicos, setServicos] = useState<Servico[]>(servicosDefault);

  // Carregar serviços do localStorage ao montar
  useEffect(() => {
    carregarServicos();
  }, []);

  const carregarServicos = () => {
    try {
      const servicosArmazenados = localStorage.getItem('adminServicos');
      if (servicosArmazenados) {
        const parsed = JSON.parse(servicosArmazenados);
        setServicos(parsed);
      } else {
        setServicos(servicosDefault);
      }
    } catch (error) {
      console.error('Erro ao carregar serviços do localStorage:', error);
      setServicos(servicosDefault);
    }
  };

  const atualizarServico = (id: string, dados: Partial<Servico>) => {
    const servicoIndex = servicos.findIndex((s) => s.id === id);
    if (servicoIndex === -1) return;

    const servicosAtualizados = [...servicos];
    servicosAtualizados[servicoIndex] = {
      ...servicosAtualizados[servicoIndex],
      ...dados,
      updatedAt: new Date(),
    };

    setServicos(servicosAtualizados);
    localStorage.setItem('adminServicos', JSON.stringify(servicosAtualizados));
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
