import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Products from './Pages/Products';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* User Routes */}
          <Route path='/' element={<Home/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/products' element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App