// css
import "./App.css"
import React from 'react'
// import { ToastContainer } from 'react-toastify'
import {store, persistor} from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Layout from './Layout.jsx'

// components

import { BrowserRouter } from 'react-router-dom'

function App() {

  

  return (
    <>

<Provider store={store}>

      <BrowserRouter>
      <PersistGate persistor={persistor}>


        <Layout />

      </PersistGate>
      </BrowserRouter>
</Provider>



    </>
  )
}

export default App
