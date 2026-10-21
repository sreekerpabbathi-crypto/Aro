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
  Info,
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'
import { formatCurrency } from '@/lib/utils'
import { StorefrontNavbar } from '@/features/storefront/StorefrontNavbar'
import { StorefrontFooter } from '@/features/storefront/StorefrontFooter'
import { INITIAL_RESTAURANTS, LEGACY_FALLBACK_RESTAURANTS } from '@/services/catalogService'
import {
  fetchRoadRoute,
  interpolatePositionAlongRoute,
  calculateBearing,
  type RouteSegmentData,
} from '@/services/routingService'
import { ScribbleUnderline, WashiTape } from '@/components/sketch/SketchDoodles'
import type { Order, OrderStatus } from '@/types'

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

// Demo Orders with authentic Hyderabad coordinates
const DEMO_ORDERS: Record<string, Order> = {
  'ord-demo-hyderabad': {
    id: 'ord-demo-hyderabad',
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
      addressLine1: 'Villa 14, Whispering Palms',
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
        description: 'Courier en route via road network with road-following telemetry.',
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
  },
  'ord-demo-hitec': {
    id: 'ord-demo-hitec',
    orderNumber: 'ARO-719302',
    customerId: '00000001-0000-0000-0000-000000000001',
    restaurantId: 'b0000004-0000-0000-0000-000000000004',
    restaurantNameSnapshot: 'Nizami Hearth',
    restaurantAddressSnapshot: 'Cyber Towers Road, HITEC City, Hyderabad',
    status: 'out_for_delivery',
    placedAt: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
    estimatedDeliveryAt: new Date(Date.now() + 14 * 60 * 1000).toISOString(),
    deliveryAddress: {
      label: 'Home',
      recipientName: 'Sreeram K',
      recipientPhone: '+91 98765 01234',
      addressLine1: 'Villa 14, Whispering Palms',
      addressLine2: 'Road No. 36, Jubilee Hills',
      landmark: 'Near Peddamma Temple Metro',
      city: 'Hyderabad',
      pincode: '500033',
      latitude: 17.4325,
      longitude: 78.4072,
    },
    items: [
      {
        id: 'oi-demo-3',
        menuItemId: 'm-saffron-1',
        itemNameSnapshot: '24hr Dal Bukhara & Truffle Kulcha',
        itemPriceSnapshot: 680,
        quantity: 2,
        totalPriceSnapshot: 1360,
        customizationDetailsSnapshot: [],
      },
    ],
    itemTotal: 1360,
    deliveryFee: 70,
    taxAmount: 68,
    discountAmount: 100,
    finalPaidAmount: 1398,
    paymentMethod: 'UPI',
    paymentStatus: 'PAID',
    rider: {
      name: 'Ramesh Varma',
      phone: '+91 98111 23456',
      vehicleModel: 'Ola S1 Pro Electric Scooter',
      vehicleNumber: 'TS 07 FX 9021',
      avatarUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      currentLatitude: 17.4455,
      currentLongitude: 78.3858,
    },
    timeline: [
      {
        status: 'placed',
        title: 'Order Placed & Transmitted',
        description: 'Payment confirmed and sent to kitchen.',
        timestamp: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
        isCompleted: true,
      },
      {
        status: 'confirmed',
        title: 'Kitchen Acknowledged',
        description: 'Bukhara pot sealed and packaged.',
        timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
        isCompleted: true,
      },
      {
        status: 'kitchen_preparing',
        title: 'Artisanal Preparation',
        description: 'Truffle kulchas baked fresh in tandoor.',
        timestamp: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
        isCompleted: true,
      },
      {
        status: 'rider_assigned',
        title: 'Courier Picked Up',
        description: 'Ramesh Varma collected warm thermal pack from HITEC City.',
        timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
        isCompleted: true,
      },
      {
        status: 'out_for_delivery',
        title: 'En Route to Jubilee Hills',
        description: 'Courier navigating via Durgam Cheruvu arterial roads.',
        timestamp: new Date().toISOString(),
        isCompleted: true,
      },
      {
        status: 'delivered',
        title: 'Delivered',
        description: 'Handover complete.',
        timestamp: new Date(Date.now() + 14 * 60 * 1000).toISOString(),
        isCompleted: false,
      },
    ],
  },
  'ord-demo-deccan': {
    id: 'ord-demo-deccan',
    orderNumber: 'ARO-554180',
    customerId: '00000001-0000-0000-0000-000000000001',
    restaurantId: 'b0000001-0000-0000-0000-000000000001',
    restaurantNameSnapshot: 'Deccan Table',
    restaurantAddressSnapshot: 'Road No. 36, Jubilee Hills, Hyderabad',
    status: 'out_for_delivery',
    placedAt: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    estimatedDeliveryAt: new Date(Date.now() + 22 * 60 * 1000).toISOString(),
    deliveryAddress: {
      label: 'Work',
      recipientName: 'Sreeram K',
      recipientPhone: '+91 98765 01234',
      addressLine1: 'Level 12, Cyber Towers',
      addressLine2: 'Hitech City Main Road, Madhapur',
      landmark: 'Opposite Shilparamam',
      city: 'Hyderabad',
      pincode: '500081',
      latitude: 17.4504,
      longitude: 78.3808,
    },
    items: [
      {
        id: 'oi-demo-4',
        menuItemId: 'm-deccan-1',
        itemNameSnapshot: 'Slow-Smoked Deccani Marag & Sheermal',
        itemPriceSnapshot: 1150,
        quantity: 1,
        totalPriceSnapshot: 1150,
        customizationDetailsSnapshot: [],
      },
    ],
    itemTotal: 1150,
    deliveryFee: 80,
    taxAmount: 58,
    discountAmount: 0,
    finalPaidAmount: 1288,
    paymentMethod: 'UPI',
    paymentStatus: 'PAID',
    rider: {
      name: 'Syed Farhan',
      phone: '+91 98777 44332',
      vehicleModel: 'Bajaj Chetak EV',
      vehicleNumber: 'TS 10 AB 3341',
      avatarUrl:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      currentLatitude: 17.4360,
      currentLongitude: 78.3980,
    },
    timeline: [
      {
        status: 'placed',
        title: 'Order Placed',
        description: 'Payment authorized.',
        timestamp: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
        isCompleted: true,
      },
      {
        status: 'confirmed',
        title: 'Confirmed by Atelier',
        description: 'Simmered broth transferred to insulated carrier.',
        timestamp: new Date(Date.now() - 7 * 60 * 1000).toISOString(),
        isCompleted: true,
      },
      {
        status: 'kitchen_preparing',
        title: 'Artisanal Preparation',
        description: 'Sheermal bread packaged.',
        timestamp: new Date(Date.now() - 4 * 60 * 1000).toISOString(),
        isCompleted: true,
      },
      {
        status: 'rider_assigned',
        title: 'Courier Dispatched',
        description: 'Syed Farhan on route to Cyber Towers.',
        timestamp: new Date().toISOString(),
        isCompleted: true,
      },
      {
        status: 'out_for_delivery',
        title: 'En Route to Cyber Towers',
        description: 'Traveling via Jubilee Hills Rd 36 to Madhapur corridor.',
        timestamp: new Date().toISOString(),
        isCompleted: true,
      },
      {
        status: 'delivered',
        title: 'Delivered',
        description: 'Handover complete.',
        timestamp: new Date(Date.now() + 22 * 60 * 1000).toISOString(),
        isCompleted: false,
      },
    ],
  },
}

