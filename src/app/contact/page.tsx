'use client'
import Navbar from '@/components/Navbar'
import { useState } from 'react'
import { Mail, Globe, Linkedin, Send, CheckCircle } from 'lucide-react'

const projectTypes = [
  'Regenerative Agriculture', 'Rangelands / Pastoralism', 'Agroforestry',
  'Forest Protection (REDD+)', 'Reforestation', 'Blue Carbon / Mangroves',
  'Corporate Credit Purchase', 'Tech Integration / API', 'Other'
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', org: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <Navbar />
      <section className="min-h-screen pt-32 pb-24 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-earth-100 text-earth-700 text-xs font-medium uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Get Started
              </div>
              <h1 className="font-display text-5xl font-bold text-soil-900 mb-5 leading-tight">
                Let's Build Your<br />
                <span className="gradient-text italic">Carbon Project</span>
              </h1>
              <p className="text-soil-500 text-lg mb-10 leading-relaxed">
                Tell us about your project and we'll get back within 48 hours with a tailored proposal or initial feasibility overview.
              </p>

              <div className="space-y-5 mb-12">
                {[
                  { icon: Mail, label: 'Email', value: 'info@soilwatch.eu' },
                  { icon: Globe, label: 'Website', value: 'soilwatch.eu' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'SoilWatch' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-earth-100 rounded-xl flex items-center justify-center">
                      <Icon size={16} className="text-earth-700" />
                    </div>
                    <div>
                      <div className="text-xs text-soil-400 font-medium">{label}</div>
                      <div className="text-soil-800 font-medium text-sm">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-earth-50 border border-earth-200 rounded-2xl p-6">
                <h3 className="font-display font-bold text-soil-900 mb-2">Based in Brussels, Active Globally</h3>
                <p className="text-soil-500 text-sm">Projects active across North and East Africa, with capabilities across all NbS project types worldwide.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-soil-200 p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-16">
                  <CheckCircle size={48} className="text-earth-600 mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-soil-900 mb-2">Message Sent!</h3>
                  <p className="text-soil-500">We'll be in touch within 48 hours with next steps.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-display text-2xl font-bold text-soil-900 mb-6">Start the Conversation</h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-soil-600 mb-1.5">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full border border-soil-200 rounded-xl px-4 py-2.5 text-sm text-soil-900 focus:outline-none focus:ring-2 focus:ring-earth-400/30 focus:border-earth-400 bg-[#faf7f2]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-soil-600 mb-1.5">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full border border-soil-200 rounded-xl px-4 py-2.5 text-sm text-soil-900 focus:outline-none focus:ring-2 focus:ring-earth-400/30 focus:border-earth-400 bg-[#faf7f2]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-soil-600 mb-1.5">Organisation</label>
                    <input
                      type="text"
                      value={form.org}
                      onChange={e => setForm(f => ({ ...f, org: e.target.value }))}
                      className="w-full border border-soil-200 rounded-xl px-4 py-2.5 text-sm text-soil-900 focus:outline-none focus:ring-2 focus:ring-earth-400/30 focus:border-earth-400 bg-[#faf7f2]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-soil-600 mb-1.5">Project / Interest Type *</label>
                    <select
                      required
                      value={form.type}
                      onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                      className="w-full border border-soil-200 rounded-xl px-4 py-2.5 text-sm text-soil-900 focus:outline-none focus:ring-2 focus:ring-earth-400/30 focus:border-earth-400 bg-[#faf7f2]"
                    >
                      <option value="">Select type...</option>
                      {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-soil-600 mb-1.5">Tell us about your project *</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      rows={4}
                      className="w-full border border-soil-200 rounded-xl px-4 py-2.5 text-sm text-soil-900 focus:outline-none focus:ring-2 focus:ring-earth-400/30 focus:border-earth-400 bg-[#faf7f2] resize-none"
                      placeholder="Project location, size, current stage, and what you're looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-shimmer text-white font-medium py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm"
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
