import React from 'react'
import {Navbar , Footer , Contact} from '../Components/index'

const ContactUs = () => {
  return (
    <>
    <div className='relative dark:bg-gray-900 dark:text-gray-50'>
      <div className='padding'>
        <Navbar />
      </div>
      <div className='padding'>
        <Contact />
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>

    {/*  */}
    </>
  )
}

export default ContactUs