import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'

const App = () => {
  const [showLogin , setShowLogin] = useState(false)
  return (
    <div className='app'>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : <> </>}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
  )
}

export default App
