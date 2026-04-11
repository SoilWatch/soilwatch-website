'use client'
import Navbar from '@/components/Navbar'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Leaf, Users, Globe } from 'lucide-react'

const impactMetrics = [
  { value: 2400000, suffix: '', label: 'Hectares Under Monitoring', icon: Globe, color: 'earth' },
  { value: 800000, suffix: '+', label: 'Farmers & Pastoralists Supported', icon: Users, color: 'carbon' },
  { value: 1200000, suffix: '', label: 'tCO₂e Sequestration Potential', icon: Leaf, color: 'soil' },
  { value: 99.2, suffix: '%', label: 'Verification Accuracy Rate', icon: TrendingUp, color: 'earth' },
]

const projects = [
  { country: 'Sudan', type: 'Rangeland Restoration', hectares: '200,000+', credits: '120,000', status: 'Active', dot: 'bg-earth-500' },
  { country: 'Kenya', type: 'Agroforestry', hectares: '45,000', credits: '65,000', status: 'Active', dot: 'bg-earth-500' },
  { country: 'Ethiopia', type: 'Regenerative Ag', hectares: '80,000', credits: '95,000', status: 'Active', dot: 'bg-earth-500' },
  { country: 'Morocco', type: 'Olive Grove Restoration', hectares: '12,000', credits: '40,000', status: 'Verification', dot: 'bg-amber-400' },
  { country: 'Tanzania', type: 'Forest Protection', hectares: '320,000', credits: '250,000', status: 'Active', dot: 'bg-earth-500' },
  { country: 'Senegal', type: 'Mangrove Carbon', hectares: '8,500', credits: '30,000', status: 'Active', dot: 'bg-earth-500' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 2000
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  const formatted = target >= 1000000
    ? (count / 1000000).toFixed(1) + 'M'
    : target >= 1000
    ? (count / 1000).toFixed(0) + 'K'
    : count.toFixed(target % 1 !== 0 ? 1 : 0)

  return <span ref={ref}>{formatted}{suffix}</span>
}

export default function ImpactPage() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.remove('opacity-0')
          e.target.classList.add('animate-fade-up')
        }
      }),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main ref={ref}>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0e1a0e] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e1a0e] to-[#1a2a0a]" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-earth-700/15 rounded-full blur-[80px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="reveal opacity-0 inline-flex items-center gap-2 bg-earth-700/30 text-earth-400 text-xs font-medium uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Real-World Impact
          </div>
          <h1 className="reveal opacity-0 delay-100 font-display text-5xl md:text-6xl font-bold text-white mb-5">
            Numbers That<br />
            <span className="italic text-earth-400">Matter to the Planet</span>
          </h1>
          <p className="reveal opacity-0 delay-200 text-soil-300 text-xl max-w-2xl mx-auto">
            Every hectare monitored, every credit issued, every farmer supported — tracked transparently and updated in real time.
          </p>
        </div>
      </section>

      {/* Animated metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, i) => {
              const Icon = metric.icon
              const colorMap: Record<string, string> = {
                earth: 'bg-earth-50 border-earth-200 text-earth-700',
                carbon: 'bg-carbon-50 border-carbon-200 text-carbon-700',
                soil: 'bg-soil-50 border-soil-200 text-soil-700',
              }
              return (
                <div
                  key={metric.label}
                  className={`reveal opacity-0 service-card border rounded-3xl p-7 ${colorMap[metric.color]}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-white/70 rounded-2xl flex items-center justify-center mb-5">
                    <Icon size={18} />
                  </div>
                  <div className="font-display text-4xl font-bold mb-2">
                    <CountUp target={metric.value} suffix={metric.suffix} />
                  </div>
                  <div className="text-sm font-medium opacity-80">{metric.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal opacity-0 mb-12">
            <h2 className="font-display text-4xl font-bold text-soil-900 mb-4">SDG Alignment</h2>
            <p className="text-soil-500 text-lg max-w-2xl">
              Our projects don't just offset carbon — they address the interconnected crises of food insecurity, biodiversity loss, and rural poverty.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                sdg: 'SDG 2', title: 'Zero Hunger', description: 'Regenerative agriculture projects directly improve soil fertility, crop yields, and food security for smallholder farmers across East Africa.',
                color: 'bg-amber-50 border-amber-200 text-amber-800',
                stat: '800K+ farmers', statColor: 'text-amber-700'
              },
              {
                sdg: 'SDG 13', title: 'Climate Action', description: 'Verified carbon removal from improved land management practices, directly contributing to global net-zero pathways through high-integrity credits.',
                color: 'bg-earth-50 border-earth-200 text-earth-800',
                stat: '1.2M tCO₂e potential', statColor: 'text-earth-700'
              },
              {
                sdg: 'SDG 15', title: 'Life on Land', description: 'Holistic grazing and agroforestry projects restore biodiversity, prevent desertification, and rehabilitate degraded ecosystems across the Sahel and East Africa.',
                color: 'bg-carbon-50 border-carbon-200 text-carbon-800',
                stat: '2.4M ha monitored', statColor: 'text-carbon-700'
              },
            ].map((item, i) => (
              <div
                key={item.sdg}
                className={`reveal opacity-0 service-card rounded-3xl border p-7 ${item.color}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">{item.sdg}</div>
                <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-70 mb-5">{item.description}</p>
                <div className={`font-display text-xl font-bold ${item.statColor}`}>{item.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Projects Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal opacity-0 mb-10">
            <h2 className="font-display text-4xl font-bold text-soil-900 mb-4">Active Project Portfolio</h2>
            <p className="text-soil-500 text-lg">Real projects, real land, real impact.</p>
          </div>
          <div className="reveal opacity-0 delay-100 bg-[#faf7f2] border border-soil-200 rounded-3xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-soil-200 text-xs font-semibold text-soil-400 uppercase tracking-widest">
              <div>Country</div>
              <div>Project Type</div>
              <div>Area</div>
              <div>Credits (tCO₂e)</div>
              <div>Status</div>
            </div>
            {projects.map((p, i) => (
              <div
                key={p.country}
                className={`grid grid-cols-5 gap-4 px-6 py-5 items-center ${i < projects.length - 1 ? 'border-b border-soil-100' : ''} hover:bg-white/60 transition-colors`}
              >
                <div className="font-display font-bold text-soil-900">{p.country}</div>
                <div className="text-soil-600 text-sm">{p.type}</div>
                <div className="text-soil-700 text-sm font-medium font-mono">{p.hectares} ha</div>
                <div className="text-soil-700 text-sm font-medium font-mono">{p.credits}</div>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${p.dot}`} />
                  <span className="text-sm text-soil-600">{p.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-earth-800">
        <div className="reveal opacity-0 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Add Your Project to This Portfolio
          </h2>
          <p className="text-earth-200 text-lg mb-10">
            Join the growing number of projects that trust SoilWatch for credible, science-based carbon monitoring.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-earth-800 font-semibold px-8 py-4 rounded-full text-sm hover:bg-earth-50 transition-colors">
            Start Your Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
