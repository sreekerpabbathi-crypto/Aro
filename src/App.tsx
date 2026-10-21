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
                <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF6EE] text-[#121212] paper-grid p-6 text-center">
                  <div className="bg-white border-2 sm:border-[2.5px] border-[#121212] rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_#121212] max-w-md w-full space-y-4">
                    <span className="text-8xl font-black text-[#FF650D] font-['Oswald'] block tracking-tighter">
                      404
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-[#121212]">
                      Coordinate Not Found
                    </h1>
                    <p className="text-xs sm:text-sm text-[#5E5854] font-medium leading-relaxed">
                      The dining destination or tasting course you requested does not exist in our Hyderabad catalog or has been retired.
                    </p>
                    <div className="pt-2">
                      <Link
                        to="/home"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF650D] hover:bg-[#E55400] text-white font-black font-['Outfit'] text-sm border-2 border-[#121212] shadow-[3px_3px_0px_#121212] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
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
    </AuthProvider>
  )
}

export default App
