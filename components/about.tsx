"use client"

import { motion } from "framer-motion"
import { HoverEffect } from "./aceternity/hover-effect"
import { Code2, Users, Shield, Zap, Lightbulb, BookOpen, MapPin, Mail, Phone, Clock } from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const highlights = [
    {
      title: "Design to Code",
      description:
        "Converting pixel-perfect Figma/PSD designs into production-ready web applications with precision.",
      icon: <Code2 size={28} strokeWidth={1.5} className="text-primary" />,
    },
   
    {
      title: "Accessibility First",
      description: "Writing semantic HTML and following accessibility principles to ensure every user can interact with the product comfortably..",
      icon: <Shield size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Performance",
      description: "Prioritizing fast load times, optimized assets, reusable components, and efficient API communication to deliver smooth experience",
      icon: <Zap size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Creative Problem Solving",
      description: "Enjoy finding practical solutions to UI and API challenges — whether it’s structuring the front end, fixing logic bugs, or improving data flow.",
      icon: <Lightbulb size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Continuous Learning",
      description: "Actively expanding knowledge across front-end frameworks, backend tools, database design, deployment and clean code practices.",
      icon: <BookOpen size={28} strokeWidth={1.5} className="text-primary" />,
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              About{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a passionate  Software Developer Engineer with{" "}
              <span className="font-semibold text-foreground">1+ years</span> of experience turning ideas into working products.
            I love building clean, responsive user interfaces and coupling them with fast, reliable backend logic.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
             Whether it's designing pixel-perfect UI, structuring reusable components ,or building data-driven features on the <span className="font-semibold text-foreground"> backend</span>,  I enjoy solving problems and improving user experience.
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond code, I'm passionate about{" "}
              <span className="font-semibold text-foreground">Travel, photography, and gaming</span>. I believe in
              continuous learning and staying updated with the latest technologies and design trends.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Core Expertise</h3>
            <HoverEffect items={highlights} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Quick Info</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Location", value: "Pune, India", icon: <MapPin size={24} strokeWidth={1.5} /> },
                {
                  label: "Email",
                  value: "beherapriyadarsini888@gmail.com",
                  link: "mailto:beherapriyadarsini888@gmail.com",
                  icon: <Mail size={24} strokeWidth={1.5} />,
                },
               
                { label: "Experience", value: "1+ Years", icon: <Clock size={24} strokeWidth={1.5} /> },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-primary mb-2">{item.icon}</div>
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="font-semibold text-primary hover:underline text-sm">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground text-sm">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