/**
 * Resolves restaurant coordinates [longitude, latitude] for the given order.
 * Follows MapLibre GeoJSON ordering: [longitude, latitude].
 */
function getOrderRestaurantCoords(order: Order): [number, number] {
  const r =
    INITIAL_RESTAURANTS.find((item) => item.id === order.restaurantId || item.slug === order.restaurantId) ||
    LEGACY_FALLBACK_RESTAURANTS.find((item) => item.id === order.restaurantId || item.slug === order.restaurantId)

  if (r && Number.isFinite(r.longitude) && Number.isFinite(r.latitude) && r.latitude > 16) {
    return [r.longitude, r.latitude]
  }

  const addr = (order.restaurantAddressSnapshot || '').toLowerCase()
  const name = (order.restaurantNameSnapshot || '').toLowerCase()

  if (addr.includes('hitec') || name.includes('nizami')) {
    return [78.3808, 17.4504]
  }
  if (addr.includes('banjara') || name.includes('kumo')) {
    return [78.4352, 17.4156]
  }
  if (addr.includes('jubilee') || name.includes('deccan')) {
    return [78.4072, 17.4325]
  }

  return [78.4352, 17.4156]
}

/**
 * Resolves customer delivery coordinates [longitude, latitude] for the given order.
 * Follows MapLibre GeoJSON ordering: [longitude, latitude].
 */
function getOrderDeliveryCoords(order: Order): [number, number] {
  const addr = order.deliveryAddress
  if (!addr) {
    return [78.4072, 17.4325]
  }

  const isSreeram =
    order.customerId === '00000001-0000-0000-0000-000000000001' ||
    order.customerId === 'demo-user-1' ||
    (addr.recipientName || '').toLowerCase().includes('sreeram') ||
    (addr.addressLine1 || '').toLowerCase().includes('whispering palms')

  if (isSreeram && ((addr.addressLine1 || '').toLowerCase().includes('whispering') || (addr.city === 'Bengaluru' || addr.city === 'Bangalore'))) {
    return [78.4072, 17.4325]
  }

  if (isSreeram && (addr.addressLine1 || '').toLowerCase().includes('cyber towers')) {
    return [78.3808, 17.4504]
  }

  if (Number.isFinite(addr.longitude) && Number.isFinite(addr.latitude) && addr.latitude > 15) {
    return [addr.longitude, addr.latitude]
  }

  return [78.4072, 17.4325]
}

