// css
import "./App.css"
import React from 'react'
// import { ToastContainer } from 'react-toastify'
import {store} from './redux/store.js'
import { Provider } from 'react-redux'

import Layout from './Layout.jsx'

// components

import { BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <>

<Provider store={store}>

      <BrowserRouter>

        <Layout />

      </BrowserRouter>
</Provider>



    </>
  )
}

export default App
