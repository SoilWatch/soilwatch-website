'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShoppingBag, BarChart3 } from 'lucide-react'

const stats = [
  { value: '12+', label: 'Partners and clients retained' },
  { value: '4.9/5', label: 'Project confidence score' },
  { value: 'MRV + Market', label: 'Science and transaction layer' },
]

const serviceHighlights = [
  { title: 'Pre-Feasibility & Site Selection', tag: 'Design Stage' },
  { title: 'Feasibility & Carbon Yield Estimation', tag: 'Design Stage' },
  { title: 'MRV System Design & Verification', tag: 'Compliance' },
]


export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

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
      { threshold: 0.1 }
    )
    const elements = containerRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="section-shell overflow-hidden bg-soil-50 pt-28">
      <div className="absolute inset-0 theme-lines opacity-80" />
      <div className="absolute inset-x-0 top-0 h-24 theme-band opacity-70" />
      <div className="absolute left-[-8rem] top-36 h-64 w-64 rounded-full bg-earth-300/20 blur-3xl" />
      <div className="absolute right-[-6rem] top-16 h-56 w-56 rounded-full bg-carbon-200/25 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        {/* Left column */}
        <div>
          <div className="reveal opacity-0 inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-soil-700">
            <ShoppingBag size={13} className="text-earth-600" />
            Improved storefront for carbon credits
          </div>

          <h1 className="reveal opacity-0 delay-100 mt-7 max-w-4xl font-display text-5xl font-extrabold uppercase leading-[0.94] text-soil-900 md:text-6xl lg:text-7xl">
            Your partner for
            <span className="gradient-text block"> Nature-based Solutions</span>
          </h1>

          <p className="reveal opacity-0 delay-200 mt-7 max-w-2xl text-lg leading-8 text-soil-600">
            SoilWatch empowers ecosystem restoration and food system transformation with transparent, science-based evidence throughout the project cycle.
          </p>

          <div className="reveal opacity-0 delay-300 mt-9 flex flex-wrap gap-4">
            <Link
              href="/marketplace"
              className="btn-shimmer inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-900"
            >
              Browse Carbon Credits
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-soil-300 bg-white/80 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-800 transition-all hover:border-soil-500 hover:bg-white"
            >
              Explore Services
            </Link>
          </div>

          <div className="reveal opacity-0 delay-400 mt-10 grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="soft-panel rounded-[1.75rem] p-5">
                <div className="font-display text-2xl font-bold uppercase text-soil-900">{stat.value}</div>
                <div className="mt-2 text-sm leading-6 text-soil-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="reveal opacity-0 delay-200">
          <div className="soft-panel relative overflow-hidden rounded-[2rem] p-4 md:p-5">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(249,195,73,0.12),rgba(255,255,255,0)_45%)]" />
            <div className="grid gap-4">

              {/* Main image */}
              <div className="relative h-96 w-full overflow-hidden rounded-[1.6rem]">
                <Image
                  src="https://soilwatch.eu/wp-content/uploads/2023/07/Sampling-soil-type-in-Zimbabwe-cropped-scaled.jpg"
                  alt="Soil sampling in the field"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soil-900/80 via-soil-900/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm leading-6 text-white/80">
                    Transparent data and rigorous monitoring across ecosystem restoration projects.
                  </p>
                </div>
              </div>

              {/* Service highlights */}
              <div className="rounded-[1.6rem] border border-soil-200 bg-white p-5">
                <div className="flex items-center gap-2 mb-4 border-b border-soil-100 pb-4">
                  <BarChart3 size={14} className="text-earth-600" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-soil-500">Our Services</span>
                </div>
                <div className="space-y-2.5">
                  {serviceHighlights.map((s) => (
                    <div key={s.title} className="flex items-center justify-between gap-3 rounded-[1.2rem] border border-soil-100 bg-soil-50 px-4 py-3">
                      <span className="font-display text-sm font-bold uppercase text-soil-900">{s.title}</span>
                      <span className="shrink-0 rounded-full bg-earth-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-earth-700">{s.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
