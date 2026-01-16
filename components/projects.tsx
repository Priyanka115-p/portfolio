"use client"

import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCard } from "./aceternity/animated-card"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce application with product catalog, shopping cart, and checkout flow.",
      technologies: ["React", "Redux Toolkit", "SASS", "GraphQL", "Node.js"],
      link: "#",
      github: "#",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Email Campaign Manager",
      description: "Dynamic email template builder with real-time preview and responsive design support.",
      technologies: ["React", "Redux", "HTML5", "CSS3", "JavaScript"],
      link: "#",
      github: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Design System Components",
      description: "Comprehensive component library with accessibility standards and extensive documentation.",
      technologies: ["React", "TypeScript", "Storybook", "SASS", "WCAG 2.2 AA"],
      link: "#",
      github: "#",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts and data visualization.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Chart.js", "API Integration"],
      link: "#",
      github: "#",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Responsive Website Redesign",
      description: "Complete redesign of legacy product for modern standards and improved performance.",
      technologies: ["React", "SASS", "Bootstrap", "Figma to Code", "Performance Optimization"],
      link: "#",
      github: "#",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Accessibility Audit Tool",
      description: "Tool for auditing web accessibility compliance and generating improvement reports.",
      technologies: ["React", "JavaScript", "WCAG Standards", "Node.js", "Testing"],
      link: "#",
      github: "#",
      gradient: "from-teal-500 to-cyan-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-balance"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <AnimatedCard key={project.title} className="h-full">
              <div className="group relative p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-xl h-full overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ x: 4 }}
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                    >
                      View Live
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.github}
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
