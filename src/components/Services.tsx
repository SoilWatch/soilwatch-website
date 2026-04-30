'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChevronDown,
  Layers,
  ShieldCheck,
  Leaf,
  Mountain,
  FlaskConical,
  Sprout,
  FileText,
  Search,
} from 'lucide-react'


type Typology = {
  id: string
  title: string
  icon: typeof Leaf
  accent: 'earth' | 'carbon' | 'soil'
  image: string
  imageAlt: string
  methodology: string
  intro: string
  why: string
  how: string
  whatYouGet: string
  whatWeNeed: string
  coBenefits: string[]
}

const typologies: Typology[] = [
  {
    id: 'regen-ag',
    title: 'Regenerative Agriculture',
    icon: Sprout,
    accent: 'earth',
    image: '/images/services/southsudan-po-ssd-may2018-0007.jpg',
    imageAlt: 'Farmers working in a cultivated field',
    methodology: 'VM0042 / VM0053',
    intro:
      'Smallholder farmers and project developers improving soil health through cover crops, reduced tillage, composting, and rotational grazing - restoring carbon to soils that have been depleted by decades of extraction.',
    why:
      'Degraded agricultural soils store far less carbon than healthy ones. Restoring them improves food security, farm income, and resilience to drought - while generating verified carbon credits that reward better land management.',
    how:
      'We design and implement projects around improved land management practices, using RothC biogeochemical modelling combined with soil sampling to measure soil organic carbon stock changes. We work with farmers and cooperatives to establish baselines, monitoring plans, and community verification structures.',
    whatYouGet:
      'A registered carbon project with verified soil carbon credits, monitoring dashboards, and documented co-benefits for farming communities.',
    whatWeNeed:
      'Target geographies, existing land management practices, and willingness to engage local farmers and cooperatives in monitoring and reporting.',
    coBenefits: ['Food security', 'Farmer income', 'Soil health', 'Water retention', 'Biodiversity'],
  },
  {
    id: 'rangeland',
    title: 'Rangeland Management',
    icon: Mountain,
    accent: 'carbon',
    image: '/images/fieldwork/20221020_143654.jpg',
    imageAlt: 'Herds moving across open rangeland',
    methodology: 'VM0042 / C-Sink',
    intro:
      "Africa's rangelands hold vast carbon potential - but overgrazing has degraded enormous areas, collapsing both ecosystem health and pastoralist livelihoods. Holistic grazing management can reverse decades of damage within years.",
    why:
      "Rangelands cover roughly 40% of Africa's land area. Restoring their productivity has an outsized impact on carbon, biodiversity, and the livelihoods of some of the continent's most vulnerable communities - often within areas ignored by conventional carbon markets.",
    how:
      'We assess rangeland condition using remote sensing and field surveys, design monitoring for soil carbon and biomass recovery, and work closely with communities to implement and document changes in grazing practices - often integrating with existing pastoral governance structures.',
    whatYouGet:
      'A certified carbon project with co-benefit documentation covering pastoral livelihoods, land rights, biodiversity, and water catchment recovery.',
    whatWeNeed:
      'Project boundaries, community structures and pastoralist groups, and baseline data on current land condition and stocking rates.',
    coBenefits: ['Pastoralist livelihoods', 'Biodiversity', 'Water retention', 'Conflict reduction', 'Food security'],
  },
  {
    id: 'biochar',
    title: 'Biochar',
    icon: FlaskConical,
    accent: 'soil',
    image: '/images/fieldwork/20260318_130025.jpg',
    imageAlt: 'Biochar production fieldwork',
    methodology: 'Puro.earth / Gold Standard',
    intro:
      'Biochar converts short-cycle carbon - from crop residues and wood waste - into a form stable for centuries. Applied to soils, it also improves fertility, water-holding capacity, and reduces dependence on synthetic inputs.',
    why:
      "Biochar's durability addresses the permanence critique of nature-based solutions head-on. Combined with the agricultural co-benefits, it's one of the few interventions that is simultaneously a carbon removal, a soil health, and a food security solution.",
    how:
      'We identify biomass feedstock sources, design production and application protocols, and provide MRV for carbon permanence, soil health improvements, and co-benefit outcomes.',
    whatYouGet:
      'A biochar carbon project with certified removals, soil health data, and documented co-benefits.',
    whatWeNeed:
      'Identified biomass feedstock, production capacity, and target agricultural areas for application.',
    coBenefits: ['Soil fertility', 'Water retention', 'Rural employment', 'Crop yields'],
  },
  {
    id: 'erw',
    title: 'Enhanced Rock Weathering',
    icon: Layers,
    accent: 'earth',
    image: '/images/services/slider-roots.jpg',
    imageAlt: 'Enhanced rock weathering and soil',
    methodology: 'Emerging MRV frameworks',
    intro:
      'Rocks naturally absorb CO₂ through weathering - a process that takes millennia. Enhanced rock weathering (ERW) accelerates this by applying crushed silicate minerals to agricultural soils, driving carbon into ocean bicarbonates while improving soil pH and crop yields.',
    why:
      'ERW offers exceptional carbon durability - storage in ocean bicarbonates is effectively permanent on any meaningful timescale. Combined with genuine agricultural co-benefits in soils that are often acidic and nutrient-depleted, it creates a strong case for tropical smallholder contexts.',
    how:
      'We identify suitable silicate rock sources, design application protocols, and develop monitoring plans covering soil pH, nutrient changes, bicarbonate export, and carbon accounting using water sampling and process modelling.',
    whatYouGet:
      'An ERW carbon removal project with monitoring data for soil changes, carbon accounting, and agronomic co-benefits.',
    whatWeNeed:
      'Access to suitable silicate rock sources, target agricultural areas, and willingness to establish field measurement protocols.',
    coBenefits: ['Crop yield improvement', 'Soil pH correction', 'Nutrient provision', 'Carbon durability'],
  },
  {
    id: 'agroforestry',
    title: 'Agroforestry',
    icon: Leaf,
    accent: 'carbon',
    image: '/images/fieldwork/agroforestry.jpg',
    imageAlt: 'Tree cover integrated into a dryland landscape',
    methodology: 'Gold Standard / Plan Vivo',
    intro:
      'Integrating trees into cropland and pasture simultaneously builds carbon in both biomass and soil, provides shade and windbreaks for crops, improves biodiversity, and generates timber and non-timber forest products for farmers.',
    why:
      "Agroforestry is one of the most versatile NbS typologies. It generates carbon across multiple pools - above-ground biomass and soil - while delivering livelihood benefits that reduce project reversal risk, which is the main permanence concern for nature-based solutions.",
    how:
      'We design monitoring for both above-ground biomass (using remote sensing and allometric equations) and soil carbon, help projects select and certify under relevant methodologies, and build community monitoring capacity for long-term sustainability.',
    whatYouGet:
      'A certified agroforestry carbon project with integrated biomass and soil carbon accounting, and co-benefit documentation for local livelihoods and biodiversity.',
    whatWeNeed:
      'Target geographies, tree species and planting plans, and farmer engagement structures.',
    coBenefits: ['Biodiversity', 'Food security', 'Microclimate regulation', 'Timber income', 'Soil health'],
  },
]

