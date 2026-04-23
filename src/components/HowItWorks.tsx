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
    desc: 'Transparent, science-based MRV using best-available models — not black-box proprietary systems — ensuring every tonne claimed is a tonne earned.'
  },
  {
    number: '04',
    icon: Award,
    title: 'Issue & Market Credits',
    desc: 'Credits listed with full methodology transparency, satellite evidence, and third-party verification — investor-grade quality.'
  },
]

const partners = [
  {
    name: 'Finnish Ministry for Foreign Affairs',
    src: '/images/ministry-for-foreign-affairs-of-finland-logo-png_seeklogo-379581.png',
  },
  { name: 'WFP', src: 'https://soilwatch.eu/wp-content/uploads/2023/07/WFP.png' },
  { name: 'WEF', src: 'https://soilwatch.eu/wp-content/uploads/2023/07/WEF.png' },
  { name: 'IFAD', src: 'https://soilwatch.eu/wp-content/uploads/2023/07/IFAD.jpg' },
  { name: 'ESA', src: 'https://soilwatch.eu/wp-content/uploads/2023/07/ESA.png' },
  { name: 'Copernicus', src: 'https://soilwatch.eu/wp-content/uploads/2023/07/Copernicus.png' },
  { name: 'OFP', src: 'https://soilwatch.eu/wp-content/uploads/2023/07/OFP.png' },
  { name: 'Niras' },
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
              We identify, design, implement, and verify — delivering high-integrity carbon projects with transparent evidence at every step.
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

      <section className="py-16 bg-white border-y border-soil-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal opacity-0 text-center mb-10">
            <p className="text-soil-500 text-sm font-bold uppercase tracking-[0.2em]">Trusted By Partners &amp; Donors Worldwide</p>
          </div>
          <div className="reveal opacity-0 delay-100 grid grid-cols-2 gap-6 md:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner.name} className="soft-panel flex h-28 items-center justify-center rounded-[1.5rem] p-5">
                {partner.src ? (
                  <div className="relative h-12 w-full">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      fill
                      sizes="160px"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-center text-xs font-bold uppercase tracking-[0.14em] text-soil-600 leading-5">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell overflow-hidden py-24 bg-earth-300/18">
        <div className="absolute inset-0 theme-grid opacity-[0.09]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="reveal opacity-0 soft-panel rounded-[2rem] px-8 py-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-soil-900 mb-6">
              Ready To Develop A High-Integrity Carbon Project?
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-soil-600">
              We work with project developers, investors, communities, and donors to design and implement projects that deliver real carbon outcomes — and real co-benefits.
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
                    src="https://soilwatch.eu/wp-content/uploads/2023/07/soilwatch_logo_outline_stroke_2023-1.png"
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
                Science-based MRV for nature-based projects, with a marketplace layer that makes verified carbon easier to discover and buy.
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
                  { label: 'Rangeland & Pastoralism', href: '/services' },
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
