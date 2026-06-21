import { COMPANY } from '@/lib/constants'
import { MessageCircle, Phone } from 'lucide-react'

export default function FloatingButtons() {
  return (
    <div
      className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 sm:hidden"
      aria-label="Hızlı iletişim"
    >
      <a
        href={`https://wa.me/${COMPANY.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yaz"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl transition-colors duration-200"
      >
        <MessageCircle size={26} />
      </a>
      <a
        href={`tel:${COMPANY.phone1}`}
        aria-label="Telefon ile ara"
        className="micro-cta flex items-center justify-center w-14 h-14 rounded-full bg-[#ffd329] hover:bg-[#e6bd20] text-[#1e1e1e] shadow-2xl"
      >
        <Phone size={24} />
      </a>
    </div>
  )
}
