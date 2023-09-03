import React, { useState } from "react";
import logo from "../assets/images/logo/logo.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  function handleClick() {
    setMenu(!menu);
  }
  return (
    <>
      <div className="container m-auto relative">
        <div className="flex items-center justify-between py-10 px-2">
          <img src={logo} alt="logo" />
          <ul className="navLinks list-none text-black md:flex hidden items-center justify-evenly flex-1 max-w-[70%] text-lg tracking-widest">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
          <div className="flex items-center justify-between gap-5">
            <p className="text-xl tracking-wide md:block hidden text-orange-500 font-semibold">
              Sign in
            </p>
            <button
              className="md:hidden block h-[5vh] sm:w-[100px] space-x-4"
              onClick={handleClick}
            >
              {menu ? (
                <i className="fa-solid fa-multiply fa-2xl cursor-pointer"></i>
              ) : (
                <i className="fa-solid fa-bars fa-2xl cursor-pointer"></i>
              )}
            </button>
          </div>
        </div>
        {menu && (
          <div className="flex flex-col items-center justify-center space-y-5 md:hidden absolute w-full bg-white py-5">
            <ul className="navLinks list-none text-black flex flex-col items-center justify-evenly gap-5 flex-1 max-w-[70%] text-lg tracking-widest ">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/" className="text-orange-500 font-semibold">
                  Sign in
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
