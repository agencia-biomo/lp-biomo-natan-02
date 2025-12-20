# Processo Criativo - LP-02 Biomo

## Contexto para Autonomia Futura

Este documento registra o processo criativo e decisões de design para que futuras iterações possam ser feitas de forma mais independente.

---

## 1. Briefing Original

### Cliente
- **Empresa:** Agência Biomo
- **Segmento:** Marketing digital, desenvolvimento web, tráfego pago
- **Objetivo:** Landing page moderna para captação de leads

### Requisitos Iniciais
1. Design premium e moderno
2. Animações diferenciadas
3. Foco em conversão
4. Mobile-first
5. Diferencial visual (shaders)

### Público-Alvo
- Empresários e empreendedores
- Gestores de marketing
- Profissionais liberais
- PMEs buscando presença digital

---

## 2. Referências Visuais

### Inspirações Técnicas
- **Apple.com** - Animações suaves, tipografia clean
- **Linear.app** - Glassmorphism, dark mode
- **Vercel.com** - Shaders de fundo, modernidade
- **Stripe.com** - Gradientes, profissionalismo

### Elementos Inspiradores
- Shaders animados como diferencial
- Glassmorphism em cards
- Números animados para estatísticas
- Hover effects 3D

---

## 3. Decisões de Design

### Paleta de Cores

| Cor | Hex | Decisão |
|-----|-----|---------|
| Roxo Principal | #a800d2 | Cor da marca Biomo, vibrante e premium |
| Roxo Escuro | #7b00a0 | Profundidade em gradientes |
| Roxo Claro | #c86bdb | Highlights e hover states |
| Preto | #000000 | Background base, elegância |
| Branco | #ffffff | Texto, contraste máximo |

**Por que roxo?**
- Representa criatividade e inovação
- Diferencia de concorrentes (azul corporativo comum)
- Transmite premium e sofisticação
- Funciona bem em dark mode

### Tipografia

- **Fonte:** Inter (system-ui fallback)
- **Peso H1:** extralight (200) - Elegância, leveza
- **Peso Body:** light (300) - Legibilidade
- **Peso CTAs:** medium (500) - Destaque

**Por que Inter?**
- Otimizada para telas
- Excelente legibilidade
- Carrega rápido via system-ui
- Versátil em todos os tamanhos

### Layout

- **Approach:** Mobile-first
- **Max-width:** Container fluído
- **Grid:** CSS Grid com auto-fit
- **Spacing:** Escala Tailwind padrão

**Decisões:**
1. Hero fullscreen com shader
2. Seções com padding generoso
3. Cards com max-width para leitura
4. Dividers sutis entre seções

### Efeitos Visuais

1. **Shader Background**
   - MeshGradient CPPN
   - Velocidade 0.3 (sutil)
   - Cores da marca
   - Overlay para legibilidade

2. **Glassmorphism**
   - `bg-black/40`
   - `backdrop-blur-md`
   - `border-white/10`
   - Profundidade sem peso visual

3. **Hover 3D (TiltCard)**
   - Rotação max ±10 graus
   - Spring animation
   - GPU accelerated

4. **Scroll Animations**
   - Fade in up para seções
   - Stagger em listas
   - Once: true (não repete)

---

## 4. Iterações do Projeto

### Versão 1 - Estrutura
- Setup Next.js 16
- Layout básico HTML/CSS
- Seções estáticas
- **Feedback:** Precisa de mais vida

### Versão 2 - Shaders
- Implementação MeshGradient
- Animações Framer Motion
- TiltCard hover
- **Feedback:** Muito bom, falta interatividade

### Versão 3 - Interações
- Modal de orçamento
- WhatsApp popup
- Floating CTA
- FAQ accordion
- **Feedback:** Quase pronto, falta vídeos

### Versão 4 - Polish
- Vídeos Vimeo embeddados
- Header melhorado
- Ajustes de tipografia
- Consistência com LP-01
- **Feedback:** Aprovado!

