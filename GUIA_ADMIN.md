# Guia de Uso - Área de Administração

## Como Acessar

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse o login de administração:
   - URL: `http://localhost:8080/admin/login`
   - Email: `admin@genki.com.br`
   - Senha: `genkiadmin2026`

## Funcionalidades Implementadas

### 1. Gerenciamento de Informações das Salas

**Aba: Informações**

- Visualizar todas as salas cadastradas
- Ativar/Desativar salas (clique no badge)
- Editar informações básicas:
  - Nome
  - Descrição
  - Área
  - Preço por hora
- Ver equipamentos de cada sala

### 2. Gerenciamento de Fotos

**Aba: Fotos**

**Funcionalidades:**
- Upload de imagens (2 métodos):
  1. **Arquivo**: Selecione imagens do seu computador
     - Compressão automática para max 500KB
     - Conversão para base64 (armazenado no localStorage)
  2. **URL**: Cole o link de uma imagem externa

- **Limite**: 5 fotos por sala
- **Preview**: Veja todas as fotos adicionadas
- **Remover**: Passe o mouse sobre a foto e clique no X

**Como usar:**
1. Clique em "Adicionar Foto"
2. Escolha entre:
   - Tab "Upload": Selecione arquivo(s)
   - Tab "URL": Cole o link da imagem
3. A foto aparecerá automaticamente

### 3. Calendário de Disponibilidade

**Aba: Disponibilidade**

#### 3.1 Seletor de Sala
- Escolha qual sala deseja gerenciar a disponibilidade

#### 3.2 Horário Semanal Padrão
- Defina o horário de funcionamento para cada dia da semana
- Marque/desmarque checkbox para habilitar/desabilitar dias
- Configure horário de início e fim
- Exemplo: Seg-Sex 08:00-20:00, Sáb 08:00-14:00, Dom fechado

#### 3.3 Calendário Mensal
**Legenda de Cores:**
- 🟢 Verde: Totalmente disponível
- 🟡 Amarelo: Parcialmente bloqueado (alguns horários ocupados)
- 🔴 Vermelho: Completamente bloqueado
- ⚪ Cinza: Fechado (horário semanal)

**Como bloquear horários:**
1. Clique em um dia no calendário
2. Abrirá um modal com horários de 07:00 às 20:00
3. Clique nos horários para bloquear/liberar
4. Use "Bloquear Todos" ou "Liberar Todos" para ações rápidas
5. Clique "Salvar Alterações"

**Estatísticas:**
- Dias completamente bloqueados
- Dias com restrições parciais

### 4. Visualização de Clientes Cadastrados

**Rota: `/admin/clientes`**

- Ver todos os usuários registrados
- Buscar por nome, email, telefone ou profissão
- Deletar usuários
- Estatísticas de cadastros

## Armazenamento de Dados

Todos os dados são armazenados no **localStorage** do navegador:

```javascript
// Verificar dados no console do navegador:
localStorage.getItem('salas')              // Informações das salas e fotos
localStorage.getItem('salaAvailability')    // Disponibilidade das salas
localStorage.getItem('registeredUsers')     // Usuários cadastrados
```

### Backup Manual

Para fazer backup dos dados:

1. Abra o DevTools (F12)
2. Vá em Console
3. Execute:
   ```javascript
   const backup = {
     salas: localStorage.getItem('salas'),
     availability: localStorage.getItem('salaAvailability'),
     users: localStorage.getItem('registeredUsers')
   };
   console.log(JSON.stringify(backup));
   ```
4. Copie o JSON retornado e salve em arquivo

### Restaurar Backup

1. No Console do DevTools:
   ```javascript
   const backup = { /* cole o JSON do backup aqui */ };
   localStorage.setItem('salas', backup.salas);
   localStorage.setItem('salaAvailability', backup.availability);
   localStorage.setItem('registeredUsers', backup.users);
   location.reload();
   ```

## Limitações

1. **Tamanho do localStorage**: ~5-10MB (varia por navegador)
   - Imagens são comprimidas automaticamente para 500KB
   - Limite de 5 fotos por sala

2. **Sem sincronização**: Dados não sincronizam entre dispositivos

3. **Cache**: Se limpar dados do navegador, perderá as informações

4. **Concorrência**: Dois admins editando simultaneamente em navegadores diferentes podem sobrescrever mudanças

## Fluxo de Trabalho Recomendado

### Configuração Inicial de uma Sala

1. **Informações**: Edite nome, descrição, área e preço
2. **Fotos**: Adicione 5 fotos de qualidade
3. **Horário Semanal**: Defina quando a sala funciona
4. **Calendário**: Marque bloqueios específicos (feriados, manutenção)
5. **Ativar**: Certifique-se que a sala está "Ativa"

### Gestão do Dia a Dia

1. **Segunda-feira**: Revise calendário da semana
2. **Conforme necessário**: Bloqueie horários manualmente
3. **Fim do mês**: Revise próximo mês e bloqueie feriados
4. **Manutenção**: Inative sala temporariamente se em reforma

## Dicas

- 💡 Use fotos de boa qualidade e bem iluminadas
- 💡 Atualize o horário semanal durante feriados prolongados
- 💡 Teste sempre em modo privado/anônimo após mudanças importantes
- 💡 Faça backup mensal dos dados
- 💡 Mantenha no máximo 6 meses de bloqueios futuros para melhor performance

## Problemas Comuns

**Fotos não aparecem?**
- Verifique se a URL está correta
- Se upload de arquivo, verifique tamanho (max 5MB antes da compressão)

**Calendário não salva?**
- Verifique console do navegador (F12) por erros
- Confirme que clicou em "Salvar Alterações"

**Dados sumiram?**
- Verificar se limpou cache do navegador
- Restaurar do último backup

**Performance lenta?**
- Reduza número de bloqueios no calendário
- Limite-se a 6 meses de disponibilidade futura
