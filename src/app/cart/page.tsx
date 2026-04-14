'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Trash2, ShoppingBag, ArrowRight, Shield, Leaf, CheckCircle } from 'lucide-react'

export type CartItem = {
  id: number
  name: string
  location: string
  pricePerTon: number
  quantity: number
  verified: string
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([])
  const [checked, setChecked] = useState(false)
  const [step, setStep] = useState<'cart' | 'success'>('cart')

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('sw_cart')
      if (stored) setItems(JSON.parse(stored))
    } catch {}
  }, [])

  // Persist cart to localStorage on change
  useEffect(() => {
    localStorage.setItem('sw_cart', JSON.stringify(items))
    window.dispatchEvent(new Event('sw-cart-updated'))
  }, [items])

  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) {
      setItems(prev => prev.filter(i => i.id !== id))
    } else {
      setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i))
    }
  }

  const subtotal = items.reduce((s, i) => s + i.pricePerTon * i.quantity, 0)
  const fee = subtotal * 0.02
  const total = subtotal + fee

  const handlePurchase = () => {
    setItems([])
    setStep('success')
    localStorage.removeItem('sw_cart')
    window.dispatchEvent(new Event('sw-cart-updated'))
  }

  if (step === 'success') {
    return (
      <main>
        <Navbar />
        <section className="min-h-screen pt-32 pb-24 bg-[#faf7f2] flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="w-20 h-20 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-earth-600" />
            </div>
            <h1 className="font-display text-4xl font-bold text-soil-900 mb-4">Purchase Complete!</h1>
            <p className="text-soil-500 text-lg mb-8">
              Your carbon credits have been issued and registered. You&apos;ll receive a verification certificate and registry link by email within 24 hours.
            </p>
            <Link href="/marketplace" className="btn-shimmer inline-flex items-center gap-2 font-medium px-8 py-4 rounded-full text-sm text-soil-900">
              Browse More Credits
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <Navbar />
      <section className="min-h-screen pt-32 pb-24 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="font-display text-4xl font-bold text-soil-900 mb-2">Your Carbon Cart</h1>
          <p className="text-soil-500 mb-10">Review your selected credits before purchase.</p>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag size={48} className="text-soil-300 mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-soil-700 mb-2">Your cart is empty</h3>
              <p className="text-soil-400 mb-6">Browse our marketplace to find verified carbon credits.</p>
              <Link href="/marketplace" className="btn-shimmer inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-full text-sm text-soil-900">
                Browse Credits <ArrowRight size={15} />
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map(item => (
                  <div key={item.id} className="bg-white border border-soil-200 rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center gap-5">
                    <div className="w-14 h-14 bg-earth-100 rounded-2xl flex items-center justify-center shrink-0">
                      <Leaf size={22} className="text-earth-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-soil-900 mb-0.5 truncate">{item.name}</h3>
                      <div className="text-soil-400 text-xs mb-1">{item.location}</div>
                      <div className="flex items-center gap-1 text-xs text-earth-700">
                        <Shield size={10} />
                        {item.verified}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <div className="flex items-center border border-soil-200 rounded-xl overflow-hidden">
                        <button onClick={() => updateQty(item.id, item.quantity - 1)} className="px-3 py-2 text-soil-500 hover:bg-soil-50 text-sm">−</button>
                        <span className="px-3 text-sm font-medium text-soil-900 min-w-[36px] text-center">{item.quantity}</span>
                        <button onClick={() => updateQty(item.id, item.quantity + 1)} className="px-3 py-2 text-soil-500 hover:bg-soil-50 text-sm">+</button>
                      </div>
                      <div className="text-right">
                        <div className="font-display font-bold text-soil-900 text-lg">${(item.pricePerTon * item.quantity).toFixed(2)}</div>
                        <div className="text-xs text-soil-400">${item.pricePerTon.toFixed(2)}/t</div>
                      </div>
                      <button onClick={() => updateQty(item.id, 0)} className="text-soil-300 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-soil-200 rounded-3xl p-6 sticky top-28">
                  <h3 className="font-display font-bold text-soil-900 text-xl mb-6">Order Summary</h3>
                  <div className="space-y-3 mb-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-soil-500">Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} tCO₂e)</span>
                      <span className="text-soil-900 font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-soil-500">Registry &amp; verification fee (2%)</span>
                      <span className="text-soil-900 font-medium">${fee.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-soil-100 pt-3 flex justify-between font-bold text-soil-900">
                      <span>Total</span>
                      <span className="font-display text-xl">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 mb-5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={e => setChecked(e.target.checked)}
                      className="mt-0.5 w-4 h-4 accent-green-700 rounded"
                    />
                    <span className="text-xs text-soil-500 leading-relaxed">
                      I understand that carbon credits represent verified sequestration and agree to the{' '}
                      <a href="#" className="text-earth-700 underline">Terms of Purchase</a>.
                    </span>
                  </label>

                  <button
                    disabled={!checked}
                    onClick={handlePurchase}
                    className={`w-full btn-shimmer text-soil-900 font-medium py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm transition-opacity ${!checked ? 'opacity-40 cursor-not-allowed' : ''}`}
                  >
                    Complete Purchase
                    <ArrowRight size={15} />
                  </button>

                  <div className="mt-5 flex items-center justify-center gap-4 text-xs text-soil-400">
                    <div className="flex items-center gap-1"><Shield size={11} /> Verified Credits</div>
                    <div className="flex items-center gap-1"><Leaf size={11} /> Real Impact</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
