import { createClient } from '@supabase/supabase-js'

const rawUrl = (import.meta.env.VITE_SUPABASE_URL || '')
  .trim()
  .replace(/\/rest\/v1\/?$/, '')
  .replace(/\/$/, '')
const rawAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || '').trim()

/**
 * Validates whether the Supabase project configuration has been properly provided.
 * Rejects unreplaced placeholder configurations (e.g. 'https://your-project-ref.supabase.co').
 */
export const isSupabaseConfigured = Boolean(
  rawUrl &&
  rawAnonKey &&
  !rawUrl.includes('your-project-ref') &&
  !rawUrl.includes('placeholder') &&
  !rawAnonKey.includes('your-supabase-public-anon-key') &&
  !rawAnonKey.includes('placeholder') &&
  rawUrl.startsWith('https://')
)

if (!isSupabaseConfigured && import.meta.env.DEV) {
  console.info(
    '[ARO Info] Supabase is running with placeholder or unconfigured environment variables. Set valid VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file to enable live database authentication.'
  )
}

/**
 * Shared Supabase client instance using standard client-safe anonymous key.
 * Service-role keys must NEVER be exposed to the client.
 */
export const supabase = createClient(
  isSupabaseConfigured ? rawUrl : 'https://placeholder.supabase.co',
  isSupabaseConfigured ? rawAnonKey : 'placeholder-anon-key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
)

/**
 * Formats authentication and network errors into user-friendly, descriptive messages.
 * Prevents raw low-level exceptions (e.g., 'Failed to fetch', 'TypeError') from reaching the UI.
 */
export function formatAuthError(error: unknown): string {
  if (!error) return 'An unexpected authentication error occurred. Please try again.'

  const raw =
    error instanceof Error
      ? error.message
      : typeof error === 'object' && error !== null && 'message' in error
        ? String((error as { message: unknown }).message)
        : String(error)

  const lower = raw.toLowerCase()

  // 1. Network & connectivity failures (DNS failure, CORS, offline, unresolvable project ref)
  if (
    lower.includes('failed to fetch') ||
    lower.includes('networkerror') ||
    lower.includes('network request failed') ||
    lower.includes('load failed') ||
    lower.includes('fetch error') ||
    lower.includes('connection refused')
  ) {
    if (!isSupabaseConfigured) {
      return 'Supabase backend is not configured. Please add your live VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.'
    }
    return 'Unable to reach the Supabase authentication server. Please verify your internet connection and ensure your Supabase project is active.'
  }

  // 2. Invalid credentials
  if (
    lower.includes('invalid login credentials') ||
    lower.includes('invalid_grant') ||
    lower.includes('wrong password') ||
    lower.includes('invalid email or password')
  ) {
    return 'Invalid email or password. Please verify your credentials.'
  }

  // 3. User already registered / duplicate email
  if (
    lower.includes('user already registered') ||
    lower.includes('already exists') ||
    lower.includes('duplicate key')
  ) {
    return 'An account with this email address already exists. Please sign in instead.'
  }

  // 4. Email confirmation required
  if (
    lower.includes('email not confirmed') ||
    lower.includes('email_not_confirmed') ||
    lower.includes('confirm your email')
  ) {
    return 'Email confirmation required. Please check your inbox and confirm your email address before signing in.'
  }

  // 5. Password strength
  if (lower.includes('password should be at least')) {
    return 'Password must be at least 6 characters long.'
  }

  // 6. Rate limits
  if (lower.includes('rate limit') || lower.includes('too many requests')) {
    return 'Too many login attempts. Please wait a moment and try again.'
  }

  // 7. Not configured
  if (lower.includes('not configured')) {
    return 'Supabase backend is not configured. Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.'
  }

  return raw
}
