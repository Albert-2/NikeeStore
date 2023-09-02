import React from "react";
import Logo from "../assets/images/logo/nikeLogoBW.svg";
import Facebook from "../assets/icons/facebook.png";
import Twitter from "../assets/icons/twitter.png";
import Instagram from "../assets/icons/instagram.png";

const Footer = () => {
  return (
    <>
      <div className=" bg-black text-white sm:px-16 px-4 py-24 space-y-8">
        <div className=" flex md:flex-row flex-col items-stretch justify-center flex-wrap gap-10">
          <div className="  flex gap-5 flex-col md:w-[30%] space-y-4">
            <img src={Logo} alt="logo" className="w-[150px]" />
            <p className=" text-lg tracking-wide text-gray-300">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
            <div className="flex items-start justify-start  gap-5">
              <img
                src={Facebook}
                alt="logo1"
                className="p-2 bg-white rounded-full "
                style={{
                  filter:
                    "invert(0%) sepia(0%) saturate(0%) hue-rotate(325deg) brightness(103%) contrast(108%)",
                }}
              />
              <img
                src={Twitter}
                alt="logo1"
                className="p-2 bg-white rounded-full "
                style={{
                  filter:
                    "invert(0%) sepia(0%) saturate(0%) hue-rotate(325deg) brightness(103%) contrast(108%)",
                }}
              />
              <img
                src={Instagram}
                alt="logo1"
                className="p-2 bg-white rounded-full "
                style={{
                  filter:
                    "invert(0%) sepia(0%) saturate(0%) hue-rotate(325deg) brightness(103%) contrast(108%)",
                }}
              />
            </div>
          </div>
          <div className="  flex gap-8 flex-col flex-1 min-w-[150px]">
            <h1 className="font-bold text-3xl">Products</h1>
            <ul className="space-y-2 text-lg tracking-wide text-gray-300">
              <li>Air Force 1</li>
              <li>Nike Winflo 10</li>
              <li>Nike Air Pegasus</li>
              <li>Nike Air Trainer 1</li>
              <li>Jordan Retro 6</li>
              <li>Nike Air Presto</li>
            </ul>
          </div>
          <div className="  flex gap-8 flex-col flex-1 min-w-[150px]">
            <h1 className="font-bold text-3xl">Help</h1>
            <ul className="space-y-2 text-lg tracking-wide text-gray-300">
              <li>About us</li>
              <li>FAQ's</li>
              <li>How it Works</li>
              <li>Privacy policy</li>
              <li>Payment policy</li>
            </ul>
          </div>
          <div className="  flex gap-8 flex-col flex-1 min-w-[150px]">
            <h1 className="font-bold text-3xl">Get in touch</h1>
            <ul className="space-y-2 text-lg tracking-wide text-gray-300">
              <li>customer@nike.com</li>
              <li>+92554862354</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between flex-wrap   text-lg tracking-wide text-gray-300 gap-2">
          <p className=" text-center">&copy;Copyright. All rights reserved.</p>
          <p className=" text-center">Terms & Conditions</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
