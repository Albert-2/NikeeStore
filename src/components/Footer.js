import React from "react";
import Logo from "../assets/images/nikeLogoBW.svg";
import Facebook from "../assets/icons/facebook.png";

const Footer = () => {
  return (
    <>
      <div className=" bg-black text-white sm:px-16 px-4 py-24 space-y-8">
        <div className="border-2 border-white flex md:flex-row flex-col items-stretch justify-center flex-wrap gap-10">
          <div className=" border-2 border-white flex gap-5 flex-col md:w-[40%] space-y-4">
            <img src={Logo} alt="logo" className="w-[150px]" />
            <p className=" text-lg tracking-wide text-gray-300">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
            <div className="flex items-start justify-start border-2 border-white gap-5">
              <img
                src={Facebook}
                alt="logo1"
                className="p-1 bg-white rounded-full border-2 border-white"
                style={{
                  filter:
                    "invert(0%) sepia(0%) saturate(0%) hue-rotate(325deg) brightness(103%) contrast(108%)",
                }}
              />
              <img
                src={Facebook}
                alt="logo1"
                className="p-1 bg-white rounded-full border-2 border-white"
                style={{
                  filter:
                    "invert(0%) sepia(0%) saturate(0%) hue-rotate(325deg) brightness(103%) contrast(108%)",
                }}
              />
              <img
                src={Facebook}
                alt="logo1"
                className="p-1 bg-white rounded-full border-2 border-white"
                style={{
                  filter:
                    "invert(0%) sepia(0%) saturate(0%) hue-rotate(325deg) brightness(103%) contrast(108%)",
                }}
              />
            </div>
          </div>
          <div className=" border-2 border-white flex gap-8 flex-col flex-1 min-w-[150px]">
            <h1 className="font-bold text-3xl">Products</h1>
            <ul className="space-y-2 text-lg tracking-wide text-gray-300">
              <li>Air Force 1</li>
              <li>Air Force 1</li>
              <li>Air Force 1</li>
              <li>Air Force 1</li>
              <li>Air Force 1</li>
              <li>Air Force 1</li>
            </ul>
          </div>
          <div className=" border-2 border-white flex gap-8 flex-col flex-1 min-w-[150px]">
            <h1 className="font-bold text-3xl">Help</h1>
            <ul className="space-y-2 text-lg tracking-wide text-gray-300">
              <li>About us</li>
              <li>About us</li>
              <li>About us</li>
              <li>About us</li>
              <li>About us</li>
            </ul>
          </div>
          <div className=" border-2 border-white flex gap-8 flex-col flex-1 min-w-[150px]">
            <h1 className="font-bold text-3xl">Get in touch</h1>
            <ul className="space-y-2 text-lg tracking-wide text-gray-300">
              <li>customer@nike.com</li>
              <li>+92554862354</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between flex-wrap  border-2 border-white text-lg tracking-wide text-gray-300 gap-2">
          <p className="border-2 border-white text-center">&copy;Copyright. All rights reserved.</p>
          <p className="border-2 border-white text-center">Terms & Conditions</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
