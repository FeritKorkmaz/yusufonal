import { COMPANY } from '@/lib/constants'
import { ArrowRight, Building2, Home, LandPlot, LayoutGrid } from 'lucide-react'

const listingCards = [
  {
    icon: LayoutGrid,
    title: 'Tüm İlanlar',
    description:
      'Güncel tüm satılık ve kiralık ilanlarımıza tek yerden göz atın.',
  },
  {
    icon: Home,
    title: 'Satılık Konut',
    description:
      'Konya genelinde farklı fiyat aralıklarında satılık konut ilanları.',
  },
  {
    icon: LandPlot,
    title: 'Arsa & Arazi',
    description:
      'Yatırımlık ve yapı izinli arsa ile arazi seçeneklerini inceleyin.',
  },
  {
    icon: Building2,
    title: 'Ticari Gayrimenkul',
    description:
      'Ofis, dükkan, depo ve her türlü ticari gayrimenkul ilanları.',
  },
]

export default function Listings() {
  return (
    <section
      id="ilanlar"
      className="py-20 lg:py-28 bg-background mobile-scroll-rise"
      aria-label="İlanlar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[#ffd329] text-xs font-bold uppercase tracking-widest mb-3">
            Güncel Portföy
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Güncel İlanlarımızı İnceleyin
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            Satılık ve kiralık gayrimenkul portföyümüzü inceleyebilir, detaylı
            bilgi için bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {listingCards.map(({ icon: Icon, title, description }, index) => (
            <a
              key={title}
              href={COMPANY.sahibindenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mobile-scroll-rise mobile-scroll-stagger-${index + 1} micro-card group flex flex-col bg-card border border-border rounded-2xl p-6 hover:border-[#ffd329] hover:shadow-lg`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#ffd329]/10 flex items-center justify-center mb-4 group-hover:bg-[#ffd329] transition-colors duration-300">
                <Icon
                  size={22}
                  className="text-[#ffd329] group-hover:text-[#1e1e1e] transition-colors duration-300"
                />
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {description}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[#ffd329] text-sm font-semibold">
                <span>İlanları Gör</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Main CTA */}
        <div className="mt-10 text-center">
          <a
            href={COMPANY.sahibindenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1e1e1e] hover:bg-[#2d2d2d] text-white font-semibold px-8 py-4 rounded transition-colors duration-200 text-sm"
          >
            Tüm İlanları İncele
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
