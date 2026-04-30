import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { ShoppingCart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Carbon Credits | SoilWatch',
  description: 'Verified carbon credits from SoilWatch Natural Climate Solutions projects: satellite-monitored, third-party verified, with full methodology transparency.',
}

export default function MarketplacePage() {
  return (
    <main>
      <Navbar />
      <section className="section-shell overflow-hidden bg-soil-50 min-h-screen pb-16 pt-32 flex items-center">
        <div className="absolute inset-0 theme-lines opacity-70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 mb-8">
            <ShoppingCart size={12} />
            Carbon Credits
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold uppercase text-soil-900 mb-6">
            Credits Available
            <span className="gradient-text block">On Request</span>
          </h1>
          <p className="text-soil-600 text-xl max-w-2xl mx-auto leading-8 mb-10">
            We are currently onboarding our first verified project cohort. Contact us directly to discuss credit availability, pricing, and the evidence behind each tonne.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="btn-shimmer inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-900"
            >
              Get in Touch
            </a>
            <a
              href="/carbon-removals"
              className="inline-flex items-center gap-2 rounded-full border border-soil-300 bg-white/80 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-800 transition-all hover:border-soil-500 hover:bg-white"
            >
              Our Methodology
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
