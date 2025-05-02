// css
import "./App.css"
import React from 'react'

import Layout from './Layout.jsx'

// components

import { BrowserRouter } from 'react-router-dom'

function App() {

 
  return (
    <>

      <BrowserRouter>
        <Layout />
      </BrowserRouter>

    </>
  )
}

export default App
