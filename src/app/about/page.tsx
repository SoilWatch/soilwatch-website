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
      'We ground our work in defensible science, transparent methods, and evidence-based decision-making. We avoid black-box approaches and welcome scrutiny because robust work improves through examination.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity And Transparency',
    description:
      'We communicate clearly about methods, assumptions, limitations, and results so partners can make informed decisions with confidence.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnership',
    description:
      'We work as collaborators, not distant vendors. We take project outcomes seriously and support partners from design through implementation and monitoring.',
  },
  {
    icon: BookOpen,
    title: 'Learning And Adaptation',
    description:
      'We continuously improve our approaches by combining field experience with evolving science, remote sensing, data systems, and analytical tools.',
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
                Developers Of High-Integrity
                <span className="gradient-text block">Carbon Projects In Underserved Markets</span>
              </h1>

              <p className="reveal mt-7 max-w-3xl text-lg leading-8 text-soil-600 opacity-0 delay-200">
                SoilWatch develops and implements carbon and restoration projects across regenerative agriculture,
                rangeland restoration, biochar, and enhanced rock weathering, primarily in Africa. We combine deep
                field experience with rigorous, transparent science to deliver high-integrity carbon outcomes with
                measurable benefits for communities and ecosystems.
              </p>

              <p className="reveal mt-5 max-w-3xl text-lg leading-8 text-soil-600 opacity-0 delay-300">
                Based in Helsinki, with offices in Nairobi and Brussels, we work across East and North Africa, Latin
                America, and beyond. We focus on regions where the need for restoration is greatest and where carbon
                finance can support practical, long-term impact.
              </p>
            </div>

            <div className="reveal soft-panel rounded-[2rem] p-4 opacity-0 delay-200">
              <div className="relative min-h-[30rem] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/Discussing-issues-faced-by-farmers-with-the-head-of-a-farmers-cooperative-in-Gondar-Ethiopia.jpeg"
                  alt="Discussing issues faced by farmers with the head of a farmers cooperative in Gondar, Ethiopia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soil-900/80 via-soil-900/12 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-[1.4rem] bg-white/88 p-4 backdrop-blur-sm">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-soil-500">
                      SoilWatch
                    </div>
                    <div className="mt-1 font-display text-lg font-bold uppercase text-soil-900">
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
              Turning Land Restoration Into Measurable Climate And Community Impact
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="reveal soft-panel rounded-[1.8rem] p-8 opacity-0">
              <h3 className="mb-4 font-display text-2xl font-bold uppercase text-soil-900">Our Mission</h3>
              <p className="text-lg leading-8 text-soil-600">
                Our mission is to develop high-integrity carbon and restoration projects that improve degraded
                landscapes, strengthen rural livelihoods, and generate credible climate outcomes.
              </p>
            </div>

            <div className="reveal soft-panel rounded-[1.8rem] p-8 opacity-0 delay-100">
              <h3 className="mb-4 font-display text-2xl font-bold uppercase text-soil-900">Our Vision</h3>
              <p className="text-lg leading-8 text-soil-600">
                Our vision is a future where carbon markets help finance practical, science-based land restoration in
                underserved regions, while delivering lasting benefits for communities, ecosystems, and the climate.
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
                Combining Expertise Across Climate, Carbon, Restoration, And Livelihoods
              </h2>
            </div>

            <div className="reveal space-y-5 text-lg leading-8 text-soil-600 opacity-0 delay-200">
              <p>
                SoilWatch brings together expertise from climate change policy, carbon markets, livelihood development,
                food security, ecosystem restoration, rangeland management, and monitoring and evaluation.
              </p>
              <p>
                This multidisciplinary background allows us to design projects that are technically robust, socially
                grounded, and practical to implement in complex landscapes.
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
                What We Believe
              </div>

              <h2 className="reveal mt-6 font-display text-4xl font-bold uppercase text-soil-900 opacity-0 delay-100 md:text-5xl">
                Restoring Land Use Is Central To Climate Resilience
              </h2>

              <div className="reveal mt-6 space-y-5 text-lg leading-8 text-soil-600 opacity-0 delay-200">
                <p>
                  From Ethiopia to Zimbabwe to Sudan, we have seen how land degradation can transform ecosystems
                  within a generation. Overgrazing, invasive species, and uncontrolled agricultural expansion can turn
                  resilient landscapes into fragile ones.
                </p>
                <p>
                  This also means that solutions are within reach. Restoration at scale is possible, practical, and
                  financially viable when projects are designed with scientific integrity, strong governance, and local
                  ownership. SoilWatch exists to make that case and to prove it through the projects we build.
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
              Our NbS Philosophy
            </div>

            <h2 className="font-display text-4xl font-bold uppercase text-white md:text-5xl">
              Why We Work
              <span className="block text-earth-300">With Nature</span>
            </h2>
          </div>

          <div className="reveal grid gap-6 opacity-0 delay-100 md:grid-cols-3">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="mb-3 font-display text-base font-bold uppercase text-earth-300">
                The Permanence Argument
              </h3>
              <p className="text-sm leading-7 text-white/70">
                There is growing pressure to exclude nature-based solutions from carbon markets on grounds of
                permanence. We disagree. Permanence is a design question, not a reason to exclude an entire category of
                solutions. Well-designed NbS projects with strong governance, community ownership, and monitoring can
                achieve durable outcomes.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="mb-3 font-display text-base font-bold uppercase text-earth-300">
                Irreplaceable Co-Benefits
              </h3>
              <p className="text-sm leading-7 text-white/70">
                When implemented correctly, NbS delivers co-benefits that technological solutions cannot replicate:
                biodiversity, food security, water cycles, rural livelihoods, and social stability. These are not
                secondary; they are often the primary reason communities and governments engage with carbon projects.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="mb-3 font-display text-base font-bold uppercase text-earth-300">
                Maximising Durability
              </h3>
              <p className="text-sm leading-7 text-white/70">
                We incorporate other carbon pools, including biochar and enhanced rock weathering bicarbonates, where
                appropriate, maximising both durability and impact within the same project. NbS and technological carbon
                removal are complementary, not competing. We use both where the science supports it.
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
              These values shape how we work with partners, communities, and projects across restoration, carbon, and
              sustainable land use systems.
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
