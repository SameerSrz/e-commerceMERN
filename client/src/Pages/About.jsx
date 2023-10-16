import React from 'react'
import {Navbar , Footer, AboutUs } from '../Components/index'

const About = () => {
  return (
    <div className='relative dark:bg-gray-900 dark:text-gray-50'>
        <div className=''>
          <Navbar />
        </div>
      <div className='h-screen flex flex-col flex-grow justify-center items-center p-4 padding-t'>
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <AboutUs/>
          </div>
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  )
}

export default About