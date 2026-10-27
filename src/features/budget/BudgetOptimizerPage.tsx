import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { StorefrontNavbar } from '@/features/storefront/StorefrontNavbar'
import { StorefrontFooter } from '@/features/storefront/StorefrontFooter'
import { SmartBudgetOptimizer } from './SmartBudgetOptimizer'
import { useCart } from '@/context/CartContext'
import { ArrowRight, Check } from 'lucide-react'
import type { GeneratedCombo } from '@/services/budgetOptimizerService'

export const BudgetOptimizerPage: React.FC = () => {
  const { totals } = useCart()
  const [searchParams] = useSearchParams()
  const initialBudgetParam = Number(searchParams.get('budget')) || undefined
  const initialRestaurantParam = searchParams.get('restaurant') || 'all'

  const [lastAddedCombo, setLastAddedCombo] = useState<GeneratedCombo | null>(null)

  return (
    <div className="min-h-screen flex flex-col bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] paper-grid">
      {/* Sticky Navigation */}
      <StorefrontNavbar cartCount={totals.itemTotal > 0 ? 1 : 0} />

      {/* Main Budget Optimizer Content */}
      <main className="flex-1">
        <SmartBudgetOptimizer
          initialBudget={initialBudgetParam}
          initialRestaurantId={initialRestaurantParam}
          onComboAdded={(combo) => {
            setLastAddedCombo(combo)
            setTimeout(() => setLastAddedCombo(null), 3500)
          }}
        />
      </main>

      {/* Floating Cart Toast notification */}
      {lastAddedCombo && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[3px_3px_0px_var(--dp-color-ink)] text-[var(--dp-color-ink)] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="w-8 h-8 rounded-full bg-[#2d5f3e] text-white flex items-center justify-center">
            <Check className="w-4 h-4" />
          </div>
          <div className="text-xs font-['Outfit',sans-serif]">
            <span className="font-extrabold block">{lastAddedCombo.title}</span>
            <span className="text-[var(--dp-color-ink-muted)]">
              Added to your basket (₹{lastAddedCombo.finalPayable})
            </span>
          </div>
          <Link
            to="/cart"
            className="ml-2 px-3 py-1.5 rounded-lg bg-[var(--dp-color-accent)] text-white font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1 shadow-[1px_1px_0px_var(--dp-color-ink)]"
          >
            <span>View Cart</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      )}

      {/* Storefront Footer */}
      <StorefrontFooter />
    </div>
  )
}

export default BudgetOptimizerPage
