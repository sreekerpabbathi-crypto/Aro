import React from 'react'
import { AlertTriangle } from 'lucide-react'
import { Button } from './Button'

interface CartConflictModalProps {
  isOpen: boolean
  currentRestaurantName: string
  newRestaurantName: string
  onCancel: () => void
  onReplace: () => void
}

export const CartConflictModal: React.FC<CartConflictModalProps> = ({
  isOpen,
  currentRestaurantName,
  newRestaurantName,
  onCancel,
  onReplace,
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] text-[var(--dp-color-ink)] p-6 sm:p-7 shadow-[3px_3px_0px_rgba(56,53,47,0.2)] space-y-5">
        <div className="w-12 h-12 rounded-xl bg-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] flex items-center justify-center text-[var(--dp-color-accent)]">
          <AlertTriangle className="w-6 h-6 text-[var(--dp-color-accent)]" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-extrabold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] tracking-tight">
            Replace items in basket?
          </h3>
          <p className="text-sm text-[var(--dp-color-ink-muted)] leading-relaxed">
            Your basket currently contains dishes from <strong className="text-[var(--dp-color-ink)] font-bold">{currentRestaurantName}</strong>.
            ARO orders are prepared by one culinary atelier at a time to ensure optimal temperature and freshness.
          </p>
          <p className="text-sm text-[var(--dp-color-ink)] font-medium pt-1">
            Would you like to discard the current selection and start an order from <strong className="text-[var(--dp-color-accent)] underline decoration-1">{newRestaurantName}</strong>?
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <Button
            size="sm"
            variant="outline"
            onClick={onCancel}
            className="cursor-pointer"
          >
            Keep Existing Basket
          </Button>

          <Button
            size="sm"
            variant="primary"
            onClick={onReplace}
            className="cursor-pointer font-medium"
          >
            Start New Order →
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartConflictModal
