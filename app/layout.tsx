import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import SiteChrome from '@/components/SiteChrome'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Oraman Records',
  description: 'Yeni nesil müzik platformu',
  icons: {
    icon: '/images/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${montserrat.variable}`}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-secondary text-white antialiased`}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
} 