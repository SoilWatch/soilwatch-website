'use client'

import Navbar from '@/components/Navbar'
import HowItWorks from '@/components/HowItWorks'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { Beaker, BookOpen, HeartHandshake, ShieldCheck } from 'lucide-react'

const values = [
  {
    icon: Beaker,
    title: 'Scientific Rigour',
    description:
      'We ground our work in defensible science, transparent methods, and field-level evidence. We welcome scrutiny because high-integrity carbon removal depends on methods that can be tested, audited, and improved.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity And Transparency',
    description:
      'We communicate clearly about methods, assumptions, limitations, chain of custody, and results so buyers, partners, and communities can make decisions with confidence.',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership And Livelihoods',
    description:
      'We work with local implementers, communities, NGOs, scientific partners, and buyers to build projects that support climate outcomes alongside livelihood, soil, biodiversity, and resilience benefits.',
  },
  {
    icon: BookOpen,
    title: 'Learning And Adaptation',
    description:
      'We continuously improve our approaches by combining field experience, methodology development, digital MRV, remote sensing, data systems, and evolving carbon market standards.',
  },
]

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
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
    <main ref={ref}>
      <Navbar />

      <section className="section-shell overflow-hidden bg-soil-50 pb-24 pt-32">
        <div className="absolute inset-0 theme-lines opacity-75" />
        <div className="absolute right-[-6rem] top-10 h-72 w-72 rounded-full bg-earth-200/35 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <div className="reveal inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 opacity-0">
                About Us
              </div>

              <h1 className="reveal mt-7 font-display text-5xl font-bold uppercase leading-[0.94] text-soil-900 opacity-0 delay-100 md:text-6xl">
                Natural Climate Solutions
                <span className="gradient-text block">Measured For Resilience And Carbon Removal</span>
              </h1>

              <p className="reveal mt-7 max-w-3xl text-lg leading-8 text-soil-600 opacity-0 delay-200">
                SoilWatch develops high-integrity natural climate solutions through a vertically integrated model that
                combines field implementation, scientific methodology, chain of custody, digital MRV infrastructure,
                and carbon market expertise.
              </p>

              <p className="reveal mt-5 max-w-3xl text-lg leading-8 text-soil-600 opacity-0 delay-300">
                Our work is designed to improve the quality of every tonne of CO2 removal delivered while measuring
                livelihood, soil, biodiversity, and resilience outcomes at field level. Biochar is our near-term focus,
                with enhanced rock weathering, soil organic carbon, and rangeland co-benefits in the pipeline.
              </p>
            </div>

            <div className="reveal soft-panel rounded-[2rem] p-4 opacity-0 delay-200">
              <div className="relative min-h-[30rem] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/fieldwork/WF11005173 Wamba Images-31.jpg"
                  alt="Field work, Wamba"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                  quality={85}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soil-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-[1.4rem] bg-soil-900/50 p-4 backdrop-blur-sm">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                      SoilWatch
                    </div>
                    <div className="mt-1 font-display text-lg font-bold uppercase text-white">
                      Practical science for sustainable land use
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell overflow-hidden bg-white py-24">
        <div className="absolute inset-0 theme-grid opacity-[0.08]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="reveal mb-14 text-center opacity-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-soil-200 bg-soil-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-soil-600">
              Mission And Vision
            </div>

            <h2 className="font-display text-4xl font-bold uppercase text-soil-900 md:text-5xl">
              Building Carbon Removal That Is Measurable, Auditable, And Useful On The Ground
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="reveal soft-panel rounded-[1.8rem] p-8 opacity-0">
              <h3 className="mb-4 font-display text-2xl font-bold uppercase text-soil-900">Our Mission</h3>
              <p className="text-lg leading-8 text-soil-600">
                Our mission is to develop and scale high-integrity carbon removal projects that combine rigorous
                measurement, transparent chain of custody, and field-level evidence with tangible benefits for
                communities, soils, biodiversity, and climate resilience.
              </p>
            </div>

            <div className="reveal soft-panel rounded-[1.8rem] p-8 opacity-0 delay-100">
              <h3 className="mb-4 font-display text-2xl font-bold uppercase text-soil-900">Our Vision</h3>
              <p className="text-lg leading-8 text-soil-600">
                Our vision is a carbon market where every tonne of removal is backed by credible data, resilient
                operations, and measurable local outcomes, allowing natural climate solutions to attract premium buyers
                and long-term finance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell overflow-hidden bg-soil-50 py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="reveal inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 opacity-0">
                Our Background
              </div>

              <h2 className="reveal mt-6 font-display text-4xl font-bold uppercase text-soil-900 opacity-0 delay-100 md:text-5xl">
                Combining Expertise Across Science, Carbon Markets, Operations, And Livelihoods
              </h2>
            </div>

            <div className="reveal space-y-5 text-lg leading-8 text-soil-600 opacity-0 delay-200">
              <p>
                SoilWatch brings together expertise in climate change policy, carbon markets, livelihood development,
                food security, ecosystem restoration, rangeland management, monitoring and evaluation, field operations,
                and digital MRV.
              </p>
              <p>
                This multidisciplinary background allows us to design projects that are scientifically defensible,
                operationally practical, commercially credible, and grounded in the realities of rural communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell overflow-hidden bg-white py-24">
        <div className="absolute inset-0 theme-grid opacity-[0.08]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="reveal opacity-0">
              <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/Interviewing-farmer-Aaron-in-Zimbabwe-scaled.jpg"
                  alt="Interviewing farmer Aaron in Zimbabwe"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soil-900/70 via-soil-900/8 to-transparent" />
              </div>
            </div>

            <div>
              <div className="reveal inline-flex items-center gap-2 rounded-full border border-soil-200 bg-soil-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-soil-600 opacity-0">
                What We Build
              </div>

              <h2 className="reveal mt-6 font-display text-4xl font-bold uppercase text-soil-900 opacity-0 delay-100 md:text-5xl">
                A Vertically Integrated Model For Higher-Quality Carbon Removal
              </h2>

              <div className="reveal mt-6 space-y-5 text-lg leading-8 text-soil-600 opacity-0 delay-200">
                <p>
                  We connect field data capture, sample archiving, chain of custody, quality control, registry
                  submission, standards engagement, buyer reporting, and community payments into one integrated project
                  development system.
                </p>
                <p>
                  This approach helps compress the path from project design to first credit while giving premium buyers
                  clear evidence of climate, biodiversity, soil, and livelihood outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-nature" className="section-shell overflow-hidden bg-soil-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,195,73,0.14),transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="reveal mb-12 text-center opacity-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-200">
              Our Platform Logic
            </div>

            <h2 className="font-display text-4xl font-bold uppercase text-white md:text-5xl">
              Methodology-Agnostic By Design
              <span className="block text-earth-300">Built For A Portfolio Of Carbon Pathways</span>
            </h2>
          </div>

          <div className="reveal grid gap-6 opacity-0 delay-100 md:grid-cols-3">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="mb-3 font-display text-base font-bold uppercase text-earth-300">
                Biochar Today
              </h3>
              <p className="text-sm leading-7 text-white/70">
                Biochar is the near-term carbon removal pathway in our portfolio. It allows us to build operational
                protocols, field data systems, chain-of-custody logic, and buyer-facing evidence around durable carbon
                removal.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="mb-3 font-display text-base font-bold uppercase text-earth-300">
                ERW, SOC, And Rangelands
              </h3>
              <p className="text-sm leading-7 text-white/70">
                Enhanced rock weathering, soil organic carbon, and rangeland co-benefits are part of the longer-term
                portfolio logic. The platform is designed to support multiple methodologies rather than depend on a
                single carbon pathway.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="mb-3 font-display text-base font-bold uppercase text-earth-300">
                Digital MRV Infrastructure
              </h3>
              <p className="text-sm leading-7 text-white/70">
                Our digital MRV infrastructure supports data capture, analytics, evidence packages, buyer interfaces,
                and platform-ready integration for marketplaces, developers, NGOs, and corporate buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soil-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mb-14 text-center opacity-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700">
              Our Core Values
            </div>

            <h2 className="mb-4 font-display text-4xl font-bold uppercase text-soil-900">
              Principles Behind The Work
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-soil-600">
              These values shape how we work with communities, field implementers, scientific partners, carbon market
              standards, project developers, marketplaces, and corporate buyers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = value.icon

              return (
                <article
                  key={value.title}
                  className="reveal service-card soft-panel rounded-[1.8rem] p-6 opacity-0"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-earth-100">
                    <Icon size={18} className="text-earth-700" />
                  </div>

                  <h3 className="mb-3 font-display text-lg font-bold uppercase text-soil-900">{value.title}</h3>
                  <p className="text-sm leading-6 text-soil-600">{value.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <HowItWorks />
    </main>
  )
}
