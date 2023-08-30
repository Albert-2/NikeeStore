import React from "react";
import shoe1 from "../assets/images/main-shoe-1.png";
import shoe2 from "../assets/images/main-shoe-2.png";
import shoe3 from "../assets/images/main-shoe-3.png";

const Shoe = () => {
  return (
    <>
      <div className="bg-violet-100 h-[100vh] flex items-center justify-center relative">
        <img
          src={shoe1}
          alt="shoes1"
          className="m-auto border-2 border-black"
        />
      </div>
    </>
  );
};

export default Shoe;
