import { COMPANY } from '@/lib/constants'
import { ExternalLink, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const quickLinks = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'İlanlarımız', href: '#ilanlar' },
  { label: 'Hizmetlerimiz', href: '#hizmetler' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'İletişim', href: '#iletisim' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#141414] border-t border-white/10" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src={COMPANY.logoUrl}
              alt={COMPANY.name}
              width={200}
              height={70}
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-5">
              Konya merkezli güvenilir gayrimenkul danışmanlık firması.
              Satış, kiralama ve yatırım süreçlerinde yanınızdayız.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#ffd329]/50 hover:text-[#ffd329] text-white/40 transition-all duration-200"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={COMPANY.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#ffd329]/50 hover:text-[#ffd329] text-white/40 transition-all duration-200"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href={COMPANY.sahibindenUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="İlanlarımız"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#ffd329]/50 hover:text-[#ffd329] text-white/40 transition-all duration-200"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Hızlı Bağlantılar
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-[#ffd329] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={COMPANY.sahibindenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white/40 hover:text-[#ffd329] text-sm transition-colors"
                >
                  <ExternalLink size={12} />
                  İlanlarımız
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              İletişim
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${COMPANY.phone1}`}
                  className="flex items-center gap-2 text-white/40 hover:text-[#ffd329] text-sm transition-colors"
                >
                  <Phone size={13} />
                  {COMPANY.phone1Display}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone2}`}
                  className="flex items-center gap-2 text-white/40 hover:text-[#ffd329] text-sm transition-colors"
                >
                  <Phone size={13} />
                  {COMPANY.phone2Display}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/40 text-sm">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            &copy; {year} {COMPANY.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={COMPANY.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/25 hover:text-[#ffd329] text-xs transition-colors"
            >
              <InstagramIcon size={11} />
              Instagram
            </a>
            <a
              href={COMPANY.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/25 hover:text-[#ffd329] text-xs transition-colors"
            >
              <FacebookIcon size={11} />
              Facebook
            </a>
            <a
              href={COMPANY.sahibindenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/25 hover:text-[#ffd329] text-xs transition-colors"
            >
              <ExternalLink size={11} />
              İlanlarımız
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
