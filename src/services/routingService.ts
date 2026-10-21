/**
 * ARO Routing & Directions Service
 *
 * Provides real road-following route calculation between restaurants, couriers,
 * and delivery destinations using the Open Source Routing Machine (OSRM) public API.
 *
 * ROUTING PROVIDER DETAILS:
 * - Provider: OSRM (Open Source Routing Machine) Driving Profile
 * - Endpoint: https://router.project-osrm.org/route/v1/driving/{lon1},{lat1};{lon2},{lat2}
 * - Coordinate Format: GeoJSON format [longitude, latitude]
 * - Output: GeoJSON LineString coordinates along the actual road network
 * - Attribution: © OpenStreetMap contributors, OSRM Project
 * - Usage Policy & Limits: The public demo OSRM instance is suitable for client-side
 *   demonstrations and testing. In-memory caching and request timeouts prevent redundant
 *   network queries. In enterprise production, host a private OSRM cluster or use a dedicated
 *   turn-by-turn routing provider.
 */

export interface RouteGeometry {
  type: 'LineString'
  coordinates: [number, number][]
}

export interface RouteSegmentData {
  coordinates: [number, number][]
  segmentDistances: number[]
  cumulativeDistances: number[]
  totalDistance: number // in meters
  duration: number // in seconds
  isFallback: boolean
  providerName: string
  errorMessage?: string
}

const OSRM_BASE_URL = 'https://router.project-osrm.org/route/v1/driving'
const ROUTE_CACHE = new Map<string, RouteSegmentData>()
const REQUEST_TIMEOUT_MS = 8000

/**
 * Calculates Haversine distance in meters between two [longitude, latitude] coordinates.
 */
export function calculateDistance(coord1: [number, number], coord2: [number, number]): number {
  const R = 6371e3 // Earth radius in meters
  const lon1 = coord1[0]
  const lat1 = coord1[1]
  const lon2 = coord2[0]
  const lat2 = coord2[1]

  const radLat1 = (lat1 * Math.PI) / 180
  const radLat2 = (lat2 * Math.PI) / 180
  const deltaLat = ((lat2 - lat1) * Math.PI) / 180
  const deltaLon = ((lon2 - lon1) * Math.PI) / 180

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

/**
 * Calculates initial bearing (0-360 degrees) from coord1 to coord2.
 */
export function calculateBearing(coord1: [number, number], coord2: [number, number]): number {
  const lon1 = (coord1[0] * Math.PI) / 180
  const lon2 = (coord2[0] * Math.PI) / 180
  const lat1 = (coord1[1] * Math.PI) / 180
  const lat2 = (coord2[1] * Math.PI) / 180

  const y = Math.sin(lon2 - lon1) * Math.cos(lat2)
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)

  const brng = (Math.atan2(y, x) * 180) / Math.PI
  return (brng + 360) % 360
}

/**
 * Generates an annotated RouteSegmentData structure from raw coordinates.
 */
export function buildRouteSegmentData(
  coordinates: [number, number][],
  durationSeconds: number,
  isFallback: boolean,
  errorMessage?: string
): RouteSegmentData {
  if (coordinates.length < 2) {
    throw new Error('Route coordinates must contain at least 2 points')
  }

  const segmentDistances: number[] = []
  const cumulativeDistances: number[] = [0]
  let runningTotal = 0

  for (let i = 0; i < coordinates.length - 1; i++) {
    const dist = calculateDistance(coordinates[i], coordinates[i + 1])
    segmentDistances.push(dist)
    runningTotal += dist
    cumulativeDistances.push(runningTotal)
  }

  return {
    coordinates,
    segmentDistances,
    cumulativeDistances,
    totalDistance: runningTotal,
    duration: durationSeconds > 0 ? durationSeconds : Math.round(runningTotal / 8.33), // default ~30km/h
    isFallback,
    providerName: isFallback ? 'Straight-Line Approximate' : 'OSRM OpenStreetMap Road Network',
    errorMessage,
  }
}

/**
 * Builds a fallback straight-line route between origin and destination with intermediate
 * subdivisions for smooth interpolation.
 */
export function buildFallbackStraightLineRoute(
  origin: [number, number],
  destination: [number, number],
  errorMessage?: string
): RouteSegmentData {
  const safeOrigin: [number, number] = [
    Number.isFinite(origin[0]) ? origin[0] : 78.4352,
    Number.isFinite(origin[1]) ? origin[1] : 17.4156,
  ]
  const safeDest: [number, number] = [
    Number.isFinite(destination[0]) ? destination[0] : 78.4072,
    Number.isFinite(destination[1]) ? destination[1] : 17.4325,
  ]

  const numIntermediate = 10
  const coords: [number, number][] = []

  for (let i = 0; i <= numIntermediate; i++) {
    const t = i / numIntermediate
    const lng = safeOrigin[0] + (safeDest[0] - safeOrigin[0]) * t
    const lat = safeOrigin[1] + (safeDest[1] - safeOrigin[1]) * t
    coords.push([lng, lat])
  }

  const directDistance = calculateDistance(safeOrigin, safeDest)
  // Approximate urban driving time assuming ~20km/h in congested city traffic
  const estimatedDuration = Math.round(directDistance / 5.5)

  return buildRouteSegmentData(coords, estimatedDuration, true, errorMessage)
}

