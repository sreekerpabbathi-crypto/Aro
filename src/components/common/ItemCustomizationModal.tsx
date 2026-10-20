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
  if (!isOpen || !item) return null

  const [quantity, setQuantity] = useState<number>(1)
  // Selected options map: groupId -> array of options
  const [selectedMap, setSelectedMap] = useState<Record<string, CustomizationOption[]>>(() => {
    const initial: Record<string, CustomizationOption[]> = {}
    item.customizationGroups?.forEach((g) => {
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

  const calculatedUnitPrice = item.price + additionalTotal
  const finalPrice = calculatedUnitPrice * quantity

  // Validate required groups
  const validationError = useMemo(() => {
    if (!item.customizationGroups) return null
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-[#211A19] border border-[#4D3F3C] text-[#FFF0D5] p-6 shadow-2xl flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#4D3F3C]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant={item.isVeg ? 'veg' : 'nonveg'}>
                {item.isVeg ? 'Pure Veg' : 'Non-Veg'}
              </Badge>
              {item.isChefSpecial && <Badge variant="accent">Chef Special</Badge>}
            </div>
            <h3 className="text-xl font-bold font-['Outfit'] text-[#FFF0D5]">
              {item.name}
            </h3>
            <p className="text-xs text-[#A89A97] leading-relaxed max-w-sm">
              {item.description}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-[#2E2423] text-[#A89A97] hover:text-white hover:bg-[#3C302E] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Option Groups */}
        <div className="py-4 space-y-6 flex-1">
          {item.customizationGroups && item.customizationGroups.length > 0 ? (
            item.customizationGroups.map((group) => {
              const isSingleChoice = group.maxSelect === 1
              const selectedOpts = selectedMap[group.id] || []

              return (
                <div key={group.id} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white font-['Outfit'] flex items-center gap-1.5">
                        <span>{group.name}</span>
                        {group.isRequired && (
                          <span className="text-[10px] text-[#FF650D] font-mono font-normal">
                            *REQUIRED
                          </span>
                        )}
                      </h4>
                      <p className="text-[11px] text-[#A89A97]">
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
                          className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-[#FF650D]/15 border-[#FF650D] text-white'
                              : 'bg-[#2E2423] border-[#4D3F3C] text-[#A89A97] hover:border-[#FF650D]/40 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-4 h-4 rounded-${
                                isSingleChoice ? 'full' : 'md'
                              } border flex items-center justify-center ${
                                isSelected
                                  ? 'border-[#FF650D] bg-[#FF650D] text-white'
                                  : 'border-[#4D3F3C]'
                              }`}
                            >
                              {isSelected && <Check className="w-2.5 h-2.5" />}
                            </div>
                            <span className="font-medium text-[13px]">{opt.name}</span>
                          </div>

                          <span className="font-semibold">
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
            <div className="py-4 text-center text-xs text-[#A89A97]">
              This dish comes freshly prepared according to the chef's signature recipe. No modifications required.
            </div>
          )}
        </div>

        {/* Validation Warning */}
        {validationError && (
          <div className="mb-4 p-2.5 rounded-xl bg-[#641820]/40 border border-[#E9432E]/40 text-xs text-[#FFF0D5] flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#E9432E] shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Quantity and Confirm Action */}
        <div className="pt-4 border-t border-[#4D3F3C] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 bg-[#2E2423] border border-[#4D3F3C] rounded-xl p-1">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="p-1.5 rounded-lg text-[#A89A97] hover:text-white disabled:opacity-30 cursor-pointer"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-bold text-sm text-white px-2 font-mono">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="p-1.5 rounded-lg text-[#A89A97] hover:text-white cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <Button
            size="md"
            variant="primary"
            onClick={handleConfirm}
            disabled={Boolean(validationError)}
            className="flex-1 font-bold tracking-wide cursor-pointer"
          >
            Add to Order • {formatCurrency(finalPrice, 'INR')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ItemCustomizationModal
