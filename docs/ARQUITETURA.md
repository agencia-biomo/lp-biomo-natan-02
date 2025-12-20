# Arquitetura - LP-02 Biomo

## Stack Tecnológica

| Tecnologia | Versão | Função |
|------------|--------|--------|
| Next.js | 16.0.10 | Framework React com App Router |
| React | 19.2.1 | Biblioteca UI |
| TypeScript | 5.x | Tipagem estática |
| Tailwind CSS | v4 | Estilização utility-first |
| Three.js | 0.182.0 | WebGL 3D |
| React Three Fiber | 9.4.2 | Three.js para React |
| @paper-design/shaders-react | 0.0.68 | Shader CPPN |
| Framer Motion | 12.23.26 | Animações React |
| GSAP | 3.14.2 | Animações avançadas |
| shadcn/ui | - | Componentes UI |
| Lucide React | 0.561.0 | Ícones |
| Firebase Hosting | - | Deploy e hospedagem |

## Estrutura de Pastas

```
lp-biomo-natan-02/
├── src/
│   ├── app/                          # App Router (Next.js 14+)
│   │   ├── layout.tsx               # Layout principal (RSC)
│   │   ├── page.tsx                 # Página inicial
│   │   ├── globals.css              # Estilos globais Tailwind
│   │   ├── icon.svg                 # Favicon
│   │   ├── privacidade/
│   │   │   └── page.tsx             # Política de privacidade
│   │   └── termos/
│   │       └── page.tsx             # Termos de uso
│   ├── components/
│   │   ├── home-page-client.tsx     # Componente cliente principal
│   │   └── ui/
│   │       ├── neural-network-hero.tsx    # Hero com shader
│   │       ├── shaders-hero-section.tsx   # Hero otimizado
│   │       ├── quote-modal.tsx            # Modal de orçamento
│   │       ├── whatsapp-popup.tsx         # WhatsApp popup
│   │       └── animated-number.tsx        # Números animados
│   └── lib/
│       └── utils.ts                 # Funções utilitárias (cn)
├── public/                          # Assets estáticos
│   └── assets/
│       ├── logo-biomo.svg
│       └── logo-biomo-mini.svg
├── out/                             # Build estático exportado
├── node_modules/                    # Dependências
├── package.json                     # Dependências e scripts
├── tsconfig.json                    # Configuração TypeScript
├── next.config.ts                   # Configuração Next.js
├── tailwind.config.ts               # Configuração Tailwind
├── components.json                  # Configuração shadcn/ui
├── firebase.json                    # Config Firebase Hosting
└── README.md                        # Documentação principal
```

## Padrões de Código

### React/Next.js
- **App Router** com React Server Components
- **"use client"** para componentes interativos
- **Composição** de componentes pequenos e reutilizáveis
- **Props tipadas** com TypeScript interfaces

### Tailwind CSS
- **Utility-first** com classes compostas
- **Variantes responsivas** (sm:, md:, lg:, xl:)
- **Estados** (hover:, focus:, active:)
- **Função cn()** para merge de classes condicionais

### Animações
- **Framer Motion** para animações declarativas
- **GSAP** para animações complexas/timeline
- **CSS transitions** para hover simples

## Decisões Arquiteturais

### Por que Next.js 16?
1. **App Router** - Melhor performance e streaming
2. **React Server Components** - Menos JS no cliente
3. **Static Export** - Compatível com Firebase Hosting
4. **TypeScript nativo** - DX melhorada

### Por que @paper-design/shaders-react?
1. **MeshGradient pronto** - Shader CPPN sem GLSL manual
2. **React-friendly** - Componente declarativo
3. **Performance** - Otimizado para React
4. **Configurável** - Cores e velocidade customizáveis

### Por que Tailwind CSS v4?
1. **Performance** - CSS gerado menor
2. **PostCSS** - Integração nativa
3. **CSS Variables** - Temas dinâmicos
4. **shadcn/ui** - Componentes prontos

### Por que Framer Motion + GSAP?
1. **Framer Motion** - Animações declarativas simples
2. **GSAP** - Scroll animations e timelines complexas
3. **Complementares** - Cada um para seu caso de uso

## Fluxo de Dados

```
layout.tsx (RSC - Server)
    ↓
page.tsx (RSC - Importa client component)
    ↓
home-page-client.tsx ("use client")
    ├── ShaderBackground (WebGL via MeshGradient)
    ├── Header (navegação)
    ├── HeroContent (stats, badges, CTAs)
    ├── ServicesSection (cards)
    ├── TestimonialsSection (depoimentos)
    ├── VideosSection (Vimeo embeds)
    ├── FAQSection (accordion)
    ├── ContactSection (form)
    ├── Footer
    ├── WhatsAppPopup (fixed)
    ├── FloatingCTA (fixed)
    └── ScrollProgress (fixed)
```

## Build e Deploy

### Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

### Static Export

```typescript
// next.config.ts
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
};
```

## Performance Targets

| Métrica | Target | Notas |
|---------|--------|-------|
| LCP | < 2.5s | Shader pode impactar |
| FID | < 100ms | OK com React 19 |
| CLS | < 0.1 | Layout estável |
| Bundle | < 500KB | Após tree-shaking |
