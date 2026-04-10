import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Priyanka Priyadarsini Behera | Full-Stack Developer | Portfolio",
  description:
    "Full-Stack Developer with 1+ year of experience in Laravel, PHP, Python, React, and Tailwind CSS. Passionate about building clean, responsive web apps with great user experience.",
  keywords: [
    "Full Stack Developer",
    "Laravel Developer",
    "PHP Developer",
    "Python Developer",
    "Frontend Developer",
    "JavaScript",
    "Tailwind CSS",
    "Web Developer",
    "Pune",
    "Priyanka Priyadarsini Behera",
    "Priyanka Behera portfolio",
    "priyanka developer pune",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Priyanka Priyadarsini Behera | Full-Stack Developer",
    description:
      "Full-Stack Developer with 1+ year of experience building clean, responsive web apps with Laravel, Python, and modern frontend technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanka Priyadarsini Behera | Full-Stack Developer",
    description:
      "Full-Stack Developer with 1+ year of experience building clean, responsive web apps.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Priyanka Priyadarsini Behera",
              jobTitle: "Full-Stack Developer",
              email: "beherapriyadarsini888@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.linkedin.com/in/priyanka-priyadarsini/",
                "https://github.com/Priyanka115-p",
              ],
              knowsAbout: ["Laravel", "PHP", "Python", "JavaScript", "Tailwind CSS", "MySQL", "React"],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
