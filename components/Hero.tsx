import { COMPANY } from '@/lib/constants'
import {
  Building2,
  ExternalLink,
  LandPlot,
  MessageCircle,
  TrendingUp,
  Home,
} from 'lucide-react'

const badges = [
  { icon: Home, label: 'Konut' },
  { icon: LandPlot, label: 'Arsa' },
  { icon: Building2, label: 'Ticari' },
  { icon: TrendingUp, label: 'Yatırım Danışmanlığı' },
]

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center bg-[#1e1e1e] overflow-hidden pt-16 lg:pt-20"
      aria-label="Ana bölüm"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 motion-lines"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #ffd329 0px,
              #ffd329 1px,
              transparent 1px,
              transparent 40px
            )`,
          }}
        />
      </div>

      {/* Gold accent bar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#ffd329]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            {/* Pre-badge */}
            <div className="inline-flex items-center gap-2 bg-[#ffd329]/10 border border-[#ffd329]/30 rounded-full px-4 py-1.5 mb-6 motion-fade-soft">
              <span className="w-2 h-2 rounded-full bg-[#ffd329] animate-pulse" />
              <span className="text-[#ffd329] text-xs font-semibold tracking-wider uppercase">
                Konya&apos;nın Güvenilir Emlak Danışmanı
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6 motion-rise-soft motion-delay-1">
              Konya&apos;da{' '}
              <span className="text-[#ffd329]">Güvenilir</span>{' '}
              Emlak Danışmanlığı
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-8 text-pretty max-w-xl motion-rise-soft motion-delay-2">
              Satılık, kiralık ve yatırım odaklı gayrimenkul ihtiyaçlarınızda
              profesyonel destek sunuyoruz. Doğru fiyat, güvenilir danışmanlık,
              hızlı çözüm.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 motion-rise-soft motion-delay-3">
              <a
                href={COMPANY.sahibindenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="micro-cta flex items-center justify-center gap-2 bg-[#ffd329] hover:bg-[#e6bd20] text-[#1e1e1e] font-bold px-6 py-4 rounded text-sm"
              >
                <ExternalLink size={16} />
                İlanlarımızı İncele
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="micro-cta flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded text-sm border border-white/20"
              >
                <MessageCircle size={16} />
                WhatsApp&apos;tan Yaz
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 motion-rise-soft motion-delay-4">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                >
                  <Icon size={14} className="text-[#ffd329]" />
                  <span className="text-white/70 text-xs font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Property visual card */}
          <div className="relative">
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-[#ffd329] opacity-10" />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Satılık Konut', value: 'Yüzlerce', sub: 'aktif ilan' },
                  { label: 'Arsa & Arazi', value: 'Geniş', sub: 'portföy' },
                  { label: 'Ticari Alan', value: 'Her bütçe', sub: 'için seçenek' },
                  { label: 'Müşteri Memnuniyeti', value: '%100', sub: 'odaklı hizmet' },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={`bg-white/5 rounded-xl p-4 border border-white/10 motion-rise-soft motion-delay-${index + 1}`}
                  >
                    <p className="text-[#ffd329] font-bold text-lg">{item.value}</p>
                    <p className="text-white/40 text-xs">{item.sub}</p>
                    <p className="text-white/70 text-xs font-medium mt-1">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-white/40 text-xs mb-3 uppercase tracking-wider font-semibold">
                  Bize Ulaşın
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${COMPANY.phone1}`}
                    className="flex items-center gap-3 text-white/70 hover:text-[#ffd329] text-sm font-medium transition-colors"
                  >
                    <span className="w-8 h-8 rounded-lg bg-[#ffd329]/10 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#ffd329]">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.36 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81A16 16 0 0 0 12 15.91l.95-1.34a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2z" />
                      </svg>
                    </span>
                    {COMPANY.phone1Display}
                  </a>
                  <a
                    href={`tel:${COMPANY.phone2}`}
                    className="flex items-center gap-3 text-white/70 hover:text-[#ffd329] text-sm font-medium transition-colors"
                  >
                    <span className="w-8 h-8 rounded-lg bg-[#ffd329]/10 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#ffd329]">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.36 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81A16 16 0 0 0 12 15.91l.95-1.34a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2z" />
                      </svg>
                    </span>
                    {COMPANY.phone2Display}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 0C480 0 240 60 0 30L0 60Z" fill="oklch(0.98 0.004 90)" />
        </svg>
      </div>
    </section>
  )
}
