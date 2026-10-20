import React, { useState } from 'react'
import { TicketPercent, Copy, Check, Sparkles } from 'lucide-react'
import { Card } from '@/components/common/Card'

export const StorefrontOffers: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const offers = [
    {
      code: 'AROWELCOME',
      title: '20% Off Your Inaugural Experience',
      desc: 'Applicable across all participating culinary ateliers on orders above ₹500. Up to ₹250 off.',
      badge: 'First Order Privilege',
    },
    {
      code: 'FLAT100',
      title: 'Flat ₹100 Gourmet Privilege',
      desc: 'Instant discount on premium tasting menus and signature sharing courses above ₹800.',
      badge: 'Weekend Fine-Dining',
    },
  ]

  return (
    <section id="offers" className="py-12 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff5733]/10 border border-[#ff5733]/20 text-xs text-[#ff7854] font-medium mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Privileges & Perks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-['Outfit']">
              Curated Dining Privileges
            </h2>
            <p className="text-sm text-[#8e95a5] mt-1">
              Complimentary seasonal privileges and promo codes applied directly at checkout
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, idx) => (
            <Card
              key={idx}
              variant="glow"
              className="p-6 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff7854]">
                    {offer.badge}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#ff5733]/15 flex items-center justify-center text-[#ff5733]">
                    <TicketPercent className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white font-['Outfit']">
                  {offer.title}
                </h3>
                <p className="text-xs text-[#8e95a5] leading-relaxed">
                  {offer.desc}
                </p>
              </div>

              <div className="pt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-[#0b0c0e] border border-dashed border-[#ff5733]/40 font-mono font-bold text-sm text-white tracking-wider">
                    {offer.code}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(offer.code)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors cursor-pointer"
                >
                  {copiedCode === offer.code ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#ff5733]" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StorefrontOffers
