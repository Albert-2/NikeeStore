import React from "react";
import User1 from "../assets/images/users/user1.jpeg";
import User2 from "../assets/images/users/user2.svg";

const ReviewsSectn = () => {
  return (
    <>
      <div className="flex justify-between flex-wrap sm:flex-row flex-col text-center gap-16 sm:px-16 px-4 py-20 bg-[#f1f5ff] dark:bg-black">
        <div className="flex flex-col items-center justify-center space-y-4 w-[100%] ">
          <h1 className="font-bold text-4xl break-words">
            What Our <span className="text-orange-500">Customers</span> Say?
          </h1>
          <p className="text-lg tracking-wide text-gray-500 max-w-lg">
            Hear genuine stories from our satisfied customers about their
            exceptional experiences with us.
          </p>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center space-y-4">
          <img src={User1} alt="userIcon" className="w-[120px] rounded-full" />
          <p className="text-lg tracking-wide text-gray-500 max-w-md">
            The attention to detail and the quality of the product exceeded my
            expectations. Highly recommended!
          </p>
          <h1 className="font-bold text-2xl">Morich Brown</h1>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center space-y-4">
          <img src={User2} alt="userIcon" />
          <p className="text-lg tracking-wide text-gray-500 max-w-md">
            The product not only met but exceeded my expectations. I'll
            definitely be a returning customer!
          </p>
          <h1 className="font-bold text-2xl">Lota Mongeskar</h1>
        </div>
      </div>
    </>
  );
};

export default ReviewsSectn;
