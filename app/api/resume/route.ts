import { NextResponse } from "next/server"

export async function GET() {
  try {
    const resumeContent = `
PRIYANKA PRIYADARSINI BEHERA
Full-Stack Developer
beherapriyadarsini888@gmail.com | Pune, India
LinkedIn: linkedin.com/in/priyanka-priyadarsini
GitHub: github.com/Priyanka115-p

SUMMARY
Passionate Full-Stack Developer with 1+ year of experience building clean, responsive web applications.
Skilled in turning ideas into deployed products using modern frontend and backend technologies.
Strong focus on user experience, accessibility, and performance optimization.

SKILLS
Frontend : JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap 5, Material UI
Backend  : Laravel, PHP, Python, Django, MySQL, MongoDB
Tools    : Git, Figma, Postman, VS Code
Standards: Web Accessibility, WCAG 2.2, Performance Optimization, Cross-browser Testing

EXPERIENCE

Full-Stack Developer
1+ Year of Experience | Pune, India
• Built and deployed full-stack web applications using Laravel (PHP) and Python (Django)
• Designed pixel-perfect, responsive UIs with Tailwind CSS and Bootstrap 5
• Developed RESTful APIs and integrated them with frontend applications
• Managed relational databases (MySQL) and NoSQL databases (MongoDB)
• Followed web accessibility principles (WCAG 2.2) to ensure inclusive user experiences
• Used Git for version control and Figma for design collaboration
• Optimized performance through efficient queries, lazy loading, and reusable components

PROJECTS
• Portfolio Website  — Next.js, Tailwind CSS, Framer Motion, Vercel deployment
• Full-Stack Web App — Laravel, MySQL, Blade templating, REST API
• Python Django App  — Django, Python, SQLite, responsive UI

EDUCATION
Bachelor of Technology (B.Tech) / Equivalent
Pune, India

LANGUAGES
Odia, Hindi, English

INTERESTS
Travel, Photography, Gaming
    `

    const headers = new Headers()
    headers.set("Content-Type", "text/plain; charset=utf-8")
    headers.set("Content-Disposition", 'attachment; filename="Priyanka_Priyadarsini_Resume.txt"')

    return new NextResponse(resumeContent, {
      status: 200,
      headers,
    })
  } catch (error) {
    console.error("Error generating resume:", error)
    return NextResponse.json({ error: "Failed to generate resume" }, { status: 500 })
  }
}
