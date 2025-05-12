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
  Dashboard, SummeryPage, Orders, Wishlist, AccountDetails,
  Page404
} from './components/pages/index.js'
import { ScrollHeightTracker, CustomCursor } from "./components/universalComponents/index.js";


export default function Layout() {

  const location = useLocation()

  useEffect(() => {

    if(location.pathname !== "dashboard/*"){
      window.scrollTo(0, 0)
    }
  }, [location.pathname])


  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path={"/contact"} element={<Contact />} />
        {/* pricing section */}
        <Route path={"/pricing"} element={<Pricing />} />
        <Route path={"/app-integration"} element={<AppIntegration />} />
        <Route path={"/integration-details"} element={<IntegrationDetails />} />
        {/* auth */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        {/* shop paths */}
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:productId' element={<ShopDetails />} />

        <Route path='/shop-details' element={<ShopDetails />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />

        {/* dashboard */}
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='' element={<SummeryPage />}></Route>
          <Route path='orders' element={<Orders />}></Route>
          <Route path='wishlist' element={<Wishlist />}></Route>
          <Route path='account' element={<AccountDetails />}></Route>
        </Route>


        <Route path={"*"} element={<Page404 />} />
      </Routes>

      <Footer />
      <CustomCursor />
      <ScrollHeightTracker />

    </div>
  )
}
