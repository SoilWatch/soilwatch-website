import Navbar from '@/components/Navbar'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Sprout, Beef, MapPin, Banknote, Users, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Improved Livelihoods | SoilWatch',
  description: 'How SoilWatch carbon projects improve livelihoods: crop yields, livestock health, land governance, and household income across vulnerable communities.',
}

const pathways = [
  {
    icon: Sprout,
    title: 'Increased Crop Yields',
    stat: '15–40%',
    statLabel: 'yield improvement in project areas',
    desc: 'Restoring soil health directly improves agricultural productivity. Higher organic matter levels increase water retention, reduce compaction, and improve nutrient cycling, all of which translate into measurable yield gains for smallholder farmers.',
    detail: 'In our regenerative agriculture projects across East Africa, participating farmers have recorded yield improvements of 15–40% compared to control plots within two to three growing seasons. Biochar application adds a further layer: improved soil structure and water-holding capacity benefit crops for years after application.',
    outcomes: ['Higher food security at household level', 'Reduced dependence on synthetic fertilisers', 'Greater resilience in drought years', 'Improved soil structure lasting multiple seasons'],
  },
  {
    icon: Beef,
    title: 'Livestock Health & Forage Availability',
    stat: '2–3×',
    statLabel: 'increase in forage biomass on restored rangelands',
    desc: 'Degraded rangelands support fewer animals, in worse condition, generating less income. Holistic grazing management and rangeland restoration rebuild forage availability and quality, which is the foundation of pastoralist livelihoods.',
    detail: 'Our rangeland projects in the Borena Zone, Ethiopia, apply rotational grazing protocols developed in close collaboration with pastoralist communities. Early monitoring shows forage biomass recovery of two to three times baseline levels within the first two years on rested paddocks.',
    outcomes: ['Improved livestock body condition scores', 'Higher offtake rates and market values', 'Reduced herd losses in dry seasons', 'Rebuilding of traditional grazing management systems'],
  },
  {
    icon: MapPin,
    title: 'Land Governance',
    stat: null,
    statLabel: null,
    desc: 'Carbon projects create formal, documented relationships between communities and their land. This strengthens tenure security, reduces conflict, and builds the institutional foundations that make long-term restoration possible.',
    detail: 'In many of the landscapes we work in, land rights are contested, informal, or absent entirely. Our project design processes include community boundary mapping, participatory land use planning, and formal agreement structures that document rights and responsibilities, leaving communities with stronger governance frameworks that outlast the carbon project itself.',
    outcomes: ['Documented land use agreements', 'Reduced inter-community conflict over grazing boundaries', 'Formal community governance structures', 'Stronger position in negotiations with government and investors'],
  },
  {
    icon: Banknote,
    title: 'Household Income',
    stat: null,
    statLabel: null,
    desc: 'Carbon finance flows to communities through direct payments, employment in monitoring and implementation, and income from improved productivity. We design revenue-sharing mechanisms that are transparent, equitable, and locally governed.',
    detail: 'Carbon revenue is not the only income pathway. Employment in field monitoring, biochar production, invasive species removal, and nursery management creates direct wage income at the community level. Improved yields and livestock condition translate into higher farm gate revenues. We work with community structures to ensure benefits reach the most vulnerable households.',
    outcomes: ['Direct carbon revenue sharing with participating households', 'Employment in project implementation and monitoring', 'Income from biochar and biomass processing', 'Higher farm gate revenues from improved productivity'],
  },
  {
    icon: Users,
    title: 'Community Resilience',
    stat: null,
    statLabel: null,
    desc: 'The deepest co-benefit of landscape restoration is resilience: the capacity of communities to absorb shocks, adapt to changing conditions, and maintain livelihoods under pressure.',
    detail: 'Degraded landscapes are fragile. A drought, a disease outbreak, or a market shock can tip communities into crisis when the ecological and economic buffers have been eroded. Restored soils hold more water, supporting crops longer into dry seasons. Recovered rangelands sustain herds through lean periods. Diversified income streams reduce dependence on any single source.',
    outcomes: ['Greater buffer capacity in climate shocks', 'Diversified livelihood options at household level', 'Stronger community institutions', 'Reduced conflict driven by resource scarcity'],
  },
  {
    icon: TrendingUp,
    title: 'Monitoring & Evidence',
    stat: null,
    statLabel: null,
    desc: 'We measure livelihood outcomes with the same rigour we apply to carbon. Co-benefit data is collected, verified, and reported, not asserted.',
    detail: 'Household surveys, yield measurement trials, livestock condition scoring, and forage biomass assessments are integrated into our project monitoring protocols. Co-benefit data is independently reviewed and included in verification reports. Buyers and investors can access livelihood outcome data alongside carbon monitoring results.',
    outcomes: ['Standardised household income surveys', 'Crop yield measurement at plot level', 'Livestock body condition and herd size tracking', 'Forage biomass and land cover monitoring'],
  },
]

