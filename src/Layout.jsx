import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// components
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/sections/Footer.jsx'


import {
  Home, Contact,
  Pricing, AppIntegration, IntegrationDetails,
  Login, Signup,
  Shop, ShopDetails, CartPage, CheckoutPage,
  Page404
} from './components/pages/index.js'
import { ScrollHeightTracker, CustomCursor } from "./components/universalComponents/index.js";


export default function Layout() {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])


  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/pricing"} element={<Pricing />} />
        <Route path={"/app-integration"} element={<AppIntegration />} />
        <Route path={"/integration-details"} element={<IntegrationDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />


        <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:productId' element={<ShopDetails />} />

        <Route path='/shop-details' element={<ShopDetails />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />

        <Route path={"*"} element={<Page404 />} />
      </Routes>

      <Footer />
      <CustomCursor />
      <ScrollHeightTracker />

    </div>
  )
}
