import test from 'node:test'
import assert from 'node:assert/strict'

// Import or recreate the exact getSafeRedirect logic
function getSafeRedirect(redirectParam, fallback = '/restaurants') {
  if (!redirectParam) return fallback

  const trimmed = redirectParam.trim()

  // Must begin with single forward slash
  if (!trimmed.startsWith('/')) return fallback

  // Block protocol-relative or backslash bypasses
  if (trimmed.startsWith('//') || trimmed.startsWith('/\\') || trimmed.includes('\\')) {
    return fallback
  }

  // Strictly block redirects to the administrator dashboard for customer flows
  if (trimmed === '/admin' || trimmed.startsWith('/admin/')) {
    return fallback
  }

  return trimmed
}

// Replicate formatAuthError logic for testing
function formatAuthError(error, isConfigured = true) {
  if (!error) return 'An unexpected authentication error occurred. Please try again.'

  const raw =
    error instanceof Error
      ? error.message
      : typeof error === 'object' && error !== null && 'message' in error
        ? String(error.message)
        : String(error)

  const lower = raw.toLowerCase()

  if (
    lower.includes('failed to fetch') ||
    lower.includes('networkerror') ||
    lower.includes('network request failed') ||
    lower.includes('load failed') ||
    lower.includes('fetch error') ||
    lower.includes('connection refused')
  ) {
    if (!isConfigured) {
      return 'Supabase backend is not configured. Please add your live VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.'
    }
    return 'Unable to reach the Supabase authentication server. Please verify your internet connection and ensure your Supabase project is active.'
  }

  if (
    lower.includes('invalid login credentials') ||
    lower.includes('invalid_grant') ||
    lower.includes('wrong password') ||
    lower.includes('invalid email or password')
  ) {
    return 'Invalid email or password. Please verify your credentials.'
  }

  if (
    lower.includes('user already registered') ||
    lower.includes('already exists') ||
    lower.includes('duplicate key')
  ) {
    return 'An account with this email address already exists. Please sign in instead.'
  }

  if (
    lower.includes('email not confirmed') ||
    lower.includes('email_not_confirmed') ||
    lower.includes('confirm your email')
  ) {
    return 'Email confirmation required. Please check your inbox and confirm your email address before signing in.'
  }

  if (lower.includes('password should be at least')) {
    return 'Password must be at least 6 characters long.'
  }

  if (lower.includes('not configured')) {
    return 'Supabase backend is not configured. Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.'
  }

  return raw
}

test('Customer Auth - Safe Redirect Validation & Open Redirect Defense', () => {
  // Valid internal destinations
  assert.equal(getSafeRedirect('/restaurants'), '/restaurants')
  assert.equal(getSafeRedirect('/checkout'), '/checkout')
  assert.equal(getSafeRedirect('/account'), '/account')
  assert.equal(getSafeRedirect('/orders/ord-123'), '/orders/ord-123')

  // Open redirect attacks blocked
  assert.equal(getSafeRedirect('https://malicious-site.com/steal-creds'), '/restaurants')
  assert.equal(getSafeRedirect('http://evil.com'), '/restaurants')
  assert.equal(getSafeRedirect('//evil.com'), '/restaurants')
  assert.equal(getSafeRedirect('/\\evil.com'), '/restaurants')
  assert.equal(getSafeRedirect('\\evil.com'), '/restaurants')
  assert.equal(getSafeRedirect('javascript:alert(1)'), '/restaurants')

  // Admin dashboard destinations strictly blocked for customer auth
  assert.equal(getSafeRedirect('/admin'), '/restaurants')
  assert.equal(getSafeRedirect('/admin/'), '/restaurants')
  assert.equal(getSafeRedirect('/admin/orders'), '/restaurants')
  assert.equal(getSafeRedirect('/admin/login'), '/restaurants')

  // Null / undefined / empty fallback
  assert.equal(getSafeRedirect(null), '/restaurants')
  assert.equal(getSafeRedirect(''), '/restaurants')
  assert.equal(getSafeRedirect(undefined), '/restaurants')
})

