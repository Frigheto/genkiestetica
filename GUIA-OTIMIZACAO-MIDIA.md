# 📸 Guia de Otimização de Mídia - Site GENKI

## 🎯 Objetivo
Manter o site **rápido** e **estável** com fotos e vídeos otimizados.

---

## 📁 Estrutura de Pastas Recomendada

```
public/
├── images/                      # Fotos gerais do site
│   ├── hero/                   # Imagens grandes de destaque
│   │   ├── home-hero.webp      # WebP para navegadores modernos
│   │   └── home-hero.jpg       # JPG como fallback
│   │
│   ├── services/               # Imagens dos serviços
│   │   ├── estetica/
│   │   │   ├── sala-1.webp
│   │   │   ├── sala-2.webp
│   │   │   ├── antes-depois-1.webp
│   │   │   └── thumbnails/     # Miniaturas (carregamento rápido)
│   │   │       ├── sala-1-thumb.webp
│   │   │       └── sala-2-thumb.webp
│   │   │
│   │   ├── fisioterapia/
│   │   ├── massoterapia/
│   │   └── pilates/
│   │
│   ├── gallery/                # Galeria de fotos
│   │   ├── full/              # Fotos em tamanho completo
│   │   └── thumbs/            # Miniaturas para preview
│   │
│   └── team/                  # Fotos da equipe
│
└── videos/                     # Vídeos do site
    ├── estetica/
    │   ├── explicativo.mp4    # Vídeo principal
    │   ├── video1.mp4         # Resultados
    │   ├── video2.mp4
    │   ├── video3.mp4
    │   └── posters/           # Imagens de capa dos vídeos
    │       ├── explicativo.webp
    │       ├── video1.webp
    │       └── video2.webp
    │
    ├── fisioterapia/
    ├── massoterapia/
    └── pilates/
```

---

## 🖼️ FOTOS - Especificações Otimizadas

### Formatos Recomendados (em ordem de prioridade)

1. **WebP** ⭐ MELHOR
   - Compressão superior (30-50% menor que JPG)
   - Suporte moderno em todos navegadores
   - Qualidade visual excelente

2. **JPG/JPEG**
   - Fallback para navegadores antigos
   - Bom para fotos com muitas cores

3. **PNG**
   - Apenas para logos e imagens com transparência
   - Evite para fotos (arquivo muito grande)

### Dimensões e Tamanhos Recomendados

| Tipo de Imagem | Largura | Altura | Tamanho Máximo | Qualidade |
|----------------|---------|--------|----------------|-----------|
| **Hero/Banner** | 1920px | 1080px | 200 KB | 80-85% |
| **Fotos de Sala** | 1200px | 800px | 150 KB | 75-80% |
| **Galeria Full** | 1200px | 800px | 150 KB | 75-80% |
| **Thumbnails** | 400px | 300px | 30 KB | 70% |
| **Antes/Depois** | 800px | 600px | 100 KB | 80% |
| **Logo** | 200px | 200px | 20 KB | PNG |

### Como Otimizar Fotos

#### Opção 1: Ferramentas Online (GRÁTIS)
- **TinyPNG**: https://tinypng.com/ - Compacta até 70%
- **Squoosh**: https://squoosh.app/ - Converte para WebP
- **Compressor.io**: https://compressor.io/

#### Opção 2: Software Desktop
- **ImageOptim** (Mac) - Gratuito
- **RIOT** (Windows) - Gratuito
- **XnConvert** (Mac/Windows/Linux) - Gratuito

#### Opção 3: Linha de Comando
```bash
# Instalar ferramentas (Mac)
brew install webp imagemagick

# Converter JPG para WebP
cwebp -q 80 foto.jpg -o foto.webp

# Redimensionar imagem
convert foto.jpg -resize 1200x800 foto-otimizada.jpg

# Comprimir JPG
convert foto.jpg -quality 80 foto-comprimida.jpg
```

---

## 🎥 VÍDEOS - Especificações Otimizadas

### Formatos Recomendados

1. **MP4 (H.264/AVC)** ⭐ MELHOR COMPATIBILIDADE
   - Suportado por 99% dos navegadores
   - Boa compressão
   - Codec: H.264

2. **WebM (VP9)**
   - Arquivo menor que MP4
   - Qualidade similar
   - Bom como alternativa

### Especificações Técnicas

| Tipo de Vídeo | Resolução | FPS | Bitrate | Tamanho Máximo | Duração Max |
|---------------|-----------|-----|---------|----------------|-------------|
| **Explicativo** | 1280x720 | 30 | 2000 kbps | 30 MB | 3 min |
| **Resultados** | 1280x720 | 30 | 1500 kbps | 20 MB | 2 min |
| **Depoimentos** | 1280x720 | 30 | 1500 kbps | 25 MB | 2 min |
| **Background** | 1920x1080 | 24 | 3000 kbps | 10 MB | 30 seg |

### Como Otimizar Vídeos

#### Opção 1: HandBrake (GRÁTIS - RECOMENDADO)
1. Download: https://handbrake.fr/
2. Configurações recomendadas:
   - **Preset:** "Web/Fast 720p30"
   - **Video Codec:** H.264
   - **Framerate:** 30 fps
   - **Quality:** RF 23-25 (menor = melhor qualidade)
   - **Audio:** AAC, 128 kbps

#### Opção 2: FFmpeg (Linha de Comando)
```bash
# Instalar FFmpeg
brew install ffmpeg  # Mac
# ou baixe em: https://ffmpeg.org/

# Comprimir vídeo para 720p
ffmpeg -i video-original.mov -vcodec h264 -acodec aac -vf scale=1280:720 -b:v 2000k -b:a 128k video-otimizado.mp4

# Criar versão WebM
ffmpeg -i video-original.mov -c:v libvpx-vp9 -b:v 1500k -vf scale=1280:720 video.webm

# Criar poster/thumbnail do vídeo
ffmpeg -i video.mp4 -ss 00:00:02 -vframes 1 poster.jpg
```

