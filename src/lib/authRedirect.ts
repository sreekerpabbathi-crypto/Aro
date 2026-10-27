/**
 * ARO Customer Authentication & Route Protection Utilities
 *
 * Enforces safe redirect validation:
 * 1. Rejects external open redirects (e.g., https://malicious.com, //malicious.com)
 * 2. Rejects backslash URL bypasses
 * 3. Rejects redirects to Administrator routes (/admin, /admin/*)
 */

export function getSafeRedirect(redirectParam: string | null | undefined, fallback = '/restaurants'): string {
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
