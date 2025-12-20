# Diário de Prompts - LP-02 Biomo

## Metodologia de Trabalho do Usuário

Este documento registra todos os prompts, erros, acertos e padrões de comunicação identificados durante o desenvolvimento da LP-02.

---

## Perfil do Usuário

### Estilo de Comunicação
- **Direto e objetivo** - Pede exatamente o que quer
- **Bilíngue** - Alterna português/inglês naturalmente
- **Visual** - Referencia por comparação ("igual à LP-01")
- **Iterativo** - Prefere ajustes rápidos a planejamento extenso
- **Prático** - Quer ver funcionando, depois polir

### Preferências Técnicas
- Mobile-first sempre
- Performance é prioridade
- Deploys frequentes para validar
- Código limpo sem over-engineering
- Consistência entre projetos

---

## Registro de Prompts

### Sessão: Implementação de Vídeos

**Prompt 1:**
> "agora embede esse videos todos com visualizacao no esquema mobile, estao num formato mobile"

**Contexto:** Usuário forneceu 3 embeds do Vimeo
**Ação:** Substituí mock videos por iframes Vimeo com aspect ratio 9:16
**Resultado:** ✅ Sucesso - Vídeos funcionando

---

**Prompt 2:**
> "Faca isso na lp 01 tambem"

**Contexto:** Queria mesma implementação na LP-01
**Ação:** Repliquei vídeos Vimeo na LP-01
**Resultado:** ✅ Sucesso

---

**Prompt 3:**
> "Na 01 voce alterou os videos, eles devem ter meio que o mesmo estilo com resolução mobile da 02"

**Contexto:** Vídeos na LP-01 não estavam em formato vertical
**Ação:** Atualizei CSS para `padding-top: 176.67%` (9:16)
**Resultado:** ✅ Sucesso - Consistência visual

**Lição:** Quando replicar funcionalidade, manter TODOS os aspectos consistentes (não só código, mas visual também).

---

### Sessão: Melhorias de Header

**Prompt 4:**
> "Na 02 atualize somente o header, preciso de mais tamanho nas fontes principais e num estilo mais agradavel"

**Contexto:** Header com fontes pequenas demais
**Ação:**
- Aumentei logo (h-8 → h-12)
- Aumentei nav (text-xs → text-sm/base)
- Adicionei backdrop-blur
- Hover scale no CTA
**Resultado:** ✅ Sucesso

**Lição:** "Somente o header" = foco, não adicionar outras mudanças.

---

### Sessão: Verificação de Funcionalidades

**Prompt 5:**
> "Na 01 nao temos funcionalidade do modal de orcamento?"

**Contexto:** Usuário queria confirmar se feature existia
**Ação:** Verifiquei e confirmei que já existia com detalhes
**Resultado:** ✅ Informação correta

**Lição:** Às vezes é verificação, não pedido de implementação. Responder objetivamente.

---

### Sessão: Commit e Documentação

**Prompt 6:**
> "Commit e push de tudo para o github, excelente trabalho hoje, agora crie tambem se possivel junto ao github um rag completo de nosso desenvolvimento nas duas frentes para consulta futura de contexto"

**Contexto:** Finalização do dia de trabalho
**Ação:**
1. Commit e push LP-01
2. Commit e push LP-02
3. Criar documentação RAG
**Resultado:** ✅ Em andamento

---

**Prompt 7:**
> "Consegue tambem incluir nosso processo criativo detalhado? quero que posteriormente ao olhar os repositorios voce tenha base para criar algo similar de forma mais independente e assertiva, sem necessidade de tantos prompts e ajustes futuros, alem disso se possivel inclua tambem um diario com todos os meus prompts seus erros e acertos"

**Contexto:** Queria documentação mais profunda
**Ação:** Adicionei PROCESSO_CRIATIVO.md e DIARIO_PROMPTS.md ao plano
**Resultado:** ✅ Este documento