---

## 5. Padrões de Qualidade

### Checklist Visual
- [ ] Contraste WCAG AA em textos
- [ ] Espaçamento consistente
- [ ] Alinhamentos corretos
- [ ] Hover states em todos clicáveis
- [ ] Focus states para acessibilidade

### Checklist Técnico
- [ ] Build sem erros
- [ ] Console limpo
- [ ] Performance > 85 Lighthouse
- [ ] Responsivo 320px-2560px
- [ ] Cross-browser (Chrome, Safari, Firefox)

### Checklist UX
- [ ] CTAs claros e visíveis
- [ ] Scroll suave
- [ ] Loading states onde necessário
- [ ] Feedback visual em interações
- [ ] Mobile touch-friendly

---

## 6. Lições Aprendidas

### O Que Funcionou

1. **Shader como diferencial**
   - Cria identidade única
   - Impressiona visitantes
   - Justifica posicionamento premium

2. **Glassmorphism consistente**
   - Unifica visual
   - Funciona em qualquer fundo
   - Moderno sem ser datado

3. **Animações sutis**
   - Spring animations naturais
   - Once: true economiza recursos
   - Não distrai do conteúdo

4. **Mobile-first real**
   - Funciona em qualquer device
   - Performance melhor
   - UX consistente

### O Que Evitar

1. **Over-engineering**
   - Não adicionar features não pedidas
   - Manter código simples
   - Evitar abstrações prematuras

2. **Animações excessivas**
   - Máximo 2-3 efeitos por viewport
   - Duração curta (0.3-0.6s)
   - Sempre com purpose

3. **Dependências desnecessárias**
   - Avaliar bundle size
   - Preferir CSS quando possível
   - Tree-shaking ativo

4. **Complexidade prematura**
   - YAGNI (You Aren't Gonna Need It)
   - Resolver problema atual
   - Refatorar quando necessário

---

## 7. Guia para Recriação

### Para criar LP similar:

1. **Setup**
   ```bash
   npx create-next-app@latest --typescript
   npm install @paper-design/shaders-react framer-motion
   ```

2. **Estrutura**
   - `/src/app/page.tsx` → Server component wrapper
   - `/src/components/home-page-client.tsx` → Client component principal
   - `/src/components/ui/` → Componentes reutilizáveis

3. **Shader Background**
   ```tsx
   <MeshGradient
     colors={["#000", "#cor1", "#cor2", "#cor3", "#cor4"]}
     speed={0.3}
   />
   ```

4. **Animações**
   ```tsx
   <motion.div
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
   />
   ```

5. **Cards Glass**
   ```tsx
   className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl"
   ```

6. **Deploy**
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

---

## 8. Personalização por Cliente

### Elementos a Trocar

| Elemento | Localização | Como Trocar |
|----------|-------------|-------------|
| Logo | `/public/assets/` | Substituir SVG |
| Cores | MeshGradient colors | Array de 5 hex |
| Textos | home-page-client.tsx | Props/constantes |
| Vídeos | Vimeo IDs | src do iframe |
| WhatsApp | whatsapp-popup.tsx | phoneNumber prop |
| Contato | Formulário | action/handler |

### Seções Opcionais
- FAQ (remover se não tiver perguntas)
- Vídeos (remover se não tiver)
- Depoimentos (mínimo 3 recomendado)

---

## 9. Métricas de Sucesso

### KPIs Técnicos
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Bundle < 500KB

### KPIs de Conversão
- CTR em CTAs > 5%
- Scroll depth > 70%
- Form completion > 10%
- Bounce rate < 40%

---

## 10. Próximos Passos Sugeridos

1. **Formulário funcional** - Integrar com CRM/Email
2. **Analytics** - GA4 + eventos customizados
3. **A/B Testing** - Testar variações de CTA
4. **SEO** - Meta tags, sitemap, robots.txt
5. **Performance** - Image optimization, lazy loading
