'use client'

import { COMPANY } from '@/lib/constants'
import { ExternalLink, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'

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

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // UI only — no backend
    setSent(true)
    setForm({ name: '', phone: '', message: '' })
  }

  return (
    <section
      id="iletisim"
      className="py-20 lg:py-28 bg-[#1e1e1e]"
      aria-label="İletişim"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[#F5B800] text-xs font-bold uppercase tracking-widest mb-3">
            Bize Ulaşın
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            İletişim
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            Sorularınız için arayabilir, yazabilir ya da ofisimize
            ziyarette bulunabilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Info + Map */}
          <div className="flex flex-col gap-6">
            {/* Contact info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={`tel:${COMPANY.phone1}`}
                className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-[#F5B800]/40 rounded-xl p-4 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F5B800]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5B800]/20 transition-colors">
                  <Phone size={18} className="text-[#F5B800]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Telefon 1</p>
                  <p className="text-white text-sm font-semibold">
                    {COMPANY.phone1Display}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${COMPANY.phone2}`}
                className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-[#F5B800]/40 rounded-xl p-4 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F5B800]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5B800]/20 transition-colors">
                  <Phone size={18} className="text-[#F5B800]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Telefon 2</p>
                  <p className="text-white text-sm font-semibold">
                    {COMPANY.phone2Display}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-[#F5B800]/40 rounded-xl p-4 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F5B800]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5B800]/20 transition-colors">
                  <MessageCircle size={18} className="text-[#F5B800]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">WhatsApp</p>
                  <p className="text-white text-sm font-semibold">
                    {COMPANY.whatsappDisplay}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-[#F5B800]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#F5B800]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Adres</p>
                  <p className="text-white text-sm font-medium leading-snug">
                    {COMPANY.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-[#F5B800]/40 rounded-xl p-4 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F5B800]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5B800]/20 transition-colors">
                  <InstagramIcon size={18} />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Instagram</p>
                  <p className="text-white text-sm font-semibold">@yusufunalgayrimenkul</p>
                </div>
              </a>
              <a
                href={COMPANY.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-[#F5B800]/40 rounded-xl p-4 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F5B800]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5B800]/20 transition-colors">
                  <FacebookIcon size={18} />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Facebook</p>
                  <p className="text-white text-sm font-semibold">Yusuf Ünal Gayrimenkul</p>
                </div>
              </a>
            </div>

            {/* Sahibinden link */}
            <a
              href={COMPANY.sahibindenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 bg-[#F5B800]/10 border border-[#F5B800]/30 hover:border-[#F5B800]/60 rounded-xl p-4 group transition-all duration-200"
            >
              <div>
                <p className="text-[#F5B800] text-xs font-bold uppercase tracking-wider mb-0.5">
                  Güncel İlanlarımız
                </p>
                <p className="text-white/60 text-sm">
                  Satılık ve kiralık portföyümüzü inceleyin.
                </p>
              </div>
              <ExternalLink
                size={20}
                className="text-[#F5B800] group-hover:scale-110 transition-transform"
              />
            </a>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-white/10 h-52">
              <iframe
                title="Yusuf Ünal Gayrimenkul Konum"
                src={COMPANY.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-1">
              Mesaj Gönderin
            </h3>
            <p className="text-white/40 text-sm mb-6">
              Size en kısa sürede dönüş yapacağız.
            </p>

            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 rounded-full bg-[#F5B800]/20 flex items-center justify-center mb-4">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F5B800"
                    strokeWidth="2.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-white font-bold text-lg mb-1">
                  Mesajınız Alındı!
                </p>
                <p className="text-white/50 text-sm">
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-[#F5B800] text-sm hover:underline"
                >
                  Yeni mesaj gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white/60 text-xs font-semibold mb-1.5 uppercase tracking-wider"
                  >
                    Ad Soyad
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Adınız ve soyadınız"
                    className="w-full bg-white/5 border border-white/15 focus:border-[#F5B800]/60 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white/60 text-xs font-semibold mb-1.5 uppercase tracking-wider"
                  >
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="05XX XXX XX XX"
                    className="w-full bg-white/5 border border-white/15 focus:border-[#F5B800]/60 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/60 text-xs font-semibold mb-1.5 uppercase tracking-wider"
                  >
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Mesajınızı buraya yazın..."
                    className="w-full bg-white/5 border border-white/15 focus:border-[#F5B800]/60 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F5B800] hover:bg-[#e0a800] text-[#1e1e1e] font-bold py-3.5 rounded-lg transition-colors duration-200 text-sm mt-2"
                >
                  Gönder
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
