/**
 * Extrai o ID do vídeo de diferentes formatos de URL do YouTube
 */
export function extrairIdYoutube(url: string): string | null {
  if (!url) return null;

  // Tenta extrair o ID de diferentes formatos
  const formatos = [
    // https://www.youtube.com/watch?v=VIDEO_ID
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    // https://www.youtube.com/embed/VIDEO_ID
    /youtube\.com\/embed\/([^&\n?#]+)/,
    // Apenas o ID
    /^([a-zA-Z0-9_-]{11})$/,
  ];

  for (const formato of formatos) {
    const match = url.match(formato);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

/**
 * Extrai o ID do arquivo do Google Drive
 */
export function extrairIdGoogleDrive(url: string): string | null {
  if (!url) return null;

  // Tenta extrair o ID de diferentes formatos do Google Drive
  const formatos = [
    // https://drive.google.com/file/d/FILE_ID/view
    /drive\.google\.com\/file\/d\/([a-zA-Z0-9-_]+)/,
    // Apenas o ID
    /^([a-zA-Z0-9-_]{25,})$/,
  ];

  for (const formato of formatos) {
    const match = url.match(formato);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

/**
 * Detecta o tipo de URL (YouTube, Google Drive ou inválida)
 */
export function detectarTipoVideo(url: string): 'youtube' | 'googledrive' | null {
  if (extrairIdYoutube(url)) return 'youtube';
  if (extrairIdGoogleDrive(url)) return 'googledrive';
  return null;
}

/**
 * Converte qualquer URL do YouTube para o formato embed
 * Com parâmetros para remover propagandas e UI desnecessária
 */
export function converterParaEmbedYoutube(url: string): string | null {
  const id = extrairIdYoutube(url);
  if (!id) return null;

  // Parâmetros para remover propagandas e elementos visuais desnecessários
  const parametros = new URLSearchParams({
    modestbranding: '1', // Remove logo do YouTube
    rel: '0',            // Não mostra vídeos recomendados
    controls: '1',       // Mostra controles de reprodução
    fs: '1',             // Permite fullscreen
    iv_load_policy: '3', // Remove anotações
  });

  return `https://www.youtube.com/embed/${id}?${parametros.toString()}`;
}

/**
 * Converte URL do Google Drive para o formato embed
 * Google Drive oferece melhor controle sobre UI
 */
export function converterParaEmbedGoogleDrive(url: string): string | null {
  const id = extrairIdGoogleDrive(url);
  if (!id) return null;

  return `https://drive.google.com/file/d/${id}/preview`;
}

/**
 * Converte qualquer URL (YouTube ou Google Drive) para o formato embed apropriado
 */
export function converterParaEmbed(url: string): string | null {
  const tipo = detectarTipoVideo(url);

  if (tipo === 'youtube') {
    return converterParaEmbedYoutube(url);
  } else if (tipo === 'googledrive') {
    return converterParaEmbedGoogleDrive(url);
  }

  return null;
}

/**
 * Valida se é uma URL válida (YouTube ou Google Drive)
 */
export function validarUrlYoutube(url: string): { valida: boolean; erro?: string; tipo?: string } {
  if (!url) {
    return { valida: false, erro: 'URL não pode estar vazia' };
  }

  const tipo = detectarTipoVideo(url);

  if (!tipo) {
    return {
      valida: false,
      erro: 'URL inválida. Aceita YouTube ou Google Drive:\n\n📺 YouTube:\n• https://www.youtube.com/watch?v=VIDEO_ID\n• https://youtu.be/VIDEO_ID\n• Apenas o ID do vídeo\n\n🔗 Google Drive:\n• https://drive.google.com/file/d/FILE_ID/view\n• Apenas o ID do arquivo',
    };
  }

  return { valida: true, tipo };
}
