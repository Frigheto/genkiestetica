# Paleta de Cores GENKI

## 🎨 Identidade Visual

A GENKI é uma Clínica de Fisioterapia e Estética que tem como proposta levar **INOVAÇÃO e TRANSFORMAÇÃO**, com foco em beleza natural e medicina oriental. 

A paleta de cores foi desenvolvida para transmitir:
- ✨ Delicadeza e acolhimento
- 🌿 Conexão com a natureza (floresta tropical)
- 💚 Bem-estar e saúde
- 🌸 Feminilidade jovem e moderna

---

## 🌿 Paleta Principal - Verde Floresta Tropical

### Verde Floresta (Principal)
- **HEX:** `#007a5e`
- **HSL:** `166 100% 24%`
- **Uso:** Cor principal da marca, botões primários, CTAs principais
- **Classe Tailwind:** `bg-genki-forest`, `text-genki-forest`

### Verde Médio
- **HEX:** `#429077`
- **HSL:** `162 54% 42%`
- **Uso:** Elementos secundários, hover states, destaques
- **Classe Tailwind:** `bg-genki-green`, `text-genki-green`

### Verde Claro
- **HEX:** `#6aa690`
- **HSL:** `162 34% 55%`
- **Uso:** Backgrounds suaves, cards, áreas de destaque leve
- **Classe Tailwind:** `bg-genki-light`, `text-genki-light`

### Verde Água
- **HEX:** `#8fbcab`
- **HSL:** `162 28% 65%`
- **Uso:** Elementos terciários, bordas suaves
- **Classe Tailwind:** `bg-genki-aqua`

### Verde Menta
- **HEX:** `#b4d2c6`
- **HSL:** `162 26% 76%`
- **Uso:** Backgrounds muito suaves, hover em cards
- **Classe Tailwind:** `bg-genki-mint`, `border-genki-mint`

### Verde Névoa
- **HEX:** `#d9e8e2`
- **HSL:** `162 24% 88%`
- **Uso:** Backgrounds de seção, divisores sutis
- **Classe Tailwind:** `bg-genki-fog`

---

## 🤍 Cores Neutras

### Branco Estrela
- **HEX:** `#f0efe8`
- **HSL:** `45 18% 94%`
- **Uso:** Background principal, texto em fundos escuros
- **Classe Tailwind:** `bg-genki-white`

### Verde Escuro (Textos)
- **HEX:** `#122a22`
- **HSL:** `162 38% 13%`
- **Uso:** Textos principais, títulos, elementos de alto contraste
- **Classe Tailwind:** `text-genki-text`

---

## 🌸 Cor Complementar - Rose Gold

### Rose Gold
- **HEX:** `#f0c4d4`
- **HSL:** `345 71% 85%`
- **Uso:** Acentos delicados, elementos femininos, detalhes especiais
- **Classe Tailwind:** `bg-genki-rose`
- **Arquétipos:** Juventude, delicadeza, feminilidade, acolhimento

---

## 🎨 Gradientes GENKI

### Gradiente Tropical (Principal)
```css
background: linear-gradient(135deg, #007a5e 0%, #429077 50%, #6aa690 100%);
```
**Classe:** `.gradient-tropical`

### Gradiente Primary
```css
background: linear-gradient(135deg, hsl(166 100% 24%) 0%, hsl(162 54% 42%) 100%);
```
**Classe:** `.gradient-primary`

### Gradiente Hero
```css
background: linear-gradient(135deg, hsl(162 38% 13%) 0%, hsl(166 100% 24%) 100%);
```
**Classe:** `.gradient-hero`

### Gradiente Rose
```css
background: linear-gradient(135deg, hsl(345 71% 85%) 0%, hsl(345 71% 75%) 100%);
```
**Classe:** `.gradient-rose`

---

## 📝 Tipografia

### Títulos e Campanhas
- **Font:** Bundaysans Bold
- **Uso:** Títulos principais, headlines, campanhas

### Apoio e Campanhas
- **Font:** Corbel + High Spirit (cursiva)
- **Uso:** Subtítulos, apoio a campanhas, assinatura delicada

### Texto Corpo / Site
- **Font:** Poppins
- **Uso:** Textos corridos, banners, conteúdo geral do site

---

## 🎯 Aplicações Práticas

### Botões Primários
```tsx
<button className="bg-genki-forest text-genki-white hover:bg-genki-green">
  Agendar Consulta
</button>
```

### Cards com Gradiente
```tsx
<div className="gradient-tropical p-6 rounded-lg">
  <h3 className="text-genki-white">Título</h3>
</div>
```

### Seções com Background Suave
```tsx
<section className="bg-genki-fog py-20">
  <h2 className="text-genki-text">Nossos Serviços</h2>
</section>
```

### Elementos Rose Gold (Feminino)
```tsx
<Badge className="bg-genki-rose text-genki-text">
  Novo
</Badge>
```

---

## 🌟 Conceito da Marca

**GENKI** utiliza simbolismo do **beija-flor** e da **flor de cerejeira (Sakura)** em formato delicado e minimalista, representando:
- Delicadeza
- Conexão
- Acolhimento
- Transformação
- Beleza Natural

A identidade busca diferenciação através da **Medicina Oriental** e **Mundo Zen**, contrapondo-se ao padrão do mercado (dourado, azul, rosa pink, medicina ocidental).

---

## ✅ Checklist de Implementação

- [x] Cores CSS Variables configuradas (index.css)
- [x] Paleta Tailwind estendida (tailwind.config.ts)
- [x] Classes utilitárias criadas
- [x] Gradientes definidos
- [x] Modo escuro adaptado
- [ ] Atualizar componentes principais
- [ ] Ajustar páginas específicas
- [ ] Revisar acessibilidade (contraste)

---

**Versão:** 1.0  
**Data:** Janeiro 2026  
**Designer:** Karina Brikalski
