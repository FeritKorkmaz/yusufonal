import { COMPANY } from '@/lib/constants'
import { MessageCircle, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section
      className="py-20 lg:py-28 bg-background"
      aria-label="Harekete geçin"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#1e1e1e] rounded-3xl px-8 py-14 md:px-16 overflow-hidden text-center">
          {/* Gold accent lines */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#ffd329]" />
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0 motion-lines"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  #ffd329 0px,
                  #ffd329 1px,
                  transparent 1px,
                  transparent 50px
                )`,
              }}
            />
          </div>

          <div className="relative">
            <p className="text-[#ffd329] text-xs font-bold uppercase tracking-widest mb-4">
              Harekete Geçin
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance max-w-2xl mx-auto">
              Gayrimenkulünüz İçin Doğru Alıcıyı Bulalım
            </h2>
            <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed mb-10">
              Satış veya kiralama sürecinde doğru fiyatlama, etkili tanıtım ve
              güvenilir takip ile yanınızdayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${COMPANY.phone1}`}
                className="micro-cta flex items-center justify-center gap-2 bg-[#ffd329] hover:bg-[#e6bd20] text-[#1e1e1e] font-bold px-8 py-4 rounded text-sm"
              >
                <Phone size={16} />
                Bizi Arayın
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="micro-cta flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded text-sm border border-white/20"
              >
                <MessageCircle size={16} />
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
