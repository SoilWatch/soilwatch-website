'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Satellite, Award, Map, Leaf, Mail, Linkedin, Globe } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Map,
    title: 'Identify & Design',
    desc: 'We assess landscapes for restoration potential, choose the right typology, and design a project rooted in local context and community structures.'
  },
  {
    number: '02',
    icon: Leaf,
    title: 'Implement With Integrity',
    desc: 'Hands-on implementation with local partners using science-based protocols open to scrutiny at every stage.'
  },
  {
    number: '03',
    icon: Satellite,
    title: 'Monitor & Verify',
    desc: 'Transparent, science-based MRV using best-available scientific models — not black-box proprietary systems — ensuring every tonne claimed is a tonne earned.'
  },
  {
    number: '04',
    icon: Award,
    title: 'Issue Credits & Go Beyond',
    desc: 'Credits issued beyond standard requirements with buyer-facing dashboards, third-party verification, and continuous quality control.'
  },
]

const partners = [
  {
    name: 'Finnish Ministry for Foreign Affairs',
    src: '/images/partners/ministry-for-foreign-affairs-of-finland-logo-png_seeklogo-379581.png',
  },
  { name: 'Lande Mills', src: '/images/partners/thumbnail-image-21.png' },
  { name: 'World Food Programme', src: '/images/partners/WFP.png' },
  { name: 'World Economic Forum', src: '/images/partners/WEF.png' },
  { name: 'IFAD', src: '/images/partners/IFAD.jpg' },
  { name: 'International Organization for Migration', src: '/images/partners/IOM.jpg_large.jpg' },
  { name: 'European Space Agency', src: '/images/partners/ESA.png' },
  { name: 'Copernicus', src: '/images/partners/Copernicus.png' },
  { name: 'Aerospace Valley', src: '/images/partners/LOGO_AEROSPACE_VALLEY_Fond_Clair.jpg' },
  { name: 'OFP', src: '/images/partners/OFP.png' },
  { name: 'Farmerlink', src: '/images/partners/Farmerlink.png' },
  { name: 'Mifuko', src: '/images/partners/Mifuko.png' },
  { name: 'Carbono Local', src: '/images/partners/Carbonolocal.png' },
  { name: 'CARE', src: '/images/partners/CARE_horizontal-1024x331.png' },
  { name: 'CarbonoVivo', src: '/images/partners/CarbonoVivo.png' },
  { name: 'Microsoft', src: '/images/partners/Microsoft.jpeg' },
  { name: '4 per 1000', src: '/images/partners/4per1000.jpeg' },
  { name: 'EIT Climate-KIC', src: '/images/partners/6390b4f19de8284987e7a438_EIT-CKIC-Logo_Transparent_Standard-1-2.webp' },
  { name: 'ClimAccelerator', src: '/images/partners/6390b4f1364473b29ceb2c6a_climaccelerator.png' },
  { name: 'Green Tech Alliance', src: '/images/partners/62cc8839229e8cbee980b623_Green-Tech-Transparent-p-500.png' },
  { name: 'EcoSecurities', src: '/images/partners/653476_11b7dcb76f704cf5a718c3f7ebce8c9amv2.png' },
]

