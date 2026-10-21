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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-white border-[2.5px] border-[#121212] text-[#121212] p-6 sm:p-7 shadow-[8px_8px_0px_#121212] space-y-5">
        <div className="w-12 h-12 rounded-xl bg-[#FFF4C2] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] flex items-center justify-center text-[#FF650D]">
          <AlertTriangle className="w-6 h-6 text-[#121212]" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] text-[#121212] tracking-tight">
            Replace items in basket?
          </h3>
          <p className="text-xs sm:text-sm text-[#5E5854] leading-relaxed">
            Your basket currently contains dishes from <strong className="text-[#121212] font-bold">{currentRestaurantName}</strong>.
            ARO orders are prepared by one culinary atelier at a time to ensure optimal temperature and freshness.
          </p>
          <p className="text-xs sm:text-sm text-[#121212] font-medium pt-1">
            Would you like to discard the current selection and start an order from <strong className="text-[#FF650D] underline decoration-2">{newRestaurantName}</strong>?
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
            className="cursor-pointer font-bold"
          >
            Start New Order →
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartConflictModal
