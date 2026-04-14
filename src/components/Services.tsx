'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChevronDown,
  Clock,
  FileText,
  Layers,
  Search,
  ShieldCheck,
} from 'lucide-react'

type ServiceItem = {
  title: string
  icon: typeof Search
  accent: 'earth' | 'carbon' | 'soil'
  image: string
  imageAlt: string
  relevance: string
  applicability: string
  why: string
  how: string
  whatYouGet: string
  whatWeNeed: string
  timeline: string
  note?: string
}

type ServiceGroup = {
  id: string
  step: number
  label: string
  title: string
  intro: string
  dark?: boolean
  items: ServiceItem[]
}

const serviceGroups: ServiceGroup[] = [
  {
    id: 'project-design',
    step: 1,
    label: 'Project Design Stage',
    title: 'From site selection to MRV system design',
    intro:
      'The design stage encompasses three pivotal phases: Pre-Feasibility, Feasibility, and Project Design Document (PDD).',
    items: [
      {
        title: 'Pre-Feasibility',
        icon: Search,
        accent: 'earth',
        image: '/images/services/cuanza-norte-score.png',
        imageAlt: 'Pre-feasibility restoration potential map',
        relevance:
          'If you are asking "What areas would have the highest potential for nature-based solution projects?" or "What activity types might work best in my area?", this service is designed for you. We explore the wider landscape and identify where environmental conditions and operational access create the strongest foundation for site selection.',
        applicability:
          'Forest protection, reforestation, agroforestry, regenerative agriculture, rangelands, and related nature-based solutions.',
        why:
          'Investing in location selection helps increase the number of credits you can generate, avoids areas that do not meet basic criteria, and strengthens later fundraising and sales conversations.',
        how:
          'We use a set of environmental and operational indicators to generate heatmaps of restoration potential, masking out locations ineligible due to certification criteria. All data and indicators are supported by white paper methodologies with reference to peer-reviewed science.',
        whatYouGet:
          'Heatmaps of your planned project geographies showing the best potential locations, recommendations for next steps, and a methodological narrative.',
        whatWeNeed:
          'Your preferred state or region and an outline of your planned activity types, for instance agroforestry, agriculture, or pastoralism.',
        timeline: 'Typically ~1 week',
        note:
          'This tool can also be used by project developers or marketplaces to assess and quality-assure projects.',
      },
      {
        title: 'Feasibility',
        icon: FileText,
        accent: 'carbon',
        image: '/images/services/baseline-malawi.png',
        imageAlt: 'Feasibility baseline and carbon assessment visual',
        relevance:
          'If you are asking "How much carbon is my project likely to produce?", "Can environmental additionality be demonstrated?" or "What methodology should I certify under?", this service may provide value. We confirm the chosen area\'s suitability, validate environmental additionality, and estimate carbon yields over a specific timeline.',
        applicability:
          'Forest protection, reforestation, agroforestry, regenerative agriculture, rangelands, and related nature-based solutions.',
        why:
          'This phase supports raising ex-ante finance, optimising activities and sites, and managing risk by ensuring alignment between the project and the chosen methodologies.',
        how:
          'We combine remote sensing methodologies with reviews of peer-reviewed research on the relevant activities and contexts, alongside any documentation you can provide on socio-economic, policy, and environmental conditions.',
        whatYouGet:
          'A comprehensive feasibility report including projected carbon yields, financial projections, and additionality evidence — a credible basis for approaching buyers and investors for startup-phase financing.',
        whatWeNeed:
          'Exact project locations and planned activities, relevant contextual information, and the certification you seek.',
        timeline: '2–3 weeks',
      },
      {
        title: 'Project Design Document (PDD)',
        icon: Layers,
        accent: 'soil',
        image: '/images/services/slider-roots.jpg',
        imageAlt: 'Project design and MRV system field roots visual',
        relevance:
          'If your locations and activities are set, your methodology is chosen, and funding is secured, you are likely entering the PDD phase. Our focus shifts to drafting the Monitoring, Reporting and Verification related portions of the documents.',
        applicability:
          'Forest protection, reforestation, agroforestry, regenerative agriculture, rangelands, and related nature-based solutions.',
        why:
          'A well-structured MRV system, clearly articulated in the PDD, creates a strong foundation for long-term project success, helps maintain price integrity, and ensures the biggest threats to success are addressed in the design.',
        how:
          'Using insights from the feasibility phase and additional ground-truthing, we validate findings from earlier phases and develop an MRV system tailored to your project and compliant with the chosen carbon methodologies.',
        whatYouGet:
          'Detailed MRV sections ready to be incorporated into your PDD according to the requirements of the chosen certification methodology.',
        whatWeNeed:
          'Outputs from the feasibility phase and any additional project-specific data that can improve MRV design.',
        timeline: 'Aligned with your broader PDD drafting process',
      },
    ],
  },
  {
    id: 'implementation',
    step: 2,
    label: 'Implementation Stage',
    title: 'Ongoing monitoring through delivery',
    intro:
      'We provide monitoring during implementation so you can see where the project is succeeding, where it is underperforming, and where you need to intervene early.',
    dark: true,
    items: [
      {
        title: 'Ongoing Monitoring',
        icon: BarChart3,
        accent: 'earth',
        image: '/images/services/satellite-1536x1022.jpg',
        imageAlt: 'Ongoing monitoring satellite observation visual',
        relevance:
          'If you have an active project but lack a strong overview of how it is progressing, this service can add value. We provide ongoing monitoring throughout the implementation period so you can learn from successes, address issues early, and reduce project risk.',
        applicability:
          'Forest protection, reforestation, agroforestry, regenerative agriculture, rangelands, and related project types. Derisking is especially useful for forest-related projects where events such as fire or logging can destroy project value quickly.',
        why:
          'We do this to help you learn from successes, mitigate failures, continuously improve project quality, and demonstrate to buyers that you have a credible monitoring system in place.',
        how:
          'We use our analytical platform to provide the indicators most relevant to your intervention — activity indicators such as tilling or cover crop presence, or outcome indicators such as biomass change — supported by engaging maps and dashboard visualisations.',
        whatYouGet:
          'Platform access for project exploration, automated reports featuring key indicators, or full monitoring and analysis by our team. Data is visualised in geographic maps with clear colour-coding and in charts suitable for reporting.',
        whatWeNeed:
          'Project boundaries and the activities conducted per area. Any additional contextual information you can share is useful.',
        timeline: 'Ongoing — duration of the project',
      },
    ],
  },
  {
    id: 'verification',
    step: 3,
    label: 'Verification / Compliance Stage',
    title: 'Verification for Above Ground Biomass and Soil Organic Carbon',
    intro:
      'At the verification stage, we ensure your project\'s carbon sequestration — whether Above Ground Biomass, Soil Organic Carbon, or both — complies with the relevant standards.',
    items: [
      {
        title: 'Above Ground Biomass Verification',
        icon: ShieldCheck,
        accent: 'earth',
        image: '/images/services/close-up-aerial-wildebeest-great-migration.jpg',
        imageAlt: 'Above-ground biomass landscape verification visual',
        relevance:
          'This service is for projects that need verified above-ground biomass carbon accounting that can stand behind carbon issuance and annual revalidation.',
        applicability:
          'Projects where biomass growth, forest restoration, or above-ground sequestration is central to issuance and compliance.',
        why:
          'We do this to verify actual carbon sequestration and enable carbon credits to be issued on a credible basis.',
        how:
          'We assess AGB carbon sequestration using remote sensing, allometric equations, and AI-supported analysis. The baseline is revalidated annually to reduce the risk of over- or under-issuance caused by regional change.',
        whatYouGet:
          'A verification report detailing carbon sequestration in AGB and any deviations from initial estimates, with annual baseline revalidation.',
        whatWeNeed:
          'Up-to-date geographic project boundaries and timelines of interventions at each plot. Field-collected diameter-at-breast height and canopy height data can provide independent validation.',
        timeline: 'Depends on project size and complexity',
      },
      {
        title: 'Soil Carbon Verification',
        icon: CheckCircle,
        accent: 'carbon',
        image: '/images/services/3-years-bare-soil-frequency.jpeg',
        imageAlt: 'Soil carbon verification bare-soil frequency map',
        relevance:
          'This service is for projects that need a scientifically robust and transparent way to quantify soil organic carbon stock change for verification and issuance.',
        applicability:
          'Especially relevant for regenerative agriculture, pastoralist, and other soil carbon projects requiring methodology-compliant measurement and validation.',
        why:
          'We do this to quantify the effect of improved land-use practice on soil organic carbon stocks and allow carbon credits to be issued based on verified soil carbon pool changes.',
        how:
          'We apply current scientific best practice by combining the RothC biogeochemical process-based model, remote sensing, AI, and soil sampling. Satellite imagery is used to reduce cost by stratifying project areas and optimising sampling plans.',
        whatYouGet:
          'Reports and documentation aligned with methodologies such as VM0042 and VM0053 for model validation, including an assessment of soil organic carbon pool changes against the baseline scenario.',
        whatWeNeed:
          'Up-to-date geographic project boundaries, management data, and in-situ samples.',
        timeline: 'Depends on project size and timely delivery of inputs',
      },
    ],
  },
]