// ─── MRV Services (secondary) ────────────────────────────────────────────────

const mrvServices = [
  {
    icon: Search,
    title: 'Pre-Feasibility',
    desc: 'Heatmaps of restoration potential and activity recommendations for site selection.',
  },
  {
    icon: FileText,
    title: 'Feasibility Study',
    desc: 'Carbon yield projections, additionality validation, and methodology selection to support early-stage finance.',
  },
  {
    icon: Layers,
    title: 'Project Design Document',
    desc: 'MRV system design and compliant documentation ready for your chosen certification body.',
  },
  {
    icon: BarChart3,
    title: 'Ongoing Monitoring',
    desc: 'Satellite-based activity and outcome monitoring with dashboard visualisations and automated reporting.',
  },
  {
    icon: ShieldCheck,
    title: 'Above Ground Biomass Verification',
    desc: 'Remote sensing and allometric analysis for AGB carbon sequestration with annual baseline revalidation.',
  },
  {
    icon: CheckCircle,
    title: 'Soil Carbon Verification',
    desc: 'RothC modelling combined with remote sensing and soil sampling, compliant with VM0042 and VM0053.',
  },
]

// ─── Accent styles ────────────────────────────────────────────────────────────

const accentStyles = {
  earth: {
    badge: 'border-earth-300 bg-earth-50 text-earth-700',
    tag: 'bg-earth-100 text-earth-700',
  },
  carbon: {
    badge: 'border-carbon-300 bg-carbon-50 text-carbon-700',
    tag: 'bg-carbon-100 text-carbon-700',
  },
  soil: {
    badge: 'border-soil-300 bg-soil-50 text-soil-600',
    tag: 'bg-soil-100 text-soil-700',
  },
} as const

// ─── TypologyCard ─────────────────────────────────────────────────────────────

