import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  fetchAdminMenuItems,
  fetchAdminRestaurants,
  fetchRestaurantCategories,
  createRestaurantCategory,
  createAdminMenuItem,
  updateAdminMenuItem,
  toggleMenuItemAvailability,
  deleteAdminMenuItem,
} from '@/services/adminService'
import type { AdminMenuItemWithDetails, Restaurant, MenuCategory } from '@/types'
import { formatCurrency } from '@/lib/utils'
import {
  Search,
  Plus,
  RefreshCw,
  Edit,
  Trash2,
  BookOpen,
  X,
  Check,
  AlertCircle,
  Loader2,
  Sparkles,
} from 'lucide-react'

export const AdminMenuPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const initialRestaurantId = searchParams.get('restaurantId') || 'all'

  const [menuItems, setMenuItems] = useState<AdminMenuItemWithDetails[]>([])
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Filters
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRestaurant, setSelectedRestaurant] = useState<string>(initialRestaurantId)
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non_veg' | 'chef_special'>('all')
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'available' | 'unavailable'>('all')

  // Add / Edit Modal State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<AdminMenuItemWithDetails | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [formSuccess, setFormSuccess] = useState<string | null>(null)

  // Form Fields
  const [restaurantId, setRestaurantId] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useState<MenuCategory[]>([])
  const [newCategoryName, setNewCategoryName] = useState('')
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('350')
  const [imageUrl, setImageUrl] = useState('')
  const [isVeg, setIsVeg] = useState(false)
  const [isChefSpecial, setIsChefSpecial] = useState(false)
  const [isAvailable, setIsAvailable] = useState(true)
  const [prepTimeMinutes, setPrepTimeMinutes] = useState('20')

  // Safe Deletion confirmation
  const [deletingItem, setDeletingItem] = useState<AdminMenuItemWithDetails | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteNotice, setDeleteNotice] = useState<string | null>(null)

  const loadData = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const [itemsData, restsData] = await Promise.all([
        fetchAdminMenuItems({
          restaurantId: selectedRestaurant,
          searchQuery,
          dietary: dietaryFilter,
          availability: availabilityFilter,
        }),
        fetchAdminRestaurants(),
      ])

      setMenuItems(itemsData)
      setRestaurants(restsData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch menu items')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRestaurant, dietaryFilter, availabilityFilter])

  // When restaurant selection changes in the form modal, load its categories
  useEffect(() => {
    if (restaurantId) {
      fetchRestaurantCategories(restaurantId).then((cats) => {
        setCategories(cats)
        if (cats.length > 0 && !categoryId) {
          setCategoryId(cats[0].id)
        }
      })
    }
  }, [restaurantId, categoryId])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    loadData()
  }

  const handleOpenAddModal = () => {
    setEditingItem(null)
    const defaultRestId = selectedRestaurant !== 'all' ? selectedRestaurant : restaurants[0]?.id || ''
    setRestaurantId(defaultRestId)
    setCategoryId('')
    setShowNewCategoryInput(false)
    setNewCategoryName('')
    setName('')
    setDescription('')
    setPrice('450')
    setImageUrl('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80')
    setIsVeg(false)
    setIsChefSpecial(false)
    setIsAvailable(true)
    setPrepTimeMinutes('20')
    setFormError(null)
    setFormSuccess(null)
    setIsModalOpen(true)
  }

  const handleOpenEditModal = (item: AdminMenuItemWithDetails) => {
    setEditingItem(item)
    setRestaurantId(item.restaurantId)
    setCategoryId(item.categoryId)
    setShowNewCategoryInput(false)
    setNewCategoryName('')
    setName(item.name)
    setDescription(item.description)
    setPrice(String(item.price))
    setImageUrl(item.imageUrl || '')
    setIsVeg(item.isVeg)
    setIsChefSpecial(item.isChefSpecial)
    setIsAvailable(item.isAvailable)
    setPrepTimeMinutes(String(item.prepTimeMinutes))
    setFormError(null)
    setFormSuccess(null)
    setIsModalOpen(true)
  }

  const handleToggleAvailability = async (item: AdminMenuItemWithDetails) => {
    const updated = !item.isAvailable
    setMenuItems((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, isAvailable: updated } : i))
    )

    const res = await toggleMenuItemAvailability(item.id, updated)
    if (!res.success) {
      // Revert on failure
      setMenuItems((prev) =>
        prev.map((i) => (i.id === item.id ? { ...i, isAvailable: item.isAvailable } : i))
      )
      setError(`Failed to toggle availability: ${res.error}`)
    }
  }

  const handleCreateCategory = async () => {
    if (!restaurantId || !newCategoryName.trim()) return

    const res = await createRestaurantCategory(restaurantId, newCategoryName.trim())
    if (res.success && res.data) {
      setCategories((prev) => [
        ...prev,
        { id: res.data!.id, restaurantId, name: res.data!.name, displayOrder: 1, items: [] },
      ])
      setCategoryId(res.data.id)
      setShowNewCategoryInput(false)
      setNewCategoryName('')
    } else {
      setFormError(res.error || 'Failed to create category')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)

    if (!name.trim()) {
      setFormError('Item name is required.')
      return
    }

    const numericPrice = Number(price)
    if (isNaN(numericPrice) || numericPrice < 0) {
      setFormError('Please enter a valid price (>= 0).')
      return
    }

    if (!restaurantId) {
      setFormError('Please select a restaurant atelier.')
      return
    }

    let finalCatId = categoryId
    if (!finalCatId && categories.length > 0) {
      finalCatId = categories[0].id
    }

    if (!finalCatId) {
      // If no category exists, automatically create 'Chef Signature Courses'
      const catRes = await createRestaurantCategory(restaurantId, 'Chef Signature Courses')
      if (catRes.success && catRes.data) {
        finalCatId = catRes.data.id
      } else {
        setFormError('Please create or select a menu category.')
        return
      }
    }

    setIsSaving(true)

    if (editingItem) {
      // Update
      const res = await updateAdminMenuItem(editingItem.id, {
        name: name.trim(),
        description: description.trim(),
        price: numericPrice,
        imageUrl: imageUrl.trim() || undefined,
        isVeg,
        isChefSpecial,
        isAvailable,
        preparationTimeMinutes: Number(prepTimeMinutes) || 20,
        categoryId: finalCatId,
      })

      setIsSaving(false)

      if (res.success) {
        setFormSuccess('Menu item updated successfully!')
        setTimeout(() => {
          setIsModalOpen(false)
          loadData()
        }, 800)
      } else {
        setFormError(res.error || 'Failed to update menu item.')
      }
    } else {
      // Create
      const res = await createAdminMenuItem({
        restaurantId,
        categoryId: finalCatId,
        name: name.trim(),
        description: description.trim(),
        price: numericPrice,
        imageUrl: imageUrl.trim() || undefined,
        isVeg,
        isChefSpecial,
        isAvailable,
        preparationTimeMinutes: Number(prepTimeMinutes) || 20,
      })

      setIsSaving(false)

      if (res.success) {
        setFormSuccess('Menu item created in database!')
        setTimeout(() => {
          setIsModalOpen(false)
          loadData()
        }, 800)
      } else {
        setFormError(res.error || 'Failed to create menu item.')
      }
    }
  }

  const handleConfirmDelete = async () => {
    if (!deletingItem) return

    setIsDeleting(true)
    const res = await deleteAdminMenuItem(deletingItem.id)
    setIsDeleting(false)

    if (res.success) {
      if (res.deactivatedInstead) {
        setDeleteNotice(
          `Item was referenced by historical orders, so it was safely deactivated (marked unavailable) instead of hard-deleted to preserve order history.`
        )
      }
      setDeletingItem(null)
      loadData()
    } else {
      setError(`Delete error: ${res.error}`)
      setDeletingItem(null)
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-[1.5px] border-[var(--dp-color-line)] pb-4">
        <div>
          <h1 className="text-2xl font-black text-[var(--dp-color-ink)] tracking-tight">
            Menu Item Management
          </h1>
          <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] mt-0.5">
            Manage tasting courses, pricing, descriptions, and culinary availability
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={loadData}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] hover:bg-[#ede6d5] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>

          <button
            type="button"
            onClick={handleOpenAddModal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-xs font-bold uppercase tracking-wider border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-ink)] cursor-pointer transition-transform hover:-translate-y-0.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Menu Item</span>
          </button>
        </div>
      </div>

      {/* Error Notice */}
      {error && (
        <div className="p-4 rounded-xl bg-[var(--dp-color-accent)]/10 border-[1.5px] border-[var(--dp-color-accent)] flex items-start gap-3 text-xs text-[var(--dp-color-ink)]">
          <AlertCircle className="w-5 h-5 text-[var(--dp-color-accent)] shrink-0" />
          <div>
            <span className="font-bold block text-[var(--dp-color-accent)]">Database Query Error</span>
            <span>{error}</span>
          </div>
        </div>
      )}

      {/* Notice Alert if deactivated instead of delete */}
      {deleteNotice && (
        <div className="p-4 rounded-xl bg-[var(--dp-color-highlight)]/40 border-[1.5px] border-[var(--dp-color-line)] flex items-start justify-between gap-3 text-xs text-[var(--dp-color-ink)]">
          <div className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-[var(--dp-color-accent)] shrink-0 mt-0.5" />
            <span>{deleteNotice}</span>
          </div>
          <button
            type="button"
            onClick={() => setDeleteNotice(null)}
            className="text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)] font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Search and Filters Bar */}
      <div className="p-4 rounded-xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <form onSubmit={handleSearchSubmit} className="flex-1 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--dp-color-ink-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by dish name, chef ingredients, atelier..."
            className="w-full pl-10 pr-4 py-2 text-xs rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)]/60 font-medium focus:outline-dashed focus:outline-2 focus:outline-[var(--dp-color-annotation)]"
          />
        </form>

        <div className="flex flex-wrap items-center gap-2">
          {/* Restaurant Filter */}
          <select
            value={selectedRestaurant}
            onChange={(e) => setSelectedRestaurant(e.target.value)}
            className="px-2.5 py-1.5 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)] max-w-[200px] truncate"
          >
            <option value="all">All Restaurants ({restaurants.length})</option>
            {restaurants.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>

          {/* Dietary Filter */}
          <select
            value={dietaryFilter}
            onChange={(e) => setDietaryFilter(e.target.value as 'all' | 'veg' | 'non_veg' | 'chef_special')}
            className="px-2.5 py-1.5 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)]"
          >
            <option value="all">All Preferences</option>
            <option value="veg">Vegetarian Only</option>
            <option value="non_veg">Non-Veg</option>
            <option value="chef_special">Chef Specials Only</option>
          </select>

          {/* Availability Filter */}
          <select
            value={availabilityFilter}
            onChange={(e) => setAvailabilityFilter(e.target.value as 'all' | 'available' | 'unavailable')}
            className="px-2.5 py-1.5 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)]"
          >
            <option value="all">All Statuses</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
      </div>

      {/* Menu Items Table */}
      <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl shadow-[2px_2px_0px_var(--dp-color-line)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[var(--dp-color-ground)] border-b-[1.5px] border-[var(--dp-color-line)] font-bold text-[var(--dp-color-ink)] uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4">Tasting Course / Dish</th>
                <th className="py-3.5 px-4">Restaurant</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Price</th>
                <th className="py-3.5 px-4">Availability</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--dp-color-line)]/50">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-[var(--dp-color-ink-muted)]">
                    <Loader2 className="w-5 h-5 animate-spin mx-auto mb-2 text-[var(--dp-color-accent)]" />
                    <span>Loading menu items from Supabase...</span>
                  </td>
                </tr>
              ) : menuItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-[var(--dp-color-ink-muted)]">
                    No dishes found matching your criteria.
                  </td>
                </tr>
              ) : (
                menuItems.map((item) => (
                  <tr key={item.id} className="hover:bg-[var(--dp-color-ground)]/50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-10 h-10 rounded-lg object-cover border border-[var(--dp-color-line)] shrink-0"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)] flex items-center justify-center text-[var(--dp-color-ink-muted)] shrink-0">
                            <BookOpen className="w-4 h-4" />
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-[var(--dp-color-ink)] text-sm">
                              {item.name}
                            </span>
                            {item.isVeg ? (
                              <span className="w-3.5 h-3.5 border border-emerald-600 rounded-xs p-0.5 flex items-center justify-center shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                              </span>
                            ) : (
                              <span className="w-3.5 h-3.5 border border-rose-600 rounded-xs p-0.5 flex items-center justify-center shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
                              </span>
                            )}
                            {item.isChefSpecial && (
                              <span className="px-1 py-0.2 rounded bg-[var(--dp-color-highlight)] text-[9px] font-bold border border-[var(--dp-color-ink)]">
                                SPECIAL
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-[var(--dp-color-ink-muted)] line-clamp-1">
                            {item.description}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-4 font-medium text-[var(--dp-color-ink)]">
                      {item.restaurantName}
                    </td>

                    <td className="py-3 px-4 text-[var(--dp-color-ink-muted)]">
                      <span className="px-2 py-0.5 rounded bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)] text-[11px] font-medium">
                        {item.categoryName}
                      </span>
                    </td>

                    <td className="py-3 px-4 font-mono font-bold text-[var(--dp-color-ink)] text-sm">
                      {formatCurrency(item.price)}
                    </td>

                    <td className="py-3 px-4">
                      <button
                        type="button"
                        onClick={() => handleToggleAvailability(item)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border cursor-pointer transition-colors ${
                          item.isAvailable
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300 hover:bg-emerald-200'
                            : 'bg-stone-200 text-stone-700 border-stone-300 hover:bg-stone-300'
                        }`}
                        title="Click to toggle Available / Unavailable"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${item.isAvailable ? 'bg-[#059669]' : 'bg-stone-500'}`} />
                        <span>{item.isAvailable ? 'Available' : 'Unavailable'}</span>
                      </button>
                    </td>

                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleOpenEditModal(item)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[var(--dp-color-ground)] hover:bg-[#ede6d5] border border-[var(--dp-color-line)] text-xs font-semibold text-[var(--dp-color-ink)]"
                        >
                          <Edit className="w-3 h-3 text-[var(--dp-color-accent)]" />
                          <span>Edit</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setDeletingItem(item)}
                          className="p-1 rounded bg-[var(--dp-color-ground)] hover:bg-rose-50 border border-[var(--dp-color-line)] text-rose-700"
                          title="Deactivate or Delete Item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Menu Item Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#38352f]/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-2xl p-6 max-w-xl w-full shadow-[4px_4px_0px_var(--dp-color-ink)] space-y-5 my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-[1.5px] border-[var(--dp-color-line)] pb-4">
              <div>
                <h2 className="text-xl font-black text-[var(--dp-color-ink)]">
                  {editingItem ? `Edit ${editingItem.name}` : 'Add Menu Item'}
                </h2>
                <p className="text-xs text-[var(--dp-color-ink-muted)]">
                  Updates affect future orders while historical snapshots remain immutable
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg border-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Feedback */}
            {formSuccess && (
              <div className="p-3 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>{formSuccess}</span>
              </div>
            )}

            {formError && (
              <div className="p-3 rounded-lg bg-rose-100 border border-rose-300 text-rose-800 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>{formError}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Restaurant Atelier Selector */}
              <div>
                <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                  Restaurant Atelier *
                </label>
                <select
                  required
                  disabled={Boolean(editingItem)}
                  value={restaurantId}
                  onChange={(e) => {
                    setRestaurantId(e.target.value)
                    setCategoryId('')
                  }}
                  className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)] disabled:opacity-60"
                >
                  <option value="">Select a restaurant...</option>
                  {restaurants.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} ({r.city})
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Selector */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-bold uppercase tracking-wider text-[var(--dp-color-ink)]">
                    Menu Category *
                  </label>
                  {!showNewCategoryInput && (
                    <button
                      type="button"
                      onClick={() => setShowNewCategoryInput(true)}
                      className="text-[11px] font-bold text-[var(--dp-color-accent)] hover:underline"
                    >
                      + New Category
                    </button>
                  )}
                </div>

                {showNewCategoryInput ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                      placeholder="e.g. Degustation Starters"
                      className="flex-1 px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs text-[var(--dp-color-ink)]"
                    />
                    <button
                      type="button"
                      onClick={handleCreateCategory}
                      className="px-3 py-2 rounded-lg bg-[var(--dp-color-ink)] text-white text-xs font-bold"
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowNewCategoryInput(false)}
                      className="px-2 py-2 text-xs"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs text-[var(--dp-color-ink)]"
                  >
                    {categories.length === 0 ? (
                      <option value="">Standard Menu (auto-created on save)</option>
                    ) : (
                      categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))
                    )}
                  </select>
                )}
              </div>

              {/* Name & Price */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                    Dish Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Slow-Smoked Deccani Marag"
                    className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)]"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                    Price (₹) *
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="450"
                    className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-mono font-bold text-[var(--dp-color-ink)]"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                  Description & Ingredients
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Artisanal spice reduction, pistachio notes, cooked over charcoal..."
                  className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs text-[var(--dp-color-ink)]"
                />
              </div>

              {/* Image URL & Prep Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs text-[var(--dp-color-ink)] font-mono"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                    Prep Time (Mins)
                  </label>
                  <input
                    type="number"
                    min="5"
                    value={prepTimeMinutes}
                    onChange={(e) => setPrepTimeMinutes(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-mono text-[var(--dp-color-ink)]"
                  />
                </div>
              </div>

              {/* Toggles */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer font-bold text-[var(--dp-color-ink)]">
                  <input
                    type="checkbox"
                    checked={isVeg}
                    onChange={(e) => setIsVeg(e.target.checked)}
                    className="w-4 h-4 rounded border-[1.5px] border-[var(--dp-color-line)] text-emerald-600"
                  />
                  <span>Vegetarian</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer font-bold text-[var(--dp-color-ink)]">
                  <input
                    type="checkbox"
                    checked={isChefSpecial}
                    onChange={(e) => setIsChefSpecial(e.target.checked)}
                    className="w-4 h-4 rounded border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-accent)]"
                  />
                  <span>Chef's Signature Special</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer font-bold text-[var(--dp-color-ink)]">
                  <input
                    type="checkbox"
                    checked={isAvailable}
                    onChange={(e) => setIsAvailable(e.target.checked)}
                    className="w-4 h-4 rounded border-[1.5px] border-[var(--dp-color-line)] text-[#059669]"
                  />
                  <span>Available for Ordering</span>
                </label>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t-[1.5px] border-[var(--dp-color-line)]">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-[var(--dp-radius-control)] border-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-ground)] text-xs font-bold text-[var(--dp-color-ink)]"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSaving}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-xs font-bold uppercase tracking-wider border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-ink)] cursor-pointer disabled:opacity-50"
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Saving to Supabase...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>{editingItem ? 'Save Changes' : 'Create Item'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete / Deactivate Confirmation Dialog */}
      {deletingItem && (
        <div className="fixed inset-0 z-50 bg-[#38352f]/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-2xl p-6 max-w-md w-full shadow-[4px_4px_0px_var(--dp-color-ink)] space-y-4">
            <h3 className="text-lg font-black text-[var(--dp-color-ink)]">
              Deactivate or Delete Item
            </h3>
            <p className="text-xs text-[var(--dp-color-ink-muted)] leading-relaxed">
              Are you sure you want to remove <strong className="text-[var(--dp-color-ink)] font-bold">{deletingItem.name}</strong>?
            </p>
            <p className="text-[11px] text-[var(--dp-color-ink-muted)] bg-[var(--dp-color-ground)] p-2.5 rounded border border-[var(--dp-color-line)]">
              ℹ️ If this item is part of existing customer order history, ARO will safely deactivate the item instead of deleting it to preserve historical purchase integrity.
            </p>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setDeletingItem(null)}
                className="px-3.5 py-1.5 rounded-lg border border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold border border-rose-900 cursor-pointer disabled:opacity-50"
              >
                {isDeleting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                <span>Confirm Removal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminMenuPage
