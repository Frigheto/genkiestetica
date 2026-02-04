# 🎥 Pasta de Vídeos - Site GENKI

## Estrutura de Pastas

```
videos/
├── estetica/
│   ├── explicativo.mp4      # Vídeo principal do serviço
│   ├── video1.mp4           # Resultados/depoimentos
│   ├── video2.mp4
│   ├── video3.mp4
│   └── posters/            # Imagens de capa dos vídeos
│       ├── explicativo.webp
│       ├── video1.webp
│       ├── video2.webp
│       └── video3.webp
├── fisioterapia/
│   ├── explicativo.mp4
│   ├── video1.mp4
│   ├── video2.mp4
│   ├── video3.mp4
│   └── posters/
├── massoterapia/
│   ├── explicativo.mp4
│   ├── video1.mp4
│   ├── video2.mp4
│   ├── video3.mp4
│   └── posters/
└── pilates/
    ├── explicativo.mp4
    ├── video1.mp4
    ├── video2.mp4
    ├── video3.mp4
    └── posters/
```

## Especificações Recomendadas

### Vídeos MP4

| Tipo | Resolução | Duração Max | Tamanho Max | Bitrate |
|------|-----------|-------------|-------------|---------|
| Explicativo | 1280x720 | 3 min | 30 MB | 2000 kbps |
| Resultados | 1280x720 | 2 min | 20 MB | 1500 kbps |
| Depoimentos | 1280x720 | 2 min | 25 MB | 1500 kbps |

### Posters (Imagens de Capa)

- **Formato:** WebP ou JPG
- **Dimensões:** 1280x720 (mesma proporção do vídeo)
- **Tamanho:** < 100 KB
- **Qualidade:** 75-80%

## Como Otimizar Vídeos

### Opção 1: HandBrake (RECOMENDADO - GRÁTIS)

1. **Download:** https://handbrake.fr/
2. **Abra o vídeo** no HandBrake
3. **Configurações:**
   - Preset: "Fast 720p30"
   - Video Codec: H.264 (x264)
   - Framerate: 30 fps
   - Quality: RF 23-25 (menor = melhor)
   - Audio: AAC, 128 kbps
4. **Exporte** como MP4

### Opção 2: CloudConvert (Online)

1. Acesse: https://cloudconvert.com/
2. Faça upload do vídeo
3. Converta para MP4
4. Configurações personalizadas:
   - Codec: H.264
   - Resolução: 1280x720
   - Bitrate: 2000 kbps

### Opção 3: FFmpeg (Linha de Comando)

```bash
# Instalar FFmpeg
brew install ffmpeg  # Mac

# Comprimir vídeo para 720p
ffmpeg -i video-original.mov \
  -vcodec h264 \
  -acodec aac \
  -vf scale=1280:720 \
  -b:v 2000k \
  -b:a 128k \
  video-otimizado.mp4

# Criar poster/thumbnail (captura aos 2 segundos)
ffmpeg -i video.mp4 \
  -ss 00:00:02 \
  -vframes 1 \
  -vf scale=1280:720 \
  poster.jpg

# Converter para WebP (menor)
cwebp -q 80 poster.jpg -o poster.webp
```

## Formatos Suportados

### ⭐ MP4 (H.264) - PRIORIDADE
- Melhor compatibilidade (99% dos navegadores)
- Boa compressão
- Codec: H.264/AVC
- **Use sempre!**

### WebM (VP9) - Opcional
- Arquivo menor que MP4
- Boa qualidade
- Use como alternativa se necessário

## Nomenclatura de Arquivos

✅ **BOM:**
- `explicativo.mp4` (vídeo principal do serviço)
- `video1.mp4`, `video2.mp4`, `video3.mp4` (resultados)
- `explicativo.webp` (poster do vídeo principal)
- `video1.webp` (poster do resultado 1)

❌ **EVITE:**
- `VID_20240101.mp4`
- `video final versão 2.mp4`
- `resultado com espaços.mp4`

## Criando Posters (Imagens de Capa)

Os posters são importantes para:
- Mostrar preview antes do vídeo carregar
- Economizar banda
- Melhorar performance

### Como criar:

1. **Abra o vídeo** em qualquer player
2. **Pause** em um frame bonito (2-5 segundos do início)
3. **Capture** a tela (screenshot)
4. **Otimize** a imagem:
   - Redimensione para 1280x720
   - Converta para WebP
   - Comprima para < 100 KB

## Checklist Antes de Adicionar

**VÍDEO:**
- [ ] Formato MP4 (H.264)
- [ ] Resolução 720p (1280x720)
- [ ] Tamanho < 30 MB
- [ ] Duração < 3 minutos
- [ ] Nome correto (explicativo.mp4 ou videoX.mp4)
- [ ] Pasta correta (/videos/servico/)

**POSTER:**
- [ ] Formato WebP ou JPG
- [ ] Dimensões 1280x720
- [ ] Tamanho < 100 KB
- [ ] Nome correspondente ao vídeo
- [ ] Pasta /posters/ dentro do serviço

## Performance

**Metas:**
- Vídeo explicativo: < 30 MB, < 3 min
- Vídeos de resultado: < 20 MB, < 2 min
- Posters: < 100 KB cada

**Dica:** Sempre otimize antes de adicionar! Vídeos grandes deixam o site lento.

## Uso no Site

Os vídeos serão carregados automaticamente com:
- Lazy loading (só carrega quando visível)
- Poster de preview
- Controles para o usuário

Exemplo de código já implementado:
```tsx
<video 
  src="/videos/estetica/explicativo.mp4"
  poster="/videos/estetica/posters/explicativo.webp"
  controls
  preload="none"
  loading="lazy"
/>
```

## Ferramentas Recomendadas

- **HandBrake** → Comprimir vídeos (https://handbrake.fr/)
- **Squoosh** → Criar/otimizar posters (https://squoosh.app/)
- **FFmpeg** → Linha de comando avançada
- **CloudConvert** → Conversão online

---

📌 **Lembre-se:** Vídeos otimizados = Site rápido = Melhor experiência!