function TypologyCard({ item, index }: { item: Typology; index: number }) {
  const [open, setOpen] = useState(false)
  const Icon = item.icon
  const accent = accentStyles[item.accent]
  const isEven = index % 2 === 0

  return (
    <article
      className="reveal opacity-0 group overflow-hidden rounded-3xl border border-soil-200 bg-white transition-all duration-300 hover:shadow-xl hover:shadow-soil-900/[0.06]"
      style={{ animationDelay: `${(index + 1) * 0.08}s` }}
    >
      <div className={`grid lg:grid-cols-5 ${!isEven ? '' : ''}`}>
        <div className={`relative lg:col-span-2 ${!isEven ? 'lg:order-last' : ''}`}>
          <div className="relative h-64 lg:h-full min-h-[260px] overflow-hidden">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soil-900/80 via-soil-900/25 to-transparent lg:bg-gradient-to-r lg:from-soil-900/65 lg:via-soil-900/20 lg:to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm">
                <Icon size={18} />
              </div>
              <h4 className="font-display text-2xl font-bold uppercase leading-tight text-white drop-shadow-sm">
                {item.title}
              </h4>
            </div>
          </div>
        </div>

        <div className={`lg:col-span-3 flex flex-col p-7 lg:p-9 ${!isEven ? 'lg:order-first' : ''}`}>
          <div className="mb-5 flex flex-wrap gap-2">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${accent.tag}`}>
              {item.methodology}
            </span>
          </div>

          <p className="mb-6 text-[15px] leading-7 text-soil-700">{item.intro}</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6 flex-1">
            {[
              { label: 'Why It Matters', value: item.why },
              { label: 'How We Work', value: item.how },
              { label: 'What You Get', value: item.whatYouGet },
              { label: 'What We Need', value: item.whatWeNeed },
            ].map((d) => (
              <div
                key={d.label}
                className="rounded-2xl p-4 bg-soil-50 border border-soil-100"
              >
                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-soil-400">
                  {d.label}
                </p>
                <p className="text-[13px] leading-[1.65] text-soil-600">{d.value}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-[12px] font-bold uppercase tracking-[0.16em] transition-colors text-soil-400 hover:text-soil-600 bg-soil-50 hover:bg-soil-100"
          >
            <span>Co-benefits</span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </button>

          {open && (
            <div className="mt-3 rounded-2xl p-4 bg-earth-50 border border-earth-100">
              <div className="flex flex-wrap gap-2">
                {item.coBenefits.map((b) => (
                  <span key={b} className="rounded-full bg-earth-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-earth-700">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

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
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-shell bg-white py-24" id="services">
      <div className="absolute inset-0 theme-grid opacity-[0.06]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="reveal opacity-0 mx-auto mb-16 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-earth-200 bg-earth-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 mb-5">
            <Leaf size={12} />
            Project Typologies
          </div>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase text-soil-900 md:text-5xl">
            What We Build -
            <span className="gradient-text block">And Why It Starts With Soil</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-soil-600">
            Every project typology we work in is connected by a single foundation: soil. Soils are the basis of almost all terrestrial life, all food production, and the livelihoods of billions of people - and they are being destroyed by land misuse faster than at any point in recorded history. The projects below are our answer to that.
          </p>
        </div>

        <div className="space-y-8">
          {typologies.map((typology, index) => (
            <TypologyCard key={typology.id} item={typology} index={index} />
          ))}
        </div>

        <div className="reveal opacity-0 mt-14 text-center">
          <p className="mb-6 text-soil-500 text-sm">
            Working across one of these typologies? We&apos;ll scope the right approach for your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 btn-shimmer rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-900"
          >
            Start Your Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 mt-24">
        <div className="reveal opacity-0 mx-auto mb-12 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-soil-200 bg-soil-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-soil-600 mb-5">
            Our MRV Approach
          </div>
          <h2 className="font-display text-3xl font-bold uppercase text-soil-900 md:text-4xl mb-4">
            How We Verify The Impact
          </h2>
          <p className="text-lg leading-8 text-soil-600">
            Across all typologies, our monitoring and verification work is built on open science, published methodologies, and reproducible models. No black boxes. Everything we do is designed to stand up to scrutiny - because scrutiny makes carbon markets credible.
          </p>
        </div>

        <div className="reveal opacity-0 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mrvServices.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="soft-panel rounded-[1.6rem] p-6"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-earth-100">
                    <Icon size={17} className="text-earth-700" />
                  </div>
                </div>
                <h3 className="font-display text-base font-bold uppercase text-soil-900 mb-2">{service.title}</h3>
                <p className="text-sm leading-6 text-soil-600">{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