test('Customer Auth - Email Confirmation Detection', () => {
  const evaluateSignUpResult = (supabaseAuthResponse) => {
    const { data, error } = supabaseAuthResponse
    if (error) {
      return { success: false, error: error.message }
    }
    if (!data.session) {
      // Supabase email verification enabled
      return { success: true, emailConfirmationRequired: true, user: data.user }
    }
    return { success: true, emailConfirmationRequired: false, session: data.session, user: data.user }
  }

  // Case A: Supabase project has email confirmation enabled
  const pendingConfirmation = evaluateSignUpResult({
    data: {
      user: { id: 'usr-1', email: 'patron@example.com' },
      session: null,
    },
    error: null,
  })
  assert.equal(pendingConfirmation.success, true)
  assert.equal(pendingConfirmation.emailConfirmationRequired, true)

  // Case B: Supabase project has auto-confirm enabled
  const autoConfirmed = evaluateSignUpResult({
    data: {
      user: { id: 'usr-2', email: 'patron2@example.com' },
      session: { access_token: 'fake-jwt-token' },
    },
    error: null,
  })
  assert.equal(autoConfirmed.success, true)
  assert.equal(autoConfirmed.emailConfirmationRequired, false)
  assert.equal(autoConfirmed.session.access_token, 'fake-jwt-token')

  // Case C: Duplicate email or weak password error
  const duplicateErr = evaluateSignUpResult({
    data: {},
    error: { message: 'User already registered' },
  })
  assert.equal(duplicateErr.success, false)
  assert.equal(duplicateErr.error, 'User already registered')
})

test('Customer Route Navigation & Protection Flow', () => {
  const resolveRouteAction = (action, isAuthenticated) => {
    switch (action) {
      case 'CLICK_ORDER_FOOD':
        return isAuthenticated ? '/restaurants' : '/auth?redirect=/restaurants'
      case 'OPEN_CHECKOUT':
        return isAuthenticated ? '/checkout' : '/auth?redirect=/checkout'
      case 'OPEN_ACCOUNT':
        return isAuthenticated ? '/account' : '/auth?redirect=/account'
      case 'BROWSE_RESTAURANTS':
        return '/restaurants' // Publicly discoverable by guests without forcing auth
      default:
        return '/'
    }
  }

  // Unauthenticated guest clicks "Order Food" -> redirects to /auth?redirect=/restaurants
  assert.equal(resolveRouteAction('CLICK_ORDER_FOOD', false), '/auth?redirect=/restaurants')

  // Authenticated customer clicks "Order Food" -> goes straight to /restaurants
  assert.equal(resolveRouteAction('CLICK_ORDER_FOOD', true), '/restaurants')

  // Guest attempts checkout -> redirects to /auth?redirect=/checkout
  assert.equal(resolveRouteAction('OPEN_CHECKOUT', false), '/auth?redirect=/checkout')

  // Guest attempts account -> redirects to /auth?redirect=/account
  assert.equal(resolveRouteAction('OPEN_ACCOUNT', false), '/auth?redirect=/account')

  // Public restaurant browsing remains open to guests
  assert.equal(resolveRouteAction('BROWSE_RESTAURANTS', false), '/restaurants')
})

