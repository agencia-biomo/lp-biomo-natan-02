# Sistema de Estilos - LP-02 Biomo

## Tailwind CSS v4

### Configuração

**postcss.config.mjs**
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {}
  }
}
```

**globals.css**
```css
@import "tailwindcss";
```

---

## Paleta de Cores

### Cores Principais (Tailwind)

| Classe | Hex | Uso |
|--------|-----|-----|
| `purple-600` | #9333ea | CTAs, destaques |
| `purple-500` | #a855f7 | Hover states |
| `purple-400` | #c084fc | Accents |
| `purple-900` | #581c87 | Sombras |

### Cores Customizadas (CSS/Inline)

| Nome | Hex | Uso |
|------|-----|-----|
| Roxo Biomo | `#a800d2` | Cor principal da marca |
| Roxo Escuro | `#7b00a0` | Gradientes |
| Roxo Claro | `#c86bdb` | Destaques |

### Cores de Transparência

```css
/* Backgrounds */
bg-white/5     /* 5% branco */
bg-white/10    /* 10% branco */
bg-black/30    /* 30% preto (overlay) */
bg-black/40    /* 40% preto (cards) */

/* Bordas */
border-white/10   /* Bordas sutis */
border-white/20   /* Bordas mais visíveis */
border-purple-500/30  /* Hover states */
```

---

## Tipografia

### Fonte

- **Inter** - Sistema via Tailwind
- **Fallback** - system-ui, sans-serif

### Escalas

| Elemento | Classes | Resultado |
|----------|---------|-----------|
| H1 Hero | `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl` | 30px → 72px |
| H2 Seção | `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` | 24px → 48px |
| H3 Card | `text-base sm:text-lg` | 16px → 18px |
| Body | `text-sm sm:text-base` | 14px → 16px |
| Small | `text-xs sm:text-sm` | 12px → 14px |

### Font Weights

```css
font-extralight  /* 200 - H1 */
font-light      /* 300 - Body */
font-normal     /* 400 - Default */
font-medium     /* 500 - CTAs */
```

---

## Breakpoints

### Mobile-First

```css
/* Base: 0-639px (mobile) */
text-sm p-5

/* sm: 640px+ (tablet portrait) */
sm:text-base sm:p-6

/* md: 768px+ (tablet landscape) */
md:text-lg md:p-8

/* lg: 1024px+ (desktop) */
lg:text-xl lg:p-10

/* xl: 1280px+ (large desktop) */
xl:text-2xl xl:p-12
```

### Padrões de Grid

```css
/* Cards */
grid-cols-1 sm:grid-cols-2 lg:grid-cols-3

/* Vídeos (vertical) */
grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center
```

---

## Espaçamento

### Padding de Seções

```css
/* Mobile */
py-16 px-5

/* Tablet */
sm:py-20 sm:px-6

/* Desktop */
md:py-24 md:px-10 lg:px-16
```

### Gaps

```css
gap-4    /* 16px - mobile cards */
gap-6    /* 24px - sm cards */
gap-8    /* 32px - md cards */
```

---

## Efeitos Visuais

### Glassmorphism

```css
/* Card glass */
bg-black/40 backdrop-blur-md border border-white/10 shadow-xl shadow-purple-900/10

/* Header */
bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm
```

### Hover States

```css
/* Cards */
hover:border-purple-500/40 hover:-translate-y-1

/* Buttons */
hover:bg-white/20 hover:scale-105

/* Badges */
hover:bg-purple-600/15 hover:border-purple-500/30 hover:-translate-y-0.5
```

### Transições

```css
transition-all duration-300  /* Default */
transition-colors duration-200  /* Apenas cores */
transition-transform duration-300  /* Apenas transform */
```

---

## Sombras

### Box Shadows

```css
/* Cards */
shadow-xl shadow-purple-900/10

/* Buttons */
shadow-lg shadow-green-600/30  /* WhatsApp */

/* Glow effect */
shadow-[0_8px_32px_rgba(168,0,210,0.4)]
```

---

## Bordas

### Border Radius

```css
rounded-xl      /* 12px - mobile */
rounded-2xl     /* 16px - tablet */
rounded-3xl     /* 24px - desktop */
rounded-full    /* Botões, badges */
```

### Border Colors

```css
border-white/10     /* Sutil */
border-white/20     /* Médio */
border-white/25     /* Visível */
border-purple-500/40  /* Hover */
```

---

## Componentes Tailwind

### Botão Primário

```css
px-5 sm:px-7 py-2.5 sm:py-3
rounded-full
bg-white/10 border border-white/25
text-white font-medium text-xs sm:text-sm tracking-wide
transition-all duration-300
hover:bg-white/20 hover:border-white/40 hover:scale-105
```

### Card

```css
rounded-2xl sm:rounded-3xl
border border-white/10
bg-black/40 backdrop-blur-md
shadow-xl shadow-purple-900/10
overflow-hidden
hover:border-purple-500/40
transition-all duration-300
```

### Input

```css
w-full
px-4 py-3
bg-black/30 backdrop-blur-sm
border border-white/10 rounded-xl
text-white placeholder:text-white/40
focus:border-purple-500 focus:outline-none
transition-colors
```

---

## Animações CSS

### Transições Padrão

```css
/* Hover simples */
transition-all duration-300

/* Hover com timing function */
transition-all duration-300 ease-out
```

### Transform

```css
/* Hover lift */
hover:-translate-y-1

/* Scale */
hover:scale-105

/* Rotate (FAQ arrow) */
rotate-180
```

---

## Responsividade Exemplos

### Hero Title

```css
max-w-2xl
text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
font-extralight
leading-[1.1] sm:leading-[1.08]
tracking-tight
text-white
mb-4 sm:mb-5 md:mb-6
```

### Stats Container

```css
flex flex-wrap
gap-6 sm:gap-8 md:gap-10
mb-6 sm:mb-8
```

### Video Cards

```css
w-full max-w-[280px] sm:max-w-[300px]
```

---

## Função cn() (class-merge)

**Arquivo:** `src/lib/utils.ts`

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Uso:**
```tsx
<div className={cn(
  "base-classes",
  isActive && "active-classes",
  variant === "primary" && "primary-classes"
)} />
```
