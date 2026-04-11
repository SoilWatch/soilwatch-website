'use client'
import Navbar from '@/components/Navbar'
import HowItWorks from '@/components/HowItWorks'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { Globe, Zap, Heart, Users } from 'lucide-react'

const team = [
  { name: 'William Ouellette', role: 'Co-Founder & CEO', focus: 'Carbon Markets & Strategy', initials: 'WO', color: 'bg-earth-100 text-earth-700' },
  { name: 'David Morrison', role: 'Co-Founder & CTO', focus: 'Earth Observation & ML', initials: 'DM', color: 'bg-carbon-100 text-carbon-700' },
  { name: 'Eero Wahlstedt', role: 'Co-Founder', focus: 'Remote Sensing & MRV', initials: 'EW', color: 'bg-soil-100 text-soil-700' },
  { name: 'Joona Mikkola', role: 'Co-Founder', focus: 'Project Development', initials: 'JM', color: 'bg-amber-100 text-amber-700' },
]

const values = [
  { icon: Globe, title: 'Science First', desc: 'Every metric we report is grounded in peer-reviewed methodology and open-source satellite data rather than opaque estimates.' },
  { icon: Zap, title: 'Radical Transparency', desc: 'We publish methodologies, data sources and uncertainty ranges because trust is non-negotiable in carbon markets.' },
  { icon: Heart, title: 'Community-Centred', desc: 'Projects only scale when the people stewarding the land benefit materially from the systems around them.' },
  { icon: Users, title: 'Interdisciplinary', desc: 'Climate science, remote sensing, agronomy, software and project development all have to work together.' },
]

const stats = [
  { value: '2020', label: 'Founded', sub: 'Brussels, Belgium' },
  { value: '4', label: 'Co-Founders', sub: 'Interdisciplinary team' },
  { value: '60M+', label: 'Hectares in scope', sub: 'Sudan alone' },
  { value: '800K+', label: 'Lives to be impacted', sub: '2026 target' },
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
        <div className="absolute inset-0 theme-lines opacity-80" />
        <div className="absolute right-[-6rem] top-10 h-72 w-72 rounded-full bg-earth-200/40 blur-3xl" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="reveal opacity-0 inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700">
              Our Mission
            </div>
            <h1 className="reveal opacity-0 delay-100 mt-7 font-display text-5xl font-bold uppercase leading-[0.95] text-soil-900 md:text-6xl">
              There Is No True Wealth
              <span className="gradient-text block"> Without Functioning Ecosystems</span>
            </h1>
            <p className="reveal opacity-0 delay-200 mt-7 max-w-2xl text-xl leading-8 text-soil-600">
              SoilWatch was founded on the belief that nature-based solutions are among the most cost-efficient responses to climate change, but only when the evidence behind them is transparent and defensible.
            </p>
          </div>

          <div className="reveal opacity-0 delay-200">
            <div className="soft-panel overflow-hidden rounded-[2rem] p-4">
              <div className="relative min-h-[28rem] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="https://soilwatch.eu/wp-content/uploads/2023/07/Satellite-slider.jpg"
                  alt="SoilWatch landscape monitoring"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soil-900/85 via-soil-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-[1.4rem] bg-white/88 p-4 backdrop-blur-sm">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-soil-500">Original SoilWatch tone</div>
                    <div className="mt-1 font-display text-lg font-bold uppercase text-soil-900">
                      Monitoring, restoration and carbon market readiness in one story
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
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="reveal opacity-0 inline-flex items-center gap-2 rounded-full border border-soil-200 bg-soil-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-soil-600 mb-6">
                Our Story
              </div>
              <h2 className="reveal opacity-0 delay-100 font-display text-4xl font-bold uppercase text-soil-900 mb-6">
                Born From The Gap Between Science And Markets
              </h2>
              <div className="reveal opacity-0 delay-200 space-y-5 text-lg leading-8 text-soil-600">
                <p>
                  SoilWatch was founded in 2020 in Brussels by climate scientists, remote sensing engineers and development practitioners who saw carbon MRV demand rising faster than the quality of the underlying systems.
                </p>
                <p>
                  Existing methodologies often depended on expensive and infrequent ground sampling, which made scalable monitoring of soil carbon in smallholder and pastoral systems difficult to finance.
                </p>
                <p>
                  SoilWatch was built to close that gap by combining earth observation, machine learning and field validation into a more usable evidence layer for projects, registries and buyers.
                </p>
              </div>
            </div>

            <div className="reveal opacity-0 delay-200 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="soft-panel rounded-[1.7rem] p-6">
                  <div className="font-display text-4xl font-bold uppercase text-soil-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-bold uppercase tracking-[0.14em] text-earth-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-soil-500">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soil-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal opacity-0 text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 mb-5">
              Principles
            </div>
            <h2 className="font-display text-4xl font-bold uppercase text-soil-900 mb-4">What We Stand For</h2>
            <p className="text-soil-600 text-lg max-w-2xl mx-auto leading-8">
              The working principles behind the platform, the MRV layer and the marketplace experience.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="reveal opacity-0 service-card soft-panel rounded-[1.8rem] p-6"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-earth-100">
                    <Icon size={18} className="text-earth-700" />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase text-soil-900 mb-2">{value.title}</h3>
                  <p className="text-sm leading-6 text-soil-600">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-shell overflow-hidden bg-white py-24">
        <div className="absolute inset-0 theme-lines opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="reveal opacity-0 text-center mb-14">
            <h2 className="font-display text-4xl font-bold uppercase text-soil-900 mb-4">The Founders</h2>
            <p className="text-soil-600 text-lg leading-8">
              Scientists, engineers and practitioners building a cleaner interface between ecosystems and carbon finance.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="reveal opacity-0 service-card soft-panel rounded-[1.8rem] p-6 text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold font-display ${member.color}`}>
                  {member.initials}
                </div>
                <h3 className="font-display font-bold uppercase text-soil-900 mb-1">{member.name}</h3>
                <div className="text-sm font-bold uppercase tracking-[0.08em] text-earth-700 mb-1">{member.role}</div>
                <div className="text-xs text-soil-500">{member.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
    </main>
  )
}
