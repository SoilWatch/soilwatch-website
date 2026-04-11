import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SoilWatch',
  description: 'Science-based MRV solutions for nature-based carbon projects. Empowering ecosystem restoration with transparent, verified carbon credits.',
  keywords: 'carbon credits, soil monitoring, MRV, nature-based solutions, carbon sequestration, regenerative agriculture',
  openGraph: {
    title: 'SoilWatch — Natural Climate Solutions',
    description: 'Empowering ecosystem restoration with transparent carbon monitoring.',
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
