import React from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <>
      {/* <div className="flex items-center justify-between border-2 border-black px-16 py-10 space-x-2"> */}
      <div className="flex items-center justify-between border-2 border-black container m-auto py-10 px-2">
        <img src={logo} alt="logo" />
        <ul className="navLinks list-none text-black border-2 border-black md:flex hidden items-center justify-evenly flex-1 max-w-[70%] text-lg tracking-widest">
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
        <p className="text-xl tracking-wide font-semibold">Sign in</p>
      </div>
    </>
  );
};

export default Navbar;