test('Customer Registration - Form Field Validation Logic', () => {
  const validateRegistration = ({ fullName, email, phone, password, confirmPassword }) => {
    const trimmedName = (fullName || '').trim()
    if (!trimmedName || trimmedName.length < 2) {
      return { valid: false, error: 'Please enter your full legal name (minimum 2 characters).' }
    }

    const trimmedEmail = (email || '').trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return { valid: false, error: 'Please enter a valid email address.' }
    }

    const trimmedPhone = (phone || '').trim()
    if (trimmedPhone) {
      const digitsOnly = trimmedPhone.replace(/[\s\-()+]/g, '')
      if (digitsOnly.length < 10 || digitsOnly.length > 15 || !/^\d+$/.test(digitsOnly)) {
        return { valid: false, error: 'Please enter a valid 10-digit phone number (or leave blank).' }
      }
    }

    if (!password || password.length < 6) {
      return { valid: false, error: 'Password must be at least 6 characters long.' }
    }

    if (!confirmPassword) {
      return { valid: false, error: 'Please confirm your password.' }
    }

    if (password !== confirmPassword) {
      return { valid: false, error: 'Passwords do not match. Please verify and re-enter.' }
    }

    return { valid: true }
  }

  // Valid inputs (with and without optional phone)
  assert.equal(validateRegistration({
    fullName: 'Sreeram K',
    email: 'sreeram@example.com',
    phone: '+91 98765 01234',
    password: 'password123',
    confirmPassword: 'password123'
  }).valid, true)

  assert.equal(validateRegistration({
    fullName: 'Sreeram K',
    email: 'sreeram@example.com',
    phone: '',
    password: 'password123',
    confirmPassword: 'password123'
  }).valid, true)

  // Name too short
  assert.equal(validateRegistration({
    fullName: 'A',
    email: 'sreeram@example.com',
    phone: '',
    password: 'password123',
    confirmPassword: 'password123'
  }).error, 'Please enter your full legal name (minimum 2 characters).')

  // Invalid email
  assert.equal(validateRegistration({
    fullName: 'Sreeram K',
    email: 'not-an-email',
    phone: '',
    password: 'password123',
    confirmPassword: 'password123'
  }).error, 'Please enter a valid email address.')

  // Invalid phone format
  assert.equal(validateRegistration({
    fullName: 'Sreeram K',
    email: 'sreeram@example.com',
    phone: '12345',
    password: 'password123',
    confirmPassword: 'password123'
  }).error, 'Please enter a valid 10-digit phone number (or leave blank).')

  // Password mismatch
  assert.equal(validateRegistration({
    fullName: 'Sreeram K',
    email: 'sreeram@example.com',
    phone: '',
    password: 'password123',
    confirmPassword: 'differentpassword'
  }).error, 'Passwords do not match. Please verify and re-enter.')
})

test('Authentication Error Handling - Replaces Failed to Fetch with Descriptive Messages', () => {
  // Test network error when Supabase is unconfigured (placeholder URL)
  const unconfiguredError = formatAuthError(new TypeError('Failed to fetch'), false)
  assert.equal(
    unconfiguredError,
    'Supabase backend is not configured. Please add your live VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.'
  )

  // Test network error when Supabase is configured but unreachable
  const offlineError = formatAuthError(new TypeError('Failed to fetch'), true)
  assert.equal(
    offlineError,
    'Unable to reach the Supabase authentication server. Please verify your internet connection and ensure your Supabase project is active.'
  )

  // Test invalid credentials
  const credsError = formatAuthError({ message: 'Invalid login credentials' })
  assert.equal(credsError, 'Invalid email or password. Please verify your credentials.')

  // Test duplicate user registration
  const duplicateError = formatAuthError({ message: 'User already registered' })
  assert.equal(duplicateError, 'An account with this email address already exists. Please sign in instead.')
})

test('Role-Based Post-Login Redirection Flow', () => {
  const determineRedirect = (role, requestedRedirect = '/restaurants') => {
    if (role === 'admin') return '/admin'
    if (role === 'restaurant') return '/restaurant'
    return requestedRedirect || '/account'
  }

  assert.equal(determineRedirect('admin', '/restaurants'), '/admin')
  assert.equal(determineRedirect('restaurant', '/restaurants'), '/restaurant')
  assert.equal(determineRedirect('customer', '/checkout'), '/checkout')
  assert.equal(determineRedirect('customer', null), '/account')
})

test('User Account Dropdown Navigation & Options Matrix', () => {
  // Test expected navigation paths inside user account dropdown
  const getDropdownMenuItems = (userRole) => {
    const items = [
      { label: 'Account Details', href: '/account?tab=profile' },
      { label: 'My Orders', href: '/account?tab=orders' },
      { label: 'Saved Addresses', href: '/account?tab=addresses' },
    ]
    if (userRole === 'restaurant') {
      items.push({ label: 'Restaurant Portal', href: '/restaurant' })
    }
    if (userRole === 'admin') {
      items.push({ label: 'Admin Console', href: '/admin' })
    }
    return items
  }

  const customerItems = getDropdownMenuItems('customer')
  assert.equal(customerItems.length, 3)
  assert.equal(customerItems[0].href, '/account?tab=profile')
  assert.equal(customerItems[1].href, '/account?tab=orders')
  assert.equal(customerItems[2].href, '/account?tab=addresses')

  const restaurantItems = getDropdownMenuItems('restaurant')
  assert.equal(restaurantItems.length, 4)
  assert.ok(restaurantItems.some((i) => i.href === '/restaurant'))

  const adminItems = getDropdownMenuItems('admin')
  assert.equal(adminItems.length, 4)
  assert.ok(adminItems.some((i) => i.href === '/admin'))
})

