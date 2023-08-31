import React from "react";

const ShoeCard = ({ shoe }) => {
  return (
    <>
      <div className="w-fit m-auto space-y-8">
        <img src={shoe} alt="shoe3" className="rounded-lg w-[250px] " />
        <div className="font-semibold text-2xl">
          <p className="leading-7 my-2">Nike Air Jordan-01</p>
          <span className="text-orange-500 font-bold">$200.20</span>
        </div>
      </div>
    </>
  );
};

export default ShoeCard;
