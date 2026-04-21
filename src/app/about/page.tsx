'use client'
import Navbar from '@/components/Navbar'
import HowItWorks from '@/components/HowItWorks'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { Beaker, BookOpen, HeartHandshake, ShieldCheck } from 'lucide-react'

const values = [
  {
    icon: Beaker,
    title: 'Scientific Rigor',
    description:
      'We ground our work in defensible science and open methodologies. We don\'t use black-box models. We welcome scrutiny because rigour only gets better under examination.',
  },
  {
    icon: ShieldCheck,
    title: 'Honest And Transparent Services',
    description:
      'We communicate clearly about methods, limitations, and results so partners can make decisions with confidence.',
  },
  {
    icon: HeartHandshake,
    title: 'We Care For Your Business Just Like Ours',
    description:
      'We work as long-term collaborators, not distant vendors, and we take the outcomes of your project seriously.',
  },
  {
    icon: BookOpen,
    title: 'Keep Learning And Adapting To New Technologies',
    description:
      'We continuously improve our approaches by combining field experience with evolving remote sensing, data, and analytical tools.',
  },
]

export default function AboutPage() {
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
    <main ref={ref}>
      <Navbar />

      <section className="section-shell overflow-hidden bg-soil-50 pb-24 pt-32">
        <div className="absolute inset-0 theme-lines opacity-75" />
        <div className="absolute right-[-6rem] top-10 h-72 w-72 rounded-full bg-earth-200/35 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <div className="reveal opacity-0 inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700">
                About Us
              </div>
              <h1 className="reveal opacity-0 delay-100 mt-7 font-display text-5xl font-bold uppercase leading-[0.94] text-soil-900 md:text-6xl">
                Developers Of High-Integrity
                <span className="gradient-text block">Carbon Projects In Underserved Markets</span>
              </h1>
              <p className="reveal opacity-0 delay-200 mt-7 max-w-3xl text-lg leading-8 text-soil-600">
                SoilWatch develops and implements carbon projects across regenerative agriculture, rangeland restoration, biochar, and enhanced rock weathering — primarily in Africa. We combine deep field experience with rigorous, transparent science to deliver high-integrity carbon credits with measurable co-benefits for communities and ecosystems.
              </p>
              <p className="reveal opacity-0 delay-300 mt-5 max-w-3xl text-lg leading-8 text-soil-600">
                We are based in Helsinki with offices in Nairobi and Brussels, and active across East and North Africa, Latin America, and beyond. We work where the need is greatest and where the potential for restoration — and for impact — is highest.
              </p>
            </div>

            <div className="reveal opacity-0 delay-200 soft-panel rounded-[2rem] p-4">
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
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-soil-500">SoilWatch</div>
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
              <div className="reveal opacity-0 inline-flex items-center gap-2 rounded-full border border-soil-200 bg-soil-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-soil-600">
                What We Believe
              </div>
              <h2 className="reveal opacity-0 delay-100 mt-6 font-display text-4xl font-bold uppercase text-soil-900 md:text-5xl">
                Land Use — Not Climate — Is Driving The Collapse
              </h2>
              <div className="reveal opacity-0 delay-200 mt-6 space-y-5 text-lg leading-8 text-soil-600">
                <p>
                  From Ethiopia to Zimbabwe to Sudan, we have witnessed ecosystems collapse within a generation — driven by overgrazing, invasive species, and uncontrolled agricultural expansion, not climate change. A fence separating desert from lush ecosystems does not stop the climate. It stops land misuse.
                </p>
                <p>
                  This means the solution is also in our hands. Restoration at scale is possible, practical, and — when done with integrity — financially viable. SoilWatch exists to make that case, and to prove it through the projects we build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-nature" className="section-shell overflow-hidden bg-soil-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,195,73,0.14),transparent_45%)]" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="reveal opacity-0 text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-200 mb-5">
              Our NbS Philosophy
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white mb-4">
              Why We Work
              <span className="block text-earth-300">With Nature</span>
            </h2>
          </div>

          <div className="reveal opacity-0 delay-100 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="font-display text-base font-bold uppercase text-earth-300 mb-3">The Permanence Argument</h3>
              <p className="text-sm leading-7 text-white/70">
                There is growing pressure to exclude nature-based solutions from carbon markets on grounds of &quot;permanence.&quot; We disagree. Permanence is a design question, not a reason to exclude an entire category of solutions. Well-designed NbS projects — with strong governance, community ownership, and monitoring — can achieve durable outcomes.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="font-display text-base font-bold uppercase text-earth-300 mb-3">Irreplaceable Co-Benefits</h3>
              <p className="text-sm leading-7 text-white/70">
                When implemented correctly, NbS delivers co-benefits that technological solutions cannot replicate: biodiversity, food security, water cycles, rural livelihoods, and social stability. These are not secondary — they are often the primary reason communities and governments engage with carbon projects.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="font-display text-base font-bold uppercase text-earth-300 mb-3">Maximising Durability</h3>
              <p className="text-sm leading-7 text-white/70">
                We incorporate other carbon pools — biochar and ERW bicarbonates — where appropriate, maximising both durability and impact within the same project. NbS and technological carbon removal are complementary, not competing. We use both where the science supports it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soil-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal opacity-0 text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 mb-5">
              Our Core Values
            </div>
            <h2 className="font-display text-4xl font-bold uppercase text-soil-900 mb-4">
              Principles Behind The Work
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-soil-600">
              These values shape how we work with partners, communities, and projects across restoration, carbon, and sustainable land use systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <article
                  key={value.title}
                  className="reveal opacity-0 service-card soft-panel rounded-[1.8rem] p-6"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-earth-100">
                    <Icon size={18} className="text-earth-700" />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase text-soil-900 mb-3">
                    {value.title}
                  </h3>
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
