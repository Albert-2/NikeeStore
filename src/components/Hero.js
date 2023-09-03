import React from "react";
import Arrow from "../assets/images/arrow-right.svg";
import ShoeBackg from "../assets/images/heroBack.avif";

const Hero = () => {
  return (
    <>
      <div
        className="flex flex-col  items-start space-y-10 sm:px-16 px-4 py-10 flex-1"
        style={{
          background: `url(${ShoeBackg}) center center/cover no-repeat fixed`,
        }}
      >
        <p className="text-orange-400 w-full text-lg font-semibold tracking-widest">
          Our Summer collections
        </p>
        <h1 className="font-bold md:text-8xl text-5xl  leading-snug">
          <span className="block">The New Arrival</span>
          <span className="text-orange-500">Nike</span> Shoes
        </h1>
        <p className="text-gray-500 text-xl max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <button className="bg-orange-600 p-3 text-white rounded-3xl px-5 text-lg font-semibold">
          Shop now
          <img src={Arrow} alt="arraow" className="inline-block mx-4"></img>
        </button>
        <div className="flex items-start md:gap-16 flex-wrap gap-4  w-full text-gray-500">
          <div className="flex flex-col">
            <p className="font-bold text-4xl">1k+</p>
            <span>Brands</span>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-4xl">500+</p>
            <span>Shops</span>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-4xl">250k+</p>
            <span>Customers</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
