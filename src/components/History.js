import React from "react";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="w-full ">
      <div className="  px-10  py-20 h-auto sm:h-auto w-full">
        <h2 className="text-center font-bold font-sans text-3xl">WHO WE ARE</h2>
        <p className="p-7 font-sans text-center ">
          Established in 2003, Dayanand welfare Education Society is an Indian
          development organization, directly benefiting the children of rural
          areas. We have various live welfare projects on education, healthcare,
          and women empowerment in all over India.
        </p>
        <p className="px-7  font-sans text-center">
          Dayanand welfare Education Society has always looked upon its own role
          as that of a catalyst, a means of setting in motion and accelerating
          the process of development. But the true potential for bringing real,
          long lasting change, lies with the civil society. Not remaining
          restricted to the community, and with the aim of achieving sustainable
          development in a wider social context, Smile Foundation has adopted
          the principle of Civic Driven Change, making the civil society an
          active partner in all its welfare initiatives.<span> </span>
          <Link
            to="/about"
            className="font-sans font-semibold
        "
          >
            Know more...
          </Link>
        </p>
      </div>
    </div>
  );
};

export default History;
