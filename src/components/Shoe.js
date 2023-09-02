import React, { useState } from "react";
import shoe1 from "../assets/images/main-shoe-1.png";
import shoe2 from "../assets/images/main-shoe-2.png";
import shoe3 from "../assets/images/main-shoe-3.png";

const Shoe = () => {
  const [imgValue, setImgValue] = useState(shoe1);
  function handleClick(e) {
    switch (e.target.alt) {
      case "shoe1":
        setImgValue(shoe1);
        break;
      case "shoe2":
        setImgValue(shoe2);
        break;
      case "shoe3":
        setImgValue(shoe3);
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div className="relative">
        <div className="bg-violet-100 flex-1 min-w-[50%] h-[100vh] flex items-center justify-center">
          <img src={imgValue} alt="shoes1" className="m-auto " />
        </div>
        <div className="absolute left-5 -bottom-5 flex space-x-2">
          <div
            className="border-2 border-black cursor-pointer rounded-xl"
            onClick={handleClick}
          >
            <img className="w-[150px]" src={shoe1} alt="shoe1" />
          </div>
          <div
            className="border-2 border-black cursor-pointer rounded-xl"
            onClick={handleClick}
          >
            <img className="w-[150px]" src={shoe2} alt="shoe2" />
          </div>
          <div
            className="border-2 border-black cursor-pointer rounded-xl"
            onClick={handleClick}
          >
            <img className="w-[150px]" src={shoe3} alt="shoe3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shoe;
