import { MapPin, MessageSquare, ShieldCheck, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: MapPin,
    title: "Konya Piyasasına Hakimiyet",
    description:
      "Konya'nın tüm mahalle ve bölgelerini iyi tanıyoruz. Size en doğru fiyat ve lokasyon bilgisini sunabilmek için güncel piyasayı yakından takip ediyoruz.",
  },
  {
    icon: TrendingUp,
    title: 'Doğru Fiyat Analizi',
    description:
      'Güncel piyasa verilerine dayalı gerçekçi fiyat analiziyle mülkünüzün doğru değerini belirliyoruz.',
  },
  {
    icon: ShieldCheck,
    title: 'Şeffaf ve Güvenilir Süreç',
    description:
      'Şeffaf iletişim ve dürüst yaklaşımla her adımda güveninizi kazanıyoruz. Müşterilerimizin uzun vadeli memnuniyeti bizim için her şeyden önemlidir.',
  },
  {
    icon: MessageSquare,
    title: 'Hızlı İletişim ve Takip',
    description:
      'Sorularınıza en kısa sürede cevap veriyoruz. Telefon, WhatsApp veya ofisimiz üzerinden her zaman ulaşabilirsiniz.',
  },
]

export default function WhyUs() {
  return (
    <section
      className="py-20 lg:py-28 bg-background mobile-scroll-rise"
      aria-label="Neden Biz?"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[#ffd329] text-xs font-bold uppercase tracking-widest mb-3">
            Farkımız
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            Yıllarca biriktirilen deneyim ve güvenle, gayrimenkulde doğru
            kararlar vermenize yardımcı oluyoruz.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`mobile-scroll-rise mobile-scroll-stagger-${i + 1} micro-card relative flex flex-col items-start p-6 bg-card rounded-2xl border border-border hover:border-[#ffd329]/40 hover:shadow-md`}
            >
              {/* Number */}
              <span className="absolute top-5 right-5 text-4xl font-black text-foreground/5 select-none">
                0{i + 1}
              </span>
              <div className="w-12 h-12 rounded-2xl bg-[#1e1e1e] flex items-center justify-center mb-5">
                <Icon size={22} className="text-[#ffd329]" />
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
