import React from "react";

const FeatureCard = ({ feature }) => {
  return (
    <>
      <div
        className="flex flex-col items-start justify-center flex-1 sm:min-w-[400px] space-y-6 sm:p-10 p-5 rounded-xl"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      >
        <div className="bg-orange-500 rounded-full p-3">
          <img
            src={feature.icon}
            alt="icons"
            style={{
              filter:
                "invert(100%) sepia(0%) saturate(5%) hue-rotate(166deg) brightness(103%) contrast(103%)",
            }}
          />
        </div>
        <h1 className="font-bold text-2xl">{feature.title}</h1>
        <p className="text-gray-500 tracking-wide text-lg">{feature.content}</p>
      </div>
    </>
  );
};

export default FeatureCard;
