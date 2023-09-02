import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: require("../assets/icons/delivery.png"),
      title: "Free Shipping",
      content:
        "Enjoy seamless shopping with our complimentary shipping service.",
    },
    {
      icon: require("../assets/icons/credit-card.png"),
      title: "Secure Payment",
      content:
        "Experience worry-free transactions with our secure payment options.",
    },
    {
      icon: require("../assets/icons/help.png"),
      title: "Love to help You",
      content:
        "Our dedicated team is here to assist you every step of the way.",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center flex-wrap sm:flex-row flex-col sm:px-16 px-4 py-20 gap-5">
        {features.map((feature, index) => (
          <FeatureCard feature={feature} key={index} />
        ))}
      </div>
    </>
  );
};

export default Features;
