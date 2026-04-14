'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ShoppingCart } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const readCartCount = () => {
      try {
        const stored = localStorage.getItem('sw_cart')
        if (!stored) {
          setCartCount(0)
          return
        }

        const items = JSON.parse(stored) as Array<{ quantity?: number }>
        const count = items.reduce((sum, item) => sum + (item.quantity ?? 0), 0)
        setCartCount(count)
      } catch {
        setCartCount(0)
      }
    }

    readCartCount()
    window.addEventListener('storage', readCartCount)
    window.addEventListener('sw-cart-updated', readCartCount)
    window.addEventListener('focus', readCartCount)

    return () => {
      window.removeEventListener('storage', readCartCount)
      window.removeEventListener('sw-cart-updated', readCartCount)
      window.removeEventListener('focus', readCartCount)
    }
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
        {/* Logo */}
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

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.14em] text-soil-600 hover:text-soil-900 transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-earth-300 after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/cart" className="relative text-soil-700 hover:text-earth-700 transition-colors p-2">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-earth-300 px-1 text-[9px] font-bold text-soil-900">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            href="/marketplace"
            className="btn-shimmer text-soil-900 text-sm font-bold uppercase tracking-[0.14em] px-5 py-2.5 rounded-full"
          >
            Buy Credits
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-soil-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
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
          <Link href="/marketplace" className="btn-shimmer text-soil-900 text-sm font-bold uppercase tracking-[0.14em] px-5 py-2.5 rounded-full text-center mt-2">
            Buy Credits
          </Link>
        </div>
      )}
    </nav>
  )
}
