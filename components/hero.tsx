"use client"

import { ArrowRight, Download, Sparkles, Code2, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { TextGenerateEffect } from "./aceternity/text-generate-effect"
import { SilkBackground } from "./aceternity/silk-background"

export default function Hero() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.7, ease: "easeOut" as const },
    },
  }

  return (
    <SilkBackground>
      <section
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
        id="main-content"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-3/4 left-1/2 w-[300px] h-[300px] bg-secondary/8 rounded-full blur-[60px]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(circle, #7c3aed 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <motion.div
          className="max-w-5xl mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8 inline-block">
            <motion.div
              className="px-5 py-2.5 bg-gradient-to-r from-primary/15 via-accent/15 to-secondary/15 text-primary dark:text-accent rounded-full text-sm font-semibold border border-primary/20 flex items-center gap-2 backdrop-blur-sm"
              animate={prefersReducedMotion ? {} : { scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              Available for Full-time Opportunities
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-1" />
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-br from-foreground via-primary to-accent bg-clip-text text-transparent glow-text">
              Priyanka
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Priyadarsini
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={itemVariants} className="mb-6">
            <p className="text-xl sm:text-2xl text-muted-foreground font-semibold flex items-center justify-center gap-3">
              <Code2 className="w-6 h-6 text-primary" aria-hidden="true" />
              Full-Stack Developer
              <Code2 className="w-6 h-6 text-primary" aria-hidden="true" />
            </p>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-12">
            <TextGenerateEffect
              words="1+ year transforming ideas into deployed full-stack apps — clean UI, optimized APIs, and database-driven workflows that solve real problems."
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              duration={0.05}
              filter={true}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="#process"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 glow-primary"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -3 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            >
              View My Work
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="/api/resume"
              download="Priyanka_Behera_Resume.txt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/40 rounded-xl font-semibold hover:bg-primary/10 hover:border-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 backdrop-blur-sm"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -3 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            >
              Download Resume
              <Download className="w-4 h-4" aria-hidden="true" />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { value: "1+", label: "Years Experience", icon: "⚡" },
              { value: "5+", label: "Projects Completed", icon: "🚀" },
              { value: "100%", label: "Passion", icon: "✨" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={prefersReducedMotion ? {} : { scale: 1.08, y: -4 }}
                className="p-4 rounded-xl bg-card/80 border border-border hover:border-primary/60 transition-all backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 gradient-border"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <motion.div
                  className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  animate={prefersReducedMotion ? {} : { scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.5, delay: idx * 0.3, repeat: Number.POSITIVE_INFINITY }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col items-center gap-2 text-muted-foreground"
            animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll Down</span>
            <div className="w-5 h-8 border-2 border-primary/40 rounded-full flex items-start justify-center p-1">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={prefersReducedMotion ? {} : { y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </SilkBackground>
  )
}
