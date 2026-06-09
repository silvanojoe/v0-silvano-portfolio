import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Silvano Awino Joseph | Digital Marketing & Performance Marketing Specialist',
  description: 'Professional portfolio showcasing expertise in SEO, Google Ads, Meta Ads, Email Marketing, Analytics, Automation, and Lead Generation. Dubai-based Digital Marketing Specialist with Google Certification.',
  keywords: ['Digital Marketing', 'Performance Marketing', 'SEO', 'Google Ads', 'Meta Ads', 'Email Marketing', 'Analytics', 'Lead Generation', 'Dubai'],
  authors: [{ name: 'Silvano Awino Joseph' }],
  openGraph: {
    title: 'Silvano Awino Joseph | Digital Marketing Specialist',
    description: 'Data-driven Digital Marketing & E-Commerce Specialist based in Dubai, UAE',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-light-gray`}>
      <body className="font-sans antialiased bg-light-gray">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
