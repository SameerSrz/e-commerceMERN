import React from 'react'
import {
  Navbar,
  Footer,
  Subscribe,
  CustomerReviews,
  Hero,
  Services,
  PopularProducts,
  SpecialOffer,
  SuperQuality
} from '../Components/index'

const Home = () => {
  return (
    <main className='relative dark:bg-gray-900 dark:text-gray-50'>
      <Navbar/> 
      <section className='xl:padding-l wide:padding-r padding-b'>
        {/* <Hero/> */}
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer/>
      </section>
      <section className='padding'>
        <CustomerReviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className=''>
        <Footer/>
      </section>
    </main>
  )
}

export default Home