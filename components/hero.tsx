"use client"

import { ArrowRight, Download, Sparkles, Code2 } from "lucide-react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { TextGenerateEffect } from "./aceternity/text-generate-effect"
import { SilkBackground } from "./aceternity/silk-background"
import { Card3D } from "./card-3d"

/* ── tiny 3D floating shape ── */
function FloatingShape({
  className,
  delay = 0,
  duration = 6,
  rotateX = 60,
}: {
  className?: string
  delay?: number
  duration?: number
  rotateX?: number
}) {
  return (
    <motion.div
      className={`absolute rounded-full border border-primary/20 ${className}`}
      style={{ rotateX, transformStyle: "preserve-3d" }}
      animate={{ rotateZ: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
      aria-hidden="true"
    />
  )
}

/* ── 3D cube face ── */
function Cube3D({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        width: size,
        height: size,
        transformStyle: "preserve-3d",
        perspective: 600,
      }}
      animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      {/* Front */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: "1px solid rgba(0,240,255,0.3)",
          background: "rgba(0,240,255,0.05)",
          transform: `translateZ(${size / 2}px)`,
          borderRadius: 4,
        }}
      />
      {/* Back */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: "1px solid rgba(59,130,246,0.3)",
          background: "rgba(59,130,246,0.05)",
          transform: `translateZ(-${size / 2}px) rotateY(180deg)`,
          borderRadius: 4,
        }}
      />
      {/* Left */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: "1px solid rgba(139,92,246,0.3)",
          background: "rgba(139,92,246,0.05)",
          transform: `translateX(-${size / 2}px) rotateY(-90deg)`,
          borderRadius: 4,
        }}
      />
      {/* Right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: "1px solid rgba(0,240,255,0.3)",
          background: "rgba(0,240,255,0.05)",
          transform: `translateX(${size / 2}px) rotateY(90deg)`,
          borderRadius: 4,
        }}
      />
      {/* Top */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: "1px solid rgba(59,130,246,0.2)",
          background: "rgba(59,130,246,0.04)",
          transform: `translateY(-${size / 2}px) rotateX(90deg)`,
          borderRadius: 4,
        }}
      />
      {/* Bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: "1px solid rgba(0,240,255,0.2)",
          background: "rgba(0,240,255,0.04)",
          transform: `translateY(${size / 2}px) rotateX(-90deg)`,
          borderRadius: 4,
        }}
      />
    </motion.div>
  )
}

export default function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  /* Parallax mouse tracking for the whole hero */
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const parallaxX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), { stiffness: 80, damping: 20 })
  const parallaxY = useSpring(useTransform(mouseY, [0, 1], [-15, 15]), { stiffness: 80, damping: 20 })
  const contentRotateX = useTransform(mouseY, [0, 1], [2, -2])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", (e) => setPrefersReducedMotion(e.matches))
    return () => mediaQuery.removeEventListener("change", (e) => setPrefersReducedMotion(e.matches))
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current || prefersReducedMotion) return
    const rect = sectionRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.7, ease: "easeOut" as const },
    },
  }

  return (
    <SilkBackground>
      <section
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
        id="main-content"
        style={{ perspective: "1200px" }}
      >
        {/* ── 3D Background Layer ── */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 -z-10"
            style={{ x: parallaxX, y: parallaxY }}
            aria-hidden="true"
          >
            {/* Soft glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px]" />

            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.04] dark:opacity-[0.1]"
              style={{
                backgroundImage: `radial-gradient(circle, #00f0ff 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            {/* 3D Floating rings */}
            <FloatingShape className="top-16 right-24 w-40 h-40" delay={0} duration={14} rotateX={65} />
            <FloatingShape className="bottom-24 left-16 w-28 h-28" delay={3} duration={10} rotateX={70} />
            <FloatingShape className="top-1/2 right-10 w-20 h-20" delay={1.5} duration={8} rotateX={55} />

            {/* 3D Cubes */}
            <Cube3D size={36} className="top-28 left-20 opacity-60" />
            <Cube3D size={24} className="bottom-32 right-28 opacity-40" />
            <Cube3D size={18} className="top-1/2 left-12 opacity-30" />
          </motion.div>
        )}

        {/* ── Content with subtle 3D depth shift ── */}
        <motion.div
          className="max-w-5xl mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={prefersReducedMotion ? {} : { rotateX: contentRotateX }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8 inline-block">
            <motion.div
              className="px-5 py-2.5 bg-gradient-to-r from-primary/15 via-accent/15 to-secondary/15 text-primary dark:text-accent rounded-full text-sm font-semibold border border-primary/20 flex items-center gap-2 backdrop-blur-sm"
              animate={prefersReducedMotion ? {} : { scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              Available for Full-time Opportunities
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-1" />
            </motion.div>
          </motion.div>

          {/* Name — 3D layered text */}
          <motion.div variants={itemVariants} className="mb-6" style={{ transformStyle: "preserve-3d" }}>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
              <motion.span
                className="block bg-gradient-to-br from-foreground via-primary to-accent bg-clip-text text-transparent glow-text"
                style={prefersReducedMotion ? {} : { textShadow: "0 20px 40px rgba(0,240,255,0.25)" }}
              >
                Priyanka
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
                style={prefersReducedMotion ? {} : { textShadow: "0 20px 60px rgba(59,130,246,0.3)" }}
              >
                Priyadarsini
              </motion.span>
            </h1>
          </motion.div>

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
              className="btn-3d inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              whileHover={prefersReducedMotion ? {} : { scale: 1.06, y: -4, boxShadow: "0 20px 40px rgba(0,240,255,0.4)" }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            >
              View My Work
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="/api/resume"
              download="Priyanka_Behera_Resume.txt"
              className="btn-3d inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/40 rounded-xl font-semibold hover:bg-primary/10 hover:border-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 backdrop-blur-sm"
              whileHover={prefersReducedMotion ? {} : { scale: 1.06, y: -4 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            >
              Download Resume
              <Download className="w-4 h-4" aria-hidden="true" />
            </motion.a>
          </motion.div>

          {/* 3D Stat Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { value: "1+", label: "Years Experience", icon: "⚡", color: "from-cyan-400 to-blue-600" },
              { value: "5+", label: "Projects", icon: "🚀", color: "from-blue-500 to-violet-500" },
              { value: "100%", label: "Passion", icon: "✨", color: "from-violet-500 to-cyan-400" },
            ].map((stat, idx) => (
              <Card3D key={idx} intensity={18} glare>
                <div className="p-5 rounded-2xl bg-card/90 border border-border backdrop-blur-sm group transition-colors hover:border-primary/60 hover:bg-card">
                  {/* Icon with 3D lift */}
                  <div
                    className="text-2xl mb-2"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {stat.icon}
                  </div>
                  <div
                    className={`text-2xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                    style={{ transform: "translateZ(16px)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs text-muted-foreground mt-1 font-medium"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              </Card3D>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col items-center gap-2 text-muted-foreground"
            animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll Down</span>
            <div className="w-5 h-8 border-2 border-primary/40 rounded-full flex items-start justify-center p-1">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={prefersReducedMotion ? {} : { y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </SilkBackground>
  )
}
