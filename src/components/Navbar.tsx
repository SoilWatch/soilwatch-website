'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Approach', href: '/approach' },
  { label: 'Carbon Removals', href: '/carbon-removals' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur ${
        scrolled
          ? 'bg-soil-50/92 border-b border-soil-200/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-8 overflow-hidden rounded-sm">
            <Image
              src="https://soilwatch.eu/wp-content/uploads/2023/07/soilwatch_logo_outline_stroke_2023-1.png"
              alt="SoilWatch logo"
              fill
              sizes="32px"
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-none">
            <span className="font-display block text-[1.35rem] font-bold uppercase tracking-[0.08em] text-soil-900">
              SoilWatch
            </span>
            <span className="block text-[10px] uppercase tracking-[0.32em] text-soil-500">
              Natural Climate Solutions
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.08em] text-soil-600 hover:text-soil-900 transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-earth-300 after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <div className="relative group">
            <Link
              href="/contact"
              className="btn-shimmer text-soil-900 text-sm font-bold uppercase tracking-[0.14em] px-5 py-2.5 rounded-full block"
            >
              Contact
            </Link>
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border border-soil-200 rounded-xl shadow-lg overflow-hidden">
                <Link
                  href="/careers"
                  className="block px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-soil-600 hover:text-soil-900 hover:bg-soil-50 transition-colors whitespace-nowrap"
                >
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button
          className="md:hidden text-soil-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-soil-50/98 border-b border-soil-200 py-6 px-6 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-soil-800 font-semibold uppercase tracking-[0.14em] py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/careers" className="text-soil-800 font-semibold uppercase tracking-[0.14em] py-1" onClick={() => setMenuOpen(false)}>
            Careers
          </Link>
          <Link href="/contact" className="btn-shimmer text-soil-900 text-sm font-bold uppercase tracking-[0.14em] px-5 py-2.5 rounded-full text-center mt-2">
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  )
}
