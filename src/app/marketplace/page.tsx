import Navbar from '@/components/Navbar'
import Marketplace from '@/components/Marketplace'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carbon Credit Marketplace — SoilWatch',
  description: 'Buy verified soil carbon, agroforestry, and blue carbon credits. Every project satellite-monitored, third-party verified.'
}

export default function MarketplacePage() {
  return (
    <main>
      <Navbar />
      <section className="section-shell overflow-hidden bg-soil-50 pb-8 pt-32">
        <div className="absolute inset-0 theme-lines opacity-70" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 mb-6">
            Carbon Marketplace
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold uppercase text-soil-900 mb-5">
            Buy Carbon Credits
            <span className="gradient-text block"> With Original SoilWatch Credibility</span>
          </h1>
          <p className="text-soil-600 text-xl max-w-3xl mx-auto leading-8">
            Every listing is backed by satellite evidence, independent verification, and the same transparent methodology language carried over from the migrated website.
          </p>
        </div>
      </section>
      <Marketplace />
    </main>
  )
}
