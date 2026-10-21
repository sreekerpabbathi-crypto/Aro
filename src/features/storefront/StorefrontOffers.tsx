import React, { useState } from 'react'
import { TicketPercent, Copy, Check, Sparkles } from 'lucide-react'

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
    <section id="offers" className="py-12 border-t-2 border-[#121212]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFD13B] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-xs font-black uppercase font-['Oswald'] text-[#121212] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#121212]" />
              <span>Privileges & Perks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#121212] font-['Outfit']">
              CURATED DINING PRIVILEGES
            </h2>
            <p className="text-sm text-[#5E5854] mt-1 font-medium">
              Complimentary seasonal privileges and promo codes applied directly at checkout
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#FFF4C2] border-[2.5px] border-[#121212] shadow-[5px_5px_0px_#121212] relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase font-['Oswald'] tracking-wider text-[#FF650D] px-2.5 py-0.5 rounded bg-white border border-[#121212]">
                    {offer.badge}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-white border-2 border-[#121212] shadow-[2px_2px_0px_#121212] flex items-center justify-center text-[#121212]">
                    <TicketPercent className="w-5 h-5 text-[#FF650D]" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#121212] font-['Outfit']">
                  {offer.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5E5854] leading-relaxed font-medium">
                  {offer.desc}
                </p>
              </div>

              <div className="pt-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-lg bg-white border-2 border-dashed border-[#121212] font-['Oswald'] font-black text-sm text-[#121212] tracking-wider shadow-[2px_2px_0px_#121212]">
                    {offer.code}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(offer.code)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-[#FAF6EE] border-2 border-[#121212] text-xs font-black uppercase font-['Oswald'] tracking-wider text-[#121212] shadow-[2px_2px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#121212] transition-all cursor-pointer"
                >
                  {copiedCode === offer.code ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#FF650D]" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StorefrontOffers
