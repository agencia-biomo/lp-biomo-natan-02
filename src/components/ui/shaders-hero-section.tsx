"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen w-full relative overflow-hidden">
      {/* Background Shaders - Cores Biomo (Roxo) */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#a800d2", "#7b00a0", "#c86bdb", "#1a0020"]}
        speed={0.3}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-50"
        colors={["#000000", "#ffffff", "#a800d2", "#000000"]}
        speed={0.2}
      />

      {children}
    </div>
  )
}

interface HeroProps {
  title: string
  description: string
  badgeText?: string
  badgeLabel?: string
  ctaButtons?: Array<{ text: string; href: string; primary?: boolean }>
  microDetails?: Array<string>
}

export function HeroContent({
  title,
  description,
  badgeText = "Marketing Digital",
  badgeLabel = "Biomo",
  ctaButtons = [
    { text: "Solicitar Orçamento", href: "#contato", primary: true },
    { text: "Ver Resultados", href: "#resultados" }
  ],
  microDetails = ["+150 Projetos", "98% Satisfação", "5+ Anos"]
}: HeroProps) {
  return (
    <main className="relative z-20 min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        className="text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">{badgeLabel}</span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span className="text-xs font-light tracking-tight text-white/80">{badgeText}</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="max-w-2xl text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.05] tracking-tight text-white mb-6"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="max-w-xl text-base md:text-lg font-light leading-relaxed tracking-tight text-white/75 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap items-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {ctaButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`rounded-2xl border border-white/10 px-5 py-3 text-sm font-light tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 duration-300 ${
                button.primary
                  ? "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  : "text-white/80 hover:bg-white/5"
              }`}
            >
              {button.text}
            </a>
          ))}
        </motion.div>

        {/* Micro Details */}
        <motion.ul
          className="flex flex-wrap gap-6 text-xs font-extralight tracking-tight text-white/60"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {microDetails.map((detail, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/40" /> {detail}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </main>
  )
}

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between p-6 md:px-10 lg:px-16">
      {/* Logo Placeholder */}
      <div className="flex items-center">
        <span className="text-white font-light text-xl tracking-tight">Biomo</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-2">
        <a
          href="#servicos"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Serviços
        </a>
        <a
          href="#resultados"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Resultados
        </a>
        <a
          href="#contato"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Contato
        </a>
      </nav>

      {/* CTA Button */}
      <a
        href="#contato"
        className="px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white font-light text-xs transition-all duration-300 hover:bg-white/20 cursor-pointer"
      >
        Orçamento
      </a>
    </header>
  )
}
