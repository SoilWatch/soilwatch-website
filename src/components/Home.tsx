'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShoppingBag } from 'lucide-react'

const stats = [
  { value: 'Biochar', label: 'Durable carbon storage' },
  { value: 'MRV', label: 'Field-to-credit monitoring' },
  { value: 'Livelihoods', label: 'Soil resilience outcomes' },
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

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-2 lg:items-center">

        <div>
          <div className="reveal opacity-0 inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-soil-700">
            <ShoppingBag size={13} className="text-earth-600" />
            Developer &amp; Implementer Partner in Carbon Projects
          </div>

          <h1 className="reveal opacity-0 delay-100 mt-7 font-display text-5xl font-extrabold uppercase leading-[0.94] text-soil-900 md:text-6xl lg:text-7xl">
            Restoring Soils,
            <span className="gradient-text block">Storing Carbon</span>
          </h1>

          <p className="reveal opacity-0 delay-200 mt-7 text-lg leading-8 text-soil-600">
            SoilWatch develops and implements high-integrity carbon projects across regenerative agriculture, rangeland management, biochar, and enhanced weathering, all rooted in the soil that sustains life on Earth.
          </p>

          <div className="reveal opacity-0 delay-300 mt-9 flex flex-wrap gap-4">
            <Link
              href="/livelihoods"
              className="btn-shimmer inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-900"
            >
              Improved Livelihoods
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/carbon-removals"
              className="inline-flex items-center gap-2 rounded-full border border-soil-300 bg-white/80 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-800 transition-all hover:border-soil-500 hover:bg-white"
            >
              Carbon Science & MRV
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="reveal opacity-0 delay-200">
          <div className="soft-panel relative overflow-hidden rounded-2xl p-3">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,24,16,0.06),rgba(249,195,73,0.12)_52%,rgba(255,255,255,0)_78%)]" />

            <div className="relative grid gap-3 md:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-xl border border-soil-200 bg-carbon-900">
                <Image
                  src="/images/fieldwork/20260318_130025.jpg"
                  alt="Biochar production with SoilWatch field partners"
                  fill
                  sizes="(max-width: 768px) 100vw, 390px"
                  className="object-cover object-[54%_58%]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-900/88 via-carbon-900/12 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/88 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-soil-900 backdrop-blur-sm">
                  Biochar carbon removal
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="max-w-xs font-display text-2xl font-extrabold uppercase leading-tight text-white">
                    Carbon locked into stable soil systems
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/78">
                    Project implementation with durable carbon storage at the center.
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                <div className="relative min-h-[230px] overflow-hidden rounded-xl border border-soil-200 bg-earth-100">
                  <Image
                    src="/images/livelihoods/livelihoods.jpg"
                    alt="Crops growing in resilient agricultural soil"
                    fill
                    sizes="(max-width: 768px) 100vw, 290px"
                    className="object-cover object-[52%_82%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-soil-900/70 via-soil-900/8 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="inline-flex rounded-full bg-earth-300 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-soil-900">
                      Livelihood resilience
                    </div>
                    <p className="mt-3 text-sm font-bold leading-5 text-white">
                      Productive ground cover, food security, and healthier soils.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-soil-100 bg-white/92 px-4 py-3 backdrop-blur-sm">
                      <div className="font-display text-sm font-extrabold uppercase tracking-[0.12em] text-soil-900">{stat.value}</div>
                      <div className="mt-1 text-xs leading-5 text-soil-500">{stat.label}</div>
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
