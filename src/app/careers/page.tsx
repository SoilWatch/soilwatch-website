'use client'
import Navbar from '@/components/Navbar'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Briefcase, Code2, Globe2, Mail, MapPin, ArrowRight, Linkedin, Globe } from 'lucide-react'

const roleHighlights = [
  'Build product and platform systems that support credible MRV workflows',
  'Work with climate scientists, remote sensing specialists, and field teams',
  'Shape software used across Africa, Latin America, and Asia',
]

const applicationMaterials = [
  'CV',
  'Brief cover letter or a short paragraph introducing yourself',
  'Links to relevant code, publications, or projects',
]

export default function CareersPage() {
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

      <section className="section-shell overflow-hidden bg-soil-50 pb-20 pt-32">
        <div className="absolute inset-0 theme-lines opacity-75" />
        <div className="absolute left-[-5rem] top-24 h-64 w-64 rounded-full bg-earth-200/40 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="reveal opacity-0 inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700">
                <Briefcase size={12} />
                Careers
              </div>
              <h1 className="reveal opacity-0 delay-100 mt-7 font-display text-5xl font-bold uppercase leading-[0.94] text-soil-900 md:text-6xl">
                Join SoilWatch
              </h1>
              <div className="reveal opacity-0 delay-200 mt-5 flex flex-wrap gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-soil-500">
                <span className="rounded-full border border-soil-200 bg-white/80 px-4 py-2">Helsinki</span>
                <span className="rounded-full border border-soil-200 bg-white/80 px-4 py-2">Nairobi</span>
                <span className="rounded-full border border-soil-200 bg-white/80 px-4 py-2">Climate Tech</span>
              </div>
              <p className="reveal opacity-0 delay-300 mt-7 max-w-3xl text-lg leading-8 text-soil-600">
                SoilWatch is a climate tech company that helps nature-based carbon removal projects to deliver and prove their impact. We combine science, Earth observation, and digital infrastructure to build the measurement, reporting, and verification systems that make climate solutions credible, investable, and scalable.
              </p>
              <p className="reveal opacity-0 delay-400 mt-5 max-w-3xl text-lg leading-8 text-soil-600">
                We work across Africa, Latin America, and Asia with UN agencies, investors, project developers, and communities, supporting ecosystem restoration, carbon removal, sustainable land management, and development finance.
              </p>
            </div>

            <div className="reveal opacity-0 delay-300 soft-panel rounded-[2rem] p-6 md:p-8">
              <div className="rounded-[1.6rem] bg-soil-900 p-6 text-white">
                <div className="flex items-center gap-3 text-earth-300">
                  <Code2 size={18} />
                  <span className="text-xs font-bold uppercase tracking-[0.18em]">Open Role</span>
                </div>
                <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-tight">
                  Lead Software Engineer
                  <span className="block text-earth-300">Climate Solutions</span>
                </h2>
                <div className="mt-5 grid gap-3 text-sm leading-6 text-white/72">
                  {roleHighlights.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
                      {item}
                    </div>
                  ))}
                </div>
                <a
                  href="mailto:info@soilwatch.eu?subject=Application%20-%20Lead%20Software%20Engineer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-earth-300 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-soil-900"
                >
                  Apply by Email
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="reveal opacity-0 soft-panel rounded-[2rem] p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-soil-200 bg-soil-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-soil-600">
                <Globe2 size={12} />
                Why SoilWatch
              </div>
              <h2 className="mt-6 font-display text-4xl font-bold uppercase text-soil-900">
                Work At The Intersection Of Science, Operations, And Technology
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-soil-600">
                <p>
                  We&apos;re a mission-driven team. Joining SoilWatch means working at the intersection of climate science, field operations, and technology, where your work has direct, measurable impact on environment and communities.
                </p>
                <p>
                  The problems are practical and high-stakes: turning restoration outcomes into credible evidence, building dependable data infrastructure, and helping projects become financeable without losing scientific rigor.
                </p>
              </div>
            </div>

            <div className="reveal opacity-0 delay-100 rounded-[2rem] border border-soil-200 bg-soil-50 p-8">
              <div className="flex items-center gap-2 text-earth-700">
                <Mail size={16} />
                <span className="text-xs font-bold uppercase tracking-[0.18em]">How To Apply</span>
              </div>
              <p className="mt-6 text-lg leading-8 text-soil-600">
                Send your application materials to <a className="font-bold text-soil-900 underline decoration-earth-300 underline-offset-4" href="mailto:info@soilwatch.eu">info@soilwatch.eu</a>.
              </p>
              <div className="mt-6 space-y-3">
                {applicationMaterials.map((item) => (
                  <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-soil-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-earth-200 bg-earth-50 px-4 py-4 text-sm leading-6 text-soil-700">
                Start with a strong signal. Show us how you think, what you&apos;ve built, and where you&apos;ve handled technical or scientific complexity well.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell overflow-hidden bg-soil-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,195,73,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="reveal opacity-0 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-200">
                <MapPin size={12} />
                Global Work, Real Projects
              </div>
              <h2 className="mt-6 font-display text-4xl font-bold uppercase text-white md:text-5xl">
                Start Your Ecosystem Restoration Journey With SoilWatch
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-white/72">
              <p>
                The world needs more innovators and leaders committed to harnessing the power of nature in the fight against climate change. At SoilWatch, you won&apos;t navigate that journey alone.
              </p>
              <p>
                We invite you to take the next step with us. Let&apos;s explore how your experience can contribute to impactful, long-lasting, and verified restoration and carbon removal solutions.
              </p>
              <p>
                You&apos;re about to take on work that matters, with robust scientific rigor and clear operational consequence where it is needed most.
              </p>
            </div>
          </div>

          <div className="reveal opacity-0 delay-100 mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:info@soilwatch.eu?subject=Application%20-%20Lead%20Software%20Engineer"
              className="btn-shimmer inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-900"
            >
              Apply Now
              <ArrowRight size={16} />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/[0.09]"
            >
              Contact SoilWatch
            </Link>
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
                {['Project Design Support', 'Ongoing Monitoring', 'Impact Verification', 'API Integration', 'Advisory Support'].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white mb-4">Marketplace</h4>
              <ul className="space-y-3 text-sm text-white/55">
                {['Browse Credits', 'Soil Carbon', 'Agroforestry', 'Blue Carbon'].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-white/55">
                {['About SoilWatch', 'Careers', 'Contact', 'Privacy', 'Terms'].map((item) => (
                  <li key={item}>{item}</li>
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
    </main>
  )
}