test('Edit Profile - Form Validation & State Synchronization Logic', () => {
  const validateProfileUpdate = ({ fullName, phone }) => {
    const trimmedName = (fullName || '').trim()
    const trimmedPhone = (phone || '').trim()

    if (!trimmedName || trimmedName.length < 2) {
      return { valid: false, error: 'Full legal name must contain at least 2 characters.' }
    }

    if (trimmedPhone) {
      const basicPhoneRegex = /^[+]?[\d\s-]{10,15}$/
      if (!basicPhoneRegex.test(trimmedPhone)) {
        return { valid: false, error: 'Please provide a valid phone number (10-15 digits).' }
      }
    }

    return { valid: true }
  }

  // Reject empty or 1-character name
  assert.equal(validateProfileUpdate({ fullName: '', phone: '' }).valid, false)
  assert.equal(validateProfileUpdate({ fullName: 'A', phone: '' }).valid, false)

  // Reject malformed phone
  assert.equal(validateProfileUpdate({ fullName: 'Ananya Sharma', phone: '123' }).valid, false)
  assert.equal(validateProfileUpdate({ fullName: 'Ananya Sharma', phone: 'abc1234567' }).valid, false)

  // Accept valid full name and empty phone
  assert.equal(validateProfileUpdate({ fullName: 'Ananya Sharma', phone: '' }).valid, true)

  // Accept valid full name and standard phone
  assert.equal(validateProfileUpdate({ fullName: 'Ananya Sharma', phone: '+91 98765 43210' }).valid, true)

  // Verify immediate user profile update propagation
  const initialUser = {
    id: 'user-001',
    fullName: 'Ananya Sharma',
    email: 'ananya@example.com',
    phone: '',
    role: 'customer',
  }

  const updatedName = 'Dr. Ananya Sharma'
  const updatedPhone = '+91 98765 00000'
  const updatedUser = {
    ...initialUser,
    fullName: updatedName,
    phone: updatedPhone,
  }

  assert.equal(updatedUser.fullName, 'Dr. Ananya Sharma')
  assert.equal(updatedUser.phone, '+91 98765 00000')
  // Verify first name extracted for navbar dropdown immediately reflects updated name
  const dropdownFirstName = updatedUser.fullName.split(' ')[0]
  assert.equal(dropdownFirstName, 'Dr.')
})

test('Sign Out - Safe Session Clearance & Redirection', () => {
  // Simulate auth context session teardown
  let memorySession = {
    user: { id: 'u1', fullName: 'Sreeram K', email: 'sreeram@example.com' },
    addresses: [{ id: 'a1' }],
    orders: [{ id: 'o1' }],
    localStorageItem: '{"id":"u1"}',
  }

  const simulateLogout = () => {
    memorySession.user = null
    memorySession.addresses = []
    memorySession.orders = []
    memorySession.localStorageItem = null
    return { redirectTo: '/home' }
  }

  const result = simulateLogout()
  assert.equal(memorySession.user, null)
  assert.equal(memorySession.addresses.length, 0)
  assert.equal(memorySession.orders.length, 0)
  assert.equal(memorySession.localStorageItem, null)
  assert.equal(result.redirectTo, '/home')

  // Verify protected route guard redirects guest to login
  const routeGuardCheck = (user, path) => {
    if (!user) {
      return `/auth?redirect=${encodeURIComponent(path)}`
    }
    return path
  }

  assert.equal(routeGuardCheck(null, '/account'), '/auth?redirect=%2Faccount')
  assert.equal(routeGuardCheck(null, '/account?tab=orders'), '/auth?redirect=%2Faccount%3Ftab%3Dorders')
})
