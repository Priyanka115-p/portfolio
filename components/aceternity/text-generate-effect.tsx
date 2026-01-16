"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface TextGenerateEffectProps {
  words: string
  className?: string
  duration?: number
  filter?: boolean
}

export const TextGenerateEffect = ({
  words,
  className = "",
  duration = 0.5,
  filter = true,
}: TextGenerateEffectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  const controls = useAnimation()
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

  const wordsArray = words.split(" ")

  const animationDuration = prefersReducedMotion ? 0 : isMobile ? duration * 1.5 : duration

  const variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * animationDuration,
      },
    }),
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div ref={ref} className={className}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          custom={idx}
          variants={variants}
          initial="hidden"
          animate={controls}
          className={filter ? "drop-shadow-lg" : ""}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  )
}
