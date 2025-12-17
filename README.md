# LP Biomo v2 - Landing Page Premium com Neural Network Shader

Landing Page Premium para a Biomo - Agência de Marketing Digital, utilizando React, Next.js e um shader WebGL de rede neural (CPPN).

## Sobre o Projeto

Este projeto é a segunda versão da landing page da Biomo, agora construída com tecnologias modernas:

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização utility-first
- **Three.js + React Three Fiber** - WebGL 3D
- **GSAP** - Animações fluidas
- **shadcn/ui** - Componentes de UI

## Diferencial: Neural Network Shader

O background da landing page utiliza um shader CPPN (Compositional Pattern Producing Network) que gera padrões visuais orgânicos e hipnóticos em tempo real.

### Características do Shader

- Padrões gerados por rede neural
- Animação contínua e suave
- Alta performance com WebGL
- Transições fluidas com GSAP

## Estrutura do Projeto

```
lp-biomo-natan-02/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globais
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Página principal
│   ├── components/
│   │   └── ui/
│   │       └── neural-network-hero.tsx  # Componente Hero com shader
│   └── lib/
│       └── utils.ts         # Utilitários
├── package.json
├── tailwind.config.ts
└── README.md
```

## Seções da Landing Page

1. **Hero** - Headline + shader background + CTAs
2. **Serviços** - Sites, SEO, Tráfego Pago
3. **Resultados** - Métricas e cases
4. **Diferenciais** - Garantia, metodologia, suporte
5. **Contato** - WhatsApp + E-mail
6. **Footer** - Links legais

## Instalação

```bash
# Clonar repositório
git clone https://github.com/agencia-biomo/lp-biomo-natan-02.git
cd lp-biomo-natan-02

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Dependências Principais

- `next` - Framework React
- `react` / `react-dom` - Biblioteca UI
- `three` - WebGL 3D
- `@react-three/fiber` - React renderer para Three.js
- `@react-three/drei` - Helpers para R3F
- `gsap` / `@gsap/react` - Animações
- `lucide-react` - Ícones
- `tailwindcss` - CSS

## Deploy

Este projeto pode ser deployado em:

- **Vercel** (recomendado)
- **Netlify**
- **Firebase Hosting**

```bash
# Build de produção
npm run build

# Preview local
npm run start
```

## Cores da Marca

| Cor | Hex | Uso |
|-----|-----|-----|
| Roxo Principal | `#a800d2` | Cor primária, destaques |
| Roxo Escuro | `#7b00a0` | Gradientes |
| Roxo Claro | `#c86bdb` | Hover, accents |
| Preto | `#000000` | Background |
| Branco | `#ffffff` | Textos |

## Licença

Projeto proprietário - Biomo Agência de Marketing Digital

---

Desenvolvido com Claude Code
