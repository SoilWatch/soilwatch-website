'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ShieldCheck, Leaf, MapPin, TrendingUp } from 'lucide-react'

const typologies = [
  {
    title: 'Regenerative Agriculture',
    desc: 'Improving soil organic carbon through cover crops, reduced tillage, and rotational grazing. Supporting smallholder farmers and food security.',
    src: '/images/services/southsudan-po-ssd-may2018-0007.jpg',
    methodology: 'VM0042 / VM0053',
  },
  {
    title: 'Rangeland Management',
    desc: 'Restoring degraded pastoral and grazing lands across Africa, reversing decades of overgrazing and unsustainable pastoralism-driven soil loss and ecosystem collapse.',
    src: '/images/fieldwork/20221020_143654.jpg',
    methodology: 'VM0042 / C-Sink',
  },
  {
    title: 'Biochar',
    desc: 'Locking carbon into stable form for centuries while improving soil fertility, water retention, and crop yields.',
    src: '/images/fieldwork/20260318_130025.jpg',
    methodology: 'Puro.earth / Gold Standard',
  },
  {
    title: 'Enhanced Rock Weathering',
    desc: 'Accelerating natural mineral weathering to draw down CO₂ into ocean-bound bicarbonates, with soil health co-benefits.',
    src: '/images/services/slider-roots.jpg',
    methodology: 'MRV in development',
  },
  {
    title: 'Agroforestry',
    desc: 'Integrating trees into agricultural land to build above-ground biomass, soil carbon, and biodiversity simultaneously.',
    src: '/images/fieldwork/agroforestry.jpg',
    methodology: 'Gold Standard / Plan Vivo',
  },
]

const usps = [
  {
    icon: ShieldCheck,
    title: 'High Integrity',
    desc: 'Projects designed to the highest methodological standards and continuous quality management, open to scrutiny at every stage.'
  },
  {
    icon: Leaf,
    title: 'Co-Benefits First',
    desc: 'Every project delivers measurable biodiversity, food security, and livelihood benefits alongside carbon.',
  },
  {
    icon: MapPin,
    title: 'Locally Rooted',
    desc: 'Context-specific, community-led implementation that works within local structures and knowledge.',
  },
  {
    icon: TrendingUp,
    title: 'Underserved Markets',
    desc: 'Working where need and potential are highest — across East Africa, the Horn of Africa, and the Sahel — regions often ignored by global carbon markets.',
  },
]

export default function ProjectTypologies() {
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
    <div ref={ref}>
      <section className="section-shell overflow-hidden bg-white py-24">
        <div className="absolute inset-0 theme-grid opacity-[0.07]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <div className="reveal opacity-0 text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-earth-200 bg-earth-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 mb-5">
              What We Work On
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-soil-900 mb-4">
              The Soil Connects
              <span className="gradient-text block">Everything We Do</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-soil-600">
              From regenerative farming to biochar to enhanced weathering - every project typology we work in is anchored in soil health and the communities that depend on it.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {typologies.map((t, i) => (
              <article
                key={t.title}
                className="reveal opacity-0 service-card soft-panel rounded-[1.8rem] overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={t.src}
                    alt={t.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-soil-900/80 via-soil-900/20 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-earth-300/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-soil-900">
                      {t.methodology}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold uppercase text-soil-900 mb-3">{t.title}</h3>
                  <p className="text-sm leading-6 text-soil-600">{t.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal opacity-0 mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {usps.map((usp, i) => {
              const Icon = usp.icon
              return (
                <div
                  key={usp.title}
                  className="rounded-[1.6rem] border border-soil-100 bg-soil-50 p-6"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-earth-100">
                    <Icon size={17} className="text-earth-700" />
                  </div>
                  <h4 className="font-display text-base font-bold uppercase text-soil-900 mb-2">{usp.title}</h4>
                  <p className="text-sm leading-6 text-soil-600">{usp.desc}</p>
                </div>
              )
            })}
          </div>

        </div>
      </section>
    </div>
  )
}