/**
 * Fetches a road-following route from OSRM between origin and destination.
 * If routing fails or is unreachable, returns a clearly labeled fallback route.
 *
 * @param origin [longitude, latitude]
 * @param destination [longitude, latitude]
 * @param viaOptional Optional waypoint [longitude, latitude] (e.g. rider starting position)
 */
export async function fetchRoadRoute(
  origin: [number, number],
  destination: [number, number],
  viaOptional?: [number, number]
): Promise<RouteSegmentData> {
  // Validate coordinates
  if (
    !Number.isFinite(origin[0]) ||
    !Number.isFinite(origin[1]) ||
    !Number.isFinite(destination[0]) ||
    !Number.isFinite(destination[1])
  ) {
    console.warn('[ARO Routing] Invalid coordinates supplied:', { origin, destination })
    return buildFallbackStraightLineRoute(origin, destination, 'Invalid coordinates supplied')
  }

  // Create cache key
  const cacheKey = viaOptional
    ? `${origin[0].toFixed(5)},${origin[1].toFixed(5)};${viaOptional[0].toFixed(5)},${viaOptional[1].toFixed(5)};${destination[0].toFixed(5)},${destination[1].toFixed(5)}`
    : `${origin[0].toFixed(5)},${origin[1].toFixed(5)};${destination[0].toFixed(5)},${destination[1].toFixed(5)}`

  if (ROUTE_CACHE.has(cacheKey)) {
    return ROUTE_CACHE.get(cacheKey)!
  }

  // Build coordinate query string: lon1,lat1;lon2,lat2
  const waypoints = viaOptional
    ? `${origin[0]},${origin[1]};${viaOptional[0]},${viaOptional[1]};${destination[0]},${destination[1]}`
    : `${origin[0]},${origin[1]};${destination[0]},${destination[1]}`

  const url = `${OSRM_BASE_URL}/${waypoints}?overview=full&geometries=geojson`

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`OSRM HTTP ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()

    if (data.code !== 'Ok' || !Array.isArray(data.routes) || data.routes.length === 0) {
      throw new Error(`OSRM API response error: ${data.code || 'No route found'}`)
    }

    const primaryRoute = data.routes[0]
    const coordinates: [number, number][] = primaryRoute.geometry?.coordinates

    if (!Array.isArray(coordinates) || coordinates.length < 2) {
      throw new Error('OSRM returned empty or invalid geometry')
    }

    const routeData = buildRouteSegmentData(
      coordinates,
      primaryRoute.duration,
      false
    )

    ROUTE_CACHE.set(cacheKey, routeData)
    return routeData
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.warn('[ARO Routing] Road route calculation failed, using fallback:', message)
    const fallback = buildFallbackStraightLineRoute(origin, destination, message)
    // We don't cache failed routes so subsequent retries or connectivity recovery can succeed
    return fallback
  }
}

/**
 * Interpolates marker position along the route geometry based on progress [0, 1].
 * Uses distance-proportional cumulative distances to maintain uniform speed across
 * road segments of irregular lengths.
 */
export function interpolatePositionAlongRoute(
  route: RouteSegmentData,
  progress: number
): { coord: [number, number]; bearing: number; segmentIndex: number } {
  const clampedProgress = Math.max(0, Math.min(1, progress))
  const { coordinates, cumulativeDistances, segmentDistances, totalDistance } = route

  if (coordinates.length === 0) {
    return { coord: [0, 0], bearing: 0, segmentIndex: 0 }
  }

  if (coordinates.length === 1 || totalDistance <= 0) {
    return { coord: coordinates[0], bearing: 0, segmentIndex: 0 }
  }

  if (clampedProgress >= 1) {
    const lastIdx = coordinates.length - 1
    const prevIdx = Math.max(0, lastIdx - 1)
    const bearing = calculateBearing(coordinates[prevIdx], coordinates[lastIdx])
    return { coord: coordinates[lastIdx], bearing, segmentIndex: prevIdx }
  }

  const targetDistance = clampedProgress * totalDistance

  // Binary search to find segment where cumulativeDistances[i] <= targetDistance <= cumulativeDistances[i+1]
  let low = 0
  let high = cumulativeDistances.length - 2
  let segmentIndex = 0

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (cumulativeDistances[mid] <= targetDistance) {
      segmentIndex = mid
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  segmentIndex = Math.min(segmentIndex, coordinates.length - 2)

  const segStartDist = cumulativeDistances[segmentIndex]
  const segLength = segmentDistances[segmentIndex]

  let t = 0
  if (segLength > 0.0001) {
    t = Math.max(0, Math.min(1, (targetDistance - segStartDist) / segLength))
  }

  const p0 = coordinates[segmentIndex]
  const p1 = coordinates[segmentIndex + 1]

  const lng = p0[0] + (p1[0] - p0[0]) * t
  const lat = p0[1] + (p1[1] - p0[1]) * t

  // Calculate bearing along current segment or look ahead if points are nearly identical
  let bearing = calculateBearing(p0, p1)
  if (segLength < 1 && segmentIndex < coordinates.length - 2) {
    bearing = calculateBearing(p0, coordinates[segmentIndex + 2])
  }

  return {
    coord: [lng, lat],
    bearing,
    segmentIndex,
  }
}
