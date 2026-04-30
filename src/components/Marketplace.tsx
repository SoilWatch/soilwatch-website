'use client'
import { useRef, useEffect } from 'react'
import { ShoppingCart, Sprout } from 'lucide-react'

export default function Marketplace() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0')
            entry.target.classList.add('animate-fade-up')
          }
        })
      },
      { threshold: 0.08 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-shell overflow-hidden py-24 bg-soil-50" id="marketplace">
      <div className="absolute inset-0 theme-grid opacity-[0.18]" />
      <div className="absolute right-0 top-12 h-72 w-72 rounded-full bg-earth-200/45 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="reveal opacity-0 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 mb-4">
            <ShoppingCart size={12} />
            Carbon Marketplace
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-soil-900 mb-3">
            Buy Verified Carbon Credits
          </h2>
          <p className="text-soil-600 text-lg max-w-2xl leading-8">
            Every listing is backed by satellite evidence, independent verification, and transparent methodology.
          </p>
        </div>

        <div className="reveal opacity-0 delay-100">
          <div className="rounded-3xl border border-soil-200 bg-white overflow-hidden">
            <div className="bg-gradient-to-r from-soil-50 to-earth-50/40 border-b border-soil-100 px-8 py-4 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-earth-300 animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-soil-500">
                Listings Coming Soon
              </p>
            </div>
            <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-earth-200 bg-earth-50">
                <Sprout size={28} className="text-earth-600" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-soil-900 mb-2">
                Projects Coming Soon
              </h3>
              <p className="text-soil-400 text-sm max-w-xs">
                We&apos;re onboarding our first verified projects. Check back soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
