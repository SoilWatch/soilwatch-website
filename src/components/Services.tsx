'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Search, FileText, BarChart3, CheckCircle, Layers, ArrowRight } from 'lucide-react'

const services = [
  {
    phase: '01',
    icon: Search,
    title: 'Pre-Feasibility Assessment',
    subtitle: 'Project scoping & viability',
    description: 'Rapid satellite-based landscape analysis to determine carbon sequestration potential, applicable methodologies, and project viability before committing significant resources.',
    whatYouGet: ['Landscape carbon potential maps', 'Methodology recommendation', 'Baseline scenario sketch', 'Rough carbon credit estimate'],
    timeframe: '1–2 weeks',
    color: 'earth',
    applicable: ['Regenerative Ag', 'Agroforestry', 'Rangelands', 'Reforestation'],
  },
  {
    phase: '02',
    icon: FileText,
    title: 'Project Design & MRV System',
    subtitle: 'PDD development & methodology',
    description: 'Full Monitoring, Reporting and Verification system design compliant with your chosen standard — Verra, Gold Standard, Plan Vivo, and more.',
    whatYouGet: ['Complete MRV sections for PDD', 'Baseline & additionality documentation', 'Monitoring plan design', 'Stakeholder engagement protocols'],
    timeframe: '3–8 weeks',
    color: 'carbon',
    applicable: ['Forest Protection', 'Reforestation', 'Regenerative Ag', 'All NbS'],
  },
  {
    phase: '03',
    icon: BarChart3,
    title: 'Ongoing Satellite Monitoring',
    subtitle: 'Continuous impact tracking',
    description: 'Earth observation-powered monitoring throughout your project cycle. Real-time dashboards, automated reports, and early warning systems for off-track indicators.',
    whatYouGet: ['Real-time project dashboard', 'Geographic indicator maps', 'Automated periodic reports', 'Risk & deviation alerts'],
    timeframe: 'Ongoing',
    color: 'soil',
    applicable: ['All Project Types'],
    highlight: true,
  },
  {
    phase: '04',
    icon: CheckCircle,
    title: 'Carbon Credit Verification',
    subtitle: 'Third-party validated issuance',
    description: 'Rigorous SOC and AGB measurement verification preparing your project for independent audit and carbon credit issuance under leading registries.',
    whatYouGet: ['Verification-ready documentation', 'SOC measurement reports', 'Permanence & additionality evidence', 'Registry submission support'],
    timeframe: '4–12 weeks',
    color: 'earth',
    applicable: ['Verra VM0042', 'VM0053', 'Gold Standard'],
  },
  {
    phase: '05',
    icon: Layers,
    title: 'Tech Integration & API',
    subtitle: 'Plug MRV into your systems',
    description: 'Integrate SoilWatch\'s earth observation data layers and analytics directly into your existing platform, registry, or reporting workflow via our API.',
    whatYouGet: ['REST API access', 'Custom data pipelines', 'White-label platform option', 'Developer documentation'],
    timeframe: 'Flexible',
    color: 'carbon',
    applicable: ['Tech Platforms', 'Registries', 'Financial Institutions'],
  },
]

const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string; pill: string }> = {
  earth: {
    bg: 'bg-earth-50',
    text: 'text-earth-700',
    border: 'border-earth-200',
    iconBg: 'bg-earth-100',
    pill: 'bg-earth-100 text-earth-700',
  },
  carbon: {
    bg: 'bg-carbon-50',
    text: 'text-carbon-700',
    border: 'border-carbon-200',
    iconBg: 'bg-carbon-100',
    pill: 'bg-carbon-100 text-carbon-700',
  },
  soil: {
    bg: 'bg-soil-50',
    text: 'text-soil-700',
    border: 'border-soil-200',
    iconBg: 'bg-soil-100',
    pill: 'bg-soil-100 text-soil-700',
  },
}

const dotMap: Record<string, string> = {
  earth: 'bg-earth-300',
  carbon: 'bg-carbon-400',
  soil: 'bg-soil-400',
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
    <section ref={sectionRef} className="section-shell py-24 bg-white" id="services">
      <div className="absolute inset-0 theme-grid opacity-[0.08]" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal opacity-0 relative z-10 text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-soil-200 bg-soil-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-soil-600 mb-4">
            <Layers size={12} />
            Full Project Lifecycle
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-soil-900 mb-4">
            From Concept to Carbon Credit
          </h2>
          <p className="text-soil-600 text-lg max-w-3xl mx-auto leading-8">
            SoilWatch supports your project at every stage — from initial feasibility through to verified credit issuance and beyond.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, i) => {
            const colors = colorMap[service.color]
            const Icon = service.icon
            return (
              <div
                key={service.phase}
                className={`reveal opacity-0 service-card rounded-3xl border p-7 ${
                  service.highlight
                    ? 'bg-soil-900 border-soil-800 lg:col-span-1'
                    : `bg-white ${colors.border}`
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Phase + icon */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    service.highlight ? 'bg-earth-300/18' : colors.iconBg
                  }`}>
                    <Icon size={20} className={service.highlight ? 'text-earth-300' : colors.text} />
                  </div>
                  <span className={`font-mono text-xs font-bold ${
                    service.highlight ? 'text-earth-300' : 'text-soil-300'
                  }`}>
                    PHASE {service.phase}
                  </span>
                </div>

                <h3 className={`font-display text-xl font-bold mb-1 ${
                  service.highlight ? 'text-white' : 'text-soil-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-sm font-medium mb-3 ${
                  service.highlight ? 'text-earth-300' : colors.text
                }`}>
                  {service.subtitle}
                </p>
                <p className={`text-sm leading-relaxed mb-5 ${
                  service.highlight ? 'text-soil-400' : 'text-soil-500'
                }`}>
                  {service.description}
                </p>

                {/* What you get */}
                <ul className="space-y-2 mb-5">
                  {service.whatYouGet.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className={`mt-0.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                        service.highlight ? 'bg-earth-300' : dotMap[service.color]
                      }`} />
                      <span className={service.highlight ? 'text-soil-300' : 'text-soil-600'}>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer row */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10 gap-2 flex-wrap">
                  <div className="flex flex-wrap gap-1.5">
                    {service.applicable.map((a) => (
                          <span
                        key={a}
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                          service.highlight
                            ? 'bg-earth-300/12 text-earth-200'
                            : colors.pill
                        }`}
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                  <span className={`text-xs font-mono font-medium ${
                    service.highlight ? 'text-soil-500' : 'text-soil-400'
                  }`}>
                    {service.timeframe}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="reveal opacity-0 text-center">
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
