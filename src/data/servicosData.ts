import { Servico } from '@/types/servicos';

export const servicosData: Servico[] = [
  {
    id: 'estetica',
    nome: 'Estética',
    titulo: 'Conheça Nossos Tratamentos Estéticos',
    descricao: 'Tratamentos estéticos de alta qualidade para realçar sua beleza natural. Utilizamos as mais avançadas técnicas e tecnologias do mercado para proporcionar resultados naturais e duradouros.',
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&h=800&fit=crop',
    icon: 'Sparkles',
    color: 'from-pink-500 to-rose-500',
    fotos: [
      {
        id: 'estetica-1',
        url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop',
        titulo: 'Rugas e linhas',
        ordem: 1,
      },
    ],
    updatedAt: new Date('2026-01-01'),
  },
  {
    id: 'fisioterapia',
    nome: 'Fisioterapia',
    titulo: 'Entenda Como Funciona a Fisioterapia',
    descricao: 'Reabilitação física completa com profissionais especializados e equipamentos modernos. Tratamentos personalizados para sua recuperação e melhora da qualidade de vida.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop',
    icon: 'Activity',
    color: 'from-blue-500 to-cyan-500',
    fotos: [
      {
        id: 'fisio-1',
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop',
        titulo: 'Reabilitação',
        ordem: 1,
      },
    ],
    updatedAt: new Date('2026-01-01'),
  },
  {
    id: 'massoterapia',
    nome: 'Massoterapia',
    titulo: 'Descubra os Benefícios da Massoterapia',
    descricao: 'Técnicas de massagem para relaxamento, alívio de tensões e tratamento de dores musculares. Ambiente acolhedor e profissionais certificados para cuidar do seu bem-estar.',
    heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&h=800&fit=crop',
    icon: 'Hand',
    color: 'from-purple-500 to-violet-500',
    fotos: [
      {
        id: 'massa-1',
        url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
        titulo: 'Massagem relaxante',
        ordem: 1,
      },
    ],
    updatedAt: new Date('2026-01-01'),
  },
  {
    id: 'pilates',
    nome: 'Pilates',
    titulo: 'Conheça o Método Pilates',
    descricao: 'Aulas de pilates solo e com aparelhos para fortalecimento muscular, correção postural e aumento da flexibilidade. Turmas reduzidas para atendimento personalizado.',
    heroImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&h=800&fit=crop',
    icon: 'Dumbbell',
    color: 'from-emerald-500 to-teal-500',
    fotos: [
      {
        id: 'pilates-1',
        url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop',
        titulo: 'Pilates com aparelhos',
        ordem: 1,
      },
    ],
    updatedAt: new Date('2026-01-01'),
  },
];

export function buscarServicoPorId(id: string): Servico | undefined {
  return servicosData.find((s) => s.id === id);
}

export function atualizarServico(id: string, dados: Partial<Servico>): Servico | null {
  const index = servicosData.findIndex((s) => s.id === id);
  if (index === -1) return null;

  servicosData[index] = {
    ...servicosData[index],
    ...dados,
    updatedAt: new Date(),
  };

  return servicosData[index];
}
