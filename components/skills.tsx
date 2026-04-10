"use client"

import { motion } from "framer-motion"
import { Code2, Server, Wrench, ShieldCheck } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap 5", "Material UI"],
      gradient: "from-violet-500 to-purple-600",
      glow: "shadow-violet-500/20",
      badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Laravel", "PHP", "Python", "MongoDB", "Django", "MySQL"],
      gradient: "from-purple-500 to-pink-500",
      glow: "shadow-purple-500/20",
      badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    },
    {
      title: "CMS & Tools",
      icon: Wrench,
      skills: ["Git", "Figma", "Postman", "VS Code"],
      gradient: "from-fuchsia-500 to-violet-500",
      glow: "shadow-fuchsia-500/20",
      badge: "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300",
    },
    {
      title: "Standards",
      icon: ShieldCheck,
      skills: ["Web Accessibility", "WCAG 2.2", "Performance Optimization", "Cross-browser Testing"],
      gradient: "from-indigo-500 to-violet-500",
      glow: "shadow-indigo-500/20",
      badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const } as const,
    },
  }

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
            My Toolkit
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div key={category.title} variants={itemVariants}>
                <motion.div
                  className={`relative h-full p-6 bg-card rounded-2xl border border-border overflow-hidden group cursor-pointer hover:shadow-2xl ${category.glow} transition-all duration-300`}
                  whileHover={{ y: -8, borderColor: "var(--primary)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Card glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {/* Top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} rounded-t-2xl`} />

                  <div className="relative z-10">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-6 mt-2">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
                    </div>

                    {/* Skill badges */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <motion.span
                          key={skill}
                          className={`text-xs font-medium px-3 py-1.5 rounded-full ${category.badge} border border-current/10`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.06, duration: 0.3 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
