"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedNumberProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 1500,
  className = "",
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      const startTime = performance.now()

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function (ease-out cubic)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const current = Math.round(value * easeOut)

        setDisplayValue(current)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  )
}
