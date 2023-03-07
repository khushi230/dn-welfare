import React from "react";
import { Link } from "react-router-dom";

import groupsicon from "../assets/groupsicon.png";
import donateicon from "../assets/donateicon.png";
import soundicon from "../assets/soundicon.png";

const GetInvolved = () => {
  return (
    <div className="w-full h-auto p-10 bg-yellow-300">
      <h1 className="text-center font-bold font-sans text-3xl">GET INVOLVED</h1>
      <div className=" block sm:flex justify-between px-10 ">
        <Link className="shadow-md hover:shadow-2xl ">
          <img className="w-64 h-56 my-5 " alt="volunteer" src={groupsicon} />
        </Link>
        <Link className=" shadow-md hover:shadow-2xl h-[286px] ">
          <img className="w-64 h-56 my-5" alt="donate" src={donateicon} />
        </Link>
        <Link className=" shadow-md hover:shadow-2xl w-64 ">
          <img
            className="  w-48 h-48 my-12 mx-5"
            alt="spread the word"
            src={soundicon}
          />
        </Link>
      </div>
    </div>
  );
};

export default GetInvolved;
