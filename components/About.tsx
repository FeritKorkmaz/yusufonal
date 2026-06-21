import { COMPANY } from '@/lib/constants'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const values = [
  'Konya merkezli gayrimenkul danışmanlığı',
  'Satış, kiralama ve yatırım süreçlerinde destek',
  'Güven ve şeffaflık odaklı çalışma',
  'Hızlı ve çözüm odaklı iletişim',
]

export default function About() {
  return (
    <section
      id="hakkimizda"
      className="py-20 lg:py-28 bg-[#1e1e1e] mobile-scroll-rise"
      aria-label="Hakkımızda"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Logo / visual */}
          <div className="relative mobile-scroll-rise mobile-scroll-stagger-1">
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-72">
              {/* Gold decorative border inside */}
              <div className="absolute inset-4 border border-[#ffd329]/20 rounded-xl pointer-events-none" />
              <Image
                src={COMPANY.logoUrl}
                alt={COMPANY.name}
                width={320}
                height={110}
                className="w-full max-w-xs object-contain mb-4"
              />
              <p className="text-white/40 text-sm">
                Konya &bull; Gayrimenkul Danışmanlığı
              </p>
              {/* Gold corner accents */}
              <span className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#ffd329]" />
              <span className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#ffd329]" />
              <span className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#ffd329]" />
              <span className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#ffd329]" />
            </div>
          </div>

          {/* Right: Text */}
          <div className="mobile-scroll-rise mobile-scroll-stagger-2">
            <p className="text-[#ffd329] text-xs font-bold uppercase tracking-widest mb-3">
              Biz Kimiz?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-balance">
              Hakkımızda
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              <strong className="text-white">{COMPANY.name}</strong>,
              Konya&apos;da satılık konut, arsa, arazi ve ticari gayrimenkul
              alanlarında hizmet veren güvenilir bir emlak danışmanlık
              firmasıdır.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Müşterilerimizin alım, satım ve kiralama süreçlerinde doğru
              kararlar verebilmesi için şeffaf, güvenilir ve çözüm odaklı bir
              danışmanlık anlayışıyla çalışıyoruz.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Konya gayrimenkul piyasasını yakından takip ederek, her
              müşterimizin ihtiyacına uygun kalıcı ve doğru çözümler üretmeyi
              hedefliyoruz.
            </p>

            <ul className="flex flex-col gap-3">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#ffd329] flex-shrink-0" />
                  <span className="text-white/70 text-sm">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
