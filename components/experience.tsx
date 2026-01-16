"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Ubicos Technologies Pvt Ltd",
      period: "5/2025 – Present",
      location: "Pune",
      highlights: [
       "Developing UI components and full pages in React with reusable, scalable patterns",
    "Building and integrating  APIs using Laravel, PHP and MYSQL",
    "Converting Figma/PSD designs into responsive and accessible UIs",
    "Improving performance, reducing load times, and optimizing DB/API workflows",
    "Refactoring legacy codebases into maintainable modern architecture"
    
  ],
    },
   {
  title: "Data Analyst Intern",
  company: "Unified Mentor Pvt Ltd",
  period: "Apr/2025 – Sept/2025",
  location: "remote",
 
  highlights: [
    "Cleaned and transformed raw operational data for reporting and automation",
    "Built dashboards and visualizations using tools like Excel/Sheets and Power BI",
    "Identified trends, bottlenecks, and cost-saving insights for management",
    "Created reusable data reports for daily/weekly/monthly tracking",
    "Worked closely with engineering and product teams to define data requirements",
    "Documented findings and communicated insights using charts and summaries"
  ],
}

    {
      title: "Python Developer Intern",
      company: "Congnifyz Technologies",
      period: "feb/2025 – march/2025",
      location: "remote",
      highlights: [
        "Executed design process for dynamic/static email templates",
        "Integrated PSD to HTML/Python Django framework"
       
      ],
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 hover:border-primary transition-colors"
                whileHover={{ paddingLeft: 32 }}
              >
                <motion.div
                  className="absolute -left-3 top-0 w-4 h-4 bg-primary rounded-full"
                  aria-hidden="true"
                  whileHover={{ scale: 1.3 }}
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time>{exp.period}</time>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="text-sm text-muted-foreground flex gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                      <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">
                        •
                      </span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
