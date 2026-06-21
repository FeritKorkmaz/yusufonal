import { COMPANY } from '@/lib/constants'
import { MessageCircle, Phone } from 'lucide-react'

export default function Valuation() {
  return (
    <section
      className="py-20 lg:py-28 bg-background"
      aria-label="Değerleme"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#1e1e1e] rounded-3xl overflow-hidden">
          {/* Gold top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#ffd329]" />

          {/* Gold left accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ffd329]/20" />

          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0 motion-lines"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  #ffd329 0px,
                  #ffd329 1px,
                  transparent 1px,
                  transparent 60px
                )`,
              }}
            />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-10 items-center px-8 py-14 md:px-16">
            {/* Left */}
            <div>
              <p className="text-[#ffd329] text-xs font-bold uppercase tracking-widest mb-4">
                Ücretsiz Değerleme
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 text-balance">
                Gayrimenkulünüzü Değerlendirelim
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                Eviniz, arsanız veya ticari gayrimenkulünüz için piyasa
                koşullarına uygun değer analizi yapalım. Doğru fiyat, doğru
                tanıtım ve doğru müşteriyle satış sürecinizi hızlandıralım.
              </p>
            </div>

            {/* Right: buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
              <a
                href={`tel:${COMPANY.phone1}`}
                className="micro-cta flex items-center justify-center gap-2.5 bg-[#ffd329] hover:bg-[#e6bd20] text-[#1e1e1e] font-bold px-7 py-4 rounded-xl text-sm"
              >
                <Phone size={17} />
                Değerleme İçin Arayın
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="micro-cta flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-xl text-sm border border-white/20"
              >
                <MessageCircle size={17} />
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
