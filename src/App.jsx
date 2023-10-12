import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Products from './Pages/Products';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import ProductPage from './Pages/ProductPage';
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* User Routes */}
          <Route path='/' element={<Home/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/product-detail/:id' element={<ProductPage/>} />
          <Route path='/about-us' element={<About/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/sign-in' element={<Login/>} />
        </Routes>
      </BrowserRouter>
      <Toaster/>
    </>
  )
}

export default App