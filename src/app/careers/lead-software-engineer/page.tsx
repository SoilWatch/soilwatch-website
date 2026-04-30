'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Code2, Mail, Linkedin, Globe } from 'lucide-react'

const responsibilities = [
  {
    title: 'Platform Development & Architecture',
    items: [
      'Lead full-stack development of our digital MRV platform, from front-end interfaces used by field teams to back-end systems integrating satellite, climate, field, and project data.',
      'Make architectural decisions for systems that handle chain-of-custody traceability, carbon accounting logic, and audit-ready data exports.',
      'Translate scientific and operational requirements into scalable, reliable product features in coordination with the Technical Project Manager.',
      'Support cloud-native deployment and infrastructure decisions across Google Cloud and Microsoft Azure.',
    ],
  },
  {
    title: 'Quality Management & Standards Compliance',
    items: [
      "Own the quality management framework for SoilWatch's digital infrastructure, ensuring that data integrity, traceability, and verification readiness are built into systems by design, not bolted on afterward.",
      'Design and implement automated QA/QC checks across the data pipeline: from field data collection (ODK/ONA) through processing, carbon accounting, and reporting.',
      'Ensure platform architecture supports compliance with major carbon standards (Verra VM0044 and VM0042, EBC/Global C-Sink, Puro.earth, Isometric, and others as they evolve).',
      'Build systems that produce audit-ready outputs: complete chain-of-custody records, reproducible calculations, and transparent evidence packages for verification bodies and buyers.',
      "Work with the science and operations teams to define and enforce data quality thresholds, validation rules, and consistency checks that protect the integrity of our clients' climate claims.",
    ],
  },
  {
    title: 'Technical Leadership',
    items: [
      'Improve code quality, testing coverage, documentation, and deployment practices across the stack.',
      'Contribute to technical planning, prioritization, and engineering standards in close coordination with the Technical Project Manager.',
      'Mentor team members and help guide execution across workstreams.',
    ],
  },
]

const required = [
  'Significant professional experience in software engineering, including ownership of production systems or major product areas from architecture through deployment and operation.',
  'Strong backend expertise in Python, including API design, service architecture, and data-intensive applications.',
  'Solid frontend experience with a modern JavaScript framework such as React.',
  'Strong experience with PostgreSQL and backend data modelling for operational and analytical workflows.',
  'Experience with Google Cloud Platform services and production cloud deployments; experience with Microsoft Azure is also valuable.',
  'Proven ability to independently lead technical implementation and make sound engineering decisions in a fast-moving environment.',
  'Strong understanding of software engineering best practices: testing, maintainability, version control, CI/CD, and deployment workflows.',
  "A quality-first mindset: you care about data integrity, process management, edge cases, validation, and audit trails. You understand that in climate tech, a data quality failure isn't just a bug, it's a credibility failure.",
  'Ability to collaborate effectively across technical and non-technical teams, including science, operations, and delivery stakeholders.',
  'Genuine interest in climate solutions, carbon markets, ecological restoration, and mission-driven product development.',
]

const preferred = [
  'Experience with quality management systems, data governance, or compliance frameworks; especially in contexts where data correctness has financial or regulatory consequences (carbon markets, fintech, health tech, regulated industries).',
  'Familiarity with carbon credit standards and MRV requirements (Verra VCS, EBC, Puro.earth, Isometric, Gold Standard, or similar).',
  'Experience leading technical direction, mentoring engineers, or owning architecture for a product or platform.',
  'Experience coordinating closely with a Technical Project Manager, Product Manager, or equivalent delivery lead.',
  'Experience with containerised deployments and orchestration tools such as Docker and Kubernetes.',
  'Experience with specific GCP services (Cloud Run, Cloud Storage, Cloud SQL, Pub/Sub, BigQuery) and/or relevant Azure services.',
  'Experience integrating field-data systems such as ODK, ONA, or similar mobile data collection tools into digital platforms and data workflows.',
  'Understanding of security, privacy, and compliance considerations relevant to data platforms.',
]

const offer = [
  'Meaningful work at the core of climate action and carbon removal.',
  'A role where quality and integrity are the mission, not an afterthought.',
  'Flexible, remote-first working in an international team across the world.',
  'Direct influence on products used by UN agencies, NGOs, climate investors, and project developers worldwide.',
  "A small, agile team where your ideas and decisions directly shape the product and the company's trajectory.",
]

export default function LeadSoftwareEngineerPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="section-shell overflow-hidden bg-soil-900 pb-20 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,195,73,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Link
            href="/careers"
            className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-white/80"
          >
            <ArrowLeft size={13} />
            All Openings
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-300 mb-6">
            <Code2 size={11} />
            Open Role
          </div>

          <h1 className="font-display text-5xl font-bold uppercase leading-[0.92] text-white md:text-6xl">
            Lead Software Engineer
            <span className="block text-earth-300">Climate Solutions</span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">Remote-first</span>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">Helsinki / Nairobi</span>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">Full-time</span>
          </div>

          <div className="mt-10">
            <a
              href="mailto:info@soilwatch.eu?subject=Application%20-%20Lead%20Software%20Engineer"
              className="inline-flex items-center gap-2 rounded-full bg-earth-300 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-900 transition-opacity hover:opacity-90"
            >
              Apply by Email
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-8 py-12 space-y-10">

        {/* About */}
        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-[0.06em] text-soil-900 mb-4">About the Role</h2>
          <div className="space-y-3 text-sm leading-7 text-soil-600">
            <p>
              This is not a typical lead engineer position. At SoilWatch, the systems you build are the systems that determine whether a climate solution is credible. Every architectural decision you make, from how data flows from a field operator&apos;s phone or a sensor in space to a carbon credit registry, to how batch-level traceability is maintained and QA/QC checks are automated, directly affects whether our clients&apos; climate claims hold up under audit.
            </p>
            <p>
              We believe that high-integrity quality management is where the real value lies in climate tech. The work is not about building flashy software products, but about building systems that make carbon removal trustworthy. That&apos;s why this role carries primary responsibility for quality control across our digital MRV platform and the climate solution quality we deliver to clients.
            </p>
            <p>
              You will own the technical architecture and quality framework for our platforms, spanning biochar carbon removal, nature-based solutions, and other climate solutions. You&apos;ll work closely with our science, operations, and delivery teams to ensure that what we build isn&apos;t just technically sound, but audit-ready, standards-compliant, and trusted by buyers, registries, and verification bodies.
            </p>
          </div>
        </section>

        {/* Responsibilities */}
        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-[0.06em] text-soil-900 mb-5">Key Responsibilities</h2>
          <div className="space-y-6">
            {responsibilities.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-bold text-soil-900 mb-2">{section.title}</h3>
                <ul className="space-y-1.5">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-soil-600 leading-6">
                      <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-soil-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Qualifications */}
        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-[0.06em] text-soil-900 mb-5">Qualifications</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-soil-900 mb-2">Required</h3>
              <ul className="space-y-1.5">
                {required.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-6 text-soil-600">
                    <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-soil-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-soil-900 mb-2">Preferred</h3>
              <ul className="space-y-1.5">
                {preferred.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-6 text-soil-600">
                    <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-soil-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-[0.06em] text-soil-900 mb-4">Why This Role Matters</h2>
          <div className="space-y-3 text-sm leading-7 text-soil-600">
            <p>
              The carbon market is at a credibility crossroads. Buyers and investors are increasingly demanding rigorous, transparent, and verifiable evidence that carbon removal claims are real. The companies that win in this space won&apos;t be the ones with the most features; they&apos;ll be the ones whose data and quality systems are beyond reproach.
            </p>
            <p>
              As Lead Engineer, you will shape how SoilWatch delivers that credibility. Your systems will be the basis on which millions of dollars in climate finance flows, and on which communities in some of the world&apos;s most vulnerable landscapes receive support for restoration and livelihoods.
            </p>
          </div>
        </section>

        {/* What we offer */}
        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-[0.06em] text-soil-900 mb-4">What We Offer</h2>
          <ul className="space-y-1.5">
            {offer.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm leading-6 text-soil-600">
                <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-soil-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Apply CTA */}
        <section className="section-shell overflow-hidden rounded-2xl bg-soil-900 px-8 py-10 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,195,73,0.14),transparent_60%)]" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold uppercase text-white mb-3">Ready to Apply?</h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto leading-7">
              Send your CV, a brief cover letter, and links to relevant code, publications, or projects.
            </p>
            <a
              href="mailto:info@soilwatch.eu?subject=Application%20-%20Lead%20Software%20Engineer"
              className="inline-flex items-center gap-2 rounded-full bg-earth-300 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-900 transition-opacity hover:opacity-90"
            >
              Apply by Email: info@soilwatch.eu
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </div>

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
                We originate, co-develop, and manage Natural Climate Solutions that remove carbon and improve livelihoods in the world's most vulnerable landscapes, powered by rigorous digital MRV.
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
                  { label: 'Project Design Support', href: '/services' },
                  { label: 'Ongoing Monitoring', href: '/services' },
                  { label: 'Impact Verification', href: '/services' },
                  { label: 'API Integration', href: '/services' },
                  { label: 'Advisory Support', href: '/services' },
                ].map((item) => (
                  <li key={item.label}><Link href={item.href} className="hover:text-white/90 transition-colors">{item.label}</Link></li>
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
                ].map((item) => (
                  <li key={item.label}><Link href={item.href} className="hover:text-white/90 transition-colors">{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-white/55">
                {[
                  { label: 'About SoilWatch', href: '/about' },
                  { label: 'Careers', href: '/careers' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' },
                  { label: 'Terms', href: '/terms' },
                ].map((item) => (
                  <li key={item.label}><Link href={item.href} className="hover:text-white/90 transition-colors">{item.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs uppercase tracking-[0.14em] text-white/40">Copyright © 2026 SoilWatch</p>
            <p className="text-xs uppercase tracking-[0.14em] text-white/35">Helsinki · Nairobi · Brussels</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
