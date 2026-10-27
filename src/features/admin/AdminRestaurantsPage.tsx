import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  fetchAdminRestaurants,
  createAdminRestaurant,
  updateAdminRestaurant,
  toggleRestaurantOpen,
} from '@/services/adminService'
import type { Restaurant, PriceTier } from '@/types'
import { formatCurrency } from '@/lib/utils'
import {
  Search,
  Plus,
  RefreshCw,
  Edit,
  Star,
  MapPin,
  Clock,
  BookOpen,
  X,
  Check,
  AlertCircle,
  Loader2,
} from 'lucide-react'

export const AdminRestaurantsPage: React.FC = () => {
  const navigate = useNavigate()
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Filters
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'open' | 'closed'>('all')
  const [priceFilter, setPriceFilter] = useState<'all' | PriceTier>('all')

  // Edit / Add Modal State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingRestaurant, setEditingRestaurant] = useState<Restaurant | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [formSuccess, setFormSuccess] = useState<string | null>(null)

  // Form Fields
  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [addressLine, setAddressLine] = useState('')
  const [city, setCity] = useState('Hyderabad')
  const [priceTier, setPriceTier] = useState<PriceTier>('₹₹')
  const [deliveryFee, setDeliveryFee] = useState('40')
  const [deliveryMin, setDeliveryMin] = useState('25')
  const [deliveryMax, setDeliveryMax] = useState('40')
  const [minimumOrder, setMinimumOrder] = useState('300')
  const [rating, setRating] = useState('4.8')
  const [isFeatured, setIsFeatured] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  const loadRestaurants = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await fetchAdminRestaurants({
        searchQuery,
        status: statusFilter,
        priceTier: priceFilter,
      })
      setRestaurants(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch restaurants')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadRestaurants()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter, priceFilter])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    loadRestaurants()
  }

  const handleOpenAddModal = () => {
    setEditingRestaurant(null)
    setName('')
    setSlug('')
    setTagline('')
    setDescription('')
    setCoverImage('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80')
    setAddressLine('Road No. 36, Jubilee Hills')
    setCity('Hyderabad')
    setPriceTier('₹₹')
    setDeliveryFee('50')
    setDeliveryMin('25')
    setDeliveryMax('40')
    setMinimumOrder('300')
    setRating('4.8')
    setIsFeatured(false)
    setIsOpen(true)
    setFormError(null)
    setFormSuccess(null)
    setIsModalOpen(true)
  }

  const handleOpenEditModal = (r: Restaurant) => {
    setEditingRestaurant(r)
    setName(r.name)
    setSlug(r.slug)
    setTagline(r.tagline)
    setDescription(r.description)
    setCoverImage(r.coverImage)
    setAddressLine(r.addressLine)
    setCity(r.city)
    setPriceTier(r.priceTier)
    setDeliveryFee(String(r.deliveryFee))
    setDeliveryMin(String(r.deliveryTimeEstimateMin))
    setDeliveryMax(String(r.deliveryTimeEstimateMax))
    setMinimumOrder(String(r.minimumOrderAmount))
    setRating(String(r.rating))
    setIsFeatured(r.isFeatured)
    setIsOpen(r.isOpen)
    setFormError(null)
    setFormSuccess(null)
    setIsModalOpen(true)
  }

  const handleToggleOpen = async (r: Restaurant) => {
    const updatedIsOpen = !r.isOpen
    // Optimistic update
    setRestaurants((prev) =>
      prev.map((item) => (item.id === r.id ? { ...item, isOpen: updatedIsOpen } : item))
    )

    const res = await toggleRestaurantOpen(r.id, updatedIsOpen)
    if (!res.success) {
      // Revert on failure
      setRestaurants((prev) =>
        prev.map((item) => (item.id === r.id ? { ...item, isOpen: r.isOpen } : item))
      )
      setError(`Failed to update status for ${r.name}: ${res.error}`)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)

    if (!name.trim()) {
      setFormError('Restaurant name is required.')
      return
    }

    if (!tagline.trim()) {
      setFormError('Tagline is required.')
      return
    }

    if (!addressLine.trim()) {
      setFormError('Address line is required.')
      return
    }

    setIsSaving(true)

    if (editingRestaurant) {
      // Update
      const res = await updateAdminRestaurant(editingRestaurant.id, {
        name: name.trim(),
        slug: slug.trim() || undefined,
        tagline: tagline.trim(),
        description: description.trim(),
        coverImage,
        addressLine: addressLine.trim(),
        city: city.trim(),
        priceTier,
        deliveryFee: Number(deliveryFee) || 40,
        deliveryTimeEstimateMin: Number(deliveryMin) || 25,
        deliveryTimeEstimateMax: Number(deliveryMax) || 40,
        minimumOrderAmount: Number(minimumOrder) || 0,
        rating: Number(rating) || 4.5,
        isFeatured,
        isOpen,
      })

      setIsSaving(false)

      if (res.success) {
        setFormSuccess('Restaurant updated successfully!')
        setTimeout(() => {
          setIsModalOpen(false)
          loadRestaurants()
        }, 800)
      } else {
        setFormError(res.error || 'Failed to update restaurant.')
      }
    } else {
      // Create
      const res = await createAdminRestaurant({
        name: name.trim(),
        slug: slug.trim() || name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        tagline: tagline.trim(),
        description: description.trim(),
        coverImage,
        addressLine: addressLine.trim(),
        city: city.trim(),
        latitude: 17.4325,
        longitude: 78.4072,
        priceTier,
        deliveryFee: Number(deliveryFee) || 40,
        deliveryTimeEstimateMin: Number(deliveryMin) || 25,
        deliveryTimeEstimateMax: Number(deliveryMax) || 40,
        minimumOrderAmount: Number(minimumOrder) || 0,
        rating: Number(rating) || 4.5,
        ratingCount: 1,
        isFeatured,
        isOpen,
      })

      setIsSaving(false)

      if (res.success) {
        setFormSuccess('Restaurant created successfully in database!')
        setTimeout(() => {
          setIsModalOpen(false)
          loadRestaurants()
        }, 800)
      } else {
        setFormError(res.error || 'Failed to create restaurant.')
      }
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-[1.5px] border-[var(--dp-color-line)] pb-4">
        <div>
          <h1 className="text-2xl font-black text-[var(--dp-color-ink)] tracking-tight">
            Restaurant Management
          </h1>
          <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] mt-0.5">
            Manage partner kitchens, availability, addresses, and dining tiers
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={loadRestaurants}
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
            <span>Add Restaurant</span>
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

      {/* Search and Filters Bar */}
      <div className="p-4 rounded-xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <form onSubmit={handleSearchSubmit} className="flex-1 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--dp-color-ink-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by restaurant name, neighborhood, or slug..."
            className="w-full pl-10 pr-4 py-2 text-xs rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)]/60 font-medium focus:outline-dashed focus:outline-2 focus:outline-[var(--dp-color-annotation)]"
          />
        </form>

        <div className="flex flex-wrap items-center gap-2">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as 'all' | 'open' | 'closed')}
            className="px-2.5 py-1.5 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)]"
          >
            <option value="all">All Kitchens</option>
            <option value="open">Currently Open</option>
            <option value="closed">Closed / Offline</option>
          </select>

          {/* Price Tier Filter */}
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value as 'all' | PriceTier)}
            className="px-2.5 py-1.5 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)]"
          >
            <option value="all">All Price Tiers</option>
            <option value="₹">₹ (Affordable)</option>
            <option value="₹₹">₹₹ (Mid-Tier)</option>
            <option value="₹₹₹">₹₹₹ (Premium)</option>
            <option value="₹₹₹₹">₹₹₹₹ (Haute Cuisine)</option>
          </select>
        </div>
      </div>

      {/* Restaurants Table */}
      <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl shadow-[2px_2px_0px_var(--dp-color-line)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[var(--dp-color-ground)] border-b-[1.5px] border-[var(--dp-color-line)] font-bold text-[var(--dp-color-ink)] uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4">Restaurant</th>
                <th className="py-3.5 px-4">Address / Zone</th>
                <th className="py-3.5 px-4">Tier & Rating</th>
                <th className="py-3.5 px-4">Delivery</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--dp-color-line)]/50">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-[var(--dp-color-ink-muted)]">
                    <Loader2 className="w-5 h-5 animate-spin mx-auto mb-2 text-[var(--dp-color-accent)]" />
                    <span>Loading restaurants from Supabase...</span>
                  </td>
                </tr>
              ) : restaurants.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-[var(--dp-color-ink-muted)]">
                    No restaurants found.
                  </td>
                </tr>
              ) : (
                restaurants.map((restaurant) => (
                  <tr key={restaurant.id} className="hover:bg-[var(--dp-color-ground)]/50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={restaurant.coverImage}
                          alt={restaurant.name}
                          className="w-11 h-11 rounded-lg object-cover border border-[var(--dp-color-line)] shrink-0"
                          loading="lazy"
                        />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-[var(--dp-color-ink)] text-sm">
                              {restaurant.name}
                            </span>
                            {restaurant.isFeatured && (
                              <span className="px-1.5 py-0.2 rounded bg-[var(--dp-color-highlight)] text-[9px] font-bold border border-[var(--dp-color-ink)]">
                                FEATURED
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-[var(--dp-color-ink-muted)] line-clamp-1">
                            {restaurant.tagline}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-4 text-[var(--dp-color-ink-muted)]">
                      <div className="flex items-center gap-1 font-medium text-[var(--dp-color-ink)]">
                        <MapPin className="w-3 h-3 text-[var(--dp-color-accent)] shrink-0" />
                        <span className="truncate max-w-[180px]">{restaurant.addressLine}</span>
                      </div>
                      <span className="text-[10px] text-[var(--dp-color-ink-muted)]">{restaurant.city}</span>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono font-bold text-[var(--dp-color-ink)]">
                          {restaurant.priceTier}
                        </span>
                        <span className="text-[var(--dp-color-line)]">•</span>
                        <div className="flex items-center gap-1 font-bold text-[var(--dp-color-ink)]">
                          <Star className="w-3 h-3 text-[var(--dp-color-accent)] fill-[var(--dp-color-accent)]" />
                          <span>{restaurant.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-4 text-[var(--dp-color-ink-muted)]">
                      <div className="flex items-center gap-1 font-medium text-[var(--dp-color-ink)]">
                        <Clock className="w-3 h-3 text-[var(--dp-color-annotation)]" />
                        <span>{restaurant.deliveryTimeEstimateMin}-{restaurant.deliveryTimeEstimateMax}m</span>
                      </div>
                      <span className="text-[10px]">Fee: {formatCurrency(restaurant.deliveryFee)}</span>
                    </td>

                    <td className="py-3 px-4">
                      <button
                        type="button"
                        onClick={() => handleToggleOpen(restaurant)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border cursor-pointer transition-colors ${
                          restaurant.isOpen
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300 hover:bg-emerald-200'
                            : 'bg-stone-200 text-stone-700 border-stone-300 hover:bg-stone-300'
                        }`}
                        title="Click to toggle Open / Closed"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${restaurant.isOpen ? 'bg-[#059669]' : 'bg-stone-500'}`} />
                        <span>{restaurant.isOpen ? 'Open' : 'Closed'}</span>
                      </button>
                    </td>

                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => navigate(`/admin/menu?restaurantId=${restaurant.id}`)}
                          className="p-1.5 rounded bg-[var(--dp-color-ground)] hover:bg-[#ede6d5] border border-[var(--dp-color-line)] text-[var(--dp-color-ink)]"
                          title="View Menu Items for this restaurant"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-[var(--dp-color-annotation)]" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleOpenEditModal(restaurant)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[var(--dp-color-ground)] hover:bg-[#ede6d5] border border-[var(--dp-color-line)] text-xs font-semibold text-[var(--dp-color-ink)]"
                        >
                          <Edit className="w-3 h-3 text-[var(--dp-color-accent)]" />
                          <span>Edit</span>
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

      {/* Add / Edit Restaurant Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#38352f]/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-2xl p-6 max-w-2xl w-full shadow-[4px_4px_0px_var(--dp-color-ink)] space-y-5 my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-[1.5px] border-[var(--dp-color-line)] pb-4">
              <div>
                <h2 className="text-xl font-black text-[var(--dp-color-ink)]">
                  {editingRestaurant ? `Edit ${editingRestaurant.name}` : 'Add New Restaurant'}
                </h2>
                <p className="text-xs text-[var(--dp-color-ink-muted)]">
                  Updates persist directly to the PostgreSQL restaurants table
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

            {/* Success / Error Feedback */}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                    Restaurant Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Deccan Table"
                    className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs text-[var(--dp-color-ink)] font-bold"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                    URL Slug (Unique)
                  </label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="e.g. deccan-table"
                    className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs text-[var(--dp-color-ink)] font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                  Tagline *
                </label>
                <input
                  type="text"
                  required
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder="e.g. Contemporary Deccani & Telangana heritage cuisine"
                  className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs text-[var(--dp-color-ink)]"
                />
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Atmosphere, chef background, and culinary philosophy..."
                  className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs text-[var(--dp-color-ink)]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                    Address Line *
                  </label>
                  <input
                    type="text"
                    required
                    value={addressLine}
                    onChange={(e) => setAddressLine(e.target.value)}
                    placeholder="Road No. 36, Jubilee Hills"
                    className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs text-[var(--dp-color-ink)]"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs text-[var(--dp-color-ink)]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                  Cover Image URL
                </label>
                <input
                  type="url"
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs text-[var(--dp-color-ink)] font-mono"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                    Price Tier
                  </label>
                  <select
                    value={priceTier}
                    onChange={(e) => setPriceTier(e.target.value as PriceTier)}
                    className="w-full px-2.5 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)]"
                  >
                    <option value="₹">₹ (Affordable)</option>
                    <option value="₹₹">₹₹ (Mid-Tier)</option>
                    <option value="₹₹₹">₹₹₹ (Premium)</option>
                    <option value="₹₹₹₹">₹₹₹₹ (Haute)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                    Delivery Fee (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={deliveryFee}
                    onChange={(e) => setDeliveryFee(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs text-[var(--dp-color-ink)] font-mono font-bold"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                    Est. Time (Mins)
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      min="5"
                      value={deliveryMin}
                      onChange={(e) => setDeliveryMin(e.target.value)}
                      className="w-1/2 px-2 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs text-center font-mono"
                    />
                    <span>-</span>
                    <input
                      type="number"
                      min="5"
                      value={deliveryMax}
                      onChange={(e) => setDeliveryMax(e.target.value)}
                      className="w-1/2 px-2 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs text-center font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                    Rating (1-5)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs text-[var(--dp-color-ink)] font-mono font-bold"
                  />
                </div>
              </div>

              {/* Toggles */}
              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer font-bold text-[var(--dp-color-ink)]">
                  <input
                    type="checkbox"
                    checked={isOpen}
                    onChange={(e) => setIsOpen(e.target.checked)}
                    className="w-4 h-4 rounded border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-accent)]"
                  />
                  <span>Currently Open & Accepting Orders</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer font-bold text-[var(--dp-color-ink)]">
                  <input
                    type="checkbox"
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.checked)}
                    className="w-4 h-4 rounded border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-accent)]"
                  />
                  <span>Feature on Storefront Hero</span>
                </label>
              </div>

              {/* Submit Buttons */}
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
                      <span>{editingRestaurant ? 'Save Changes' : 'Create Restaurant'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminRestaurantsPage
