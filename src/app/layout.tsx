import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SoilWatch — Carbon Project Developer & Implementer',
  description: 'SoilWatch develops and implements high-integrity carbon projects in regenerative agriculture, rangeland restoration, biochar, and ERW. Transparent, science-based, locally rooted.',
  keywords: 'carbon credits, soil monitoring, MRV, nature-based solutions, carbon sequestration, regenerative agriculture, biochar, enhanced rock weathering, ERW, rangeland, Ethiopia, carbon developer, NbS, high integrity carbon',
  icons: {
    icon: '/images/icon.png',
  },
  openGraph: {
    title: 'SoilWatch — Developer & Implementer of Carbon Projects',
    description: 'High-integrity carbon projects in regenerative agriculture, rangeland restoration, biochar, and ERW. Transparent, science-based, locally rooted.',
    type: 'website',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
