import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import * as maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import {
  MapPin,
  Clock,
  CheckCircle2,
  Phone,
  ShieldCheck,
  RotateCcw,
  Play,
  Pause,
  Navigation,
  ArrowRight,
  PackageCheck,
  ChefHat,
  Bike,
  Store,
  ChevronRight,
  Receipt,
  Share2,
  AlertCircle,
  Loader2,
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'
import { formatCurrency } from '@/lib/utils'
import { StorefrontNavbar } from '@/features/storefront/StorefrontNavbar'
import { StorefrontFooter } from '@/features/storefront/StorefrontFooter'
import type { Order, OrderStatus } from '@/types'

// Simulated GPS route waypoints across Hyderabad (Banjara Hills Rd 12 -> Jubilee Hills Rd 36)
const HYDERABAD_ROUTE_COORDINATES: [number, number][] = [
  [78.4352, 17.4156], // Restaurant: Kumo House (Road No. 12, Banjara Hills)
  [78.4318, 17.4178], // Banjara Hills Rd 10 junction
  [78.4282, 17.4206], // Towards Cancer Hospital junction
  [78.4245, 17.4234], // Sagar Society connection
  [78.4208, 17.4262], // Road No. 1 Jubilee Hills checkpost approach
  [78.4172, 17.4285], // Jubilee Hills Check Post roundabout
  [78.4138, 17.4302], // Road No. 36 gourmet strip
  [78.4104, 17.4316], // Peddamma Gudi metro stretch
  [78.4072, 17.4325], // Customer Destination: Kohinoor Heights, Road No. 36, Jubilee Hills
]

// Fallback OpenStreetMap raster style specification in case vector tile service is unreachable
const OSM_FALLBACK_STYLE: maplibregl.StyleSpecification = {
  version: 8,
  sources: {
    'osm-fallback-tiles': {
      type: 'raster',
      tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
    },
  },
  layers: [
    {
      id: 'osm-fallback-layer',
      type: 'raster',
      source: 'osm-fallback-tiles',
      minzoom: 0,
      maxzoom: 19,
    },
  ],
}

export const OrderTrackingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { orders } = useAuth()
  const { items: cartItems } = useCart()

  // Retrieve current order from Auth context or construct realistic Hyderabad fallback
  const order: Order = useMemo(() => {
    const found = orders.find((o) => o.id === id)
    if (found) return found

    // Realistic fallback for demo direct navigation
    return {
      id: id || 'ord-demo-hyderabad',
      orderNumber: 'ARO-892415',
      customerId: '00000001-0000-0000-0000-000000000001',
      restaurantId: 'b0000002-0000-0000-0000-000000000002',
      restaurantNameSnapshot: 'Kumo House & Robata',
      restaurantAddressSnapshot: 'Road No. 12, Banjara Hills, Hyderabad',
      status: 'out_for_delivery',
      placedAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
      estimatedDeliveryAt: new Date(Date.now() + 18 * 60 * 1000).toISOString(),
      deliveryAddress: {
        label: 'Home',
        recipientName: 'Sreeram K',
        recipientPhone: '+91 98765 01234',
        addressLine1: 'Apartment 4B, Kohinoor Heights',
        addressLine2: 'Road No. 36, Jubilee Hills',
        landmark: 'Near Peddamma Temple Metro',
        city: 'Hyderabad',
        pincode: '500033',
        latitude: 17.4325,
        longitude: 78.4072,
      },
      items: [
        {
          id: 'oi-demo-1',
          menuItemId: 'd0000001-0000-0000-0000-000000000001',
          itemNameSnapshot: 'Truffle Hamachi Nigiri (4 pcs)',
          itemPriceSnapshot: 850,
          quantity: 2,
          totalPriceSnapshot: 1700,
          customizationDetailsSnapshot: [
            { groupName: 'Wasabi Preference', optionName: 'Fresh Shizuoka Wasabi', priceSnapshot: 0 },
          ],
        },
        {
          id: 'oi-demo-2',
          menuItemId: 'd0000002-0000-0000-0000-000000000002',
          itemNameSnapshot: 'Charred King Oyster Mushroom Skewers',
          itemPriceSnapshot: 420,
          quantity: 1,
          totalPriceSnapshot: 420,
          customizationDetailsSnapshot: [],
        },
      ],
      itemTotal: 2120,
      deliveryFee: 60,
      taxAmount: 106,
      discountAmount: 200,
      finalPaidAmount: 2086,
      paymentMethod: 'UPI',
      paymentStatus: 'PAID',
      rider: {
        name: 'Mohammad Qasim',
        phone: '+91 98450 78219',
        vehicleModel: 'Ather 450X Electric Scooter',
        vehicleNumber: 'TS 09 EQ 4821',
        avatarUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        currentLatitude: 17.4262,
        currentLongitude: 78.4208,
      },
      timeline: [
        {
          status: 'placed',
          title: 'Order Placed & Transmitted',
          description: 'Payment verified and transmitted to kitchen dispatcher.',
          timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
          isCompleted: true,
        },
        {
          status: 'confirmed',
          title: 'Confirmed by Atelier',
          description: 'Chef acknowledged and scheduled prep station.',
          timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
          isCompleted: true,
        },
        {
          status: 'kitchen_preparing',
          title: 'Artisanal Preparation',
          description: 'Sous chef plating and assembling courses in insulated containers.',
          timestamp: new Date(Date.now() - 8 * 60 * 1000).toISOString(),
          isCompleted: true,
        },
        {
          status: 'rider_assigned',
          title: 'Courier Assigned',
          description: 'Mohammad Qasim assigned with thermal-controlled delivery pod.',
          timestamp: new Date(Date.now() - 3 * 60 * 1000).toISOString(),
          isCompleted: true,
        },
        {
          status: 'out_for_delivery',
          title: 'Out for Delivery',
          description: 'Courier en route via Jubilee Hills Checkpost with live GPS telemetry.',
          timestamp: new Date().toISOString(),
          isCompleted: true,
        },
        {
          status: 'delivered',
          title: 'Delivered',
          description: 'Handover complete. Enjoy your meal.',
          timestamp: new Date(Date.now() + 18 * 60 * 1000).toISOString(),
          isCompleted: false,
        },
      ],
    }
  }, [id, orders])

  // Simulation State
  const [progress, setProgress] = useState<number>(0.5) // 0 to 1
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1)
  const [copiedNotice, setCopiedNotice] = useState(false)
  const [callRiderToast, setCallRiderToast] = useState(false)
  const [isMapLoading, setIsMapLoading] = useState(true)
  const [mapError, setMapError] = useState<string | null>(null)

  // MapLibre references
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const mapInstanceRef = useRef<maplibregl.Map | null>(null)
  const riderMarkerRef = useRef<maplibregl.Marker | null>(null)

  // Current interpolated rider coordinate along Hyderabad route
  const currentRiderCoord = useMemo<[number, number]>(() => {
    const totalSegments = HYDERABAD_ROUTE_COORDINATES.length - 1
    const scaled = progress * totalSegments
    const index = Math.floor(scaled)
    const subProgress = scaled - index

    if (index >= totalSegments) {
      return HYDERABAD_ROUTE_COORDINATES[totalSegments]
    }

    const start = HYDERABAD_ROUTE_COORDINATES[index]
    const end = HYDERABAD_ROUTE_COORDINATES[index + 1]

    const lng = start[0] + (end[0] - start[0]) * subProgress
    const lat = start[1] + (end[1] - start[1]) * subProgress

    return [lng, lat]
  }, [progress])

  // Dynamic status mapping based on progress
  const simulatedStatus: OrderStatus = useMemo(() => {
    if (progress < 0.15) return 'confirmed'
    if (progress < 0.35) return 'kitchen_preparing'
    if (progress < 0.5) return 'rider_assigned'
    if (progress < 0.95) return 'out_for_delivery'
    return 'delivered'
  }, [progress])

  // Estimated minutes remaining based on progress
  const remainingMinutes = useMemo(() => {
    if (simulatedStatus === 'delivered') return 0
    return Math.max(1, Math.round((1 - progress) * 28))
  }, [progress, simulatedStatus])

  // Recenter map camera on delivery bounds
  const handleRecenter = useCallback(() => {
    if (!mapInstanceRef.current) return
    const bounds = HYDERABAD_ROUTE_COORDINATES.reduce(
      (acc, coord) => acc.extend(coord),
      new maplibregl.LngLatBounds(
        HYDERABAD_ROUTE_COORDINATES[0],
        HYDERABAD_ROUTE_COORDINATES[0]
      )
    )
    mapInstanceRef.current.fitBounds(bounds, {
      padding: { top: 60, bottom: 60, left: 60, right: 60 },
      maxZoom: 15.5,
      duration: 1000,
    })
  }, [])

  // Animation ticker loop
  useEffect(() => {
    if (!isPlaying || simulatedStatus === 'delivered') return

    const interval = setInterval(() => {
      setProgress((prev) => {
        const step = 0.008 * playbackSpeed
        const next = prev + step
        if (next >= 1) {
          setIsPlaying(false)
          return 1
        }
        return next
      })
    }, 400)

    return () => clearInterval(interval)
  }, [isPlaying, playbackSpeed, simulatedStatus])

  // Initialize MapLibre GL map
  useEffect(() => {
    if (!mapContainerRef.current) return

    // Clean up existing map instance if any
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove()
      mapInstanceRef.current = null
    }

    setIsMapLoading(true)
    setMapError(null)

    const startCoord = HYDERABAD_ROUTE_COORDINATES[0]
    const endCoord = HYDERABAD_ROUTE_COORDINATES[HYDERABAD_ROUTE_COORDINATES.length - 1]

    // Use environment variable style URL or default to OpenFreeMap Bright style
    const primaryStyleUrl =
      import.meta.env.VITE_MAPLIBRE_STYLE_URL || 'https://tiles.openfreemap.org/styles/bright'

    let map: maplibregl.Map

    const setupLayersAndMarkers = (mapTarget: maplibregl.Map) => {
      // 1. Add route polyline source
      if (!mapTarget.getSource('route-line')) {
        mapTarget.addSource('route-line', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: HYDERABAD_ROUTE_COORDINATES,
            },
          },
        })
      }

      // 2. Glowing casing
      if (!mapTarget.getLayer('route-glow')) {
        mapTarget.addLayer({
          id: 'route-glow',
          type: 'line',
          source: 'route-line',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#FF650D',
            'line-width': 9,
            'line-opacity': 0.35,
          },
        })
      }

      // 3. Crisp route main line
      if (!mapTarget.getLayer('route-main')) {
        mapTarget.addLayer({
          id: 'route-main',
          type: 'line',
          source: 'route-line',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#FF650D',
            'line-width': 4,
          },
        })
      }

      // 4. Restaurant Marker (Chef pin)
      const resEl = document.createElement('div')
      resEl.className = 'custom-res-marker'
      resEl.style.display = 'flex'
      resEl.style.flexDirection = 'column'
      resEl.style.alignItems = 'center'
      resEl.innerHTML = `
        <div style="background: #211A19; border: 2.5px solid #FF650D; color: #FFF0D5; width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(0,0,0,0.6); font-size: 18px;">
          👨‍🍳
        </div>
        <div style="background: #211A19; border: 1px solid #FF650D; color: #FF650D; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 6px; white-space: nowrap; margin-top: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.5);">
          Kumo House
        </div>
      `
      new maplibregl.Marker({ element: resEl }).setLngLat(startCoord).addTo(mapTarget)

      // 5. Destination Marker (Customer Residence pin)
      const destEl = document.createElement('div')
      destEl.className = 'custom-dest-marker'
      destEl.style.display = 'flex'
      destEl.style.flexDirection = 'column'
      destEl.style.alignItems = 'center'
      destEl.innerHTML = `
        <div style="background: #641820; border: 2.5px solid #E9432E; color: #FFF0D5; width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(0,0,0,0.6); font-size: 18px;">
          🏠
        </div>
        <div style="background: #641820; border: 1px solid #E9432E; color: #FFF0D5; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 6px; white-space: nowrap; margin-top: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.5);">
          Jubilee Hills
        </div>
      `
      new maplibregl.Marker({ element: destEl }).setLngLat(endCoord).addTo(mapTarget)

      // 6. Rider Marker with Pulse Telemetry Animation
      const riderEl = document.createElement('div')
      riderEl.className = 'custom-rider-marker'
      riderEl.innerHTML = `
        <div style="position: relative; width: 46px; height: 46px; display: flex; align-items: center; justify-content: center;">
          <div style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background: rgba(255,101,13,0.35); animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
          <div style="width: 36px; height: 36px; border-radius: 50%; background: #FF650D; border: 2.5px solid #FFF0D5; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; box-shadow: 0 6px 20px rgba(255,101,13,0.7); position: relative; z-index: 2;">
            🛵
          </div>
        </div>
      `
      const riderMarker = new maplibregl.Marker({ element: riderEl })
        .setLngLat(currentRiderCoord)
        .addTo(mapTarget)
      riderMarkerRef.current = riderMarker

      // 7. Fit camera bounds around route
      const bounds = HYDERABAD_ROUTE_COORDINATES.reduce(
        (acc, coord) => acc.extend(coord),
        new maplibregl.LngLatBounds(startCoord, startCoord)
      )
      mapTarget.fitBounds(bounds, {
        padding: { top: 60, bottom: 60, left: 60, right: 60 },
        maxZoom: 15.5,
        duration: 0,
      })

      setIsMapLoading(false)
    }

    try {
      map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: primaryStyleUrl,
        center: [78.4210, 17.4240], // Hyderabad central route view
        zoom: 13.5,
        attributionControl: false,
      })

      // Add navigation controls (zoom & compass)
      map.addControl(new maplibregl.NavigationControl({ showCompass: true }), 'top-right')
      // Add official attribution control
      map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right')

      mapInstanceRef.current = map

      map.on('load', () => {
        setupLayersAndMarkers(map)
      })

      // If vector style fails, gracefully load standard OpenStreetMap raster fallback
      map.on('error', (e) => {
        console.warn('[ARO Map] Primary style error, checking fallback:', e)
        if (isMapLoading) {
          try {
            map.setStyle(OSM_FALLBACK_STYLE)
          } catch {
            setMapError('Map tiles could not be loaded. Please verify internet connection.')
            setIsMapLoading(false)
          }
        }
      })
    } catch (err) {
      console.error('[ARO Map] Map initialization failed:', err)
      setMapError('Failed to initialize MapLibre GL map instance.')
      setIsMapLoading(false)
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  // Update Rider position on the map as progress changes
  useEffect(() => {
    if (riderMarkerRef.current) {
      riderMarkerRef.current.setLngLat(currentRiderCoord)
    }
  }, [currentRiderCoord])

  const handleShareLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopiedNotice(true)
      setTimeout(() => setCopiedNotice(false), 2500)
    }
  }

  const handleCallRider = () => {
    setCallRiderToast(true)
    setTimeout(() => setCallRiderToast(false), 3000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#211A19] text-[#FFF0D5]">
      <StorefrontNavbar cartCount={cartItems.length > 0 ? 1 : 0} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#A89A97]">
            <Link to="/home" className="hover:text-white transition-colors">
              Storefront
            </Link>
            <ChevronRight className="w-3 h-3 text-[#4D3F3C]" />
            <Link to="/account" className="hover:text-white transition-colors">
              Orders
            </Link>
            <ChevronRight className="w-3 h-3 text-[#4D3F3C]" />
            <span className="text-[#FF650D] font-semibold">Live GPS Telemetry (Hyderabad)</span>
          </div>

          <button
            type="button"
            onClick={handleShareLink}
            className="flex items-center gap-1.5 text-xs text-[#A89A97] hover:text-white bg-[#2E2423] border border-[#4D3F3C] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedNotice ? 'Link Copied!' : 'Share Tracking'}</span>
          </button>
        </div>

        {/* Live Delivery Status Hero Card */}
        <div className="bg-[#2E2423] border border-[#4D3F3C] rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF650D]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF650D]/20 border border-[#FF650D]/40 text-xs font-bold text-[#FF650D] uppercase font-['Oswald']">
                  <span className="w-2 h-2 rounded-full bg-[#FF650D] animate-ping" />
                  Live Order Telemetry
                </span>
                <span className="text-xs text-[#A89A97] font-mono">
                  #{order.orderNumber}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                {simulatedStatus === 'delivered' ? (
                  <span className="text-emerald-400">Order Successfully Delivered!</span>
                ) : simulatedStatus === 'out_for_delivery' ? (
                  <span>Courier Out For Delivery</span>
                ) : simulatedStatus === 'rider_assigned' ? (
                  <span>Courier Dispatched to Kitchen</span>
                ) : simulatedStatus === 'kitchen_preparing' ? (
                  <span>Kitchen Prepping Your Course</span>
                ) : (
                  <span>Order Confirmed & Queued</span>
                )}
              </h1>

              <p className="text-xs text-[#A89A97] flex items-center gap-2">
                <Store className="w-3.5 h-3.5 text-[#FF650D]" />
                <span className="text-[#FFF0D5] font-semibold">{order.restaurantNameSnapshot}</span>
                <span>•</span>
                <span>Hyderabad Gourmet Corridor</span>
              </p>
            </div>

            {/* Estimated Time Badge */}
            <div className="bg-[#211A19] border border-[#4D3F3C] px-6 py-4 rounded-xl flex items-center gap-4 shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#641820]/40 border border-[#E9432E]/30 text-[#FF650D] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#A89A97] font-bold block">
                  Estimated Arrival
                </span>
                <span className="text-2xl font-black font-['Oswald'] text-white">
                  {simulatedStatus === 'delivered' ? 'ARRIVED' : `${remainingMinutes} MINS`}
                </span>
              </div>
            </div>
          </div>

          {/* Progress Timeline Stepper */}
          <div className="mt-8 pt-6 border-t border-[#4D3F3C]/60">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
              {[
                { status: 'confirmed', label: 'Confirmed', icon: CheckCircle2, step: 0.15 },
                { status: 'kitchen_preparing', label: 'Preparing', icon: ChefHat, step: 0.35 },
                { status: 'rider_assigned', label: 'Courier Assigned', icon: Navigation, step: 0.5 },
                { status: 'out_for_delivery', label: 'On Route', icon: Bike, step: 0.95 },
                { status: 'delivered', label: 'Delivered', icon: PackageCheck, step: 1.0 },
              ].map((step) => {
                const Icon = step.icon
                const isCompleted = progress >= step.step || simulatedStatus === 'delivered'
                const isCurrent =
                  simulatedStatus === step.status || (step.status === 'confirmed' && progress < 0.15)
                return (
                  <div key={step.status} className="flex flex-col items-center gap-2">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isCompleted
                          ? 'bg-[#FF650D] text-white shadow-lg shadow-[#FF650D]/30'
                          : isCurrent
                          ? 'bg-[#641820] text-[#FF650D] border-2 border-[#FF650D] animate-pulse'
                          : 'bg-[#211A19] text-[#A89A97] border border-[#4D3F3C]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-xs font-semibold ${
                        isCompleted || isCurrent ? 'text-white' : 'text-[#A89A97]'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Continuous Progress Bar */}
            <div className="w-full bg-[#211A19] h-2 rounded-full mt-4 overflow-hidden border border-[#4D3F3C]">
              <div
                className="bg-gradient-to-r from-[#641820] via-[#E9432E] to-[#FF650D] h-full transition-all duration-300"
                style={{ width: `${Math.min(100, progress * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Map and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive MapLibre Viewport */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-[#2E2423] border border-[#4D3F3C] rounded-2xl overflow-hidden shadow-2xl relative">
              {/* Map Title Bar */}
              <div className="px-5 py-3.5 bg-[#211A19] border-b border-[#4D3F3C] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-bold text-white font-['Outfit']">
                    MapLibre Live Telematics
                  </span>
                  <span className="text-[#A89A97]">Banjara Hills → Jubilee Hills, Hyderabad</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-[#A89A97] font-mono">
                    LAT: {currentRiderCoord[1].toFixed(4)} | LNG: {currentRiderCoord[0].toFixed(4)}
                  </span>
                  <button
                    type="button"
                    onClick={handleRecenter}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#2E2423] hover:bg-[#3D302E] border border-[#4D3F3C] text-[11px] text-[#FF650D] hover:text-white transition-colors cursor-pointer"
                    title="Fit route and camera bounds"
                  >
                    <Navigation className="w-3 h-3 text-[#FF650D]" />
                    <span>Recenter</span>
                  </button>
                </div>
              </div>

              {/* Map Container Viewport */}
              <div className="relative w-full h-[480px]">
                <div ref={mapContainerRef} className="w-full h-full bg-[#1a1514]" />

                {/* Loading state indicator */}
                {isMapLoading && (
                  <div className="absolute inset-0 bg-[#211A19]/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 text-white z-10">
                    <Loader2 className="w-8 h-8 text-[#FF650D] animate-spin" />
                    <span className="text-xs font-semibold tracking-wide">
                      Loading Hyderabad Street Vectors...
                    </span>
                  </div>
                )}

                {/* Map Error Notice */}
                {mapError && (
                  <div className="absolute bottom-4 left-4 right-4 bg-red-950/90 border border-red-500/50 p-3 rounded-xl flex items-center gap-3 text-red-200 text-xs z-10">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{mapError}</span>
                  </div>
                )}
              </div>

              {/* Simulation Interactive Control Bar */}
              <div className="p-4 bg-[#211A19] border-t border-[#4D3F3C] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold text-[#FF650D] tracking-wider font-['Oswald']">
                    Demo Controls:
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-lg bg-[#2E2423] hover:bg-[#3D302E] border border-[#4D3F3C] text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                    title={isPlaying ? 'Pause Simulation' : 'Resume Simulation'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#FF650D]" /> : <Play className="w-3.5 h-3.5 text-[#FF650D]" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setProgress(0.0)
                      setIsPlaying(true)
                    }}
                    className="p-2 rounded-lg bg-[#2E2423] hover:bg-[#3D302E] border border-[#4D3F3C] text-[#A89A97] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs"
                    title="Restart Simulation"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-[#A89A97]" />
                    <span>Reset</span>
                  </button>

                  <div className="flex items-center gap-1 pl-2">
                    {[1, 2, 5].map((spd) => (
                      <button
                        key={spd}
                        type="button"
                        onClick={() => setPlaybackSpeed(spd)}
                        className={`px-2 py-1 text-xs rounded font-mono font-bold transition-colors cursor-pointer ${
                          playbackSpeed === spd
                            ? 'bg-[#FF650D] text-white'
                            : 'bg-[#2E2423] text-[#A89A97] hover:text-white border border-[#4D3F3C]'
                        }`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] text-[#A89A97]">
                  GPS coordinate updates refresh automatically via simulated telematics.
                </div>
              </div>
            </div>

            {/* Rider Information Card */}
            {order.rider && (
              <div className="bg-[#2E2423] border border-[#4D3F3C] rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={order.rider.avatarUrl}
                    alt={order.rider.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-[#4D3F3C]"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white font-['Outfit']">
                        {order.rider.name}
                      </h4>
                      <span className="text-[10px] bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-bold px-1.5 py-0.5 rounded">
                        4.9 ★ (1,240 deliveries)
                      </span>
                    </div>
                    <p className="text-xs text-[#A89A97] mt-0.5">
                      {order.rider.vehicleModel} • {order.rider.vehicleNumber}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mt-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Thermal-sealed insulated pouch verified</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleCallRider}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#211A19] hover:bg-[#3D302E] border border-[#4D3F3C] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FF650D]" />
                    <span>Call Courier</span>
                  </button>
                </div>
              </div>
            )}

            {callRiderToast && (
              <div className="p-3 bg-[#641820] border border-[#E9432E] text-white text-xs rounded-xl flex items-center justify-between animate-in fade-in">
                <span>Simulating secure phone bridge to {order.rider?.name} ({order.rider?.phone})...</span>
                <span className="text-[10px] font-mono text-[#FFF0D5]/70">Demo Call Masking</span>
              </div>
            )}
          </div>

          {/* Right Column: Receipt Breakdown & Destination */}
          <div className="lg:col-span-4 space-y-6">
            {/* Delivery Destination Card */}
            <div className="bg-[#2E2423] border border-[#4D3F3C] rounded-2xl p-5 space-y-3">
              <span className="text-[10px] uppercase font-bold text-[#FF650D] tracking-widest font-['Oswald']">
                Delivery Destination
              </span>
              <div className="flex items-start gap-3 pt-1">
                <MapPin className="w-4 h-4 text-[#FF650D] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div className="font-bold text-white">
                    {order.deliveryAddress.label} • {order.deliveryAddress.recipientName}
                  </div>
                  <p className="text-[#A89A97] leading-relaxed">
                    {order.deliveryAddress.addressLine1}
                    {order.deliveryAddress.addressLine2
                      ? `, ${order.deliveryAddress.addressLine2}`
                      : ''}
                    , {order.deliveryAddress.city} - {order.deliveryAddress.pincode}
                  </p>
                  <p className="text-[#A89A97]">{order.deliveryAddress.recipientPhone}</p>
                </div>
              </div>
            </div>

            {/* Order Items & Bill Breakdown */}
            <div className="bg-[#2E2423] border border-[#4D3F3C] rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-[#4D3F3C] pb-3">
                <span className="text-[10px] uppercase font-bold text-[#FF650D] tracking-widest font-['Oswald']">
                  Itemized Tasting Receipt
                </span>
                <Receipt className="w-4 h-4 text-[#A89A97]" />
              </div>

              <div className="space-y-3 max-h-52 overflow-y-auto pr-1">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between text-xs py-1.5 border-b border-[#4D3F3C]/40 last:border-0"
                  >
                    <div className="space-y-0.5 pr-2">
                      <div className="text-white font-medium">
                        {item.quantity}× {item.itemNameSnapshot}
                      </div>
                      {item.customizationDetailsSnapshot &&
                        item.customizationDetailsSnapshot.length > 0 && (
                          <div className="text-[11px] text-[#A89A97]">
                            {item.customizationDetailsSnapshot.map((c) => c.optionName).join(', ')}
                          </div>
                        )}
                    </div>
                    <span className="font-mono text-white shrink-0">
                      {formatCurrency(item.totalPriceSnapshot, 'INR')}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#4D3F3C] pt-3 space-y-1.5 text-xs">
                <div className="flex justify-between text-[#A89A97]">
                  <span>Item Subtotal</span>
                  <span className="font-mono text-white">
                    {formatCurrency(order.itemTotal, 'INR')}
                  </span>
                </div>
                <div className="flex justify-between text-[#A89A97]">
                  <span>Thermal Delivery</span>
                  <span className="font-mono text-white">
                    {order.deliveryFee === 0 ? 'FREE' : formatCurrency(order.deliveryFee, 'INR')}
                  </span>
                </div>
                <div className="flex justify-between text-[#A89A97]">
                  <span>GST & Service Levies</span>
                  <span className="font-mono text-white">
                    {formatCurrency(order.taxAmount, 'INR')}
                  </span>
                </div>
                {order.discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Privilege Voucher</span>
                    <span className="font-mono">
                      -{formatCurrency(order.discountAmount, 'INR')}
                    </span>
                  </div>
                )}
                <div className="border-t border-[#4D3F3C] pt-2 flex justify-between items-center text-sm font-bold text-white">
                  <span>Paid via {order.paymentMethod}</span>
                  <span className="text-base font-mono text-[#FF650D]">
                    {formatCurrency(order.finalPaidAmount, 'INR')}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/restaurants"
                  className="w-full py-2.5 rounded-xl bg-[#211A19] hover:bg-[#3D302E] border border-[#4D3F3C] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore More Kitchens</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF650D]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  )
}

export default OrderTrackingPage
