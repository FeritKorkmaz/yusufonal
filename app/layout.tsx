import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yusuf Ünal Gayrimenkul | Konya Emlak Danışmanlığı',
  description:
    "Konya'da güvenilir emlak danışmanlığı. Satılık, kiralık konut, arsa ve ticari gayrimenkul ihtiyaçlarınızda Yusuf Ünal Gayrimenkul profesyonel destek sunar.",
  keywords: [
    'konya emlak',
    'konya gayrimenkul',
    'satılık konut konya',
    'kiralık daire konya',
    'arsa konya',
    'yusuf ünal gayrimenkul',
  ],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F5B800',
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
