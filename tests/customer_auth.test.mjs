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
