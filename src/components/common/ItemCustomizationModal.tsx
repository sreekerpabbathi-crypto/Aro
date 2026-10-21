import React, { useState, useMemo } from 'react'
import { X, Plus, Minus, Check, Flame } from 'lucide-react'
import type { MenuItem, CustomizationOption } from '@/types'
import { formatCurrency } from '@/lib/utils'
import { Button } from './Button'
import { Badge } from './Badge'

interface ItemCustomizationModalProps {
  item: MenuItem | null
  isOpen: boolean
  onClose: () => void
  onConfirm: (
    item: MenuItem,
    customizations: Array<{ groupId: string; groupName: string; option: CustomizationOption }>,
    quantity: number
  ) => void
}

export const ItemCustomizationModal: React.FC<ItemCustomizationModalProps> = ({
  item,
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [quantity, setQuantity] = useState<number>(1)
  // Selected options map: groupId -> array of options
  const [selectedMap, setSelectedMap] = useState<Record<string, CustomizationOption[]>>(() => {
    const initial: Record<string, CustomizationOption[]> = {}
    item?.customizationGroups?.forEach((g) => {
      const defaults = g.options.filter((o) => o.isDefault)
      if (defaults.length > 0) {
        initial[g.id] = defaults
      } else if (g.isRequired && g.options.length > 0) {
        initial[g.id] = [g.options[0]]
      } else {
        initial[g.id] = []
      }
    })
    return initial
  })

  // Calculate dynamic unit price
  const additionalTotal = useMemo(() => {
    let sum = 0
    Object.values(selectedMap).forEach((opts) => {
      opts.forEach((o) => {
        sum += o.additionalPrice || 0
      })
    })
    return sum
  }, [selectedMap])

  const calculatedUnitPrice = (item?.price || 0) + additionalTotal
  const finalPrice = calculatedUnitPrice * quantity

  // Validate required groups
  const validationError = useMemo(() => {
    if (!item?.customizationGroups) return null
    for (const group of item.customizationGroups) {
      const selected = selectedMap[group.id] || []
      if (group.isRequired && selected.length < group.minSelect) {
        return `Please select at least ${group.minSelect} option for "${group.name}".`
      }
      if (selected.length > group.maxSelect) {
        return `You can select maximum ${group.maxSelect} options for "${group.name}".`
      }
    }
    return null
  }, [item, selectedMap])

  if (!isOpen || !item) return null

  const handleSingleSelect = (groupId: string, option: CustomizationOption) => {
    setSelectedMap((prev) => ({
      ...prev,
      [groupId]: [option],
    }))
  }

  const handleMultiSelect = (
    groupId: string,
    option: CustomizationOption,
    maxSelect: number
  ) => {
    setSelectedMap((prev) => {
      const current = prev[groupId] || []
      const exists = current.some((o) => o.id === option.id)
      if (exists) {
        return {
          ...prev,
          [groupId]: current.filter((o) => o.id !== option.id),
        }
      } else {
        if (current.length >= maxSelect) {
          return prev // capped
        }
        return {
          ...prev,
          [groupId]: [...current, option],
        }
      }
    })
  }

  const handleConfirm = () => {
    if (validationError) return

    const flatCustomizations: Array<{
      groupId: string
      groupName: string
      option: CustomizationOption
    }> = []

    item.customizationGroups?.forEach((group) => {
      const opts = selectedMap[group.id] || []
      opts.forEach((opt) => {
        flatCustomizations.push({
          groupId: group.id,
          groupName: group.name,
          option: opt,
        })
      })
    })

    onConfirm(item, flatCustomizations, quantity)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white border-[2.5px] border-[#121212] text-[#121212] p-6 sm:p-7 shadow-[8px_8px_0px_#121212] flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b-2 border-[#121212]">
          <div className="space-y-1.5 pr-4">
            <div className="flex items-center gap-2">
              <Badge variant={item.isVeg ? 'veg' : 'nonveg'}>
                {item.isVeg ? 'Pure Veg' : 'Non-Veg'}
              </Badge>
              {item.isChefSpecial && <Badge variant="accent">Chef Special</Badge>}
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] text-[#121212] tracking-tight">
              {item.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#5E5854] leading-relaxed max-w-sm">
              {item.description}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-white border-2 border-[#121212] shadow-[2px_2px_0px_#121212] hover:bg-[#FFF4C2] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5 text-[#121212]" />
          </button>
        </div>

        {/* Option Groups */}
        <div className="py-5 space-y-6 flex-1">
          {item.customizationGroups && item.customizationGroups.length > 0 ? (
            item.customizationGroups.map((group) => {
              const isSingleChoice = group.maxSelect === 1
              const selectedOpts = selectedMap[group.id] || []

              return (
                <div key={group.id} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-black text-[#121212] font-['Outfit'] flex items-center gap-1.5 uppercase tracking-wide">
                        <span>{group.name}</span>
                        {group.isRequired && (
                          <span className="text-[10px] text-[#EF4444] font-black font-['Oswald'] px-1.5 py-0.5 rounded bg-[#FEECEB] border border-[#EF4444]">
                            REQUIRED
                          </span>
                        )}
                      </h4>
                      <p className="text-[11px] text-[#5E5854] font-medium">
                        {isSingleChoice
                          ? 'Choose 1 option'
                          : `Choose up to ${group.maxSelect} options`}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {group.options.map((opt) => {
                      const isSelected = selectedOpts.some((o) => o.id === opt.id)
                      return (
                        <div
                          key={opt.id}
                          onClick={() => {
                            if (isSingleChoice) {
                              handleSingleSelect(group.id, opt)
                            } else {
                              handleMultiSelect(group.id, opt, group.maxSelect)
                            }
                          }}
                          className={`flex items-center justify-between p-3.5 rounded-xl border-2 border-[#121212] text-xs cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-[#FFD13B] shadow-[3px_3px_0px_#121212] -translate-x-0.5 -translate-y-0.5 text-[#121212]'
                              : 'bg-[#FAF6EE] shadow-[2px_2px_0px_#121212] hover:bg-[#FFF4C2] text-[#121212]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-4 h-4 rounded-${
                                isSingleChoice ? 'full' : 'md'
                              } border-2 border-[#121212] flex items-center justify-center ${
                                isSelected
                                  ? 'bg-[#121212] text-white'
                                  : 'bg-white'
                              }`}
                            >
                              {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                            </div>
                            <span className="font-bold text-[13px]">{opt.name}</span>
                          </div>

                          <span className="font-black font-['Oswald'] text-xs">
                            {opt.additionalPrice > 0
                              ? `+${formatCurrency(opt.additionalPrice, 'INR')}`
                              : 'Free'}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })
          ) : (
            <div className="py-4 text-center text-xs text-[#5E5854] font-medium bg-[#FAF6EE] border-2 border-dashed border-[#121212] rounded-xl p-4">
              This dish comes freshly prepared according to the chef's signature recipe. No modifications required.
            </div>
          )}
        </div>

        {/* Validation Warning */}
        {validationError && (
          <div className="mb-4 p-3 rounded-xl bg-[#FEECEB] border-2 border-[#EF4444] text-xs text-[#DC2626] font-bold flex items-center gap-2 shadow-[2px_2px_0px_#EF4444]">
            <Flame className="w-4 h-4 text-[#EF4444] shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Quantity and Confirm Action */}
        <div className="pt-4 border-t-2 border-[#121212] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-[#FAF6EE] border-2 border-[#121212] rounded-xl p-1 shadow-[2px_2px_0px_#121212]">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="p-1.5 rounded-lg text-[#121212] hover:bg-[#FFF4C2] disabled:opacity-30 cursor-pointer font-bold"
            >
              <Minus className="w-4 h-4 stroke-[2.5]" />
            </button>
            <span className="font-black text-sm text-[#121212] px-2 font-['Oswald']">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="p-1.5 rounded-lg text-[#121212] hover:bg-[#FFF4C2] cursor-pointer font-bold"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          <Button
            size="md"
            variant="primary"
            onClick={handleConfirm}
            disabled={Boolean(validationError)}
            className="flex-1 font-black uppercase font-['Oswald'] tracking-wider text-sm cursor-pointer shadow-[3px_3px_0px_#121212]"
          >
            Add to Order • {formatCurrency(finalPrice, 'INR')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ItemCustomizationModal
