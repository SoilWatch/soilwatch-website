import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — SoilWatch Carbon MRV',
  description: 'From pre-feasibility to verified carbon credit issuance. Full lifecycle MRV services for nature-based solutions projects.'
}

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      {/* Page hero */}
      <section className="section-shell overflow-hidden bg-soil-50 pb-16 pt-32">
        <div className="absolute inset-0 theme-lines opacity-70" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 mb-6">
            Our Services
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold uppercase text-soil-900 mb-5">
            Science-Backed MRV
            <span className="gradient-text block"> At Every Stage</span>
          </h1>
          <p className="text-soil-600 text-xl max-w-3xl mx-auto leading-8">
            Supporting nature-based solution projects from initial concept through verified carbon credit issuance and ongoing monitoring.
          </p>
        </div>
      </section>
      <Services />
      <HowItWorks />
    </main>
  )
}
