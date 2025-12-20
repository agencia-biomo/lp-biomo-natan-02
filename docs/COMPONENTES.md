# Componentes - LP-02 Biomo

## Visão Geral

A LP-02 usa React com componentes modulares e tipados.

---

## Componentes Principais

### 1. ShaderBackground
**Arquivo:** `src/components/ui/shaders-hero-section.tsx`

```tsx
export function ShaderBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <MeshGradient
        colors={["#000000", "#a800d2", "#7b00a0", "#c86bdb", "#1a0020"]}
        speed={0.3}
      />
      <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
    </div>
  )
}
```

**Props do MeshGradient:**
- `colors` - Array de 5 cores hex
- `speed` - Velocidade da animação (0.2-0.5)
- `className` - Classes CSS adicionais

---

### 2. Header
**Arquivo:** `src/components/ui/shaders-hero-section.tsx`

```tsx
export function Header() {
  return (
    <header className="absolute top-0 ... backdrop-blur-sm">
      <a href="#"><img src="/assets/logo-biomo-mini.svg" /></a>
      <nav>
        <a href="#servicos">Serviços</a>
        <a href="#resultados">Resultados</a>
        <a href="#contato">Contato</a>
      </nav>
      <a href="#contato" className="...">Orçamento</a>
    </header>
  )
}
```

**Características:**
- Backdrop blur para legibilidade
- Gradiente de fundo sutil
- Navegação responsiva (hidden em mobile)
- CTA com hover scale

---

### 3. HeroContent
**Arquivo:** `src/components/ui/shaders-hero-section.tsx`

```tsx
interface HeroProps {
  title: string
  description: string
  badgeText?: string
  badgeLabel?: string
  ctaButtons?: Array<{ text: string; href?: string; primary?: boolean }>
  stats?: Array<StatItem>
  badges?: Array<BadgeItem>
}

export function HeroContent({ title, description, ... }: HeroProps) {
  return (
    <main className="relative z-20 min-h-screen ...">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {/* Logo, Badge, Título, Descrição, CTAs, Stats, Badges */}
      </motion.div>
    </main>
  )
}
```

**Animações:**
- Fade in com blur no título
- Stagger nos elementos
- AnimatedNumber para stats

---

### 4. AnimatedNumber
**Arquivo:** `src/components/ui/animated-number.tsx`

```tsx
interface AnimatedNumberProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
}

export function AnimatedNumber({ value, duration = 2, prefix, suffix }: AnimatedNumberProps) {
  // Animação de contagem com useMotionValue + useSpring
  return <motion.span>{prefix}{rounded}{suffix}</motion.span>
}
```

**Uso:**
```tsx
<AnimatedNumber value={150} prefix="+" />
<AnimatedNumber value={98} suffix="%" />
```

---

### 5. HomePageClient
**Arquivo:** `src/components/home-page-client.tsx`

Componente principal que agrupa todas as seções.

```tsx
"use client"

export default function HomePageClient() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <ShaderBackground />
      <ScrollProgress />
      <Header />
      <HeroContent ... />
      <SectionDivider />
      {/* Services, Differentials, Testimonials, Videos, FAQ, Contact */}
      <Footer />
      <FloatingCTA />
      <WhatsAppPopup />
    </div>
  )
}
```

---

### 6. TiltCard
**Arquivo:** `src/components/home-page-client.tsx`

```tsx
function TiltCard({ children }: { children: React.ReactNode }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setRotate({ x: y * 10, y: x * -10 })
  }

  return (
    <motion.div
      style={{ rotateX: rotate.x, rotateY: rotate.y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
    >
      {children}
    </motion.div>
  )
}
```

**Efeito:** Hover 3D que segue o mouse.

---

### 7. ScrollProgress
**Arquivo:** `src/components/home-page-client.tsx`

```tsx
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
```

---

### 8. FloatingCTA
**Arquivo:** `src/components/home-page-client.tsx`

```tsx
function FloatingCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > window.innerHeight)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!show) return null

  return (
    <motion.button
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-24 left-6 z-40 ..."
    >
      Solicitar Orçamento
    </motion.button>
  )
}
```

---

### 9. FAQItem
**Arquivo:** `src/components/home-page-client.tsx`

```tsx
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/10">
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <ChevronDown className={isOpen ? "rotate-180" : ""} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

---

### 10. WhatsAppPopup
**Arquivo:** `src/components/ui/whatsapp-popup.tsx`

```tsx
interface WhatsAppPopupProps {
  phoneNumber?: string
  scrollTriggerPercent?: number
  timeTriggerSeconds?: number
  message?: string
}

export function WhatsAppPopup({
  phoneNumber = "5547996067992",
  scrollTriggerPercent = 30,
  timeTriggerSeconds = 15,
  message = "Olá! Vim pelo site da Biomo..."
}: WhatsAppPopupProps)
```

**Estados:**
- `isOpen` - Balão visível
- `isDismissed` - Fechado pelo usuário
- `hasTriggered` - Já foi acionado

---

### 11. QuoteModal
**Arquivo:** `src/components/ui/quote-modal.tsx`

Modal de orçamento com 5 passos (similar à LP-01).

---

## Animações Framer Motion

### Variantes Definidas

```tsx
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const fadeInScale = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

### Uso com whileInView

```tsx
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
>
```

---

## Ícones (Lucide React)

```tsx
import {
  Monitor,      // Sites/Landing Pages
  TrendingUp,   // SEO
  Target,       // Tráfego Pago
  MessageCircle,// WhatsApp
  Shield,       // Segurança
  Zap,          // Performance
  Users,        // Atendimento
  ChevronDown   // FAQ arrow
} from "lucide-react"
```
