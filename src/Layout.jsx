import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'


// components
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/sections/Footer.jsx'


import {
  Home, Contact,
  Pricing, AppIntegration, IntegrationDetails,
  Login, Signup,
  Shop, ShopDetails, CartPage, CheckoutPage,
  Dashboard,
  Blogs, BlogDetails,
  PrivateRoute,
  Page404
} from './components/pages/index.js'
import { ScrollHeightTracker, CustomCursor } from "./components/universalComponents/index.js";


export default function Layout() {

  const location = useLocation()

  useEffect(() => {

    if (location.pathname !== "dashboard/*") {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  // clear toast waiting queue so the alerts don't start in queue (as i wanna show only 3 at a time)
  const clearToastQueue = () => {
    toast.clearWaitingQueue()
  }
  clearToastQueue()


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

        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />

        {/* dashboard */}
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
        </Route>

        {/* blogs */}
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:blogId' element={<BlogDetails />} />


        <Route path={"*"} element={<Page404 />} />
      </Routes>
      {/* react toater */}
      <ToastContainer limit={3} />


      <Footer />
      <CustomCursor />
      <ScrollHeightTracker />

    </div>
  )
}