const accentStyles = {
  earth: {
    badge: 'border-earth-300 bg-earth-50 text-earth-700',
    icon: 'bg-earth-100 text-earth-700',
    glow: 'from-earth-400/20',
    ring: 'ring-earth-200',
    bar: 'bg-earth-400',
  },
  carbon: {
    badge: 'border-carbon-300 bg-carbon-50 text-carbon-700',
    icon: 'bg-carbon-100 text-carbon-700',
    glow: 'from-carbon-400/20',
    ring: 'ring-carbon-200',
    bar: 'bg-carbon-400',
  },
  soil: {
    badge: 'border-soil-300 bg-soil-50 text-soil-600',
    icon: 'bg-soil-100 text-soil-700',
    glow: 'from-soil-400/20',
    ring: 'ring-soil-200',
    bar: 'bg-soil-400',
  },
} as const

const stageColors = [
  { bg: 'bg-earth-400', text: 'text-earth-700', border: 'border-earth-300', soft: 'bg-earth-50' },
  { bg: 'bg-soil-700', text: 'text-white', border: 'border-soil-600', soft: 'bg-soil-800' },
  { bg: 'bg-carbon-600', text: 'text-white', border: 'border-carbon-500', soft: 'bg-carbon-50' },
]

function ServiceCard({ item, dark, groupIndex, itemIndex }: {
  item: ServiceItem
  dark?: boolean
  groupIndex: number
  itemIndex: number
}) {
  const [open, setOpen] = useState(false)
  const Icon = item.icon
  const accent = accentStyles[item.accent]
  const isEven = itemIndex % 2 === 0

  return (
    <article
      className={`reveal opacity-0 group overflow-hidden rounded-3xl border transition-all duration-300 ${
        dark
          ? 'border-white/10 bg-white/[0.04] hover:bg-white/[0.07]'
          : 'border-soil-200 bg-white hover:shadow-xl hover:shadow-soil-900/[0.06]'
      }`}
      style={{ animationDelay: `${(groupIndex + itemIndex + 1) * 0.09}s` }}
    >
      <div className={`grid lg:grid-cols-5 ${!isEven ? 'lg:direction-rtl' : ''}`}>
        {/* Image panel */}
        <div className={`relative lg:col-span-2 ${!isEven ? 'lg:order-last' : ''}`}>
          <div className="relative h-64 lg:h-full min-h-[260px] overflow-hidden">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className={`absolute inset-0 ${
              dark
                ? 'bg-gradient-to-t from-soil-900/85 via-soil-900/30 to-transparent lg:bg-gradient-to-r lg:from-soil-900/60 lg:via-soil-900/20 lg:to-transparent'
                : 'bg-gradient-to-t from-soil-900/70 via-soil-900/20 to-transparent lg:bg-gradient-to-r lg:from-soil-900/55 lg:via-soil-900/15 lg:to-transparent'
            }`} />
            {/* Icon + title overlay on image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                dark ? 'bg-earth-400/25 text-earth-200' : 'bg-white/20 text-white'
              } backdrop-blur-sm`}>
                <Icon size={18} />
              </div>
              <h4 className="font-display text-2xl font-bold uppercase leading-tight text-white drop-shadow-sm">
                {item.title}
              </h4>
            </div>
          </div>
        </div>

        {/* Content panel */}
        <div className={`lg:col-span-3 flex flex-col p-7 lg:p-9 ${!isEven ? 'lg:order-first' : ''}`}>
          {/* Meta chips */}
          <div className="mb-5 flex flex-wrap gap-2">
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${
              dark ? 'border-white/10 bg-white/[0.06] text-earth-200' : accent.badge
            }`}>
              <Clock size={10} />
              {item.timeline}
            </span>
          </div>

          {/* Relevance — lead paragraph */}
          <div className="mb-6">
            <p className={`text-[15px] leading-7 ${dark ? 'text-white/80' : 'text-soil-700'}`}>
              {item.relevance}
            </p>
          </div>

          {/* Detail grid */}
          <div className={`grid sm:grid-cols-2 gap-4 mb-6 flex-1`}>
            {[
              { label: 'Why We Do It', value: item.why },
              { label: 'How We Do It', value: item.how },
              { label: 'What You Get', value: item.whatYouGet },
              { label: 'What We Need', value: item.whatWeNeed },
            ].map((d) => (
              <div
                key={d.label}
                className={`rounded-2xl p-4 ${
                  dark ? 'bg-black/15 border border-white/[0.06]' : 'bg-soil-50 border border-soil-100'
                }`}
              >
                <p className={`mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] ${
                  dark ? 'text-earth-300' : 'text-soil-400'
                }`}>
                  {d.label}
                </p>
                <p className={`text-[13px] leading-[1.65] ${dark ? 'text-white/72' : 'text-soil-600'}`}>
                  {d.value}
                </p>
              </div>
            ))}
          </div>

          {/* Applicability + note */}
          <div className={`space-y-3`}>
            <button
              onClick={() => setOpen(!open)}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-[12px] font-bold uppercase tracking-[0.16em] transition-colors ${
                dark
                  ? 'text-earth-200/70 hover:text-earth-200 bg-white/[0.03] hover:bg-white/[0.06]'
                  : 'text-soil-400 hover:text-soil-600 bg-soil-50 hover:bg-soil-100'
              }`}
            >
              <span>Applicability &amp; {item.note ? 'Notes' : 'Details'}</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              />
            </button>

            {open && (
              <div className={`rounded-2xl p-4 text-[13px] leading-[1.7] space-y-3 ${
                dark ? 'bg-black/10 border border-white/[0.05] text-white/70' : 'bg-earth-50 border border-earth-100 text-soil-600'
              }`}>
                <div>
                  <span className={`block mb-1 text-[10px] font-bold uppercase tracking-[0.18em] ${dark ? 'text-earth-300' : 'text-earth-700'}`}>
                    Applicability
                  </span>
                  {item.applicability}
                </div>
                {item.note && (
                  <div>
                    <span className={`block mb-1 text-[10px] font-bold uppercase tracking-[0.18em] ${dark ? 'text-earth-300' : 'text-earth-700'}`}>
                      Note
                    </span>
                    {item.note}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

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
      { threshold: 0.05 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-shell bg-white py-24" id="services">
      <div className="absolute inset-0 theme-grid opacity-[0.06]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="reveal opacity-0 mx-auto mb-16 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-soil-200 bg-soil-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-soil-600">
            <Layers size={12} />
            Services
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold uppercase text-soil-900 md:text-5xl">
            Data And Science Across The Full Project Cycle
          </h2>
          <p className="mt-5 text-lg leading-8 text-soil-600">
            We provide you with the data and science you need throughout the project cycle — from selecting project areas and activities, creating your proposal, designing MRV systems, to monitoring and reporting your project&apos;s carbon, ecosystem, and socio-economic impact.
          </p>
        </div>

        {/* Stage pipeline */}
        <div className="reveal opacity-0 mb-14">
          <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0">
            {serviceGroups.map((group, i) => {
              const colors = stageColors[i]
              return (
                <div key={group.id} className="flex sm:flex-1 items-center gap-0">
                  <a
                    href={`#${group.id}`}
                    className={`flex flex-1 items-center gap-3 rounded-2xl sm:rounded-none sm:first:rounded-l-2xl sm:last:rounded-r-2xl border px-5 py-4 transition-all hover:brightness-95 ${
                      group.dark
                        ? 'bg-soil-900 border-soil-800 text-white hover:bg-soil-800'
                        : 'bg-soil-50 border-soil-200 text-soil-900 hover:bg-soil-100'
                    }`}
                  >
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      group.dark ? 'bg-earth-400 text-soil-900' : 'bg-soil-900 text-white'
                    }`}>
                      {group.step}
                    </span>
                    <div className="min-w-0">
                      <p className={`text-[10px] font-bold uppercase tracking-[0.16em] ${
                        group.dark ? 'text-earth-300' : 'text-soil-500'
                      }`}>
                        Stage {group.step}
                      </p>
                      <p className={`text-sm font-bold leading-tight ${
                        group.dark ? 'text-white' : 'text-soil-900'
                      }`}>
                        {group.label}
                      </p>
                    </div>
                  </a>
                  {i < serviceGroups.length - 1 && (
                    <div className="hidden sm:block shrink-0 text-soil-300 text-xl px-1">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Service groups */}
        <div className="space-y-12">
          {serviceGroups.map((group, groupIndex) => (
            <section
              key={group.id}
              id={group.id}
              className={`reveal opacity-0 overflow-hidden rounded-3xl border ${
                group.dark
                  ? 'border-soil-800 bg-soil-900'
                  : 'border-soil-200 bg-white'
              }`}
              style={{ animationDelay: `${groupIndex * 0.09}s` }}
            >
              {/* Group header */}
              <div className={`relative overflow-hidden px-8 py-8 md:px-10 md:py-10 ${
                group.dark ? 'bg-white/[0.025]' : 'bg-gradient-to-br from-soil-50 to-white'
              }`}>
                {/* Decorative step number */}
                <div className={`absolute right-8 top-4 font-display text-[6rem] font-bold leading-none select-none ${
                  group.dark ? 'text-white/[0.04]' : 'text-soil-900/[0.05]'
                }`}>
                  {String(group.step).padStart(2, '0')}
                </div>

                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] ${
                  group.dark
                    ? 'border border-white/10 bg-white/[0.06] text-earth-200'
                    : 'border border-earth-200 bg-white text-earth-700'
                }`}>
                  Stage {group.step} — {group.label}
                </div>
                <h3 className={`relative mt-4 font-display text-3xl font-bold uppercase md:text-4xl ${
                  group.dark ? 'text-white' : 'text-soil-900'
                }`}>
                  {group.title}
                </h3>
                <p className={`mt-3 max-w-3xl text-base leading-7 ${
                  group.dark ? 'text-white/65' : 'text-soil-600'
                }`}>
                  {group.intro}
                </p>
              </div>

              {/* Items */}
              <div className={`divide-y ${group.dark ? 'divide-white/[0.06]' : 'divide-soil-100'}`}>
                {group.items.map((item, itemIndex) => (
                  <ServiceCard
                    key={item.title}
                    item={item}
                    dark={group.dark}
                    groupIndex={groupIndex}
                    itemIndex={itemIndex}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal opacity-0 mt-14 text-center">
          <p className="mb-6 text-soil-500 text-sm">Ready to begin? We&apos;ll find the right service for your project.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 btn-shimmer rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-900"
          >
            Start Your Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
