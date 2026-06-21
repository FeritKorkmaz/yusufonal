import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yusuf Ünal Gayrimenkul',
  description:
    'Konya’da güvenilir emlak danışmanlığı, satılık ve kiralık gayrimenkul hizmetleri.',
  keywords: [
    'konya emlak',
    'konya gayrimenkul',
    'satılık konut konya',
    'kiralık daire konya',
    'arsa konya',
    'yusuf ünal gayrimenkul',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffd329',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
