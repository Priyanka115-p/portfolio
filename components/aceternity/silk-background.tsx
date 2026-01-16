"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

export const SilkBackground = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    checkMobile()
    window.addEventListener("resize", checkMobile)
    mediaQuery.addEventListener("change", (e) => setPrefersReducedMotion(e.matches))

    return () => {
      window.removeEventListener("resize", checkMobile)
      mediaQuery.removeEventListener("change", (e) => setPrefersReducedMotion(e.matches))
    }
  }, [])

  const animationDuration = isMobile ? 15 : 8
  const animationDuration2 = isMobile ? 18 : 10
  const animationDuration3 = isMobile ? 20 : 9
  const animationDuration4 = isMobile ? 22 : 11

  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className={`relative w-full overflow-hidden ${className}`}>
        <div className="relative z-10">{children}</div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={`relative w-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Flowing silk shapes with optimized animations */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl"
          animate={
            isMobile ? { y: [0, 30, 0], scale: [1, 1.05, 1] } : { y: [0, 50, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }
          }
          transition={{
            duration: animationDuration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ willChange: "transform" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary/25 via-primary/15 to-transparent rounded-full blur-3xl"
          animate={
            isMobile ? { y: [0, -25, 0], scale: [1, 0.98, 1] } : { y: [0, -40, 0], x: [0, -30, 0], scale: [1, 0.95, 1] }
          }
          transition={{
            duration: animationDuration2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{ willChange: "transform" }}
        />
        {!isMobile && (
          <>
            <motion.div
              className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-accent/20 via-secondary/15 to-transparent rounded-full blur-3xl"
              animate={{ y: [0, 30, 0], x: [0, 40, 0], scale: [1, 1.05, 1] }}
              transition={{
                duration: animationDuration3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
              style={{ willChange: "transform" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-tl from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl"
              animate={{ y: [0, -50, 0], x: [0, 50, 0], scale: [1, 1.08, 1] }}
              transition={{
                duration: animationDuration4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
              style={{ willChange: "transform" }}
            />
          </>
        )}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
