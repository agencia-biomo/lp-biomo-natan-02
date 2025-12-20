# Funcionalidades - LP-02 Biomo

## 1. Shader Background (MeshGradient)

### Visão Geral
Background animado usando CPPN (Compositional Pattern Producing Network) shader.

### Implementação

```tsx
import { MeshGradient } from "@paper-design/shaders-react"

<MeshGradient
  className="w-full h-full"
  colors={["#000000", "#a800d2", "#7b00a0", "#c86bdb", "#1a0020"]}
  speed={0.3}
  style={{ width: '100%', height: '100%' }}
/>
```

### Camadas

1. **Background radial** - Gradiente base roxo/preto
2. **Primary shader** - MeshGradient com cores Biomo
3. **Secondary shader** - MeshGradient com branco (opacity 50%)
4. **Overlay** - `bg-black/30` para legibilidade

### Otimização

- Container fixo (`fixed inset-0`)
- Dimensões `150vmax` para cobrir viewport em rotação
- Z-index 0 (abaixo de todo conteúdo)

---

## 2. Números Animados (AnimatedNumber)

### Implementação

```tsx
import { useMotionValue, useSpring, useInView, motion } from "framer-motion"

function AnimatedNumber({ value, duration = 2, prefix = "", suffix = "" }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return unsubscribe
  }, [springValue])

  return (
    <motion.span ref={ref}>
      {prefix}{displayValue}{suffix}
    </motion.span>
  )
}
```

### Uso

```tsx
<AnimatedNumber value={150} prefix="+" />           // +150
<AnimatedNumber value={98} suffix="%" />            // 98%
<AnimatedNumber value={5} prefix="+" duration={3} /> // +5
```

---

## 3. Scroll Progress Indicator

### Implementação

```tsx
import { motion, useScroll } from "framer-motion"

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

### Comportamento
- Barra roxa fixa no topo
- Escala horizontalmente conforme scroll
- `origin-left` para crescer da esquerda
- Z-index 50 para ficar acima de tudo

---

## 4. Floating CTA

### Implementação

```tsx
function FloatingCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!show) return null

  return (
    <motion.button
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
      className="fixed bottom-24 left-6 z-40 px-6 py-3 bg-purple-600 ..."
    >
      Solicitar Orçamento
    </motion.button>
  )
}
```

### Comportamento
- Aparece após scroll de 1 viewport height
- Animação de entrada/saída
- Scroll suave para seção de contato

---

## 5. Hover 3D nos Cards (TiltCard)

### Implementação

```tsx
function TiltCard({ children }: { children: React.ReactNode }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setRotate({ x: y * 10, y: x * -10 })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <motion.div
      style={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="transform-gpu"
    >
      {children}
    </motion.div>
  )
}
```

### Comportamento
- Segue posição do mouse
- Rotação máxima de ±10 graus
- Spring animation para suavidade
- GPU accelerated (`transform-gpu`)

---

## 6. WhatsApp Popup

### Arquivo
`src/components/ui/whatsapp-popup.tsx`

### Props

```tsx
interface WhatsAppPopupProps {
  phoneNumber?: string           // Default: "5547996067992"
  scrollTriggerPercent?: number  // Default: 30
  timeTriggerSeconds?: number    // Default: 15
  message?: string               // Default: "Olá! Vim pelo site..."
}
```

### Triggers

1. **Scroll** - Ao atingir 30% da página
2. **Tempo** - Após 15 segundos na página
3. **Hover** - Ao passar mouse no botão flutuante

### Estados

```tsx
const [isOpen, setIsOpen] = useState(false)      // Balão visível
const [isDismissed, setIsDismissed] = useState(false)  // Fechado pelo usuário
const [hasTriggered, setHasTriggered] = useState(false) // Já disparou
```

### Persistência

```tsx
// sessionStorage para não reabrir na mesma sessão
sessionStorage.setItem("biomo_whatsapp_popup_closed", "true")
```

---

## 7. Vídeos Vimeo Embeddados

### Implementação

```tsx
<div className="relative w-full" style={{ paddingTop: '176.67%' }}>
  <iframe
    src="https://player.vimeo.com/video/ID?title=0&byline=0&portrait=0"
    frameBorder="0"
    allow="fullscreen; picture-in-picture"
    className="absolute top-0 left-0 w-full h-full"
    title="Nome do Cliente"
  />
</div>
```

### Vídeos Atuais

| Cliente | Vimeo ID | Formato |
|---------|----------|---------|
| VM Eventos | 1126950771 | 9:16 |
| Med Menosso | 1128324994 | 9:16 |
| Eliore Studio | 1127665257 | 9:16 |

### Aspect Ratio
- `padding-top: 176.67%` = 9:16 (vertical/mobile)
- `padding-top: 56.25%` = 16:9 (horizontal)

---

## 8. FAQ Accordion

### Implementação

```tsx
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 ..."
      >
        <span>{question}</span>
        <ChevronDown className={cn(
          "transition-transform duration-300",
          isOpen && "rotate-180"
        )} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-5 text-white/60">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

---

## 9. Section Dividers

### Implementação

```tsx
function SectionDivider() {
  return (
    <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-8 sm:my-12 md:my-16" />
  )
}
```

### Características
- Gradiente horizontal com fade nas pontas
- Centralizado com max-width
- Espaçamento responsivo

---

## 10. Link Google Meu Negócio

### Implementação nos Badges

```tsx
interface BadgeItem {
  icon: string
  text: string
  href?: string  // Opcional
}

// Rendering condicional
{badge.href ? (
  <a href={badge.href} target="_blank" rel="noopener noreferrer" className="...">
    <span>{badge.icon}</span>
    <span>{badge.text}</span>
  </a>
) : (
  <div className="...">
    <span>{badge.icon}</span>
    <span>{badge.text}</span>
  </div>
)}
```

### URL
`https://share.google/eCYIhrFlaLVZNJsSb`