export default function LivelihoodsPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="section-shell overflow-hidden bg-soil-50 pb-16 pt-32">
        <div className="absolute inset-0 theme-lines opacity-70" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 mb-6">
            <Sprout size={12} />
            Co-Benefits & Livelihoods
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold uppercase text-soil-900 mb-5">
            Carbon That Works
            <span className="gradient-text block">For People Too</span>
          </h1>
          <p className="text-soil-600 text-xl max-w-3xl mx-auto leading-8">
            High-integrity carbon removal and genuine livelihood improvement are not in tension. In the landscapes we work in, they are the same intervention done right.
          </p>
        </div>
        <div className="relative mt-12 mx-auto max-w-5xl px-6">
          <div className="relative h-80 md:h-[420px] w-full overflow-hidden rounded-[2rem]">
            <Image
              src="/images/livelihoods/livelihoods.jpg"
              alt="Smallholder crops growing on a restored dryland farm in East Africa"
              fill
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soil-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-sm font-medium text-white/80">Smallholder crops on a restored dryland farm, East Africa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-shell bg-soil-900 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,195,73,0.12),transparent_50%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-white mb-6 leading-tight">
                Why Livelihoods
                <span className="block text-earth-300">Are Not Optional</span>
              </h2>
              <div className="space-y-4 text-white/70 leading-8">
                <p>
                  Carbon projects that ignore local livelihoods fail, not just ethically, but practically. Communities that do not benefit from a project will not protect it. Permanence requires buy-in. Integrity requires equitable benefit sharing.
                </p>
                <p>
                  The landscapes we work in are among the most vulnerable on Earth. Communities in the Borena Zone, around Lake Tana, and across East Africa's drylands face intersecting pressures: land degradation, climate variability, poverty, and food insecurity. Carbon finance alone does not fix these. But carbon projects designed around community needs can deliver meaningful, measurable change.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '15–40%', label: 'Crop yield improvement on project sites' },
                { value: '2–3×', label: 'Forage biomass recovery on restored rangelands' },
                { value: '100%', label: 'Of projects include direct community benefit sharing' },
                { value: '>50%', label: 'Of project income targeting the most vulnerable households' },
              ].map((s) => (
                <div key={s.label} className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5">
                  <div className="font-display text-2xl font-bold text-earth-300 leading-tight mb-2">{s.value}</div>
                  <div className="text-xs leading-5 text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="section-shell bg-white py-24">
        <div className="absolute inset-0 theme-grid opacity-[0.06]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-earth-200 bg-earth-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 mb-4">
              Livelihood Pathways
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-soil-900 mb-4">
              How We Improve
              <span className="gradient-text block">Lives On The Ground</span>
            </h2>
          </div>

          <div className="space-y-8">
            {pathways.map((p, i) => {
              const Icon = p.icon
              return (
                <article key={p.title} className="rounded-[2rem] border border-soil-200 bg-white overflow-hidden">
                  <div className={`grid lg:grid-cols-5 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="lg:col-span-2 bg-soil-50 border-b lg:border-b-0 lg:border-r border-soil-100 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-earth-100 mb-5">
                          <Icon size={20} className="text-earth-700" />
                        </div>
                        <h3 className="font-display text-2xl font-bold uppercase text-soil-900 mb-3">{p.title}</h3>
                        <p className="text-soil-600 leading-7">{p.desc}</p>
                      </div>
                      {p.stat && (
                        <div className="mt-8 rounded-2xl border border-earth-200 bg-earth-50 p-5">
                          <div className="font-display text-3xl font-bold text-earth-700 mb-1">{p.stat}</div>
                          <div className="text-xs uppercase tracking-[0.16em] text-soil-500">{p.statLabel}</div>
                        </div>
                      )}
                    </div>
                    <div className="lg:col-span-3 p-8">
                      <p className="text-soil-600 leading-8 mb-7 text-[15px]">{p.detail}</p>
                      <h4 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-soil-400 mb-4">Documented Outcomes</h4>
                      <ul className="space-y-2">
                        {p.outcomes.map((o) => (
                          <li key={o} className="flex items-start gap-3 text-sm leading-6 text-soil-700">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-earth-400 shrink-0" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell overflow-hidden py-24 bg-earth-300/18">
        <div className="absolute inset-0 theme-grid opacity-[0.09]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="soft-panel rounded-[2rem] px-8 py-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-soil-900 mb-5">
              Design A Project With Communities At The Centre
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-soil-600">
              We work with project developers, investors, NGOs, and UN agencies who want carbon projects that deliver both climate and livelihood outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-shimmer rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-900">
                Talk To Our Team
              </a>
              <a href="/projects" className="rounded-full border border-soil-300 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-800 transition-colors hover:border-earth-300 hover:bg-earth-50">
                View Our Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
