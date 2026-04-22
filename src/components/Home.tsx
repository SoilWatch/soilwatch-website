'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShoppingBag } from 'lucide-react'

const stats = [
  { value: '12+', label: 'Partners & clients' },
  { value: '5+', label: 'Countries active' },
  { value: 'NbS', label: 'Project typologies served' },
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
            <span className="gradient-text block">Building Carbon Projects</span>
          </h1>

          <p className="reveal opacity-0 delay-200 mt-7 text-lg leading-8 text-soil-600">
            SoilWatch develops and implements high-integrity carbon projects across regenerative agriculture, rangeland management, biochar, and enhanced weathering — all rooted in the soil that sustains life on Earth.
          </p>

          <div className="reveal opacity-0 delay-300 mt-9 flex flex-wrap gap-4">
            <Link
              href="/carbon-removals"
              className="btn-shimmer inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-900"
            >
              Browse Carbon Removals
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about#why-nature"
              className="inline-flex items-center gap-2 rounded-full border border-soil-300 bg-white/80 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-800 transition-all hover:border-soil-500 hover:bg-white"
            >
              Our Approach
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="reveal opacity-0 delay-200">
          <div className="soft-panel relative overflow-hidden rounded-[2rem] p-4">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(249,195,73,0.1),rgba(255,255,255,0)_50%)]" />

            <div className="relative h-72 w-full overflow-hidden rounded-[1.6rem]">
              <Image
                src="/images/fieldwork/20251029_105741.jpg"
                alt="Field documentation from SoilWatch project sites across East Africa"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-soil-900/75 via-soil-900/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-sm font-medium leading-6 text-white/85">
                  Field documentation from SoilWatch project sites across East Africa.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">

              <div className="relative h-48 overflow-hidden rounded-[1.6rem] border border-soil-200">
                <Image
                  src="https://soilwatch.eu/wp-content/uploads/2023/07/AGB_screenshot_malanje.png"
                  alt="AGB monitoring map"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soil-900/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/88 p-2.5 backdrop-blur-sm">
                  <div className="text-xs font-bold text-soil-900 leading-snug">Monitoring visuals carried into the storefront</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-1 flex-col justify-center rounded-[1.4rem] border border-soil-100 bg-white px-4 py-3">
                    <div className="font-display text-2xl font-bold uppercase text-soil-900">{stat.value}</div>
                    <div className="mt-1 text-xs leading-5 text-soil-500">{stat.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
