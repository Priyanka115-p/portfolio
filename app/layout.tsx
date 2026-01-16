import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nikitesh Bhadade | Sr. UI Developer & React Specialist | Portfolio",
  description:
    "Sr. Software Engineer with 9.5+ years of experience in React, JavaScript, SASS, and design-to-code conversion. Expert in WCAG AA accessibility standards and pixel-perfect UI development.",
  keywords: [
    "UI Developer",
    "React Developer",
    "Frontend Engineer",
    "JavaScript",
    "SASS",
    "Web Design",
    "Accessibility",
    "WCAG AA",
    "Pune",
    "nikitesh bhadade",
    "nikitesh bhadade website",
    "nikitesh.com",
    "nikitesh",
    "nikitesh web ui developer",
    "nikitesh bhadade ui developer"
  ],
  generator: "v0.app",
  openGraph: {
    title: "Nikitesh Bhadade | Sr. UI Developer & React Specialist",
    description:
      "Sr. Software Engineer with 9.5+ years of experience in React, JavaScript, SASS, and design-to-code conversion.",
    type: "website",
    locale: "en_US",
    url: "https://nikitesh.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikitesh Bhadade | Sr. UI Developer & React Specialist",
    description:
      "Sr. Software Engineer with 9.5+ years of experience in React, JavaScript, SASS, and design-to-code conversion.",
  },
  alternates: {
    canonical: "https://nikitesh.com",
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
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-L3XQRP3SR9" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L3XQRP3SR9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nikitesh Bhadade",
              url: "https://nikiteshbhadade.com",
              jobTitle: "Sr. Software Engineer",
              email: "nikiteshb@gmail.com",
              telephone: "+919561501506",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressCountry: "IN",
              },
              sameAs: ["https://www.linkedin.com/in/nikiteshbhadade/", "https://github.com/nikiteshb"],
              knowsAbout: ["React.js", "JavaScript", "SASS", "HTML5", "CSS3", "Web Accessibility", "WCAG AA"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
