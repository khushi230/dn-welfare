import React from "react";

import bgImg from "../assets/bg-img.jpg";

export const Impact = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        width: "100vw",
        height: "100vh",
        opacity: "0.5",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full "
    >
      <h2 className="text-center font-bold font-sans text-3xl py-10 text-black">
        OUR IMPACT
      </h2>
    </div>
  );
};

export default Impact;
