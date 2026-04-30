'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const stats = [
  { value: '< 30 yrs', label: 'Timeframe for ecosystem collapse from land misuse' },
  { value: '50%+', label: 'Share of Earth\'s ice-free land that is degraded' },
  { value: '1 generation', label: 'How fast landscapes transform without intervention' },
]

export default function SoilNarrative() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0')
          entry.target.classList.add('animate-fade-up')
        }
      }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="section-shell overflow-hidden bg-soil-900 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,195,73,0.12),transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <div className="reveal opacity-0 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-200 mb-6">
              Why Soils Matter
            </div>
            <h2 className="reveal opacity-0 delay-100 font-display text-4xl md:text-5xl font-bold uppercase leading-[1.05] text-white mb-8">
              Soils Are The Foundation
              <span className="block text-earth-300">Of All Terrestrial Life</span>
            </h2>
            <div className="reveal opacity-0 delay-200 space-y-5 text-lg leading-8 text-white/75">
              <p>
                Everything we eat, apart from wild seafood, is grown directly or indirectly from the soil. Soils are being destroyed. That destruction drives biodiversity loss, rural poverty, food insecurity, and ultimately conflict and displacement.
              </p>
              <p>
                This destruction is not driven by climate change alone. It is also caused by unsustainable land management practices — overgrazing, uncontrolled agricultural expansion, and invasive species. Carbon finance can help build stronger land governance and create the incentives needed to shift landscapes from degradation to restoration.
              </p>
              <p className="text-white/55 text-base">
                From Mauritania to Samburu to Sudan&apos;s Gedaref, we have seen landscapes collapse and livelihoods disappear in living memory. We have also seen what restoration looks like when done right.
              </p>
            </div>

            <div className="reveal opacity-0 delay-300 mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                  <div className="font-display text-xl font-bold text-earth-300 leading-tight mb-2">{s.value}</div>
                  <div className="text-xs leading-5 text-white/55">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal opacity-0 delay-200 grid grid-cols-2 gap-4">
            <div className="relative h-80 overflow-hidden rounded-[1.8rem]">
              <Image
                src="/images/fieldwork/20260318_102702.jpg"
                alt="Landscape degradation documented in the field"
                fill
                sizes="(max-width: 1024px) 50vw, 280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-soil-900/50 to-transparent" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative h-[9.5rem] overflow-hidden rounded-[1.8rem]">
                <Image
                  src="/images/fieldwork/20260318_130025.jpg"
                  alt="Field team working in degraded landscape"
                  fill
                  sizes="(max-width: 1024px) 50vw, 280px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soil-900/50 to-transparent" />
              </div>
              <div className="relative h-[9.5rem] overflow-hidden rounded-[1.8rem]">
                <Image
                  src="/images/fieldwork/20221018_164402.jpg"
                  alt="Soil and landscape restoration site"
                  fill
                  sizes="(max-width: 1024px) 50vw, 280px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soil-900/50 to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
