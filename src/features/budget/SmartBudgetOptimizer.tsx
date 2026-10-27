import React, { useState, useEffect, useCallback } from 'react'
import {
  Sparkles,
  RotateCcw,
  Check,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  ShoppingBag,
  Leaf,
  Flame,
  Info,
  CheckCircle2,
  Store,
  SlidersHorizontal,
} from 'lucide-react'
import {
  optimizeBudget,
  validateBudgetInput,
  BUDGET_CATEGORIES,
  type MealTypeFilter,
  type GeneratedCombo,
} from '@/services/budgetOptimizerService'
import { fetchRestaurants, INITIAL_RESTAURANTS } from '@/services/catalogService'
import { useCart } from '@/context/CartContext'
import { CartConflictModal } from '@/components/common/CartConflictModal'
import { ScribbleUnderline } from '@/components/sketch/SketchDoodles'
import type { Restaurant } from '@/types'

interface SmartBudgetOptimizerProps {
  initialRestaurantId?: string
  initialBudget?: number
  onComboAdded?: (combo: GeneratedCombo) => void
  embedded?: boolean
}

const QUICK_BUDGETS = [150, 250, 350, 500, 750, 1000]

export const SmartBudgetOptimizer: React.FC<SmartBudgetOptimizerProps> = ({
  initialRestaurantId = 'all',
  initialBudget,
  onComboAdded,
  embedded = false,
}) => {
  const { addComboToCart, conflict, resolveConflict } = useCart()

  // State
  const [budgetString, setBudgetString] = useState<string>(
    initialBudget ? String(initialBudget) : '350'
  )
  const [mealType, setMealType] = useState<MealTypeFilter>('all')
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string>(initialRestaurantId)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isCategorySectionOpen, setIsCategorySectionOpen] = useState<boolean>(true)

  // Status & Data
  const [restaurants, setRestaurants] = useState<Restaurant[]>(INITIAL_RESTAURANTS)
  const [isCalculating, setIsCalculating] = useState<boolean>(false)
  const [validationError, setValidationError] = useState<string | null>(null)
  const [combos, setCombos] = useState<GeneratedCombo[]>([])
  const [hasSearched, setHasSearched] = useState<boolean>(false)
  const [addedComboId, setAddedComboId] = useState<string | null>(null)
  const [evaluatedCount, setEvaluatedCount] = useState<number>(0)

  // Load restaurants
  useEffect(() => {
    let isMounted = true
    fetchRestaurants()
      .then((data) => {
        if (isMounted && data && data.length > 0) {
          setRestaurants(data)
        }
      })
      .catch((err) => {
        console.warn('[SmartBudgetOptimizer] Using fallback restaurants:', err)
      })
    return () => {
      isMounted = false
    }
  }, [])

  // Optimizer trigger function
  const handleOptimize = useCallback(async () => {
    setValidationError(null)

    // Validate budget
    const validation = validateBudgetInput(budgetString)
    if (!validation.isValid || validation.numericBudget === undefined) {
      setValidationError(validation.error || 'Please enter a valid budget.')
      setCombos([])
      setHasSearched(true)
      return
    }

    setIsCalculating(true)
    try {
      const result = await optimizeBudget({
        budget: validation.numericBudget,
        mealType,
        categoryIds: selectedCategories,
        restaurantId: selectedRestaurantId,
        limit: 15,
      })

      if (result.error) {
        setValidationError(result.error)
        setCombos([])
      } else {
        setCombos(result.combos)
        setEvaluatedCount(result.totalEvaluatedRestaurants)
      }
      setHasSearched(true)
    } catch (err) {
      console.error('[SmartBudgetOptimizer] Optimization calculation error:', err)
      setValidationError('Failed to generate budget combinations. Please try again.')
      setCombos([])
    } finally {
      setIsCalculating(false)
    }
  }, [budgetString, mealType, selectedCategories, selectedRestaurantId])

  // Initial calculation on mount
  useEffect(() => {
    let active = true
    const init = async () => {
      const validation = validateBudgetInput(budgetString)
      if (!validation.isValid || validation.numericBudget === undefined) return
      setIsCalculating(true)
      try {
        const result = await optimizeBudget({
          budget: validation.numericBudget,
          mealType: 'all',
          restaurantId: initialRestaurantId,
          limit: 15,
        })
        if (active) {
          if (!result.error) {
            setCombos(result.combos)
            setEvaluatedCount(result.totalEvaluatedRestaurants)
          }
          setHasSearched(true)
        }
      } catch (e) {
        console.warn('[SmartBudgetOptimizer] Initial optimization error:', e)
      } finally {
        if (active) setIsCalculating(false)
      }
    }
    void init()
    return () => {
      active = false
    }
  }, [initialRestaurantId]) // eslint-disable-line react-hooks/exhaustive-deps

  // Category selection handlers
  const handleToggleCategory = (catId: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(catId)) {
        return prev.filter((id) => id !== catId)
      } else {
        return [...prev, catId]
      }
    })
  }

  const handleSelectAllCategories = () => {
    setSelectedCategories([])
  }

  const handleClearCategories = () => {
    setSelectedCategories([])
  }

  // Reset all filters
  const handleReset = () => {
    setBudgetString('350')
    setMealType('all')
    setSelectedRestaurantId('all')
    setSelectedCategories([])
    setValidationError(null)
  }

  // Handle adding combo to cart
  const handleAddCombo = (combo: GeneratedCombo) => {
    const itemsToAdd = combo.items.map((i) => ({
      menuItem: i.menuItem,
      quantity: i.quantity,
    }))

    const success = addComboToCart(itemsToAdd, combo.restaurant)
    if (success) {
      setAddedComboId(combo.id)
      onComboAdded?.(combo)
      setTimeout(() => {
        setAddedComboId(null)
      }, 3000)
    }
  }

  const activeCategoryCount = selectedCategories.length

  return (
    <section
      aria-label="Smart Budget Optimizer"
      className={`relative w-full ${
        embedded ? 'py-8' : 'py-12 md:py-16'
      } bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-ink)] mb-4">
            <Sparkles className="w-4 h-4 text-[var(--dp-color-accent)] animate-spin-slow" />
            <span className="text-xs font-bold uppercase tracking-wider font-['Outfit',sans-serif] text-[var(--dp-color-ink)]">
              AI Gastronomy Value Engine
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit',sans-serif] tracking-tight text-[var(--dp-color-ink)] leading-tight">
            Smart Budget{' '}
            <span className="relative inline-block text-[var(--dp-color-accent)]">
              Optimizer
              <ScribbleUnderline className="text-[var(--dp-color-accent)] w-full h-3 absolute -bottom-2 left-0" />
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[var(--dp-color-ink-muted)] font-medium font-['Outfit',sans-serif] leading-relaxed">
            Enter your exact budget, choose your meal preferences, and get curated combos. Every option
            is <strong>strictly guaranteed to never exceed your budget</strong>, with all 5% GST,
            delivery, and packaging charges included upfront.
          </p>
        </div>

        {/* Optimizer Control Panel Card */}
        <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-2xl shadow-[4px_4px_0px_var(--dp-color-ink)] p-5 sm:p-7 md:p-8 mb-12">
          {/* Main Controls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            {/* 1. Budget Input */}
            <div className="md:col-span-4 flex flex-col gap-2">
              <label
                htmlFor="budget-amount-input"
                className="text-xs font-extrabold uppercase tracking-wider text-[var(--dp-color-ink)] font-['Outfit',sans-serif] flex items-center justify-between"
              >
                <span>Maximum Total Budget</span>
                <span className="text-[11px] text-[var(--dp-color-ink-muted)] font-semibold lowercase">
                  (inclusive of all taxes & fees)
                </span>
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-black text-[var(--dp-color-accent)] font-['Outfit',sans-serif]">
                  ₹
                </span>
                <input
                  id="budget-amount-input"
                  type="number"
                  min="50"
                  step="10"
                  value={budgetString}
                  onChange={(e) => {
                    setBudgetString(e.target.value)
                    setValidationError(null)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleOptimize()
                  }}
                  placeholder="e.g. 300"
                  className="w-full pl-9 pr-4 py-3 rounded-xl bg-white border-[1.5px] border-[var(--dp-color-line)] focus:border-[var(--dp-color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--dp-color-highlight)] text-lg font-black text-[var(--dp-color-ink)] font-['Outfit',sans-serif] shadow-inner transition-all"
                />
              </div>

              {/* Quick Budget Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[11px] font-bold text-[var(--dp-color-ink-muted)] uppercase tracking-wider mr-1">
                  Quick:
                </span>
                {QUICK_BUDGETS.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => {
                      setBudgetString(String(amt))
                      setValidationError(null)
                    }}
                    className={`px-2 py-0.5 rounded text-xs font-extrabold transition-all cursor-pointer font-['Outfit',sans-serif] ${
                      budgetString === String(amt)
                        ? 'bg-[var(--dp-color-ink)] text-white shadow-sm'
                        : 'bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] border border-[var(--dp-color-line)] hover:border-[var(--dp-color-ink)]'
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Meal Type Filter */}
            <div className="md:col-span-4 flex flex-col gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                Dietary Preference
              </span>

              <div
                role="radiogroup"
                aria-label="Meal type filter"
                className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)]"
              >
                {/* Option 1: All */}
                <button
                  type="button"
                  role="radio"
                  aria-checked={mealType === 'all'}
                  onClick={() => setMealType('all')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold font-['Outfit',sans-serif] tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    mealType === 'all'
                      ? 'bg-[var(--dp-color-ink)] text-white shadow-[1px_1px_0px_var(--dp-color-line)]'
                      : 'text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>All Combos</span>
                </button>

                {/* Option 2: Pure Veg */}
                <button
                  type="button"
                  role="radio"
                  aria-checked={mealType === 'veg'}
                  onClick={() => setMealType('veg')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold font-['Outfit',sans-serif] tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    mealType === 'veg'
                      ? 'bg-[#2d5f3e] text-white shadow-[1px_1px_0px_var(--dp-color-line)]'
                      : 'text-[var(--dp-color-ink-muted)] hover:text-[#2d5f3e]'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full border border-current flex items-center justify-center p-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  </span>
                  <span>Pure Veg</span>
                </button>

                {/* Option 3: Non-Veg */}
                <button
                  type="button"
                  role="radio"
                  aria-checked={mealType === 'non-veg'}
                  onClick={() => setMealType('non-veg')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold font-['Outfit',sans-serif] tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    mealType === 'non-veg'
                      ? 'bg-[var(--dp-color-accent)] text-white shadow-[1px_1px_0px_var(--dp-color-line)]'
                      : 'text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-accent)]'
                  }`}
                >
                  <span className="w-2.5 h-2.5 border border-current flex items-center justify-center p-0.5">
                    <span className="w-1.5 h-1.5 bg-current" />
                  </span>
                  <span>Non-Veg</span>
                </button>
              </div>

              <span className="text-[11px] text-[var(--dp-color-ink-muted)] font-medium font-['Outfit',sans-serif]">
                {mealType === 'all' && 'Displays both vegetarian and non-vegetarian combos.'}
                {mealType === 'veg' && '100% vegetarian. Excludes all non-veg food & mixed combos.'}
                {mealType === 'non-veg' && 'Combos containing chicken, mutton, seafood, or egg.'}
              </span>
            </div>

            {/* 3. Restaurant Scope Selector */}
            <div className="md:col-span-4 flex flex-col gap-2">
              <label
                htmlFor="restaurant-scope-selector"
                className="text-xs font-extrabold uppercase tracking-wider text-[var(--dp-color-ink)] font-['Outfit',sans-serif]"
              >
                Restaurant Selection
              </label>

              <div className="relative">
                <select
                  id="restaurant-scope-selector"
                  value={selectedRestaurantId}
                  onChange={(e) => setSelectedRestaurantId(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-white border-[1.5px] border-[var(--dp-color-line)] text-xs sm:text-sm font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] focus:border-[var(--dp-color-ink)] focus:outline-none appearance-none cursor-pointer shadow-inner pr-10"
                >
                  <option value="all">🌟 All Hyderabad Partner Kitchens (Best Value)</option>
                  {restaurants.map((res) => (
                    <option key={res.id} value={res.id}>
                      {res.name} (Delivery: ₹{res.deliveryFee ?? 40} • ⭐{res.rating})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--dp-color-ink-muted)] pointer-events-none" />
              </div>

              <span className="text-[11px] text-[var(--dp-color-ink-muted)] font-medium font-['Outfit',sans-serif]">
                {selectedRestaurantId === 'all'
                  ? 'Searches across all open restaurants to maximize combinations.'
                  : 'Restricts combo generation strictly to this restaurant.'}
              </span>
            </div>
          </div>

          {/* Collapsible Food Categories Sub-Filter */}
          <div className="mt-6 pt-6 border-t-[1.5px] border-[var(--dp-color-line)]">
            <div className="flex items-center justify-between gap-4 mb-3">
              <button
                type="button"
                onClick={() => setIsCategorySectionOpen((prev) => !prev)}
                className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[var(--dp-color-ink)] font-['Outfit',sans-serif] hover:text-[var(--dp-color-accent)] transition-colors cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Food Categories Filter</span>
                {activeCategoryCount > 0 ? (
                  <span className="px-2 py-0.5 rounded-full bg-[var(--dp-color-accent)] text-white text-[10px] font-black font-mono">
                    {activeCategoryCount} Selected
                  </span>
                ) : (
                  <span className="text-[11px] font-normal text-[var(--dp-color-ink-muted)] normal-case">
                    (All categories included)
                  </span>
                )}
                {isCategorySectionOpen ? (
                  <ChevronUp className="w-4 h-4 text-[var(--dp-color-ink-muted)]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[var(--dp-color-ink-muted)]" />
                )}
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSelectAllCategories}
                  className={`text-xs font-bold font-['Outfit',sans-serif] px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    activeCategoryCount === 0
                      ? 'text-[var(--dp-color-accent)] underline'
                      : 'text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)]'
                  }`}
                >
                  All Categories
                </button>
                {activeCategoryCount > 0 && (
                  <button
                    type="button"
                    onClick={handleClearCategories}
                    className="text-xs font-bold text-[var(--dp-color-accent)] hover:underline font-['Outfit',sans-serif] cursor-pointer"
                  >
                    Clear Filter
                  </button>
                )}
              </div>
            </div>

            {isCategorySectionOpen && (
              <div className="flex flex-wrap gap-2 pt-1 animate-in fade-in duration-200">
                {BUDGET_CATEGORIES.map((cat) => {
                  const isSelected = selectedCategories.includes(cat.id)
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleToggleCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold font-['Outfit',sans-serif] tracking-wide transition-all border flex items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-[var(--dp-color-ink)] text-white border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-accent)]'
                          : 'bg-white text-[var(--dp-color-ink)] border-[var(--dp-color-line)] hover:border-[var(--dp-color-ink)] hover:bg-[var(--dp-color-ground)]'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-[var(--dp-color-highlight)]" />}
                      <span>{cat.name}</span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* Action Row & Validation Errors */}
          <div className="mt-8 pt-5 border-t-[1.5px] border-[var(--dp-color-line)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-auto">
              {validationError && (
                <div
                  role="alert"
                  className="flex items-center gap-2 text-xs font-bold text-[var(--dp-color-accent)] bg-red-50 border border-red-200 px-3.5 py-2 rounded-lg"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl border-[1.5px] border-[var(--dp-color-line)] bg-white hover:bg-[var(--dp-color-ground)] text-xs font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] tracking-wide flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[var(--dp-color-ink-muted)]" />
                <span>Reset</span>
              </button>

              <button
                type="button"
                onClick={handleOptimize}
                disabled={isCalculating}
                className="px-6 py-2.5 rounded-xl bg-[var(--dp-color-accent)] hover:bg-[#862f25] active:translate-y-0.5 border-[1.5px] border-[var(--dp-color-ink)] shadow-[2.5px_2.5px_0px_var(--dp-color-ink)] text-white text-xs sm:text-sm font-black font-['Outfit',sans-serif] tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
              >
                {isCalculating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Calculating Combos...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[var(--dp-color-highlight)]" />
                    <span>Optimize My Budget</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div id="optimizer-results" className="mt-8">
          {/* Results Summary Header */}
          {hasSearched && !isCalculating && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b-[1.5px] border-[var(--dp-color-line)]">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-xl font-black font-['Outfit',sans-serif] text-[var(--dp-color-ink)]">
                  {combos.length > 0
                    ? `Found ${combos.length} Verified Combos Under ₹${budgetString}`
                    : `No Combos Under ₹${budgetString}`}
                </span>

                {combos.length > 0 && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#2d5f3e] text-white text-xs font-bold">
                    ✓ All Within Budget
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
                <span>Filter: <strong>{mealType.toUpperCase()}</strong></span>
                <span>•</span>
                <span>
                  Restaurant:{' '}
                  <strong>
                    {selectedRestaurantId === 'all'
                      ? `All Kitchens (${evaluatedCount} evaluated)`
                      : 'Selected Kitchen'}
                  </strong>
                </span>
              </div>
            </div>
          )}

          {/* Empty State */}
          {hasSearched && !isCalculating && combos.length === 0 && (
            <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-[2px_2px_0px_var(--dp-color-line)]">
              <div className="w-14 h-14 mx-auto rounded-full bg-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-ink)] flex items-center justify-center mb-4">
                <AlertCircle className="w-7 h-7 text-[var(--dp-color-accent)]" />
              </div>

              <h2 className="text-xl font-black font-['Outfit',sans-serif] text-[var(--dp-color-ink)] mb-2">
                No Combos Fit Your Budget
              </h2>

              <p className="text-sm text-[var(--dp-color-ink-muted)] font-medium font-['Outfit',sans-serif] max-w-md mx-auto mb-6">
                No combos fit your budget with the current filters. Try increasing your budget,
                selecting more categories, or changing the meal type.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const current = Number(budgetString) || 200
                    setBudgetString(String(current + 100))
                    setTimeout(() => handleOptimize(), 50)
                  }}
                  className="px-4 py-2 rounded-xl bg-[var(--dp-color-accent)] text-white text-xs font-bold font-['Outfit',sans-serif] border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-ink)] cursor-pointer"
                >
                  Increase Budget by +₹100
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategories([])
                    setMealType('all')
                    setTimeout(() => handleOptimize(), 50)
                  }}
                  className="px-4 py-2 rounded-xl bg-white text-[var(--dp-color-ink)] text-xs font-bold font-['Outfit',sans-serif] border-[1.5px] border-[var(--dp-color-line)] cursor-pointer"
                >
                  Reset Meal Filters
                </button>
              </div>
            </div>
          )}

          {/* Combo Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {combos.map((combo) => {
              const isAdded = addedComboId === combo.id

              return (
                <div
                  key={combo.id}
                  className="bg-white border-[1.5px] border-[var(--dp-color-ink)] rounded-2xl shadow-[3px_3px_0px_var(--dp-color-ink)] hover:shadow-[5px_5px_0px_var(--dp-color-ink)] transition-all flex flex-col overflow-hidden group"
                >
                  {/* Card Header */}
                  <div className="p-4 sm:p-5 bg-[var(--dp-color-scrap)] border-b-[1.5px] border-[var(--dp-color-line)]">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {/* Veg / Non-Veg badge */}
                        {combo.isVeg ? (
                          <span
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-[#2d5f3e] text-[#2d5f3e] bg-green-50 text-[10px] font-bold uppercase tracking-wider"
                            title="Pure Vegetarian Combo"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2d5f3e]" />
                            Pure Veg
                          </span>
                        ) : (
                          <span
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-[var(--dp-color-accent)] text-[var(--dp-color-accent)] bg-red-50 text-[10px] font-bold uppercase tracking-wider"
                            title="Contains Non-Vegetarian Food"
                          >
                            <span className="w-1.5 h-1.5 bg-[var(--dp-color-accent)]" />
                            Non-Veg
                          </span>
                        )}

                        {/* Category badges */}
                        {combo.categories.map((catSlug) => {
                          const catInfo = BUDGET_CATEGORIES.find((c) => c.id === catSlug)
                          return (
                            <span
                              key={catSlug}
                              className="px-2 py-0.5 rounded bg-[var(--dp-color-ground)] text-[var(--dp-color-ink-muted)] border border-[var(--dp-color-line)] text-[10px] font-extrabold uppercase font-['Outfit',sans-serif]"
                            >
                              {catInfo?.name || catSlug}
                            </span>
                          )
                        })}
                      </div>

                      {/* Remaining savings pill */}
                      <span className="px-2 py-0.5 rounded-full bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] text-[11px] font-black font-mono border border-[var(--dp-color-line)] shrink-0">
                        ₹{combo.remainingBudget} Saved
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-[var(--dp-color-ink)] font-['Outfit',sans-serif] leading-snug line-clamp-2">
                      {combo.title}
                    </h3>

                    {/* Restaurant line */}
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs font-semibold text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
                      <Store className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
                      <span className="truncate">{combo.restaurant.name}</span>
                      <span>•</span>
                      <span>⭐ {combo.restaurant.rating}</span>
                    </div>
                  </div>

                  {/* Included Items List */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] block mb-2.5">
                        Items in this combo ({combo.items.length})
                      </span>

                      <div className="space-y-2.5">
                        {combo.items.map((item, idx) => (
                          <div
                            key={`${item.menuItem.id}-${idx}`}
                            className="flex items-center justify-between gap-3 text-xs font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] p-1.5 rounded-lg bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)]"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              {item.menuItem.imageUrl ? (
                                <img
                                  src={item.menuItem.imageUrl}
                                  alt={item.menuItem.name}
                                  className="w-9 h-9 rounded object-cover border border-[var(--dp-color-line)] shrink-0"
                                  loading="lazy"
                                />
                              ) : (
                                <div className="w-9 h-9 rounded bg-white border border-[var(--dp-color-line)] flex items-center justify-center shrink-0">
                                  <UtensilPlaceholder isVeg={item.menuItem.isVeg} />
                                </div>
                              )}
                              <div className="truncate">
                                <span className="block truncate font-bold text-[var(--dp-color-ink)]">
                                  {item.menuItem.name}
                                </span>
                                <span className="text-[10px] text-[var(--dp-color-ink-muted)]">
                                  Qty: {item.quantity} × ₹{item.menuItem.price}
                                </span>
                              </div>
                            </div>

                            <span className="font-black text-[var(--dp-color-ink)] shrink-0 font-mono">
                              ₹{item.menuItem.price * item.quantity}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Rationale note */}
                      <p className="mt-3 text-[11px] text-[var(--dp-color-ink-muted)] font-medium italic font-['Outfit',sans-serif] bg-amber-50/60 p-2 rounded border border-amber-200/50">
                        💡 {combo.reason}
                      </p>
                    </div>

                    {/* Price Breakdown Card */}
                    <div className="mt-5 pt-4 border-t-[1.5px] border-dashed border-[var(--dp-color-line)]">
                      <div className="space-y-1 text-xs font-medium text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
                        <div className="flex justify-between">
                          <span>Food Subtotal</span>
                          <span className="font-bold text-[var(--dp-color-ink)] font-mono">
                            ₹{combo.itemTotal}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Taxes (5% GST)</span>
                          <span className="font-bold text-[var(--dp-color-ink)] font-mono">
                            ₹{combo.taxAmount}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Restaurant Delivery Fee</span>
                          <span className="font-bold text-[var(--dp-color-ink)] font-mono">
                            ₹{combo.deliveryFee}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Packaging Charges</span>
                          <span className="font-bold text-[var(--dp-color-ink)] font-mono">
                            ₹{combo.packagingFee}
                          </span>
                        </div>
                      </div>

                      {/* Final Payable Banner */}
                      <div className="mt-3 pt-3 border-t border-[var(--dp-color-line)] flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider font-extrabold text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] block">
                            Final Payable Total
                          </span>
                          <span className="text-xl font-black text-[var(--dp-color-accent)] font-['Outfit',sans-serif]">
                            ₹{combo.finalPayable}
                          </span>
                        </div>

                        <div className="text-right">
                          <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] block">
                            Your Budget
                          </span>
                          <span className="text-xs font-bold text-[var(--dp-color-ink)] font-mono">
                            ₹{combo.userBudget}
                          </span>
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        type="button"
                        onClick={() => handleAddCombo(combo)}
                        className={`mt-4 w-full py-2.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider font-['Outfit',sans-serif] flex items-center justify-center gap-2 transition-all cursor-pointer border-[1.5px] border-[var(--dp-color-ink)] ${
                          isAdded
                            ? 'bg-[#2d5f3e] text-white shadow-none'
                            : 'bg-[var(--dp-color-highlight)] hover:bg-[#ebda99] active:translate-y-0.5 text-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-ink)]'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-white" />
                            <span>Combo Added to Basket!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4 text-[var(--dp-color-ink)]" />
                            <span>Add Combo to Cart</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Footnote on Pricing Accuracy */}
          <div className="mt-12 text-center text-xs text-[var(--dp-color-ink-muted)] font-medium font-['Outfit',sans-serif] max-w-xl mx-auto flex items-center justify-center gap-1.5">
            <Info className="w-4 h-4 text-[var(--dp-color-annotation)] shrink-0" />
            <span>
              Final checkout totals may vary if actual delivery distance or surge conditions change.
              All combos are pre-verified against restaurant menu prices and statutory 5% GST.
            </span>
          </div>
        </div>
      </div>

      {/* Cart Conflict Resolution Modal */}
      {conflict && (
        <CartConflictModal
          isOpen={true}
          currentRestaurantName={conflict.currentRestaurantName}
          newRestaurantName={conflict.newRestaurantName}
          onCancel={() => resolveConflict(false)}
          onReplace={() => resolveConflict(true)}
        />
      )}
    </section>
  )
}

function UtensilPlaceholder({ isVeg }: { isVeg: boolean }) {
  return isVeg ? (
    <Leaf className="w-4 h-4 text-[#2d5f3e]" />
  ) : (
    <Flame className="w-4 h-4 text-[var(--dp-color-accent)]" />
  )
}

export default SmartBudgetOptimizer
