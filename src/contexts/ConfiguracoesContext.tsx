import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export interface SiteConfig {
  siteName: string;
  siteDescription: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  cep: string;
  horarioSemana: string;
  horarioSabado: string;
  facebook: string;
  instagram: string;
  maintenanceMode: boolean;
}

const defaultConfig: SiteConfig = {
  siteName: 'GENKI',
  siteDescription: 'Clínica de Estética, Fisioterapia e Pilates',
  email: 'genki.estetica@gmail.com',
  phone: '(55) 99191-1033',
  whatsapp: '5555991911033',
  address: 'Rua Serafim Valandro, 613, Centro - Santa Maria/RS',
  cep: '97010-480',
  horarioSemana: 'Segunda a Sexta: 8h às 19h',
  horarioSabado: 'Sábado: 8h às 18h',
  facebook: '',
  instagram: '',
  maintenanceMode: false,
};

interface ConfiguracoesContextType {
  config: SiteConfig;
  salvarConfig: (novaConfig: SiteConfig) => Promise<void>;
}

const ConfiguracoesContext = createContext<ConfiguracoesContextType | undefined>(undefined);

function rowParaConfig(row: Record<string, unknown>): SiteConfig {
  return {
    siteName: (row.site_name as string) ?? defaultConfig.siteName,
    siteDescription: (row.site_description as string) ?? defaultConfig.siteDescription,
    email: (row.email as string) ?? defaultConfig.email,
    phone: (row.phone as string) ?? defaultConfig.phone,
    whatsapp: (row.whatsapp as string) ?? defaultConfig.whatsapp,
    address: (row.address as string) ?? defaultConfig.address,
    cep: (row.cep as string) ?? defaultConfig.cep,
    horarioSemana: (row.horario_semana as string) ?? defaultConfig.horarioSemana,
    horarioSabado: (row.horario_sabado as string) ?? defaultConfig.horarioSabado,
    facebook: (row.facebook as string) ?? defaultConfig.facebook,
    instagram: (row.instagram as string) ?? defaultConfig.instagram,
    maintenanceMode: (row.maintenance_mode as boolean) ?? defaultConfig.maintenanceMode,
  };
}

export function ConfiguracoesProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<SiteConfig>(defaultConfig);

  useEffect(() => {
    carregarConfig();
  }, []);

  const carregarConfig = async () => {
    try {
      const { data, error } = await supabase
        .from('configuracoes')
        .select('*')
        .eq('id', 'main')
        .single();

      if (error || !data) {
        // Seed initial row
        await supabase.from('configuracoes').upsert({
          id: 'main',
          site_name: defaultConfig.siteName,
          site_description: defaultConfig.siteDescription,
          email: defaultConfig.email,
          phone: defaultConfig.phone,
          whatsapp: defaultConfig.whatsapp,
          address: defaultConfig.address,
          cep: defaultConfig.cep,
          horario_semana: defaultConfig.horarioSemana,
          horario_sabado: defaultConfig.horarioSabado,
          facebook: defaultConfig.facebook,
          instagram: defaultConfig.instagram,
          maintenance_mode: defaultConfig.maintenanceMode,
        }, { onConflict: 'id', ignoreDuplicates: true });
        return;
      }

      setConfig(rowParaConfig(data));
    } catch (err) {
      console.error('Erro ao carregar configurações:', err);
    }
  };

  const salvarConfig = async (novaConfig: SiteConfig) => {
    const { error } = await supabase
      .from('configuracoes')
      .update({
        site_name: novaConfig.siteName,
        site_description: novaConfig.siteDescription,
        email: novaConfig.email,
        phone: novaConfig.phone,
        whatsapp: novaConfig.whatsapp,
        address: novaConfig.address,
        cep: novaConfig.cep,
        horario_semana: novaConfig.horarioSemana,
        horario_sabado: novaConfig.horarioSabado,
        facebook: novaConfig.facebook,
        instagram: novaConfig.instagram,
        maintenance_mode: novaConfig.maintenanceMode,
        updated_at: new Date().toISOString(),
      })
      .eq('id', 'main');

    if (error) throw new Error(error.message);
    setConfig(novaConfig);
  };

  return (
    <ConfiguracoesContext.Provider value={{ config, salvarConfig }}>
      {children}
    </ConfiguracoesContext.Provider>
  );
}

export function useConfiguracoes() {
  const context = useContext(ConfiguracoesContext);
  if (!context) throw new Error('useConfiguracoes deve ser usado dentro de ConfiguracoesProvider');
  return context;
}
