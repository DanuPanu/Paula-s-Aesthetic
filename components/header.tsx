"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - fixed width for balance */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-2xl font-semibold font-windsong text-foreground tracking-tight"
          >
            Paula’s Aesthetic
          </a>

          {/* Desktop Navigation - truly centered */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            <a
              href="#tietoa"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('tietoa')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Tietoa
            </a>
            <a
              href="#palvelut"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('palvelut')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Palvelut
            </a>
            <a
              href="#kokemuksia"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('kokemuksia')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Kokemuksia
            </a>
          </nav>

          {/* CTA Button - fixed width for balance */}
          <div className="hidden lg:flex lg:w-32 justify-end">
            <Button
              className="rounded-full px-6"
              onClick={() => document.getElementById('yhteystiedot')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ota yhteyttä
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a
                href="#tietoa"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('tietoa')?.scrollIntoView({ behavior: 'smooth' })
                  setMobileMenuOpen(false)
                }}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Tietoa
              </a>
              <a
                href="#palvelut"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('palvelut')?.scrollIntoView({ behavior: 'smooth' })
                  setMobileMenuOpen(false)
                }}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Palvelut
              </a>
              <a
                href="#kokemuksia"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('kokemuksia')?.scrollIntoView({ behavior: 'smooth' })
                  setMobileMenuOpen(false)
                }}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Galleria
              </a>
              <Button
                className="rounded-full w-full mt-2"
                onClick={() => {
                  document.getElementById('yhteystiedot')?.scrollIntoView({ behavior: 'smooth' })
                  setMobileMenuOpen(false)
                }}
              >
                Ota yhteyttä
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
