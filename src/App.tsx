import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import { CartProvider } from '@/context/CartContext'

// Feature Pages
import { CinematicLandingPage } from '@/features/landing/CinematicLandingPage'
import { StorefrontPage } from '@/features/storefront/StorefrontPage'
import { RestaurantDiscoveryPage } from '@/features/restaurants/RestaurantDiscoveryPage'
import { RestaurantDetailPage } from '@/features/restaurants/RestaurantDetailPage'
import { CartPage } from '@/features/cart/CartPage'
import { CheckoutPage } from '@/features/checkout/CheckoutPage'
import { OrderTrackingPage } from '@/features/orders/OrderTrackingPage'
import { AccountPage } from '@/features/account/AccountPage'

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
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
                <div className="min-h-screen flex flex-col items-center justify-center bg-[#211A19] text-[#FFF0D5] p-6 text-center">
                  <span className="text-8xl font-black text-[#FF650D] font-['Oswald'] mb-2">
                    404
                  </span>
                  <h1 className="text-2xl font-bold font-['Outfit'] text-white mb-2">
                    Gastronomic Coordinate Not Found
                  </h1>
                  <p className="text-xs text-[#A89A97] max-w-sm mb-6 leading-relaxed">
                    The dining destination or course you requested does not exist or has been retired.
                  </p>
                  <Link
                    to="/home"
                    className="inline-flex px-6 py-3 rounded-xl bg-[#FF650D] hover:bg-[#E55400] text-white font-bold text-xs transition-colors shadow-lg shadow-[#FF650D]/20"
                  >
                    Return to Storefront →
                  </Link>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
