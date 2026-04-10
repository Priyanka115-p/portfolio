"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/5 via-transparent to-transparent" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PB</span>
              </div>
              <span className="font-bold text-lg">Priyanka</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-Stack Developer building clean, responsive web apps.
            </p>
          </div>

          {/* Navigation */}
          <nav>
            <h3 className="font-bold mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#process", label: "Process" },
                { href: "#experience", label: "Experience" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <nav>
            <h3 className="font-bold mb-4 text-foreground">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:beherapriyadarsini888@gmail.com"
                  className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/priyanka-priyadarsini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  aria-label="LinkedIn (opens in new window)"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Priyanka115-p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  aria-label="GitHub (opens in new window)"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>

          {/* Skills */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Tech Stack</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Laravel / PHP / Python</li>
              <li>MySQL / MongoDB</li>
              <li>Tailwind CSS / React</li>
              <li>Figma / Git</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Priyanka Priyadarsini Behera. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with{" "}
            <span className="text-primary font-bold mx-1">♥</span>
            {" "}in Pune, India
          </p>
        </div>
      </div>
    </footer>
  )
}
