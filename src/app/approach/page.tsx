import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Approach | SoilWatch Carbon Projects',
  description: 'SoilWatch develops and implements carbon projects across regenerative agriculture, rangeland management, biochar, ERW, and agroforestry. Transparent, science-based MRV at every stage.'
}

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <section className="section-shell overflow-hidden bg-soil-50 pb-16 pt-32">
        <div className="absolute inset-0 theme-lines opacity-70" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 mb-6">
            Our Approach
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold uppercase text-soil-900 mb-5">
            Project Types &amp;
            <span className="gradient-text block">Our Approach</span>
          </h1>
          <p className="text-soil-600 text-xl max-w-3xl mx-auto leading-8">
            We develop and implement carbon projects across a range of typologies, all connected by soil and designed with the highest standards of integrity and co-benefit delivery.
          </p>
        </div>
      </section>

      <section className="bg-soil-900 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] px-8 py-8 md:flex md:items-center md:gap-8">
            <div className="mb-4 md:mb-0 md:shrink-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-earth-300/30 bg-earth-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-300">
                Our MRV Principle
              </div>
            </div>
            <p className="text-white/80 leading-7 text-sm">
              Our MRV approach is built on the best available science, published methodologies, and open models. Nothing we do is a proprietary black box. Everything is auditable, reproducible, and designed to improve under scrutiny because scrutiny is what makes carbon markets credible.
            </p>
          </div>
        </div>
      </section>

      <Services />
      <HowItWorks />
    </main>
  )
}
