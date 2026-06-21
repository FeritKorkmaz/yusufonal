'use client'

import { COMPANY } from '@/lib/constants'
import { ExternalLink, Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const navLinks = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'İlanlarımız', href: '#ilanlar' },
  { label: 'Hizmetlerimiz', href: '#hizmetler' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'İletişim', href: '#iletisim' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1e1e1e]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#1e1e1e]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#anasayfa" className="flex-shrink-0">
            <Image
              src={COMPANY.logoUrl}
              alt={COMPANY.name}
              width={180}
              height={60}
              className="h-10 lg:h-12 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Ana navigasyon">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#F5B800] text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={COMPANY.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/50 hover:text-[#F5B800] transition-colors duration-200"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={COMPANY.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/50 hover:text-[#F5B800] transition-colors duration-200"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href={COMPANY.sahibindenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-[#1e1e1e] bg-[#F5B800] hover:bg-[#e0a800] px-4 py-2 rounded transition-colors duration-200"
            >
              <ExternalLink size={14} />
              İlanlarımızı İncele
            </a>
            <a
              href={`tel:${COMPANY.phone1}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-white border border-white/30 hover:border-[#F5B800] hover:text-[#F5B800] px-4 py-2 rounded transition-colors duration-200"
            >
              <Phone size={14} />
              Bizi Arayın
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1e1e1e] border-t border-white/10">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-white/80 hover:text-[#F5B800] py-3 text-base font-medium border-b border-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <a
                href={COMPANY.sahibindenUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-[#1e1e1e] bg-[#F5B800] px-4 py-3 rounded"
              >
                <ExternalLink size={14} />
                İlanlarımızı İncele
              </a>
              <a
                href={`tel:${COMPANY.phone1}`}
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-white border border-white/30 px-4 py-3 rounded"
              >
                <Phone size={14} />
                Bizi Arayın
              </a>
              <div className="flex items-center justify-center gap-5 py-2">
                <a
                  href={COMPANY.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  aria-label="Instagram"
                  className="text-white/50 hover:text-[#F5B800] transition-colors"
                >
                  <InstagramIcon size={22} />
                </a>
                <a
                  href={COMPANY.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  aria-label="Facebook"
                  className="text-white/50 hover:text-[#F5B800] transition-colors"
                >
                  <FacebookIcon size={22} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
