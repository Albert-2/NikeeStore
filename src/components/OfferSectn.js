import React from "react";
import Offer from "../assets/images/offerShoes.svg";
import Arrow from "../assets/images/arrow-right.svg";

const OfferSectn = () => {
  return (
    <>
      <div className="border-2 border-black flex items-center  flex-wrap-reverse justify-center sm:px-16 px-4 py-10 gap-10">
        <img
          src={Offer}
          alt="offer"
          className="flex-1 m-auto border-2 border-black md:max-w-[75%]"
        />
        <div className="flex items-start justify-center space-y-8 flex-col flex-1 min-w-[30%]">
          <h1 className="text-5xl font-bold">
            <span className="text-orange-500">Special</span> Offer
          </h1>
          <p className="text-gray-500 text-xl ">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="text-gray-500 text-xl ">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          <div className="flex items-start justify-start flex-wrap gap-4 border-2 border-black">
            <button className="bg-orange-600 p-3 text-white rounded-3xl px-5 text-lg font-semibold">
              Shop now
              <img src={Arrow} alt="arraow" className="inline-block mx-4"></img>
            </button>
            <button className="rounded-3xl px-5 p-2 text-lg border-2 border-gray-400 text-gray-500">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferSectn;
