# Changelog - LP-02 Biomo

## Histórico de Desenvolvimento

---

## [1.0.0] - 2024-12-19

### Implementado
- **Estrutura Next.js 16** com App Router
- **Shader Background** com @paper-design/shaders-react MeshGradient
- **Hero Section** com stats animados e badges interativos
- **Seção Serviços** com cards 3D (TiltCard hover effect)
- **Seção Diferenciais** com ícones e descrições
- **Seção Depoimentos** com cards de clientes
- **Seção Vídeos** com 3 Vimeo embeds verticais (9:16)
- **Seção FAQ** com accordion animado
- **Seção Contato** com formulário
- **Footer** completo com links
- **WhatsApp Popup** com triggers de scroll e tempo
- **Modal de Orçamento** com 5 passos
- **Floating CTA** que aparece após scroll
- **Scroll Progress** indicator no topo
- **Páginas legais** (Privacidade, Termos)

### Componentes Criados
- `ShaderBackground` - Background WebGL animado
- `Header` - Navegação com backdrop blur
- `HeroContent` - Conteúdo principal do hero
- `AnimatedNumber` - Números com animação de contagem
- `TiltCard` - Cards com hover 3D
- `ScrollProgress` - Barra de progresso de scroll
- `FloatingCTA` - Botão flutuante
- `FAQItem` - Accordion item
- `WhatsAppPopup` - Popup de WhatsApp
- `QuoteModal` - Modal de orçamento

### Melhorias de UX
- Animações suaves com Framer Motion
- Glassmorphism consistente
- Tipografia responsiva
- Mobile-first design

---

## Versões de Desenvolvimento

### V4 - Polish Final (19/12)
- Header com fontes maiores e backdrop blur melhorado
- Vídeos Vimeo embeddados em formato vertical
- Estilos consistentes com LP-01
- Documentação completa

### V3 - Modal e Interações (18/12)
- Modal de orçamento com 5 passos
- WhatsApp popup com triggers inteligentes
- Floating CTA após scroll
- FAQ accordion funcional

### V2 - Shaders e Animações (17/12)
- MeshGradient shader implementado
- Framer Motion animations
- TiltCard 3D hover effect
- AnimatedNumber counter

### V1 - Estrutura Base (16/12)
- Setup Next.js 16 com TypeScript
- Tailwind CSS v4 configurado
- shadcn/ui integrado
- Layout básico implementado

---

## Dependências Adicionadas

```json
{
  "dependencies": {
    "@paper-design/shaders-react": "^0.0.68",
    "@react-three/fiber": "^9.4.2",
    "three": "^0.182.0",
    "framer-motion": "^12.23.26",
    "gsap": "^3.14.2",
    "lucide-react": "^0.561.0"
  }
}
```

---

## Problemas Resolvidos

### Shader Performance
- **Problema:** Shader causava lag em mobile
- **Solução:** Overlay `bg-black/30` para reduzir carga visual

### Static Export com Shaders
- **Problema:** `next build` falhava com Three.js
- **Solução:** `images: { unoptimized: true }` no next.config.ts

### Vídeos Responsivos
- **Problema:** Vídeos não mantinham aspect ratio
- **Solução:** `padding-top: 176.67%` para 9:16

### Hydration Mismatch
- **Problema:** Erro de hydration com componentes client
- **Solução:** Separar em `home-page-client.tsx` com "use client"

---

## Próximas Melhorias (Backlog)

- [ ] Lighthouse score > 90 em todas métricas
- [ ] Lazy loading para vídeos Vimeo
- [ ] Dark/Light mode toggle
- [ ] Animações de entrada por seção
- [ ] Formulário com validação Zod
- [ ] Integração com CRM/Email