export const OrderTrackingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { orders } = useAuth()
  const { items: cartItems } = useCart()

  // Selected Order
  const order: Order = useMemo(() => {
    const foundAuth = orders.find((o) => o.id === id)
    if (foundAuth) {
      if (
        foundAuth.deliveryAddress &&
        (foundAuth.deliveryAddress.city === 'Bengaluru' || foundAuth.deliveryAddress.city === 'Bangalore') &&
        (foundAuth.customerId === '00000001-0000-0000-0000-000000000001' || foundAuth.customerId === 'demo-user-1')
      ) {
        return {
          ...foundAuth,
          deliveryAddress: {
            ...foundAuth.deliveryAddress,
            label: 'Home',
            recipientName: foundAuth.deliveryAddress.recipientName || 'Sreeram K',
            recipientPhone: foundAuth.deliveryAddress.recipientPhone || '+91 98765 01234',
            addressLine1: 'Villa 14, Whispering Palms',
            addressLine2: 'Road No. 36, Jubilee Hills',
            landmark: 'Near Peddamma Temple Metro',
            city: 'Hyderabad',
            pincode: '500033',
            latitude: 17.4325,
            longitude: 78.4072,
          },
        }
      }
      return foundAuth
    }

    if (id && DEMO_ORDERS[id]) {
      return DEMO_ORDERS[id]
    }

    return DEMO_ORDERS['ord-demo-hyderabad']
  }, [id, orders])

  // Extract restaurant and delivery coordinates [longitude, latitude]
  const restaurantCoord = useMemo<[number, number]>(() => getOrderRestaurantCoords(order), [order])
  const deliveryCoord = useMemo<[number, number]>(() => getOrderDeliveryCoords(order), [order])

  // Route state
  const [routeData, setRouteData] = useState<RouteSegmentData | null>(null)
  const [isRouteCalculating, setIsRouteCalculating] = useState<boolean>(true)
  const [routeNotice, setRouteNotice] = useState<string | null>(null)

  // Simulation & Playback State
  const [progress, setProgress] = useState<number>(0.0)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1)
  const [currentCoordDisplay, setCurrentCoordDisplay] = useState<[number, number]>(restaurantCoord)

  // UI Notices
  const [copiedNotice, setCopiedNotice] = useState(false)
  const [callRiderToast, setCallRiderToast] = useState(false)
  const [isMapLoading, setIsMapLoading] = useState(true)
  const [mapError, setMapError] = useState<string | null>(null)

  // References
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const mapInstanceRef = useRef<maplibregl.Map | null>(null)
  const riderMarkerRef = useRef<maplibregl.Marker | null>(null)
  const headingDiscRef = useRef<HTMLDivElement | null>(null)
  const restaurantMarkerRef = useRef<maplibregl.Marker | null>(null)
  const destinationMarkerRef = useRef<maplibregl.Marker | null>(null)

  // Animation frame & timing references
  const animFrameIdRef = useRef<number | null>(null)
  const lastTimestampRef = useRef<number | null>(null)
  const lastUiUpdateRef = useRef<number>(0)
  const progressRef = useRef<number>(0.0)
  const isPlayingRef = useRef<boolean>(true)
  const playbackSpeedRef = useRef<number>(1)
  const routeDataRef = useRef<RouteSegmentData | null>(null)

  // Sync refs when states change
  useEffect(() => {
    progressRef.current = progress
    isPlayingRef.current = isPlaying
    playbackSpeedRef.current = playbackSpeed
    routeDataRef.current = routeData
  }, [progress, isPlaying, playbackSpeed, routeData])

  // 1. Fetch real road-following route from OSRM whenever origin/destination change
  useEffect(() => {
    let isCancelled = false

    fetchRoadRoute(restaurantCoord, deliveryCoord)
      .then((data) => {
        if (isCancelled) return
        setRouteData(data)
        setIsRouteCalculating(false)
        if (data.isFallback) {
          setRouteNotice(
            data.errorMessage
              ? `Road routing service unavailable (${data.errorMessage}). Displaying approximate direct path.`
              : 'Road routing service unavailable. Displaying approximate direct path.'
          )
        } else {
          setRouteNotice(null)
        }
      })
      .catch((err) => {
        if (isCancelled) return
        console.warn('[ARO Tracking] Failed to calculate route:', err)
        setIsRouteCalculating(false)
      })

    return () => {
      isCancelled = true
    }
  }, [restaurantCoord, deliveryCoord])

  // Recenter map camera on delivery bounds
  const handleRecenter = useCallback(() => {
    if (!mapInstanceRef.current || !routeData || routeData.coordinates.length < 2) return
    const bounds = routeData.coordinates.reduce(
      (acc, coord) => acc.extend(coord),
      new maplibregl.LngLatBounds(routeData.coordinates[0], routeData.coordinates[0])
    )
    mapInstanceRef.current.fitBounds(bounds, {
      padding: { top: 70, bottom: 70, left: 70, right: 70 },
      maxZoom: 15.5,
      duration: 800,
    })
  }, [routeData])

  // Dynamic status mapping based on progress
  const simulatedStatus: OrderStatus = useMemo(() => {
    if (progress < 0.15) return 'confirmed'
    if (progress < 0.35) return 'kitchen_preparing'
    if (progress < 0.5) return 'rider_assigned'
    if (progress < 0.95) return 'out_for_delivery'
    return 'delivered'
  }, [progress])

  // Estimated minutes remaining based on real route distance/duration
  const remainingMinutes = useMemo(() => {
    if (simulatedStatus === 'delivered' || progress >= 1) return 0
    const routeTravelMinutes = routeData ? Math.ceil(routeData.duration / 60) : 15
    const totalMinutes = Math.max(12, routeTravelMinutes + 12)
    return Math.max(1, Math.round((1 - progress) * totalMinutes))
  }, [progress, simulatedStatus, routeData])

  // 2. High-performance, smooth rider animation loop with requestAnimationFrame
  useEffect(() => {
    if (!isPlaying || !routeData || routeData.coordinates.length < 2) {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current)
        animFrameIdRef.current = null
      }
      return
    }

    if (progressRef.current >= 1) {
      setIsPlaying(false)
      return
    }

    const fullTripDurationMs = 45000

    const step = (timestamp: number) => {
      if (!isPlayingRef.current) return

      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp
      }
      const deltaMs = timestamp - lastTimestampRef.current
      lastTimestampRef.current = timestamp

      if (deltaMs > 0 && routeDataRef.current) {
        const deltaProgress = (deltaMs / fullTripDurationMs) * playbackSpeedRef.current
        let next = progressRef.current + deltaProgress

        if (next >= 1) {
          next = 1
          progressRef.current = 1
          setIsPlaying(false)
          isPlayingRef.current = false
        } else {
          progressRef.current = next
        }

        const { coord, bearing } = interpolatePositionAlongRoute(routeDataRef.current, next)

        if (riderMarkerRef.current) {
          riderMarkerRef.current.setLngLat(coord)
        }
        if (headingDiscRef.current) {
          headingDiscRef.current.style.transform = `rotate(${Math.round(bearing)}deg)`
        }

        if (timestamp - lastUiUpdateRef.current > 120 || next >= 1) {
          lastUiUpdateRef.current = timestamp
          setProgress(next)
          setCurrentCoordDisplay(coord)
        }
      }

      if (isPlayingRef.current && progressRef.current < 1) {
        animFrameIdRef.current = requestAnimationFrame(step)
      }
    }

    lastTimestampRef.current = null
    animFrameIdRef.current = requestAnimationFrame(step)

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current)
        animFrameIdRef.current = null
      }
    }
  }, [isPlaying, routeData])

  // Reset simulation handler
  const handleReset = useCallback(() => {
    progressRef.current = 0.0
    setProgress(0.0)
    setIsPlaying(true)
    lastTimestampRef.current = null

    if (routeData && routeData.coordinates.length > 0) {
      const start = routeData.coordinates[0]
      setCurrentCoordDisplay(start)
      if (riderMarkerRef.current) {
        riderMarkerRef.current.setLngLat(start)
      }
      if (headingDiscRef.current && routeData.coordinates.length > 1) {
        const initialBearing = calculateBearing(routeData.coordinates[0], routeData.coordinates[1])
        headingDiscRef.current.style.transform = `rotate(${Math.round(initialBearing)}deg)`
      }
    }
  }, [routeData])

  // Speed change handler
  const handleSpeedChange = (spd: number) => {
    setPlaybackSpeed(spd)
    playbackSpeedRef.current = spd
    lastTimestampRef.current = null
  }

  // Play / Pause toggle handler
  const handlePlayPause = () => {
    if (progress >= 1) {
      handleReset()
    } else {
      setIsPlaying((prev) => !prev)
    }
  }

  // 3. Initialize MapLibre GL Map
  useEffect(() => {
    if (!mapContainerRef.current) return

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove()
      mapInstanceRef.current = null
    }

    const primaryStyleUrl =
      import.meta.env.VITE_MAPLIBRE_STYLE_URL || 'https://tiles.openfreemap.org/styles/bright'

    let map: maplibregl.Map

    try {
      map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: primaryStyleUrl,
        center: restaurantCoord,
        zoom: 13.5,
        attributionControl: false,
      })

      map.addControl(new maplibregl.NavigationControl({ showCompass: true }), 'top-right')
      map.addControl(
        new maplibregl.AttributionControl({
          compact: true,
          customAttribution: 'Routing &copy; OSRM &amp; OpenStreetMap contributors',
        }),
        'bottom-right'
      )

      mapInstanceRef.current = map

      map.on('load', () => {
        setIsMapLoading(false)

        const initialCoords =
          routeDataRef.current?.coordinates || [restaurantCoord, deliveryCoord]

        if (!map.getSource('route-line')) {
          map.addSource('route-line', {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: initialCoords,
              },
            },
          })
        }

        if (!map.getLayer('route-glow')) {
          map.addLayer({
            id: 'route-glow',
            type: 'line',
            source: 'route-line',
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#FF650D',
              'line-width': 10,
              'line-opacity': 0.35,
            },
          })
        }

        if (!map.getLayer('route-main')) {
          map.addLayer({
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

        // Restaurant Marker
        const resEl = document.createElement('div')
        resEl.className = 'custom-res-marker cursor-pointer'
        resEl.style.display = 'flex'
        resEl.style.flexDirection = 'column'
        resEl.style.alignItems = 'center'
        resEl.innerHTML = `
          <div style="background: #121212; border: 2.5px solid #FF650D; color: #FFF4C2; width: 42px; height: 42px; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 3px 3px 0px #121212; font-size: 20px;">
            👨‍🍳
          </div>
          <div style="background: #FFF4C2; border: 2px solid #121212; color: #121212; font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 6px; white-space: nowrap; margin-top: 4px; box-shadow: 2px 2px 0px #121212;">
            ${order.restaurantNameSnapshot}
          </div>
        `
        const resMarker = new maplibregl.Marker({ element: resEl }).setLngLat(restaurantCoord).addTo(map)
        restaurantMarkerRef.current = resMarker

        // Destination Marker
        const destEl = document.createElement('div')
        destEl.className = 'custom-dest-marker cursor-pointer'
        destEl.style.display = 'flex'
        destEl.style.flexDirection = 'column'
        destEl.style.alignItems = 'center'
        destEl.innerHTML = `
          <div style="background: #FFD13B; border: 2.5px solid #121212; color: #121212; width: 42px; height: 42px; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 3px 3px 0px #121212; font-size: 20px;">
            🏠
          </div>
          <div style="background: white; border: 2px solid #121212; color: #121212; font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 6px; white-space: nowrap; margin-top: 4px; box-shadow: 2px 2px 0px #121212;">
            ${order.deliveryAddress.label} • ${order.deliveryAddress.city}
          </div>
        `
        const destMarker = new maplibregl.Marker({ element: destEl }).setLngLat(deliveryCoord).addTo(map)
        destinationMarkerRef.current = destMarker

        // Rider Marker with Directional Heading
        const riderEl = document.createElement('div')
        riderEl.className = 'custom-rider-marker'
        riderEl.innerHTML = `
          <div style="position: relative; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;">
            <div style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background: rgba(255,101,13,0.35); animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
            <div id="rider-heading-disc" style="width: 40px; height: 40px; border-radius: 50%; background: #FF650D; border: 2.5px solid #121212; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; box-shadow: 3px 3px 0px #121212; position: relative; z-2; transition: transform 0.15s ease-out;">
              <div style="position: absolute; top: -5px; width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-bottom: 7px solid #121212;"></div>
              <span style="font-size: 18px; user-select: none;">🛵</span>
            </div>
          </div>
        `
        const headingDisc = riderEl.querySelector<HTMLDivElement>('#rider-heading-disc')
        headingDiscRef.current = headingDisc

        const riderMarker = new maplibregl.Marker({ element: riderEl })
          .setLngLat(restaurantCoord)
          .addTo(map)
        riderMarkerRef.current = riderMarker

        // Fit initial camera bounds
        const bounds = initialCoords.reduce(
          (acc, coord) => acc.extend(coord),
          new maplibregl.LngLatBounds(restaurantCoord, restaurantCoord)
        )
        map.fitBounds(bounds, {
          padding: { top: 70, bottom: 70, left: 70, right: 70 },
          maxZoom: 15.5,
          duration: 0,
        })
      })

      map.on('error', (e) => {
        console.warn('[ARO Map] Primary style error, checking fallback:', e)
        if (map && !map.getSource('osm-fallback-tiles')) {
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
      setTimeout(() => {
        setMapError('Failed to initialize MapLibre GL map instance.')
        setIsMapLoading(false)
      }, 0)
    }

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current)
      }
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [restaurantCoord, deliveryCoord, order.restaurantNameSnapshot, order.deliveryAddress.label, order.deliveryAddress.city])

  // 4. Update Map Route Geometry and Markers when RouteData changes
  useEffect(() => {
    const map = mapInstanceRef.current
    if (!map || !routeData || routeData.coordinates.length < 2) return

    if (restaurantMarkerRef.current) {
      restaurantMarkerRef.current.setLngLat(restaurantCoord)
    }
    if (destinationMarkerRef.current) {
      destinationMarkerRef.current.setLngLat(deliveryCoord)
    }

    const source = map.getSource('route-line') as maplibregl.GeoJSONSource | undefined
    if (source) {
      source.setData({
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: routeData.coordinates,
        },
      })

      if (map.getLayer('route-main')) {
        if (routeData.isFallback) {
          map.setPaintProperty('route-main', 'line-dasharray', [3, 2])
          map.setPaintProperty('route-main', 'line-color', '#F59E0B')
          if (map.getLayer('route-glow')) {
            map.setPaintProperty('route-glow', 'line-color', '#F59E0B')
          }
        } else {
          map.setPaintProperty('route-main', 'line-dasharray', undefined)
          map.setPaintProperty('route-main', 'line-color', '#FF650D')
          if (map.getLayer('route-glow')) {
            map.setPaintProperty('route-glow', 'line-color', '#FF650D')
          }
        }
      }
    }

    const bounds = routeData.coordinates.reduce(
      (acc, coord) => acc.extend(coord),
      new maplibregl.LngLatBounds(routeData.coordinates[0], routeData.coordinates[0])
    )
    map.fitBounds(bounds, {
      padding: { top: 70, bottom: 70, left: 70, right: 70 },
      maxZoom: 15.5,
      duration: 800,
    })

    handleReset()
  }, [routeData, restaurantCoord, deliveryCoord, handleReset])

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
    <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#121212] paper-grid">
      <StorefrontNavbar cartCount={cartItems.length > 0 ? 1 : 0} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumb Navigation & Order Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold font-['Oswald'] uppercase tracking-wider text-[#5E5854]">
            <Link to="/home" className="hover:text-[#121212] transition-colors">
              Storefront
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#121212]/40" />
            <Link to="/account" className="hover:text-[#121212] transition-colors">
              Orders
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#121212]/40" />
            <span className="text-[#FF650D] bg-[#FFF4C2] border border-[#121212] px-2 py-0.5 rounded shadow-[1px_1px_0px_#121212]">
              Real Road-Network Telemetry (Hyderabad)
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            {/* Quick Demo Order Switcher */}
            <div className="flex items-center gap-1.5 bg-white border-2 border-[#121212] px-3 py-1.5 rounded-xl shadow-[2px_2px_0px_#121212] text-xs">
              <span className="text-[11px] font-bold font-['Oswald'] text-[#5E5854] uppercase tracking-wider">Test Route:</span>
              <Link
                to="/orders/ord-demo-hyderabad"
                className={`px-2 py-0.5 rounded-md text-[11px] font-bold font-['Outfit'] transition-all ${
                  order.id === 'ord-demo-hyderabad' ? 'bg-[#FF650D] text-white border border-[#121212]' : 'text-[#5E5854] hover:text-[#121212]'
                }`}
                title="Kumo House (Banjara Hills) -> Jubilee Hills"
              >
                Kumo House
              </Link>
              <Link
                to="/orders/ord-demo-hitec"
                className={`px-2 py-0.5 rounded-md text-[11px] font-bold font-['Outfit'] transition-all ${
                  order.id === 'ord-demo-hitec' ? 'bg-[#FF650D] text-white border border-[#121212]' : 'text-[#5E5854] hover:text-[#121212]'
                }`}
                title="Nizami Hearth (HITEC City) -> Jubilee Hills"
              >
                Nizami Hearth
              </Link>
              <Link
                to="/orders/ord-demo-deccan"
                className={`px-2 py-0.5 rounded-md text-[11px] font-bold font-['Outfit'] transition-all ${
                  order.id === 'ord-demo-deccan' ? 'bg-[#FF650D] text-white border border-[#121212]' : 'text-[#5E5854] hover:text-[#121212]'
                }`}
                title="Deccan Table (Jubilee Hills) -> Cyber Towers"
              >
                Deccan Table
              </Link>
            </div>

            <button
              type="button"
              onClick={handleShareLink}
              className="flex items-center gap-1.5 text-xs font-bold font-['Outfit'] text-[#121212] bg-white border-2 border-[#121212] px-3.5 py-1.5 rounded-xl shadow-[2px_2px_0px_#121212] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer shrink-0"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedNotice ? 'Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Live Delivery Status Hero Card */}
        <div className="bg-white border-2 sm:border-[2.5px] border-[#121212] rounded-2xl p-6 sm:p-7 relative shadow-[8px_8px_0px_#121212]">
          <div className="absolute -top-3 right-8 hidden sm:block">
            <WashiTape text="LIVE ROAD RADAR" angle="-1deg" className="bg-[#FF650D] text-white" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFD13B] border-2 border-[#121212] text-xs font-black text-[#121212] uppercase font-['Oswald'] shadow-[2px_2px_0px_#121212]">
                  <span className="w-2 h-2 rounded-full bg-[#FF650D] animate-ping" />
                  Road-Following Telemetry
                </span>
                <span className="text-xs font-mono font-bold text-[#5E5854] bg-[#FAF6EE] border border-[#121212] px-2 py-0.5 rounded">
                  #{order.orderNumber}
                </span>
                {routeData && (
                  <span className="text-[11px] bg-[#FAF6EE] border-2 border-[#121212] px-2.5 py-0.5 rounded-lg text-[#121212] font-mono font-bold hidden sm:inline-block shadow-[1px_1px_0px_#121212]">
                    {(routeData.totalDistance / 1000).toFixed(2)} km road distance
                  </span>
                )}
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-[#121212] font-['Outfit'] tracking-tight">
                  {simulatedStatus === 'delivered' ? (
                    <span className="text-[#059669]">Order Successfully Delivered!</span>
                  ) : simulatedStatus === 'out_for_delivery' ? (
                    <span>Courier En Route Along Road Network</span>
                  ) : simulatedStatus === 'rider_assigned' ? (
                    <span>Courier Dispatched to Kitchen</span>
                  ) : simulatedStatus === 'kitchen_preparing' ? (
                    <span>Kitchen Prepping Your Course</span>
                  ) : (
                    <span>Order Confirmed & Queued</span>
                  )}
                </h1>
                <div className="w-36 text-[#FF650D] mt-0.5">
                  <ScribbleUnderline />
                </div>
              </div>

              <p className="text-xs text-[#5E5854] font-medium flex flex-wrap items-center gap-2 pt-1">
                <Store className="w-4 h-4 text-[#FF650D]" />
                <span className="text-[#121212] font-bold">{order.restaurantNameSnapshot}</span>
                <span>•</span>
                <span>{order.restaurantAddressSnapshot || 'Hyderabad Gourmet Corridor'}</span>
              </p>
            </div>

            {/* Estimated Time Badge */}
            <div className="bg-[#FFF4C2] border-2 sm:border-[2.5px] border-[#121212] px-6 py-4 rounded-2xl flex items-center gap-4 shrink-0 shadow-[4px_4px_0px_#121212]">
              <div className="w-12 h-12 rounded-xl bg-[#FF650D] border-2 border-[#121212] text-white flex items-center justify-center shadow-[2px_2px_0px_#121212]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#5E5854] font-bold block font-['Oswald']">
                  Estimated Arrival
                </span>
                <span className="text-2xl sm:text-3xl font-black font-['Oswald'] text-[#121212]">
                  {simulatedStatus === 'delivered' ? 'ARRIVED' : `${remainingMinutes} MINS`}
                </span>
              </div>
            </div>
          </div>

          {/* Progress Timeline Stepper */}
          <div className="mt-8 pt-6 border-t-2 border-[#121212]">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
              {[
                { status: 'confirmed', label: 'Confirmed', icon: CheckCircle2, step: 0.15 },
                { status: 'kitchen_preparing', label: 'Preparing', icon: ChefHat, step: 0.35 },
                { status: 'rider_assigned', label: 'Courier Assigned', icon: Navigation, step: 0.5 },
                { status: 'out_for_delivery', label: 'On Road Route', icon: Bike, step: 0.95 },
                { status: 'delivered', label: 'Delivered', icon: PackageCheck, step: 1.0 },
              ].map((step) => {
                const Icon = step.icon
                const isCompleted = progress >= step.step || simulatedStatus === 'delivered'
                const isCurrent =
                  simulatedStatus === step.status || (step.status === 'confirmed' && progress < 0.15)
                return (
                  <div key={step.status} className="flex flex-col items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 border-[#121212] transition-all ${
                        isCompleted
                          ? 'bg-[#FF650D] text-white shadow-[2px_2px_0px_#121212]'
                          : isCurrent
                          ? 'bg-[#FFD13B] text-[#121212] shadow-[2px_2px_0px_#121212] animate-pulse'
                          : 'bg-[#FAF6EE] text-[#5E5854]/50 border-[#121212]/30'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-xs font-bold font-['Outfit'] ${
                        isCompleted || isCurrent ? 'text-[#121212]' : 'text-[#5E5854]'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Continuous Progress Bar */}
            <div className="w-full bg-[#FAF6EE] h-3 rounded-full mt-5 overflow-hidden border-2 border-[#121212] shadow-[2px_2px_0px_#121212]">
              <div
                className="bg-gradient-to-r from-[#FFD13B] via-[#FF650D] to-[#E55400] h-full transition-all duration-150"
                style={{ width: `${Math.min(100, progress * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Map and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive MapLibre Viewport */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white border-2 sm:border-[2.5px] border-[#121212] rounded-2xl overflow-hidden shadow-[8px_8px_0px_#121212] relative">
              {/* Map Title Bar */}
              <div className="px-5 py-3.5 bg-[#FFF4C2] border-b-2 border-[#121212] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-ping" />
                  <span className="font-black text-[#121212] font-['Outfit'] text-sm">
                    MapLibre Road Navigation
                  </span>
                  <span className="text-[#5E5854] font-medium hidden sm:inline">
                    {order.restaurantNameSnapshot} → {order.deliveryAddress.city}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#121212] font-mono font-bold bg-white px-2 py-0.5 rounded border border-[#121212]">
                    LAT: {currentCoordDisplay[1].toFixed(4)} | LNG: {currentCoordDisplay[0].toFixed(4)}
                  </span>
                  <button
                    type="button"
                    onClick={handleRecenter}
                    className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white hover:bg-[#FAF6EE] border-2 border-[#121212] text-xs font-bold font-['Outfit'] text-[#121212] shadow-[2px_2px_0px_#121212] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer"
                    title="Fit route and camera bounds"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#FF650D]" />
                    <span>Recenter</span>
                  </button>
                </div>
              </div>

              {/* Map Container Viewport */}
              <div className="relative w-full h-[380px] sm:h-[480px]">
                <div ref={mapContainerRef} className="w-full h-full bg-[#e8e4dc]" />

                {/* Loading state indicator */}
                {isMapLoading && (
                  <div className="absolute inset-0 bg-white/85 backdrop-blur-sm flex flex-col items-center justify-center gap-3 text-[#121212] z-10">
                    <Loader2 className="w-8 h-8 text-[#FF650D] animate-spin" />
                    <span className="text-xs font-black tracking-wide font-['Outfit']">
                      Loading Hyderabad Street Vectors...
                    </span>
                  </div>
                )}

                {/* Route Calculating Indicator */}
                {isRouteCalculating && (
                  <div className="absolute top-4 left-4 bg-white/95 border-2 border-[#121212] backdrop-blur-md px-3.5 py-2 rounded-xl flex items-center gap-2 text-[#121212] text-xs z-10 shadow-[3px_3px_0px_#121212] font-bold">
                    <Loader2 className="w-3.5 h-3.5 text-[#FF650D] animate-spin" />
                    <span>Calculating road route via OSRM...</span>
                  </div>
                )}

                {/* Non-blocking Route Notice / Fallback Banner */}
                {routeNotice && (
                  <div className="absolute top-4 left-4 right-4 bg-[#FEF3C7] border-2 border-[#F59E0B] p-3 rounded-xl flex items-center gap-3 text-[#92400E] text-xs z-10 shadow-[4px_4px_0px_#F59E0B] animate-in fade-in">
                    <AlertCircle className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <div className="flex-1 font-medium">
                      <span className="font-bold block">Approximate Route Active</span>
                      <span>{routeNotice}</span>
                    </div>
                  </div>
                )}

                {/* Map Error Notice */}
                {mapError && (
                  <div className="absolute bottom-4 left-4 right-4 bg-[#FEE2E2] border-2 border-[#EF4444] p-3 rounded-xl flex items-center gap-3 text-[#B91C1C] text-xs z-10 shadow-[4px_4px_0px_#EF4444] font-bold">
                    <AlertCircle className="w-4 h-4 text-[#EF4444] shrink-0" />
                    <span>{mapError}</span>
                  </div>
                )}
              </div>

              {/* Simulation Interactive Control Bar */}
              <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#121212] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] uppercase font-black text-[#121212] tracking-wider font-['Oswald'] bg-[#FFD13B] border border-[#121212] px-2 py-0.5 rounded">
                    Controls:
                  </span>

                  <button
                    type="button"
                    onClick={handlePlayPause}
                    className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#FFF4C2] border-2 border-[#121212] text-[#121212] shadow-[2px_2px_0px_#121212] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer flex items-center gap-1.5 text-xs font-black font-['Outfit']"
                    title={isPlaying ? 'Pause Simulation' : 'Resume Simulation'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#FF650D]" /> : <Play className="w-3.5 h-3.5 text-[#FF650D]" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#FAF6EE] border-2 border-[#121212] text-[#5E5854] hover:text-[#121212] shadow-[2px_2px_0px_#121212] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold font-['Outfit']"
                    title="Restart Simulation"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-[#5E5854]" />
                    <span>Reset</span>
                  </button>

                  <div className="flex items-center gap-1.5 pl-2">
                    {[1, 2, 5].map((spd) => (
                      <button
                        key={spd}
                        type="button"
                        onClick={() => handleSpeedChange(spd)}
                        className={`px-3 py-1 text-xs rounded-xl font-mono font-black border-2 border-[#121212] transition-all cursor-pointer ${
                          playbackSpeed === spd
                            ? 'bg-[#FF650D] text-white shadow-[2px_2px_0px_#121212]'
                            : 'bg-white text-[#5E5854] hover:text-[#121212] shadow-[1px_1px_0px_#121212]'
                        }`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] text-[#5E5854] font-medium flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-[#FF650D] shrink-0" />
                  <span>Simulated courier telemetry following real road geometry.</span>
                </div>
              </div>
            </div>

            {/* Rider Information Card */}
            {order.rider && (
              <div className="bg-white border-2 sm:border-[2.5px] border-[#121212] rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[6px_6px_0px_#121212]">
                <div className="flex items-center gap-4">
                  <img
                    src={order.rider.avatarUrl}
                    alt={order.rider.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-[#121212] shadow-[2px_2px_0px_#121212]"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-black text-[#121212] font-['Outfit']">
                        {order.rider.name}
                      </h4>
                      <span className="text-[10px] bg-[#D1FAE5] border border-[#121212] text-[#059669] font-black px-2 py-0.5 rounded font-['Oswald']">
                        4.9 ★ (1,240 deliveries)
                      </span>
                    </div>
                    <p className="text-xs text-[#5E5854] font-bold mt-0.5">
                      {order.rider.vehicleModel} • <span className="font-mono">{order.rider.vehicleNumber}</span>
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#059669] font-bold mt-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Thermal-sealed insulated pouch verified</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleCallRider}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF6EE] hover:bg-[#FFF4C2] border-2 border-[#121212] text-[#121212] text-xs font-black font-['Outfit'] shadow-[3px_3px_0px_#121212] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#FF650D]" />
                    <span>Call Courier</span>
                  </button>
                </div>
              </div>
            )}

            {callRiderToast && (
              <div className="p-3.5 bg-[#FFF4C2] border-2 border-[#121212] text-[#121212] text-xs font-bold rounded-xl flex items-center justify-between shadow-[4px_4px_0px_#121212] animate-in fade-in">
                <span>Simulating secure phone bridge to {order.rider?.name} ({order.rider?.phone})...</span>
                <span className="text-[10px] font-mono uppercase bg-[#121212] text-[#FFF4C2] px-2 py-0.5 rounded">Demo Masking</span>
              </div>
            )}
          </div>

          {/* Right Column: Receipt Breakdown & Destination */}
          <div className="lg:col-span-4 space-y-6">
            {/* Delivery Destination Card */}
            <div className="bg-white border-2 sm:border-[2.5px] border-[#121212] rounded-2xl p-5 space-y-3 shadow-[6px_6px_0px_#121212]">
              <span className="text-[11px] uppercase font-black text-[#FF650D] tracking-widest font-['Oswald'] bg-[#121212] text-[#FFF4C2] px-2 py-0.5 rounded">
                Delivery Destination
              </span>
              <div className="flex items-start gap-3 pt-1">
                <MapPin className="w-4 h-4 text-[#FF650D] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div className="font-black text-[#121212] font-['Outfit'] text-sm">
                    {order.deliveryAddress.label} • {order.deliveryAddress.recipientName}
                  </div>
                  <p className="text-[#5E5854] font-medium leading-relaxed">
                    {order.deliveryAddress.addressLine1}
                    {order.deliveryAddress.addressLine2
                      ? `, ${order.deliveryAddress.addressLine2}`
                      : ''}
                    , {order.deliveryAddress.city} - {order.deliveryAddress.pincode}
                  </p>
                  <p className="text-[#121212] font-mono font-bold">{order.deliveryAddress.recipientPhone}</p>
                </div>
              </div>
            </div>

            {/* Order Items & Bill Breakdown */}
            <div className="bg-[#FFF4C2] border-2 sm:border-[2.5px] border-[#121212] rounded-2xl p-5 space-y-4 shadow-[6px_6px_0px_#121212]">
              <div className="flex items-center justify-between border-b-2 border-[#121212] pb-3">
                <span className="text-[11px] uppercase font-black text-[#121212] tracking-widest font-['Oswald']">
                  Itemized Tasting Receipt
                </span>
                <Receipt className="w-4 h-4 text-[#121212]" />
              </div>

              <div className="space-y-3 max-h-52 overflow-y-auto pr-1">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between text-xs py-1.5 border-b border-[#121212]/15 last:border-0"
                  >
                    <div className="space-y-0.5 pr-2">
                      <div className="text-[#121212] font-bold font-['Outfit']">
                        {item.quantity}× {item.itemNameSnapshot}
                      </div>
                      {item.customizationDetailsSnapshot &&
                        item.customizationDetailsSnapshot.length > 0 && (
                          <div className="text-[11px] text-[#5E5854] font-medium">
                            {item.customizationDetailsSnapshot.map((c) => c.optionName).join(', ')}
                          </div>
                        )}
                    </div>
                    <span className="font-mono font-bold text-[#121212] shrink-0">
                      {formatCurrency(item.totalPriceSnapshot, 'INR')}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-[#121212] pt-3 space-y-1.5 text-xs font-medium">
                <div className="flex justify-between text-[#5E5854]">
                  <span>Item Subtotal</span>
                  <span className="font-mono font-bold text-[#121212]">
                    {formatCurrency(order.itemTotal, 'INR')}
                  </span>
                </div>
                <div className="flex justify-between text-[#5E5854]">
                  <span>Thermal Delivery</span>
                  <span className="font-mono font-bold text-[#121212]">
                    {order.deliveryFee === 0 ? 'FREE' : formatCurrency(order.deliveryFee, 'INR')}
                  </span>
                </div>
                <div className="flex justify-between text-[#5E5854]">
                  <span>GST & Service Levies</span>
                  <span className="font-mono font-bold text-[#121212]">
                    {formatCurrency(order.taxAmount, 'INR')}
                  </span>
                </div>
                {order.discountAmount > 0 && (
                  <div className="flex justify-between text-[#059669] font-bold">
                    <span>Privilege Voucher</span>
                    <span className="font-mono">
                      -{formatCurrency(order.discountAmount, 'INR')}
                    </span>
                  </div>
                )}
                <div className="border-t-2 border-[#121212] pt-2 flex justify-between items-center text-sm font-black text-[#121212] font-['Outfit']">
                  <span>Paid via {order.paymentMethod}</span>
                  <span className="text-xl font-mono font-black text-[#FF650D]">
                    {formatCurrency(order.finalPaidAmount, 'INR')}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/restaurants"
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-[#FAF6EE] border-2 border-[#121212] shadow-[3px_3px_0px_#121212] text-[#121212] text-xs font-black font-['Outfit'] flex items-center justify-center gap-2 transition-all hover:translate-x-[1px] hover:translate-y-[1px]"
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
