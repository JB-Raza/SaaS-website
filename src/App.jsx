// css
import "./App.css"
import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/sections/Footer.jsx'

// components
import {Home, Contact, Page404} from './components/pages/index.js'
import { ScrollHeightTracker, CustomCursor } from "./components/universalComponents/index.js";

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {


  return (
    <>

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index path={"/"} element={<Home />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path={"*"} element={<Page404 />} />


    </Routes>

    <Footer />
    </BrowserRouter>




      {/* custom cursor */}
      <CustomCursor />
    {/* <Home /> */}

      <ScrollHeightTracker />

    </>
  )
}

export default App
