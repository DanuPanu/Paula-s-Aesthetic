"use client"

import { Instagram } from "lucide-react"

const navLinks = [
  { label: "Tietoa", href: "#tietoa", id: "tietoa" },
  { label: "Palvelut", href: "#palvelut", id: "palvelut" },
  { label: "Kokemuksia", href: "#kokemuksia", id: "kokemuksia" }
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-blush border-t border-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          
          {/* Logo - Fixed width for balance (w-48) */}
          <div className="lg:w-48 flex justify-center lg:justify-start">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="text-xl font-windsong font-semibold text-foreground tracking-tight"
            >
              Paula’s Aesthetic
            </a>
          </div>

          {/* Navigation Links - Truly centered */}
          <nav className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.id)}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links - Fixed width for balance (w-48) */}
          <div className="flex gap-4 lg:w-48 justify-center lg:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-background transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Paula’s Aesthetic. Kaikki oikeudet pidätetään.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}