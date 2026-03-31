# 🎯 Guia Rápido - Nova Estrutura GENKI

## ⚡ O que mudou em 3 linhas

| Antes | Depois |
|-------|--------|
| ❌ Usuários precisavam fazer login | ✅ Usuários navegam LIVRE |
| ❌ Salas sem fotos/vídeos | ✅ Cada sala: 5 fotos + 1 vídeo |
| ❌ Sem integração WhatsApp | ✅ Botão "Alugar" abre WhatsApp |

---

## 🔐 Credenciais Admin

```
Email: admin@genki.com.br
Senha: genkiadmin2026
```

**Acessar**: http://localhost:5173/admin/login

---

## 🗂️ Onde Estão as Coisas

### 📊 Para Usuários
- **Ver Salas**: `/aluguel-salas`
- **Detalhes da Sala**: `/aluguel-salas/{id}`
- **Galeria**: Clique "Ver Detalhes" em qualquer sala

### 🔧 Para Admin
- **Login**: `/admin/login`
- **Painel**: `/admin/dashboard`
- **Gerenciar Salas**: `/admin/salas`

---

## 🎨 Funcionalidades Principais

### 👤 Para Usuários
- ✅ Ver todas as 5 salas em grid
- ✅ Clicar para ver detalhes completos
- ✅ Galeria interativa (fotos com nav anterior/próxima)
- ✅ Reproduzir vídeo da sala
- ✅ Alugar via WhatsApp (pré-preenchido com nome da sala)

### 🔐 Para Admin
- ✅ Gerenciar informações das salas
- ✅ Adicionar/remover fotos (máx 5)
- ✅ Adicionar/remover vídeo
- ✅ Ativar/desativar salas
- ✅ Logout seguro

---

## 📸 Estrutura de Uma Sala

Cada sala tem:
```
┌─ Sala
├─ Nome (ex: "Sala 01 - Estética")
├─ Descrição
├─ Área (ex: "18m²")
├─ Preço/hora (ex: R$ 150)
├─ Equipamentos (lista)
├─ Fotos: [5 imagens]
│  ├─ Foto 1
│  ├─ Foto 2
│  ├─ Foto 3
│  ├─ Foto 4
│  └─ Foto 5
└─ Vídeo: [1 vídeo YouTube]
```

---

## 🎬 Fluxo de Uso - Usuário

```
1. Abre http://localhost:5173/aluguel-salas
   ↓
2. Vê grid com 5 salas (sem login!)
   ↓
3. Clica em "Ver Detalhes"
   ↓
4. Abre página com:
   - Galeria de fotos (anterior/próxima)
   - Miniaturas abaixo
   - Vídeo (clique para abrir em modal)
   - Lista de equipamentos
   ↓
5. Clica "Alugar via WhatsApp"
   ↓
6. Abre WhatsApp com mensagem pré-preenchida
   Exemplo: "Olá! Gostaria de alugar a Sala 01 - Estética..."
```

---

## 🔐 Fluxo de Uso - Admin

```
1. Abre http://localhost:5173/admin/login
   ↓
2. Entra com:
   Email: admin@genki.com.br
   Senha: genkiadmin2026
   ↓
3. Vê Dashboard com botão "Gerenciar Salas"
   ↓
4. Clica em "Gerenciar Salas e Mídias"
   ↓
5. Vê 2 abas:
   
   [ABA 1: SALAS]
   - Lista todas as salas
   - Clique para editar nome/descrição/preço
   - Toggle ativo/inativo
   
   [ABA 2: MÍDIAS]
   - Para cada sala:
     - Galeria atual (fotos que já tem)
     - Botão para adicionar foto (URL)
     - Máximo 5 fotos
     - Botão para adicionar vídeo (URL YouTube embed)
     - Botões para remover fotos/vídeo
```

---

## 🔗 Integração WhatsApp

Botões "Alugar" levam a:
```
https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20alugar%20a%20Sala%2001...
```

**Alterar número**:
- Abra `src/pages/AluguelSalasPage.tsx` linha ~55
- Abra `src/pages/SalaDetalhesPage.tsx` linha ~55
- Mude `/5511999999999` para seu número (com código do país)

---

## 📁 Arquivo de Dados

As salas estão em: `src/data/salasData.ts`

```typescript
export const salas: Sala[] = [
  {
    id: '1',
    nome: 'Sala 01 - Estética',
    // ... dados da sala
    fotos: [ ... ], // 5 fotos
    video: { ... }  // 1 vídeo
  },
  // ... mais 4 salas
];
```

**Para editar salas permanentemente**, altere este arquivo.

---

## ⚠️ Coisas Importantes

1. **Dados em Memória**: Ao recarregar página, alterações se perdem
   - Solução: Use Firebase/Supabase para persistência

2. **URLs de Imagens**: São exemplos da Unsplash
   - Para produção, faça upload em Cloudinary/AWS S3

3. **Vídeos**: URLs devem ser embeds do YouTube
   - Formato: `https://www.youtube.com/embed/VIDEO_ID`

4. **Sessão do Admin**: Limpa ao fechar navegador
   - Token armazenado em sessionStorage (não localStorage)

---

## 🎓 Estrutura de Pastas

```
src/
├── contexts/
│   ├── AdminContext.tsx          ← NOVO: Context do admin
│   └── AuthContext.tsx           ← (mantido, mas não usado para admin)
├── data/
│   ├── salasData.ts              ← NOVO: Dados das salas
│   └── mockData.ts               ← (antigo)
├── pages/
│   ├── AluguelSalasPage.tsx       ← ATUALIZADO: Sem login, novo design
│   ├── SalaDetalhesPage.tsx       ← NOVO: Galeria + vídeo
│   └── admin/
│       ├── AdminLogin.tsx         ← ATUALIZADO: Usa AdminContext
│       ├── AdminDashboard.tsx     ← ATUALIZADO: Simplificado
│       └── AdminSalasPage.tsx     ← NOVO: Gerenciar salas + mídias
└── App.tsx                        ← ATUALIZADO: Novas rotas
```

---

## 🚀 Para Desenvolvedores

### Adicionar nova sala
1. Abra `src/data/salasData.ts`
2. Adicione novo objeto à array `salas`
3. Preencha com 5 fotos e 1 vídeo
4. Teste em http://localhost:5173/aluguel-salas

### Mudar número do WhatsApp
1. Procure por `/5511999999999` no código
2. Substitua pelo seu número (formato: 55 + DDI + número sem formatação)

### Adicionar nova funcionalidade ao painel
1. Crie novo arquivo em `src/pages/admin/`
2. Adicione rota no `App.tsx`
3. Use `useAdmin()` para verificar autenticação

---

**Dúvidas? Veja os arquivos MUDANCAS.md e IMPLEMENTACAO.md para detalhes! 🎉**
