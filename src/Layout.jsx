import React, {useEffect} from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'

// components
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/sections/Footer.jsx'


import { Home, Contact, Pricing, Page404 } from './components/pages/index.js'
import { ScrollHeightTracker, CustomCursor } from "./components/universalComponents/index.js";


export default function Layout() {

    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [location])
  

  return (
    <div>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/pricing"} element={<Pricing />} />

          <Route path={"*"} element={<Page404 />} />


        </Routes>

        <Footer />
        <CustomCursor />
        <ScrollHeightTracker />

    </div>
  )
}
