import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../Constants/index'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full dark:bg-gray-900 dark:text-gray-50'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {
            navLinks.map((item)=> (
              <li key={item.label}>
                  <Link to={item.href} className='fonts-montserrat leading-normal text-lg text-slate-gray dark:text-gray-50'>
                    {item.label}
                  </Link>
              </li>
            ))
          }
        </ul>
        <div className='hidden max-lg:block'>
          <GiHamburgerMenu size={30}/>
          {/* <img src={hamburger} alt="hamburger" className='dark:bg-gray-800 dark:gray-50' width={25} height={25} /> */}
        </div>
      </nav>
    </header>
  )
}

export default Navbar