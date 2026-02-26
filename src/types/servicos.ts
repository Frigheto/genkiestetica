export interface Foto {
  id: string;
  url: string;
  titulo?: string;
  ordem: number;
}

export interface Servico {
  id: string;
  nome: string;
  titulo: string;
  descricao: string;
  heroImage: string;
  icon: string;
  color: string;
  fotos: Foto[];
  videoUrl?: string;
  videoTitulo?: string;
  updatedAt: Date;
}
