"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import { AnimatedNumber } from "./animated-number"

// Shader de fundo fixo - cobre toda a viewport (igual LP-01)
export function ShaderBackground() {
  return (
    <div className="fixed inset-0 z-0" style={{ background: 'radial-gradient(ellipse at center, #5a0073 0%, #1a0020 50%, #000000 100%)' }}>
      {/* Primary Shader Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            width: '150vmax',
            height: '150vmax',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <MeshGradient
            className="w-full h-full"
            colors={["#000000", "#a800d2", "#7b00a0", "#c86bdb", "#1a0020"]}
            speed={0.3}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
      {/* Secondary Shader Layer */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            width: '150vmax',
            height: '150vmax',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <MeshGradient
            className="w-full h-full"
            colors={["#000000", "#ffffff", "#a800d2", "#000000"]}
            speed={0.2}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  )
}

interface StatItem {
  value: number
  label: string
  context: string
  prefix?: string
  suffix?: string
}

interface BadgeItem {
  icon: string
  text: string
  href?: string
}

interface HeroProps {
  title: string
  description: string
  badgeText?: string
  badgeLabel?: string
  ctaButtons?: Array<{ text: string; href?: string; primary?: boolean; onClick?: () => void }>
  stats?: Array<StatItem>
  badges?: Array<BadgeItem>
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
  stats = [
    { value: 150, label: "Projetos Entregues", context: "em 5 anos", prefix: "+" },
    { value: 98, label: "Satisfação", context: "NPS médio", suffix: "%" },
    { value: 5, label: "Anos de Experiência", context: "desde 2019", prefix: "+" }
  ],
  badges = [
    { icon: "🏆", text: "Google Partner" },
    { icon: "⭐", text: "5.0 Google Reviews", href: "https://share.google/eCYIhrFlaLVZNJsSb" }
  ]
}: HeroProps) {
  return (
    <main className="relative z-20 min-h-screen flex flex-col justify-center pt-20 pb-8 px-5 sm:px-6 md:px-10 lg:px-16 w-full max-w-7xl mx-auto">
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Hero Logo */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img src="/assets/logo-biomo.svg" alt="Biomo" className="w-28 sm:w-36 md:w-44 h-auto" />
        </motion.div>

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm mb-5 sm:mb-6"
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
          className="max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[1.1] sm:leading-[1.08] tracking-tight text-white mb-4 sm:mb-5 md:mb-6"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="max-w-lg text-sm sm:text-base md:text-lg font-light leading-relaxed text-white/70 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {ctaButtons.map((button, index) =>
            button.onClick ? (
              <button
                key={index}
                onClick={button.onClick}
                className={`rounded-xl sm:rounded-2xl border border-white/10 px-5 py-3 sm:py-3.5 text-sm font-light tracking-tight transition-all focus:outline-none focus:ring-2 focus:ring-white/30 duration-300 text-center ${
                  button.primary
                    ? "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                    : "text-white/80 hover:bg-white/5"
                }`}
              >
                {button.text}
              </button>
            ) : (
              <a
                key={index}
                href={button.href}
                className={`rounded-xl sm:rounded-2xl border border-white/10 px-5 py-3 sm:py-3.5 text-sm font-light tracking-tight transition-all focus:outline-none focus:ring-2 focus:ring-white/30 duration-300 text-center ${
                  button.primary
                    ? "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                    : "text-white/80 hover:bg-white/5"
                }`}
              >
                {button.text}
              </a>
            )
          )}
        </motion.div>

        {/* Stats with Animated Numbers */}
        <motion.div
          className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-none">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-[11px] sm:text-xs font-light text-white/70 mt-1">{stat.label}</div>
              <div className="text-[10px] sm:text-[11px] font-light text-white/40">{stat.context}</div>
            </div>
          ))}
        </motion.div>

        {/* Certification Badges */}
        <motion.div
          className="flex flex-wrap gap-2 sm:gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {badges.map((badge, index) => (
            badge.href ? (
              <a
                key={index}
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-white/80 hover:bg-purple-600/15 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{badge.icon}</span>
                <span className="font-medium">{badge.text}</span>
              </a>
            ) : (
              <div
                key={index}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-white/80 hover:bg-purple-600/15 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{badge.icon}</span>
                <span className="font-medium">{badge.text}</span>
              </div>
            )
          ))}
        </motion.div>
      </motion.div>
    </main>
  )
}

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-5 py-5 sm:py-6 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm">
      {/* Logo */}
      <a href="#" className="flex items-center">
        <img src="/assets/logo-biomo-mini.svg" alt="Biomo" className="h-8 sm:h-9 md:h-11 lg:h-12" />
      </a>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-2 lg:gap-3">
        <a
          href="#servicos"
          className="text-white/85 hover:text-white text-sm lg:text-base font-normal px-4 py-2.5 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Serviços
        </a>
        <a
          href="#resultados"
          className="text-white/85 hover:text-white text-sm lg:text-base font-normal px-4 py-2.5 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Resultados
        </a>
        <a
          href="#contato"
          className="text-white/85 hover:text-white text-sm lg:text-base font-normal px-4 py-2.5 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Contato
        </a>
      </nav>

      {/* CTA Button */}
      <a
        href="#contato"
        className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white/10 border border-white/25 text-white font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105 cursor-pointer"
      >
        Orçamento
      </a>
    </header>
  )
}
