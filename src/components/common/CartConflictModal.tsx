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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-[#211A19] border border-[#4D3F3C] text-[#FFF0D5] p-6 shadow-2xl space-y-5">
        <div className="w-12 h-12 rounded-2xl bg-[#FF650D]/15 border border-[#FF650D]/30 flex items-center justify-center text-[#FF650D]">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold font-['Outfit'] text-white">
            Replace items in basket?
          </h3>
          <p className="text-xs text-[#A89A97] leading-relaxed">
            Your basket currently contains dishes from <strong className="text-white">{currentRestaurantName}</strong>.
            ARO carts are prepared by one culinary atelier at a time to ensure optimal temperature and freshness.
          </p>
          <p className="text-xs text-[#FFF0D5]/90 pt-1">
            Would you like to discard the current selection and start an order from <strong className="text-[#FF650D]">{newRestaurantName}</strong>?
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={onCancel}
            className="cursor-pointer"
          >
            Keep Existing Basket
          </Button>

          <Button
            size="sm"
            variant="primary"
            onClick={onReplace}
            className="cursor-pointer font-bold"
          >
            Start New Order
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartConflictModal
