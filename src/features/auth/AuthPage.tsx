import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Phone,
  ArrowRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
  ArrowLeft,
  KeyRound,
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { getSafeRedirect } from '@/lib/authRedirect'
import { WashiTape } from '@/components/sketch/SketchDoodles'

export const AuthPage: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { user, isAuthenticated, isAuthLoading, signInWithEmail, signUpWithEmail, resetPasswordForEmail } = useAuth()

  // Safe redirect destination (default to /restaurants if not specified)
  const redirectTarget = getSafeRedirect(searchParams.get('redirect'), '/restaurants')

  // UI state
  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot'>('signin')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Form fields
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')

  // Status and feedback
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [emailVerificationPending, setEmailVerificationPending] = useState(false)

  // If user is already logged in, redirect them directly to intended destination
  useEffect(() => {
    if (!isAuthLoading && isAuthenticated && user) {
      if (user.role === 'admin') {
        navigate('/admin', { replace: true })
      } else if (user.role === 'restaurant') {
        navigate('/restaurant', { replace: true })
      } else {
        navigate(redirectTarget, { replace: true })
      }
    }
  }, [isAuthenticated, isAuthLoading, user, redirectTarget, navigate])

  const clearFeedback = () => {
    setErrorMessage(null)
    setSuccessMessage(null)
    setEmailVerificationPending(false)
  }

  // Handle Sign In submission
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    clearFeedback()

    if (!email.trim() || !password) {
      setErrorMessage('Please provide both your email and password.')
      return
    }

    setLoading(true)
    const result = await signInWithEmail(email.trim(), password)
    setLoading(false)

    if (result.success) {
      setSuccessMessage('Welcome back! Redirecting you...')
      setTimeout(() => {
        if (result.role === 'admin') {
          navigate('/admin', { replace: true })
        } else if (result.role === 'restaurant') {
          navigate('/restaurant', { replace: true })
        } else {
          navigate(redirectTarget, { replace: true })
        }
      }, 400)
    } else {
      setErrorMessage(result.error || 'Invalid email or password. Please verify and try again.')
    }
  }

  // Handle Registration submission
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    clearFeedback()

    const trimmedName = fullName.trim()
    if (!trimmedName || trimmedName.length < 2) {
      setErrorMessage('Please enter your full legal name (minimum 2 characters).')
      return
    }

    const trimmedEmail = email.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    const trimmedPhone = phone.trim()
    if (trimmedPhone) {
      const digitsOnly = trimmedPhone.replace(/[\s\-()+]/g, '')
      if (digitsOnly.length < 10 || digitsOnly.length > 15 || !/^\d+$/.test(digitsOnly)) {
        setErrorMessage('Please enter a valid 10-digit phone number (or leave blank).')
        return
      }
    }

    if (!password || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.')
      return
    }

    if (!confirmPassword) {
      setErrorMessage('Please confirm your password.')
      return
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please verify and re-enter.')
      return
    }

    setLoading(true)
    const result = await signUpWithEmail(trimmedEmail, password, trimmedName, trimmedPhone || undefined)
    setLoading(false)

    if (result.success) {
      if (result.emailConfirmationRequired) {
        setEmailVerificationPending(true)
        setSuccessMessage(
          `Account registered! A verification link has been sent to ${email.trim()}. Please verify your email before signing in.`
        )
      } else {
        setSuccessMessage('Registration successful! Redirecting you to ARO...')
        setTimeout(() => {
          navigate(redirectTarget, { replace: true })
        }, 500)
      }
    } else {
      setErrorMessage(result.error || 'Failed to create your account. Please check your details.')
    }
  }

  // Handle Forgot Password submission
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    clearFeedback()

    if (!email.trim()) {
      setErrorMessage('Please enter the email address linked to your patron account.')
      return
    }

    setLoading(true)
    const result = await resetPasswordForEmail(email.trim())
    setLoading(false)

    if (result.success) {
      setSuccessMessage(`If an account exists for ${email.trim()}, password recovery instructions have been dispatched.`)
    } else {
      setErrorMessage(result.error || 'Unable to process password reset request at this time.')
    }
  }

  return (
    <div className="min-h-screen w-full bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] flex flex-col justify-between paper-grid selection:bg-[var(--dp-color-highlight)] selection:text-[var(--dp-color-ink)]">
      {/* Top Header / Brand Bar */}
      <header className="w-full border-b-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-ground)]/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <Link
            to="/home"
            className="flex items-center gap-3 group focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-[var(--dp-color-annotation)]"
          >
            <div className="w-10 h-10 bg-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-ink)] rounded-[var(--dp-radius-control)] p-0.5 shadow-[1.5px_1.5px_0px_var(--dp-color-accent)] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[2.5px_2.5px_0px_var(--dp-color-accent)] transition-all flex items-center justify-center">
              <span className="text-[var(--dp-color-highlight)] font-extrabold text-xl font-['Outfit',sans-serif] leading-none">
                A
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-[var(--dp-color-ink)] font-['Outfit',sans-serif] leading-none">
                  ARO
                </span>
                <span className="bg-[var(--dp-color-accent)] text-white text-[8px] font-bold px-1.5 py-0.5 rounded border border-[var(--dp-color-accent)] uppercase tracking-wider font-['Outfit',sans-serif]">
                  PATRON
                </span>
              </div>
              <span className="text-[10px] tracking-wider text-[var(--dp-color-ink-muted)] font-semibold uppercase pt-0.5 font-['Outfit',sans-serif]">
                Hyderabad Gastronomy
              </span>
            </div>
          </Link>

          <Link
            to="/home"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-semibold text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] hover:shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] transition-all font-['Outfit',sans-serif]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Storefront</span>
          </Link>
        </div>
      </header>

      {/* Main Authentication Card */}
      <main className="flex-1 max-w-lg w-full mx-auto px-4 py-8 sm:py-12 flex flex-col justify-center">
        <div className="relative bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-2xl p-6 sm:p-8 shadow-[4px_4px_0px_var(--dp-color-ink)] space-y-6">
          {/* Decorative Taped Note */}
          <div className="absolute -top-3.5 right-6 z-20">
            <WashiTape text="★ PATRON ACCESS" angle="1.5deg" className="bg-[var(--dp-color-highlight)]" />
          </div>

          {/* Heading */}
          <div className="space-y-1.5 pt-1">
            <div className="inline-flex items-center gap-1.5 text-[var(--dp-color-annotation)] text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
              <span>Gourmet Dining Experience</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] tracking-tight">
              {mode === 'signin' && 'Sign In to ARO'}
              {mode === 'signup' && 'Create Patron Account'}
              {mode === 'forgot' && 'Reset Patron Password'}
            </h1>
            <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
              {mode === 'signin' && 'Access curated Hyderabad kitchens, live courier tracking and past orders.'}
              {mode === 'signup' && 'Join ARO to order chef-crafted dishes delivered in temperature-controlled pods.'}
              {mode === 'forgot' && 'Enter your email address to receive a secure recovery link.'}
            </p>
          </div>

          {/* Segmented Mode Toggle (Sign In / Sign Up) */}
          {mode !== 'forgot' && (
            <div className="grid grid-cols-2 p-1 bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] rounded-xl gap-1">
              <button
                type="button"
                onClick={() => {
                  setMode('signin')
                  clearFeedback()
                }}
                className={`py-2 text-xs sm:text-sm font-bold font-['Outfit',sans-serif] rounded-lg transition-all cursor-pointer ${
                  mode === 'signin'
                    ? 'bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)]'
                    : 'text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)]'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode('signup')
                  clearFeedback()
                }}
                className={`py-2 text-xs sm:text-sm font-bold font-['Outfit',sans-serif] rounded-lg transition-all cursor-pointer ${
                  mode === 'signup'
                    ? 'bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)]'
                    : 'text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)]'
                }`}
              >
                Create Account
              </button>
            </div>
          )}

          {/* Feedback Banners */}
          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-rose-50 border-[1.5px] border-rose-300 text-rose-800 text-xs font-semibold flex items-start gap-2.5 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="flex-1 font-['Outfit',sans-serif]">{errorMessage}</div>
            </div>
          )}

          {successMessage && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border-[1.5px] border-emerald-300 text-emerald-900 text-xs font-semibold flex items-start gap-2.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div className="flex-1 font-['Outfit',sans-serif]">{successMessage}</div>
            </div>
          )}

          {/* Mode 1: SIGN IN FORM */}
          {mode === 'signin' && (
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--dp-color-ink-muted)]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="patron@example.com"
                    autoComplete="email"
                    className="w-full pl-10 pr-4 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-sm font-medium text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)] focus:outline-dashed focus:outline-2 focus:outline-[var(--dp-color-annotation)] transition-all font-['Outfit',sans-serif]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setMode('forgot')
                      clearFeedback()
                    }}
                    className="text-xs font-bold text-[var(--dp-color-accent)] hover:underline cursor-pointer font-['Outfit',sans-serif]"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--dp-color-ink-muted)]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="w-full pl-10 pr-11 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-sm font-medium text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)] focus:outline-dashed focus:outline-2 focus:outline-[var(--dp-color-annotation)] transition-all font-['Outfit',sans-serif]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)] cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-sm font-bold font-['Outfit',sans-serif] border-[1.5px] border-[var(--dp-color-ink)] shadow-[2.5px_2.5px_0px_var(--dp-color-ink)] hover:translate-x-[-0.5px] hover:translate-y-[-0.5px] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_var(--dp-color-ink)] transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>Sign In to Account</span>
                    <ArrowRight className="w-4 h-4 text-[var(--dp-color-highlight)]" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Mode 2: SIGN UP FORM */}
          {mode === 'signup' && (
            <form onSubmit={handleSignUp} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] mb-1.5">
                  Full Legal Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--dp-color-ink-muted)]" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sreekar Pabbathi"
                    autoComplete="name"
                    className="w-full pl-10 pr-4 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-sm font-medium text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)] focus:outline-dashed focus:outline-2 focus:outline-[var(--dp-color-annotation)] transition-all font-['Outfit',sans-serif]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] mb-1.5">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--dp-color-ink-muted)]" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="patron@domain.com"
                      autoComplete="email"
                      className="w-full pl-10 pr-4 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-sm font-medium text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)] focus:outline-dashed focus:outline-2 focus:outline-[var(--dp-color-annotation)] transition-all font-['Outfit',sans-serif]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] mb-1.5">
                    Phone (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--dp-color-ink-muted)]" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 01234"
                      autoComplete="tel"
                      className="w-full pl-10 pr-4 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-sm font-medium text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)] focus:outline-dashed focus:outline-2 focus:outline-[var(--dp-color-annotation)] transition-all font-['Outfit',sans-serif]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] mb-1.5">
                  Password (min 6 characters)
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--dp-color-ink-muted)]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    autoComplete="new-password"
                    className="w-full pl-10 pr-11 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-sm font-medium text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)] focus:outline-dashed focus:outline-2 focus:outline-[var(--dp-color-annotation)] transition-all font-['Outfit',sans-serif]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)] cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--dp-color-ink-muted)]" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    autoComplete="new-password"
                    className="w-full pl-10 pr-11 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-sm font-medium text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)] focus:outline-dashed focus:outline-2 focus:outline-[var(--dp-color-annotation)] transition-all font-['Outfit',sans-serif]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)] cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-sm font-bold font-['Outfit',sans-serif] border-[1.5px] border-[var(--dp-color-ink)] shadow-[2.5px_2.5px_0px_var(--dp-color-ink)] hover:translate-x-[-0.5px] hover:translate-y-[-0.5px] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_var(--dp-color-ink)] transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <span>Creating Patron Profile...</span>
                ) : (
                  <>
                    <span>Register New Patron</span>
                    <ArrowRight className="w-4 h-4 text-[var(--dp-color-highlight)]" />
                  </>
                )}
              </button>

              {emailVerificationPending && (
                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signin')
                      clearFeedback()
                    }}
                    className="text-xs font-bold text-[var(--dp-color-accent)] hover:underline cursor-pointer font-['Outfit',sans-serif]"
                  >
                    Proceed to Sign In with your credentials →
                  </button>
                </div>
              )}
            </form>
          )}

          {/* Mode 3: FORGOT PASSWORD FORM */}
          {mode === 'forgot' && (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] mb-1.5">
                  Account Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--dp-color-ink-muted)]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="patron@example.com"
                    autoComplete="email"
                    className="w-full pl-10 pr-4 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-sm font-medium text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)] focus:outline-dashed focus:outline-2 focus:outline-[var(--dp-color-annotation)] transition-all font-['Outfit',sans-serif]"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-sm font-bold font-['Outfit',sans-serif] border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-ink)] cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>{loading ? 'Transmitting Request...' : 'Send Recovery Link'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMode('signin')
                    clearFeedback()
                  }}
                  className="py-3 px-4 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] cursor-pointer"
                >
                  Back to Sign In
                </button>
              </div>
            </form>
          )}

          {/* Security & Verification Assurance Footer */}
          <div className="pt-4 border-t-[1.5px] border-[var(--dp-color-line)] flex items-center justify-between text-[11px] text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
            <div className="flex items-center gap-1.5 text-[#2d5f3e]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="font-semibold">Supabase PostgreSQL Encrypted</span>
            </div>
            <span>Hyderabad Gastronomy</span>
          </div>
        </div>

        {/* Bottom Helper Note */}
        <p className="text-center text-xs text-[var(--dp-color-ink-muted)] pt-6 font-['Outfit',sans-serif]">
          Are you a restaurant partner or platform manager?{' '}
          <Link to="/admin/login" className="text-[var(--dp-color-accent)] font-bold hover:underline">
            Admin Portal Sign In →
          </Link>
        </p>
      </main>

      {/* Footer minimal signature */}
      <footer className="w-full border-t-[1.5px] border-[var(--dp-color-line)] py-4 text-center text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
        ARO EATS • Good Food, Beautifully Found • Hyderabad
      </footer>
    </div>
  )
}

export default AuthPage