#### Opção 3: CloudConvert (Online)
- https://cloudconvert.com/
- Suporta conversão em lote
- Configurações personalizadas

---

## ⚡ Técnicas de Carregamento Rápido

### 1. Lazy Loading (Carregamento Sob Demanda)
O site já está configurado com lazy loading. Imagens e vídeos só carregam quando aparecem na tela.

```tsx
// Já implementado nos componentes
<img 
  src="foto.webp" 
  loading="lazy"  // ✅ Carrega apenas quando visível
  alt="Descrição"
/>

<video 
  src="video.mp4" 
  loading="lazy"  // ✅ Carrega apenas quando visível
  preload="none"  // ✅ Não carrega automaticamente
/>
```

### 2. Imagens Responsivas
Use diferentes tamanhos para mobile/desktop:

```tsx
<picture>
  {/* WebP para navegadores modernos */}
  <source 
    srcSet="/images/sala-mobile.webp 600w, /images/sala-desktop.webp 1200w" 
    type="image/webp" 
  />
  {/* JPG como fallback */}
  <source 
    srcSet="/images/sala-mobile.jpg 600w, /images/sala-desktop.jpg 1200w" 
    type="image/jpeg" 
  />
  <img 
    src="/images/sala-desktop.jpg" 
    alt="Sala"
    loading="lazy"
  />
</picture>
```

### 3. Posters para Vídeos
Sempre use uma imagem de capa (poster) para vídeos:

```tsx
<video 
  src="video.mp4"
  poster="/videos/posters/video-poster.webp"  // ✅ Imagem de capa
  preload="none"
  loading="lazy"
/>
```

---

## 📊 Metas de Performance

### Tempos de Carregamento Ideais
- **Primeira renderização**: < 1.5s
- **Interatividade**: < 2.5s
- **Carregamento completo**: < 4s

### Tamanhos de Página Recomendados
- **Página inicial**: < 2 MB total
- **Páginas de serviço**: < 3 MB total
- **Galeria**: < 5 MB total

### Como Medir Performance
1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
2. **GTmetrix**: https://gtmetrix.com/
3. **WebPageTest**: https://www.webpagetest.org/

---

## 🔄 Workflow de Otimização

### Para FOTOS:
1. ✅ Tire foto ou receba imagem original
2. ✅ Redimensione para tamanho adequado (ex: 1200x800)
3. ✅ Converta para WebP usando Squoosh ou TinyPNG
4. ✅ Comprima para atingir tamanho alvo (< 150 KB)
5. ✅ Mantenha JPG como backup (mesmo processo)
6. ✅ Coloque na pasta correta em `/public/images/`

### Para VÍDEOS:
1. ✅ Grave ou receba vídeo original
2. ✅ Edite se necessário (cortes, legendas)
3. ✅ Abra no HandBrake
4. ✅ Use preset "Fast 720p30"
5. ✅ Ajuste qualidade (RF 23-25)
6. ✅ Exporte para MP4
7. ✅ Crie poster/thumbnail (frame do vídeo)
8. ✅ Coloque na pasta correta em `/public/videos/`

---

## 🚀 Recomendações Extras

### CDN (Content Delivery Network)
Para performance máxima, considere usar CDN no futuro:
- **Cloudinary** - Otimização automática de imagens/vídeos
- **Cloudflare Images** - CDN + otimização
- **ImageKit** - Transformação em tempo real

### Hospedagem de Vídeos
Para muitos vídeos ou muito longos:
- **YouTube** (embed) - Grátis, boa performance
- **Vimeo** - Melhor qualidade, sem ads
- **Bunny.net** - CDN especializada, barato

### Cache do Navegador
Já configurado no Vite. Arquivos em `/public/` são cacheados automaticamente.

---

## ✅ Checklist Final

Antes de adicionar qualquer mídia ao site:

**FOTOS:**
- [ ] Formato WebP (+ JPG backup)
- [ ] Dimensões corretas para o uso
- [ ] Tamanho < 150 KB para fotos normais
- [ ] Tamanho < 200 KB para hero/banner
- [ ] Thumbnails < 30 KB
- [ ] Nome descritivo (ex: `sala-fisioterapia-1.webp`)
- [ ] Pasta organizada

**VÍDEOS:**
- [ ] Formato MP4 (H.264)
- [ ] Resolução 720p ou 1080p
- [ ] Tamanho < 30 MB
- [ ] Bitrate adequado (1500-2000 kbps)
- [ ] Poster/thumbnail criado
- [ ] Duração < 3 minutos (ideal)
- [ ] Nome descritivo (ex: `explicativo-pilates.mp4`)
- [ ] Pasta organizada

---

## 🎓 Resumo Executivo

**Para site RÁPIDO:**
1. Use **WebP** para fotos
2. Mantenha fotos **< 150 KB**
3. Mantenha vídeos **< 30 MB**
4. Use **720p** para vídeos (não precisa 4K)
5. Sempre crie **posters** para vídeos
6. Organize em **pastas** por serviço
7. Use **lazy loading** (já implementado)

**Ferramentas essenciais:**
- **TinyPNG** ou **Squoosh** → Comprimir fotos
- **HandBrake** → Comprimir vídeos
- **PageSpeed Insights** → Testar performance

---

## 📞 Suporte

Para dúvidas sobre otimização de mídia, consulte:
- Este guia
- Documentação do projeto
- Google PageSpeed Insights para diagnóstico