export default function HowItWorks() {
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
      <section className="section-shell overflow-hidden py-24 bg-soil-900" id="how-it-works">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,195,73,0.18),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="reveal opacity-0 text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-200 mb-4">
              <Satellite size={12} />
              Our Approach
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white mb-4">
              From Degraded Landscape
              <span className="block text-earth-300">To Verified Carbon Impact</span>
            </h2>
            <p className="text-soil-200 text-lg max-w-3xl mx-auto leading-8">
              We identify, design, implement, and verify high-integrity carbon projects with transparent evidence at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="reveal opacity-0 relative" style={{ animationDelay: `${i * 0.12}s` }}>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(100%)] h-px w-full -translate-x-6 bg-gradient-to-r from-earth-300/50 to-transparent" />
                  )}
                  <div className="relative h-full rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-earth-300/14">
                        <Icon size={18} className="text-earth-200" />
                      </div>
                      <span className="font-mono text-xs font-bold text-earth-300">{step.number}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold uppercase text-white mb-3">{step.title}</h3>
                    <p className="text-sm leading-6 text-white/70">{step.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-soil-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal opacity-0 text-center mb-10">
            <p className="text-soil-500 text-sm font-bold uppercase tracking-[0.2em]">Trusted By Partners &amp; Donors Worldwide</p>
          </div>
          <div className="reveal opacity-0 delay-100 relative -mx-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
            <div className="overflow-hidden px-6 pb-3">
              <div className="logo-marquee flex w-max gap-5">
                {[partners, partners].map((group, groupIndex) => (
                  <div key={groupIndex} className="flex gap-5 pr-5">
                    {group.map((partner) => (
                      <div
                        key={`${groupIndex}-${partner.name}`}
                        className="flex h-28 w-48 shrink-0 items-center justify-center rounded-2xl border border-soil-100 bg-white p-5 shadow-[0_16px_50px_rgba(30,24,16,0.06)] transition-transform duration-300 hover:-translate-y-1"
                      >
                        <div className="relative h-16 w-full">
                          <Image
                            src={partner.src}
                            alt={partner.name}
                            fill
                            sizes="192px"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell overflow-hidden py-24 bg-earth-300/18">
        <div className="absolute inset-0 theme-grid opacity-[0.09]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="reveal opacity-0 soft-panel rounded-[2rem] px-8 py-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-soil-900 mb-6">
              Deliver Measured and Verified Climate Change Mitigation and Resilience Outcomes
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-soil-600">
              We work with project developers, investors, communities, donors, NGOs, and UN agencies to design and implement projects that deliver real carbon outcomes and real co-benefits.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-shimmer rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-900">
                Talk To Our Team
              </Link>
              <Link href="/approach" className="rounded-full border border-soil-300 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-800 transition-colors hover:border-earth-300 hover:bg-earth-50">
                Explore Project Types
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-soil-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-12 w-8 overflow-hidden rounded-sm">
                  <Image
                    src="/images/soilwatch_logo_outline_stroke_2023-1.webp"
                    alt="SoilWatch logo"
                    fill
                    sizes="32px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-display text-lg font-bold uppercase tracking-[0.08em] text-white">SoilWatch</div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-white/45">Natural Climate Solutions</div>
                </div>
              </div>
              <p className="text-sm leading-6 text-white/80 mb-5">
                We originate, co-develop, and manage Natural Climate Solutions that remove carbon and improve livelihoods in the world's most vulnerable landscapes, powered by dMRV.
              </p>
              <div className="flex gap-3">
                {[
                  { href: 'mailto:contact@soilwatch.eu', icon: Mail, label: 'Email' },
                  { href: 'https://linkedin.com/company/soilwatch/', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'https://soilwatch.eu/', icon: Globe, label: 'Website' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-colors hover:bg-white/[0.1]"
                      aria-label={item.label}
                    >
                      <Icon size={15} className="text-white/70" />
                    </a>
                  )
                })}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-white/55">
                {[
                  { label: 'Regenerative Agriculture', href: '/services' },
                  { label: 'Rangeland & Management', href: '/services' },
                  { label: 'Biochar', href: '/services' },
                  { label: 'Enhanced Rock Weathering', href: '/services' },
                  { label: 'Agroforestry', href: '/services' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-white/90 transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white mb-4">Marketplace</h4>
              <ul className="space-y-3 text-sm text-white/55">
                {[
                  { label: 'Browse Credits', href: '/marketplace' },
                  { label: 'Soil Carbon', href: '/marketplace' },
                  { label: 'Agroforestry', href: '/marketplace' },
                  { label: 'Blue Carbon', href: '/marketplace' },
                  { label: 'Cart & Checkout', href: '/cart' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-white/90 transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-white/55">
                {[
                  { label: 'About SoilWatch', href: '/about' },
                  { label: 'Insights & Science', href: '/insights' },
                  { label: 'Careers', href: '/careers' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-white/90 transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs uppercase tracking-[0.14em] text-white/40">
              Copyright © 2026 SoilWatch
            </p>
            <p className="text-xs uppercase tracking-[0.14em] text-white/35">
              Helsinki · Nairobi · Brussels
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
