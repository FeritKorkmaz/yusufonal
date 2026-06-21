import {
  BadgeCheck,
  BarChart3,
  Building2,
  FileSearch,
  HandshakeIcon,
  LandPlot,
} from 'lucide-react'

const services = [
  {
    icon: HandshakeIcon,
    title: 'Gayrimenkul Satış Danışmanlığı',
    description:
      'Mülkünüzün doğru fiyatla, doğru alıcıya ulaşması için satış sürecini başından sonuna kadar profesyonelce yönetiyoruz.',
  },
  {
    icon: FileSearch,
    title: 'Kiralama Süreç Yönetimi',
    description:
      'Kiralık gayrimenkulleriniz için güvenilir kiracı bulma, sözleşme ve süreç takibinde yanınızda oluyoruz.',
  },
  {
    icon: LandPlot,
    title: 'Arsa & Arazi Yatırım Danışmanlığı',
    description:
      "Konya'nın gelişen bölgelerini takip ederek arsa ve arazi yatırımlarınızda doğru yönlendirme sunuyoruz.",
  },
  {
    icon: Building2,
    title: 'Ticari Gayrimenkul Danışmanlığı',
    description:
      'Ofis, dükkan, depo ve ticari alan ihtiyaçlarınızda doğru lokasyon ve doğru fırsatları değerlendiriyoruz.',
  },
  {
    icon: BarChart3,
    title: 'Doğru Fiyatlama ve Değerleme',
    description:
      'Güncel piyasa koşullarına göre gayrimenkulünüzün gerçek değerini analiz ediyoruz.',
  },
  {
    icon: BadgeCheck,
    title: 'Profesyonel İlan ve Tanıtım Süreci',
    description:
      'Gayrimenkulünüzü doğru açıklama, etkili görsel sunum ve dijital kanallarla daha görünür hale getiriyoruz.',
  },
]

export default function Services() {
  return (
    <section
      id="hizmetler"
      className="py-20 lg:py-28 bg-[#1e1e1e] mobile-scroll-rise"
      aria-label="Hizmetlerimiz"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[#ffd329] text-xs font-bold uppercase tracking-widest mb-3">
            Ne Yapıyoruz?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            Hizmetlerimiz
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            Gayrimenkul alım, satım, kiralama ve yatırım süreçlerinin her
            aşamasında yanınızdayız.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className={`mobile-scroll-rise mobile-scroll-stagger-${index + 1} micro-card group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#ffd329]/50 hover:bg-white/8`}
            >
              <div className="w-11 h-11 rounded-xl bg-[#ffd329]/10 flex items-center justify-center mb-4 group-hover:bg-[#ffd329]/20 transition-colors duration-300">
                <Icon size={20} className="text-[#ffd329]" />
              </div>
              <h3 className="font-bold text-white text-base mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