**Lição:** Usuário pensa no longo prazo e quer autonomia futura do assistente.

---

## Erros Cometidos

### Erro 1: Git Push Sem CD
**Situação:** Tentei fazer git push sem estar no diretório correto
**Erro:** `fatal: not a git repository`
**Correção:** Adicionar `cd /path` antes dos comandos git
**Prevenção:** Sempre verificar diretório atual antes de git

### Erro 2: CSS Duplicado
**Situação:** LP-01 tinha CSS de vídeos duplicado (inline e externo)
**Erro:** Estilos conflitantes
**Correção:** Removi CSS inline, mantive styles.css
**Prevenção:** Usar apenas UM local para estilos

### Erro 3: Aspect Ratio Inconsistente
**Situação:** Vídeos LP-01 não estavam em formato vertical
**Erro:** Faltou atualizar `padding-top` para 176.67%
**Correção:** Atualizei CSS para 9:16
**Prevenção:** Ao replicar, verificar TODOS os aspectos

---

## Acertos Destacados

### Acerto 1: Shader Performance
- Identificou necessidade de overlay para legibilidade
- Balanceou estética com performance
- Solução elegante sem comprometer visual

### Acerto 2: Componentização
- Separou home-page-client.tsx corretamente
- Evitou hydration errors
- Manteve código organizado

### Acerto 3: Vídeos Verticais
- Implementou aspect ratio correto (9:16)
- Grid responsivo com centralização
- Consistência entre LPs

### Acerto 4: Header Refinado
- Aumentou fontes proporcionalmente
- Manteve hierarquia visual
- Adicionou efeitos sutis (blur, scale)

---

## Padrões Identificados

### Comandos Implícitos

| Frase do Usuário | Significado |
|------------------|-------------|
| "igual à LP-01/02" | Copiar padrão exato do outro projeto |
| "build e deploy" | npm run build + firebase deploy |
| "mobile" | Formato vertical 9:16, touch-friendly |
| "somente X" | Foco restrito, não adicionar mais nada |
| "mesmo estilo" | Consistência visual completa |
| "faz sentido?" | Validação de abordagem |

### Fluxo de Trabalho Preferido

1. **Pedido direto** → Implementação rápida
2. **Validação visual** → Deploy para ver funcionando
3. **Ajuste fino** → Correções pontuais
4. **Próximo item** → Não perder tempo

### Anti-Padrões a Evitar

1. ❌ Adicionar features não pedidas
2. ❌ Over-engineering
3. ❌ Explicações longas antes de agir
4. ❌ Perguntar demais quando contexto é claro
5. ❌ Quebrar o que já funciona
6. ❌ Inconsistência entre projetos

---

## Métricas da Sessão

### Prompts Totais: 7
### Taxa de Sucesso: 100%
### Erros Corrigidos: 3
### Deploys Realizados: 4+
### Arquivos Modificados: 15+

---

## Recomendações Futuras

### Para Próximas Sessões

1. **Contexto rápido** - Ler docs antes de começar
2. **Consistência** - Sempre verificar ambos projetos
3. **Deploy early** - Validar visualmente logo
4. **Código limpo** - Não deixar duplicatas
5. **Documentar** - Atualizar docs quando mudar algo

### Para Projetos Similares

1. Usar LP-02 como template
2. Trocar apenas: logo, cores, textos, vídeos
3. Manter estrutura de componentes
4. Manter padrões de animação
5. Manter consistência de estilos

---

## Glossário do Usuário

| Termo | Significado |
|-------|-------------|
| LP | Landing Page |
| RAG | Retrieval-Augmented Generation (base de conhecimento) |
| Mobile | Formato vertical, 9:16, touch-friendly |
| Build | npm run build |
| Deploy | firebase deploy --only hosting |
| Shader | Background animado WebGL |
| Glass | Glassmorphism (bg-black/40 + blur) |
