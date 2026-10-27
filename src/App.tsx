import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import { CartProvider } from '@/context/CartContext'
import { AdminAuthProvider } from '@/context/AdminAuthContext'

// Feature Pages
import { CinematicLandingPage } from '@/features/landing/CinematicLandingPage'
import { StorefrontPage } from '@/features/storefront/StorefrontPage'
import { RestaurantDiscoveryPage } from '@/features/restaurants/RestaurantDiscoveryPage'
import { RestaurantDetailPage } from '@/features/restaurants/RestaurantDetailPage'
import { CartPage } from '@/features/cart/CartPage'
import { CheckoutPage } from '@/features/checkout/CheckoutPage'
import { OrderTrackingPage } from '@/features/orders/OrderTrackingPage'
import { AccountPage } from '@/features/account/AccountPage'
import { AuthPage } from '@/features/auth/AuthPage'

// Admin Feature Pages & Route Guard
import { AdminLoginPage } from '@/features/admin/AdminLoginPage'
import { AdminRouteGuard } from '@/features/admin/AdminRouteGuard'
import { AdminLayout } from '@/features/admin/AdminLayout'
import { AdminOverviewPage } from '@/features/admin/AdminOverviewPage'
import { AdminOrdersPage } from '@/features/admin/AdminOrdersPage'
import { AdminRestaurantsPage } from '@/features/admin/AdminRestaurantsPage'
import { AdminMenuPage } from '@/features/admin/AdminMenuPage'

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <AdminAuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              {/* Administrator Gateway & Login */}
              <Route path="/admin/login" element={<AdminLoginPage />} />

              {/* Protected Administrator Dashboard Subroutes */}
              <Route path="/admin" element={<AdminRouteGuard />}>
                <Route element={<AdminLayout />}>
                  <Route index element={<AdminOverviewPage />} />
                  <Route path="orders" element={<AdminOrdersPage />} />
                  <Route path="restaurants" element={<AdminRestaurantsPage />} />
                  <Route path="menu" element={<AdminMenuPage />} />
                </Route>
              </Route>

              {/* Dedicated Customer Authentication Gateway */}
              <Route path="/auth" element={<AuthPage />} />

              {/* Page A: Dedicated Cinematic Editorial Landing Experience at / */}
              <Route path="/" element={<CinematicLandingPage />} />

            {/* Page B: Real Customer-Facing Storefront at /home */}
            <Route path="/home" element={<StorefrontPage />} />

            {/* Page C: Full Restaurant Discovery with Filters at /restaurants */}
            <Route path="/restaurants" element={<RestaurantDiscoveryPage />} />

            {/* Page D: Restaurant Tasting Menu & Item Customization at /restaurants/:id */}
            <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />

            {/* Page E: Customer Gastronomy Basket at /cart */}
            <Route path="/cart" element={<CartPage />} />

            {/* Page F: Checkout, Address Selection & Payment Simulation at /checkout */}
            <Route path="/checkout" element={<CheckoutPage />} />

            {/* Page G: MapLibre Live Vector Tracking & Telematics at /orders/:id */}
            <Route path="/orders/:id" element={<OrderTrackingPage />} />

            {/* Page H: Customer Account, Order History, 1-Click Reorder & Cellar at /account */}
            <Route path="/account" element={<AccountPage />} />

            {/* 404 Catch-All Page */}
            <Route
              path="*"
              element={
                <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] paper-grid p-6 text-center">
                  <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-2xl p-8 sm:p-12 shadow-[3px_3px_0px_var(--dp-color-ink)] max-w-md w-full space-y-4">
                    <span className="text-7xl sm:text-8xl font-black text-[var(--dp-color-accent)] font-['Outfit',sans-serif] block tracking-tight">
                      404
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit',sans-serif] text-[var(--dp-color-ink)]">
                      Coordinate Not Found
                    </h1>
                    <p className="text-sm sm:text-base text-[var(--dp-color-ink-muted)] font-normal leading-relaxed">
                      The dining destination or tasting course you requested does not exist in our Hyderabad catalog or has been retired.
                    </p>
                    <div className="pt-2">
                      <Link
                        to="/home"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white font-medium text-base border-[1.5px] border-[var(--dp-color-accent)] shadow-[2px_2px_0px_var(--dp-color-ink)] transition-all hover:translate-x-[-0.5px] hover:translate-y-[-0.5px] active:translate-x-[1px] active:translate-y-[1px]"
                      >
                        Return to Storefront →
                      </Link>
                    </div>
                  </div>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AdminAuthProvider>
  </AuthProvider>
)
}

export default App
