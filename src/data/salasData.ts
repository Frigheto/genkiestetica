import { Sala } from '@/types';

export const salas: Sala[] = [
  {
    id: '1',
    nome: 'Sala 01 - Estética',
    descricao: 'Sala equipada para procedimentos estéticos faciais e corporais com iluminação profissional.',
    area: '18m²',
    preco: 150,
    ativo: true,
    equipamentos: [
      'Maca elétrica',
      'Aparelho de alta frequência',
      'LED profissional',
      'Ar condicionado',
      'Espelho de parede',
      'Bandeja de instrumental',
    ],
    fotos: [
      {
        id: 'foto-1-1',
        url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1000&h=750&fit=crop',
        titulo: 'Vista geral',
        ordem: 1,
      },
      {
        id: 'foto-1-2',
        url: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1000&h=750&fit=crop',
        titulo: 'Maca e iluminação',
        ordem: 2,
      },
      {
        id: 'foto-1-3',
        url: 'https://images.unsplash.com/photo-1570172619644-dfd03cb4f539?w=1000&h=750&fit=crop',
        titulo: 'Equipamentos',
        ordem: 3,
      },
      {
        id: 'foto-1-4',
        url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&h=750&fit=crop',
        titulo: 'Detalhes do ambiente',
        ordem: 4,
      },
      {
        id: 'foto-1-5',
        url: 'https://images.unsplash.com/photo-1576091160396-112ba8d25d1d?w=1000&h=750&fit=crop',
        titulo: 'Ambiente completo',
        ordem: 5,
      },
    ],
    video: {
      id: 'video-1',
      url: 'https://www.youtube.com/embed/7nS0L6LN31s',
      titulo: 'Tour da Sala 01',
      thumbnail: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=300&fit=crop',
    },
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-01-01'),
  },
  {
    id: '2',
    nome: 'Sala 02 - Estética',
    descricao: 'Ideal para tratamentos de preenchimento e toxina butolínica com equipamento de ponta.',
    area: '15m²',
    preco: 140,
    ativo: true,
    equipamentos: [
      'Maca reclinável',
      'Iluminação cirúrgica',
      'Autoclave',
      'Ar condicionado',
      'Seringa acessória',
      'Vidro fumê para privacidade',
    ],
    fotos: [
      {
        id: 'foto-2-1',
        url: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1000&h=750&fit=crop',
        titulo: 'Vista principal',
        ordem: 1,
      },
      {
        id: 'foto-2-2',
        url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1000&h=750&fit=crop',
        titulo: 'Equipamento de preenchimento',
        ordem: 2,
      },
      {
        id: 'foto-2-3',
        url: 'https://images.unsplash.com/photo-1570172619644-dfd03cb4f539?w=1000&h=750&fit=crop',
        titulo: 'Iluminação',
        ordem: 3,
      },
      {
        id: 'foto-2-4',
        url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&h=750&fit=crop',
        titulo: 'Setor de espera',
        ordem: 4,
      },
      {
        id: 'foto-2-5',
        url: 'https://images.unsplash.com/photo-1576091160396-112ba8d25d1d?w=1000&h=750&fit=crop',
        titulo: 'Vista completa',
        ordem: 5,
      },
    ],
    video: {
      id: 'video-2',
      url: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
      titulo: 'Tour da Sala 02',
    },
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-01-01'),
  },
  {
    id: '3',
    nome: 'Sala 03 - Fisioterapia',
    descricao: 'Equipada com aparelhos de eletroterapia e reabilitação motora.',
    area: '20m²',
    preco: 120,
    ativo: true,
    equipamentos: [
      'Maca',
      'TENS/FES profissional',
      'Ultrassom terapêutico',
      'Infravermelho',
      'Barras paralelas',
      'Colchonetes',
    ],
    fotos: [
      {
        id: 'foto-3-1',
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&h=750&fit=crop',
        titulo: 'Área de exercícios',
        ordem: 1,
      },
      {
        id: 'foto-3-2',
        url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&h=750&fit=crop',
        titulo: 'Equipamento TENS',
        ordem: 2,
      },
      {
        id: 'foto-3-3',
        url: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=1000&h=750&fit=crop',
        titulo: 'Aparelhos de reabilitação',
        ordem: 3,
      },
      {
        id: 'foto-3-4',
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&h=750&fit=crop',
        titulo: 'Visão geral',
        ordem: 4,
      },
      {
        id: 'foto-3-5',
        url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1000&h=750&fit=crop',
        titulo: 'Sala completa',
        ordem: 5,
      },
    ],
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-01-01'),
  },
  {
    id: '4',
    nome: 'Sala 04 - Fisioterapia',
    descricao: 'Ampla sala para exercícios e reabilitação motora com espaço livre.',
    area: '25m²',
    preco: 130,
    ativo: true,
    equipamentos: [
      'Maca',
      'Bolas de fisioterapia',
      'Faixas elásticas',
      'Espelhos',
      'Barras de apoio',
      'Tapete anti-derrapante',
    ],
    fotos: [
      {
        id: 'foto-4-1',
        url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&h=750&fit=crop',
        titulo: 'Espaço principal',
        ordem: 1,
      },
      {
        id: 'foto-4-2',
        url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&h=750&fit=crop',
        titulo: 'Materiais de exercício',
        ordem: 2,
      },
      {
        id: 'foto-4-3',
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&h=750&fit=crop',
        titulo: 'Barras de apoio',
        ordem: 3,
      },
      {
        id: 'foto-4-4',
        url: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=1000&h=750&fit=crop',
        titulo: 'Espelhos e iluminação',
        ordem: 4,
      },
      {
        id: 'foto-4-5',
        url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1000&h=750&fit=crop',
        titulo: 'Vista ampla',
        ordem: 5,
      },
    ],
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-01-01'),
  },
  {
    id: '5',
    nome: 'Sala 05 - Massoterapia',
    descricao: 'Ambiente acolhedor para massagens e terapias manuais com atmosfera relaxante.',
    area: '16m²',
    preco: 110,
    ativo: true,
    equipamentos: [
      'Maca com aquecimento',
      'Som ambiente',
      'Aromatizador',
      'Toalhas premium',
      'Difusor de aromas',
      'Iluminação ambiente',
    ],
    fotos: [
      {
        id: 'foto-5-1',
        url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000&h=750&fit=crop',
        titulo: 'Ambiente acolhedor',
        ordem: 1,
      },
      {
        id: 'foto-5-2',
        url: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=1000&h=750&fit=crop',
        titulo: 'Maca com aquecimento',
        ordem: 2,
      },
      {
        id: 'foto-5-3',
        url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&h=750&fit=crop',
        titulo: 'Detalhes decorativos',
        ordem: 3,
      },
      {
        id: 'foto-5-4',
        url: 'https://images.unsplash.com/photo-1570172619644-dfd03cb4f539?w=1000&h=750&fit=crop',
        titulo: 'Iluminação suave',
        ordem: 4,
      },
      {
        id: 'foto-5-5',
        url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1000&h=750&fit=crop',
        titulo: 'Vista geral',
        ordem: 5,
      },
    ],
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-01-01'),
  },
];

// Função auxiliar para buscar sala por ID
export function buscarSalaPorId(id: string): Sala | undefined {
  return salas.find((sala) => sala.id === id);
}

// Função auxiliar para atualizar sala
export function atualizarSala(id: string, dadosAtualizados: Partial<Sala>): Sala | null {
  const index = salas.findIndex((s) => s.id === id);
  if (index === -1) return null;

  salas[index] = {
    ...salas[index],
    ...dadosAtualizados,
    updatedAt: new Date(),
  };

  return salas[index];
}
