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
    <section id="offers" className="py-12 border-t-[1.5px] border-[var(--dp-color-line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-ink)] text-xs font-bold uppercase font-['Outfit',sans-serif] text-[var(--dp-color-ink)] mb-2 tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
              <span>Privileges & Perks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
              CURATED DINING PRIVILEGES
            </h2>
            <p className="text-sm text-[var(--dp-color-ink-muted)] mt-1 font-normal font-['Outfit',sans-serif]">
              Complimentary seasonal privileges and promo codes applied directly at checkout
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[var(--dp-color-highlight)]/30 border-[1.5px] border-[var(--dp-color-line)] shadow-[2px_2px_0px_rgba(56,53,47,0.12)] relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase font-['Outfit',sans-serif] tracking-wider text-[var(--dp-color-accent)] px-2.5 py-0.5 rounded bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)]">
                    {offer.badge}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] flex items-center justify-center text-[var(--dp-color-accent)]">
                    <TicketPercent className="w-5 h-5 text-[var(--dp-color-accent)]" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                  {offer.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] leading-relaxed font-normal font-['Outfit',sans-serif]">
                  {offer.desc}
                </p>
              </div>

              <div className="pt-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] border-[1.5px] border-dashed border-[var(--dp-color-ink)] font-mono font-bold text-sm text-[var(--dp-color-ink)] tracking-wider shadow-[1px_1px_0px_var(--dp-color-line)]">
                    {offer.code}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(offer.code)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] hover:bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] hover:border-[var(--dp-color-ink)] text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                >
                  {copiedCode === offer.code ? (
                    <>
                      <Check className="w-4 h-4 text-[#2d5f3e] stroke-[2.5]" />
                      <span className="text-[#2d5f3e] font-['Outfit',sans-serif] font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[var(--dp-color-accent)]" />
                      <span className="font-['Outfit',sans-serif] font-bold">Copy Code</span>
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
