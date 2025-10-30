"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang Desa", href: "#about" },
    { label: "Perangkat Desa", href: "#officials" },
    { label: "Potensi Desa", href: "#potential" },
    { label: "PSU Desa", href: "#services" },
    { label: "Galeri", href: "#gallery" },
    { label: "Berita", href: "#news" },
    { label: "Kontak", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base font-bold text-foreground">Desa Tounelet Satu</h1>
              <p className="text-xs text-muted-foreground">Kec. Sonder, Minahasa</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center -mx-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-2 py-1 text-xs font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-0.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-2 py-1 text-xs font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
