import React from "react";

import bgImg from "../assets/bg-img.jpg";

export const Impact = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        width: "100%",
        height: "40rem",
        opacity: "0.5",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full "
    >
      <h2 className="text-center font-bold font-sans text-3xl py-10 opacity-100">
        OUR IMPACT
      </h2>
    </div>
  );
};

export default Impact;
