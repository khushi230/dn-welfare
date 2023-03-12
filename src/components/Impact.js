import React from "react";

import bgImg from "../assets/bg-img.jpg";

export const Impact = () => {
  return (
    <div className="">
      <div
        style={{
          before: "opacity:1",
          backgroundImage: `url(${bgImg})`,
          width: "100%",
          height: "40rem",
          opacity: "0.5",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full "
      >
        <h2 className="sticky before:opacity-100 text-center font-bold font-sans text-3xl py-10 ">
          OUR IMPACT
        </h2>
      </div>
    </div>
  );
};

export default Impact;
