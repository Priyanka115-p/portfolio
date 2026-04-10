"use client"

import { motion } from "framer-motion"
import { Code2, Server, Wrench, ShieldCheck } from "lucide-react"
import { Card3D } from "./card-3d"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap 5", "Material UI"],
      gradient: "from-violet-500 to-purple-600",
      glow: "hover:shadow-violet-500/30",
      badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Laravel", "PHP", "Python", "MongoDB", "Django", "MySQL"],
      gradient: "from-purple-500 to-pink-500",
      glow: "hover:shadow-purple-500/30",
      badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    },
    {
      title: "CMS & Tools",
      icon: Wrench,
      skills: ["Git", "Figma", "Postman", "VS Code"],
      gradient: "from-fuchsia-500 to-violet-500",
      glow: "hover:shadow-fuchsia-500/30",
      badge: "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300",
    },
    {
      title: "Standards",
      icon: ShieldCheck,
      skills: ["Web Accessibility", "WCAG 2.2", "Performance Optimization", "Cross-browser Testing"],
      gradient: "from-indigo-500 to-violet-500",
      glow: "hover:shadow-indigo-500/30",
      badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  }

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ perspective: "1200px" }}>
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]" />

        {/* Animated grid lines */}
        <motion.div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="mb-16 text-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            My Toolkit
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* 3D Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skillCategories.map((category, cardIdx) => {
            const Icon = category.icon
            return (
              <motion.div key={category.title} variants={cardVariants} style={{ transformStyle: "preserve-3d" }}>
                <Card3D intensity={20} glare>
                  <div
                    className={`relative h-full p-6 bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl ${category.glow} transition-shadow duration-300`}
                  >
                    {/* Animated top gradient bar */}
                    <motion.div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`}
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: cardIdx * 0.1 }}
                    />

                    {/* Hover glow overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                    <div className="relative z-10">
                      {/* Icon + Title lifted in Z */}
                      <motion.div
                        className="flex items-center gap-3 mb-6 mt-2"
                        style={{ transform: "translateZ(12px)" }}
                      >
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                        </motion.div>
                        <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
                      </motion.div>

                      {/* Skill badges */}
                      <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(6px)" }}>
                        {category.skills.map((skill, idx) => (
                          <motion.span
                            key={skill}
                            className={`text-xs font-medium px-3 py-1.5 rounded-full ${category.badge} border border-current/10`}
                            initial={{ opacity: 0, scale: 0.7, y: 10 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: cardIdx * 0.08 + idx * 0.05, duration: 0.35, ease: "backOut" as const }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
