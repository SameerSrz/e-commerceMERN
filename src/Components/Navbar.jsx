import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constants/index";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const params = useLocation();
  const handleCart = () => {
    setIsActive(true);
  };

  return (
    <>
      <header
        className={`${
          (params.pathname === "/sign-up") | (params.pathname === "/sign-in") &&
          "backdrop-blur-sm bg-slate-300/30"
        } padding-x py-8 absolute z-10 w-full  dark:text-gray-50`}
      >
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="fonts-montserrat leading-normal text-lg text-black dark:text-gray-50 hover:text-red-500 transition duration-300 ease-in-out"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div onClick={() => setIsActive(true)}>
            <AiOutlineShoppingCart
              size={30}
              className="mr-5 cursor-pointer hover:text-red-500 transition duration-300 ease-in-out"
            />
          </div>
          <div>
            <button className="hover:text-red-500 transition duration-300 ease-in-out ">
              <Link to={"/sign-up"}>Sign Up</Link>
            </button>
            <span> / </span>
            <button className="hover:text-red-500 transition duration-300 ease-in-out">
              <Link to={"/sign-in"}>Sign In</Link>
            </button>
          </div>
          <div className="hidden max-lg:block">
            <GiHamburgerMenu size={30} />
            {/* <img src={hamburger} alt="hamburger" className='dark:bg-gray-800 dark:gray-50' width={25} height={25} /> */}
          </div>
        </nav>
      </header>
      <Cart isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default Navbar;
