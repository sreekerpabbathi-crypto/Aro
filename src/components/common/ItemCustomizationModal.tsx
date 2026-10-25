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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] text-[var(--dp-color-ink)] p-6 sm:p-7 shadow-[3px_3px_0px_rgba(56,53,47,0.2)] flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b-[1.5px] border-[var(--dp-color-line)]">
          <div className="space-y-1.5 pr-4">
            <div className="flex items-center gap-2">
              <Badge variant={item.isVeg ? 'veg' : 'nonveg'}>
                {item.isVeg ? 'Pure Veg' : 'Non-Veg'}
              </Badge>
              {item.isChefSpecial && <Badge variant="accent">Chef Special</Badge>}
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] tracking-tight">
              {item.name}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] leading-relaxed max-w-sm">
              {item.description}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-[var(--dp-color-ink)]" />
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
                      <h4 className="text-sm font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] flex items-center gap-1.5 uppercase tracking-wide">
                        <span>{group.name}</span>
                        {group.isRequired && (
                          <span className="text-[10px] text-[var(--dp-color-accent)] font-bold px-1.5 py-0.5 rounded bg-[var(--dp-color-highlight)]/40 border-[1.5px] border-[var(--dp-color-accent)]">
                            REQUIRED
                          </span>
                        )}
                      </h4>
                      <p className="text-[11px] text-[var(--dp-color-ink-muted)] font-medium">
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
                          className={`flex items-center justify-between p-3.5 rounded-xl border-[1.5px] text-xs cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-[var(--dp-color-highlight)] border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] text-[var(--dp-color-ink)]'
                              : 'bg-[var(--dp-color-ground)] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] text-[var(--dp-color-ink)]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-4 h-4 rounded-${
                                isSingleChoice ? 'full' : 'md'
                              } border-[1.5px] border-[var(--dp-color-ink)] flex items-center justify-center ${
                                isSelected
                                  ? 'bg-[var(--dp-color-ink)] text-white'
                                  : 'bg-white'
                              }`}
                            >
                              {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                            </div>
                            <span className="font-medium text-[13px]">{opt.name}</span>
                          </div>

                          <span className="font-bold text-xs">
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
            <div className="py-4 text-center text-xs text-[var(--dp-color-ink-muted)] font-medium bg-[var(--dp-color-ground)] border-[1.5px] border-dashed border-[var(--dp-color-line)] rounded-xl p-4">
              This dish comes freshly prepared according to the chef's signature recipe. No modifications required.
            </div>
          )}
        </div>

        {/* Validation Warning */}
        {validationError && (
          <div className="mb-4 p-3 rounded-xl bg-[var(--dp-color-highlight)]/40 border-[1.5px] border-[var(--dp-color-accent)] text-xs text-[var(--dp-color-accent)] font-bold flex items-center gap-2 shadow-[1px_1px_0px_var(--dp-color-accent)]">
            <Flame className="w-4 h-4 text-[var(--dp-color-accent)] shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Quantity and Confirm Action */}
        <div className="pt-4 border-t-[1.5px] border-[var(--dp-color-line)] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] rounded-[var(--dp-radius-control)] p-1 shadow-[1px_1px_0px_var(--dp-color-line)]">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="p-1.5 rounded text-[var(--dp-color-ink)] hover:bg-[var(--dp-color-scrap)] disabled:opacity-30 cursor-pointer font-bold"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4 stroke-[2]" />
            </button>
            <span className="font-bold text-sm text-[var(--dp-color-ink)] px-2 font-['Outfit',sans-serif]">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="p-1.5 rounded text-[var(--dp-color-ink)] hover:bg-[var(--dp-color-scrap)] cursor-pointer font-bold"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4 stroke-[2]" />
            </button>
          </div>

          <Button
            size="md"
            variant="primary"
            onClick={handleConfirm}
            disabled={Boolean(validationError)}
            className="flex-1 font-medium tracking-wide text-sm cursor-pointer shadow-[2px_2px_0px_var(--dp-color-ink)]"
          >
            Add to Order • {formatCurrency(finalPrice, 'INR')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ItemCustomizationModal
