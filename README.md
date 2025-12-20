# LP Biomo v2 - Landing Page Premium com MeshGradient Shader

Landing Page Premium para a Biomo - Agencia de Marketing Digital, utilizando React, Next.js 16 e shader WebGL MeshGradient.

## URLs

- **Producao:** https://lp-biomo-natan-02.web.app
- **Firebase Console:** https://console.firebase.google.com/project/lp-biomo-natan-02

## Stack Tecnologica

| Tecnologia | Versao | Funcao |
|------------|--------|--------|
| Next.js | 16.0.10 | Framework React com App Router |
| React | 19.2.1 | Biblioteca UI |
| TypeScript | 5.x | Tipagem estatica |
| Tailwind CSS | v4 | Estilizacao utility-first |
| Three.js | 0.182.0 | WebGL 3D |
| React Three Fiber | 9.4.2 | Three.js para React |
| @paper-design/shaders-react | 0.0.68 | Shader MeshGradient |
| Framer Motion | 12.23.26 | Animacoes React |
| GSAP | 3.14.2 | Animacoes avancadas |
| Lucide React | 0.561.0 | Icones |
| Firebase Hosting | - | Deploy e hospedagem |

## Estrutura do Projeto

```
lp-biomo-natan-02/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Layout principal (RSC)
│   │   ├── page.tsx             # Pagina inicial
│   │   ├── globals.css          # Estilos globais Tailwind
│   │   ├── privacidade/         # Politica de privacidade
│   │   └── termos/              # Termos de uso
│   ├── components/
│   │   ├── home-page-client.tsx # Componente cliente principal
│   │   └── ui/
│   │       ├── shaders-hero-section.tsx  # Hero com shader
│   │       ├── quote-modal.tsx           # Modal de orcamento
│   │       ├── whatsapp-popup.tsx        # WhatsApp popup
│   │       └── animated-number.tsx       # Numeros animados
│   └── lib/
│       └── utils.ts             # Funcoes utilitarias (cn)
├── public/
│   └── assets/                  # Logos e imagens
├── docs/                        # Documentacao completa
│   ├── ARQUITETURA.md
│   ├── COMPONENTES.md
│   ├── ESTILOS.md
│   ├── FUNCIONALIDADES.md
│   ├── DEPLOY.md
│   ├── CHANGELOG.md
│   ├── PROCESSO_CRIATIVO.md
│   └── DIARIO_PROMPTS.md
├── out/                         # Build estatico exportado
├── package.json
├── next.config.ts
├── firebase.json
└── README.md
```

## Funcionalidades

- **Shader Background** - MeshGradient animado com cores da marca
- **Hero Section** - Stats animados, badges interativos, CTAs
- **Servicos** - Cards com hover 3D (TiltCard)
- **Depoimentos** - Cards de clientes
- **Videos** - 3 embeds Vimeo em formato vertical (9:16)
- **FAQ** - Accordion animado
- **Modal de Orcamento** - Wizard de 5 passos com calculo dinamico
- **WhatsApp Popup** - Triggers por scroll e tempo
- **Floating CTA** - Botao flutuante apos scroll
- **Scroll Progress** - Indicador no topo

## Comandos

```bash
# Desenvolvimento
npm run dev

# Build para producao
npm run build

# Deploy para Firebase
npm run build && cmd.exe /c "firebase deploy --only hosting --project lp-biomo-natan-02"

# Preview local do build
npx serve out
```

## Cores da Marca

| Cor | Hex | Uso |
|-----|-----|-----|
| Roxo Principal | `#a800d2` | Cor primaria, destaques |
| Roxo Escuro | `#7b00a0` | Gradientes |
| Roxo Claro | `#c86bdb` | Hover, accents |
| Preto | `#000000` | Background |
| Branco | `#ffffff` | Textos |

## Documentacao

Consulte a pasta `/docs` para documentacao detalhada:

- [Arquitetura](docs/ARQUITETURA.md) - Stack e estrutura
- [Componentes](docs/COMPONENTES.md) - Documentacao de componentes
- [Estilos](docs/ESTILOS.md) - Sistema de design
- [Funcionalidades](docs/FUNCIONALIDADES.md) - Features implementadas
- [Deploy](docs/DEPLOY.md) - Instrucoes de deploy
- [Changelog](docs/CHANGELOG.md) - Historico de versoes
- [Processo Criativo](docs/PROCESSO_CRIATIVO.md) - Decisoes de design
- [Diario de Prompts](docs/DIARIO_PROMPTS.md) - Metodologia de desenvolvimento

## Licenca

Projeto proprietario - Biomo Agencia de Marketing Digital

---

Desenvolvido com Claude Code
