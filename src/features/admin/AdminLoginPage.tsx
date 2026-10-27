import React, { useState } from 'react'
import { useNavigate, useLocation, Link, Navigate } from 'react-router-dom'
import { useAdminAuth } from '@/context/AdminAuthContext'
import { Eye, EyeOff, ShieldCheck, ArrowLeft, Loader2, AlertCircle } from 'lucide-react'

const currentYear = new Date().getFullYear()

export const AdminLoginPage: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { login, isAdmin, isLoading: authLoading, error: authError } = useAdminAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationError, setValidationError] = useState<string | null>(null)

  // Parse redirect search param if present
  const queryParams = new URLSearchParams(location.search)
  const redirectPath = queryParams.get('redirect') || '/admin'

  // If already logged in and verified as admin, redirect directly
  if (isAdmin && !authLoading) {
    return <Navigate to={redirectPath} replace />
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setValidationError(null)

    const trimmedEmail = email.trim()
    if (!trimmedEmail) {
      setValidationError('Please enter your administrator email.')
      return
    }

    if (!password) {
      setValidationError('Please enter your password.')
      return
    }

    setIsSubmitting(true)
    const result = await login(trimmedEmail, password)
    setIsSubmitting(false)

    if (result.success) {
      navigate(redirectPath, { replace: true })
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] p-4 sm:p-6 paper-grid">
      {/* Top Header / Subtle Back Link */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between py-4">
        <Link
          to="/home"
          className="inline-flex items-center gap-2 text-xs font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-accent)] transition-colors py-1.5 px-3 rounded-lg border-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-scrap)] shadow-[1px_1px_0px_var(--dp-color-line)] hover:shadow-[1.5px_1.5px_0px_var(--dp-color-ink)]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Storefront</span>
        </Link>

        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded text-[11px] font-bold font-['Outfit',sans-serif] uppercase tracking-wider text-[var(--dp-color-ink)]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
          <span>Restricted Admin Portal</span>
        </div>
      </header>

      {/* Main Login Card */}
      <main className="flex items-center justify-center py-8">
        <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-2xl p-6 sm:p-10 max-w-md w-full shadow-[4px_4px_0px_var(--dp-color-ink)] space-y-6">
          {/* Brand Header */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-xl bg-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-ink)] flex items-center justify-center font-['Outfit',sans-serif] font-black text-[var(--dp-color-highlight)] text-3xl shadow-[2px_2px_0px_var(--dp-color-accent)]">
              A
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                ARO Admin Portal
              </h1>
              <p className="text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] font-medium mt-1">
                Authorized restaurant & order operations
              </p>
            </div>
          </div>

          {/* Error Alert */}
          {(validationError || authError) && (
            <div className="p-3.5 rounded-xl bg-[var(--dp-color-accent)]/10 border-[1.5px] border-[var(--dp-color-accent)] flex items-start gap-2.5 text-xs text-[var(--dp-color-ink)] animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-[var(--dp-color-accent)] shrink-0 mt-0.5" />
              <div className="leading-snug font-['Outfit',sans-serif]">
                <strong className="block font-bold text-[var(--dp-color-accent)]">Access Denied</strong>
                <span>{validationError || authError}</span>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="admin-email"
                className="block text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1 font-['Outfit',sans-serif]"
              >
                Administrator Email
              </label>
              <input
                id="admin-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@aroeats.com"
                className="w-full px-3.5 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-sm font-medium text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)]/60 shadow-[1px_1px_0px_var(--dp-color-line)] focus:outline-dashed focus:outline-2 focus:outline-[var(--dp-color-annotation)] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="admin-password"
                className="block text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1 font-['Outfit',sans-serif]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-sm font-medium text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)]/60 shadow-[1px_1px_0px_var(--dp-color-line)] focus:outline-dashed focus:outline-2 focus:outline-[var(--dp-color-annotation)] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)] transition-colors p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || authLoading}
              className="w-full mt-2 py-3 px-4 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-xs sm:text-sm font-bold font-['Outfit',sans-serif] uppercase tracking-wider border-[1.5px] border-[var(--dp-color-ink)] shadow-[2.5px_2.5px_0px_var(--dp-color-ink)] hover:translate-x-[-0.5px] hover:translate-y-[-0.5px] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting || authLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <span>Sign In to Dashboard →</span>
              )}
            </button>
          </form>

          {/* Provisioning Notice */}
          <div className="pt-4 border-t-[1.5px] border-[var(--dp-color-line)]/50 text-center">
            <p className="text-[11px] text-[var(--dp-color-ink-muted)] leading-relaxed font-['Outfit',sans-serif]">
              Admin accounts cannot register publicly. Permissions are provisioned via database migration and role grants.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
        © {currentYear} ARO Eats Hyderabad • Secure Management Gateway
      </footer>
    </div>
  )
}

export default AdminLoginPage
