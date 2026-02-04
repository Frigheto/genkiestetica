# 📸 Pasta de Imagens - Site GENKI

## Estrutura de Pastas

```
images/
├── hero/                    # Imagens grandes de destaque (1920x1080, < 200KB)
├── services/               # Fotos dos serviços
│   ├── estetica/          # Fotos de estética
│   │   └── thumbnails/    # Miniaturas (400x300, < 30KB)
│   ├── fisioterapia/      # Fotos de fisioterapia
│   │   └── thumbnails/
│   ├── massoterapia/      # Fotos de massoterapia
│   │   └── thumbnails/
│   └── pilates/           # Fotos de pilates
│       └── thumbnails/
├── gallery/               # Galeria de fotos
│   ├── full/             # Fotos completas (1200x800, < 150KB)
│   └── thumbs/           # Miniaturas para preview (400x300, < 30KB)
└── team/                 # Fotos da equipe (800x800, < 100KB)
```

## Formatos Recomendados

### ⭐ WebP (PRIORIDADE)
- Melhor compressão (30-50% menor que JPG)
- Qualidade excelente
- Suporte moderno
- **Use sempre que possível!**

### JPG/JPEG (Fallback)
- Boa compatibilidade
- Use como segunda opção

### PNG (Apenas para logos)
- Suporta transparência
- Arquivos grandes, evite para fotos

## Tamanhos Recomendados

| Tipo | Largura | Altura | Tamanho Max |
|------|---------|--------|-------------|
| Hero/Banner | 1920px | 1080px | 200 KB |
| Salas | 1200px | 800px | 150 KB |
| Galeria | 1200px | 800px | 150 KB |
| Thumbnails | 400px | 300px | 30 KB |
| Equipe | 800px | 800px | 100 KB |

## Como Otimizar

### Opção 1: TinyPNG (Online - FÁCIL)
1. Acesse: https://tinypng.com/
2. Arraste suas fotos
3. Baixe comprimidas
4. Reduz até 70% do tamanho!

### Opção 2: Squoosh (Online - WebP)
1. Acesse: https://squoosh.app/
2. Arraste sua foto
3. Escolha "WebP" no lado direito
4. Ajuste qualidade para 80%
5. Baixe

### Opção 3: Linha de Comando
```bash
# Converter para WebP
cwebp -q 80 foto.jpg -o foto.webp

# Redimensionar
convert foto.jpg -resize 1200x800 foto-redimensionada.jpg
```

## Nomenclatura Recomendada

Use nomes descritivos e sem espaços:

✅ **BOM:**
- `sala-estetica-1.webp`
- `antes-depois-pilates.webp`
- `equipe-fisioterapeuta-joao.webp`
- `hero-massoterapia.webp`

❌ **EVITE:**
- `IMG_1234.jpg`
- `foto com espaços.jpg`
- `imagem final versão 2.jpg`

## Checklist Antes de Adicionar

- [ ] Formato WebP (ou JPG)
- [ ] Dimensões corretas
- [ ] Tamanho otimizado (< limites)
- [ ] Nome descritivo
- [ ] Pasta correta
- [ ] Thumbnail criado (se necessário)

## Performance

**Metas:**
- Hero: < 200 KB
- Fotos normais: < 150 KB
- Thumbnails: < 30 KB

**Dica:** Sempre comprima antes de adicionar ao site!
