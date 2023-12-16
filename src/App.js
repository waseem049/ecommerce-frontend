import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CustomDrawer from './components/CustomDrawer'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import SigninPage from './components/Registration-Login/SigninPage'


const App = () => {
  return (
    <>
      {/* <CustomDrawer /> */}
      
        <Routes>
          <Route path='/'  element={<CustomDrawer />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signin' element={<SigninPage />} />
        </Routes>
    </>
  )
}

export default App