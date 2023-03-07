import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="absolute h-auto p-3 w-full shadow-md opacity-1  flex justify-between   ">
      <Link to="/">
        <h1 className="font-bold font-sans text-yellow-300">DAYANAND</h1>
        <h2>WELFARE EDUCATION</h2>
        <h2>SOCIETY</h2>
      </Link>
      <div className="flex">
        <div className="flex space-x-5 my-6  ">
          <Link className=" text-white hover:text-yellow-300" to="/home">
            Home
          </Link>
          <Link className="text-white hover:text-yellow-300" to="/charity">
            Charity
          </Link>
          <Link className="text-white hover:text-yellow-300" to="/news">
            News
          </Link>
          <Link className=" text-white hover:text-yellow-300" to="/events">
            Events
          </Link>
          <Link className="text-white hover:text-yellow-300" to="/mission">
            Mission
          </Link>
          <Link className="text-white hover:text-yellow-300" to="/about">
            About Us
          </Link>
          <Link className="text-white hover:text-yellow-300" to="/contact">
            Contact Us
          </Link>
        </div>
        <div className="my-4 mx-5">
          <button className=" font-sans rounded-full ... p-2 justify-center text-center bg-yellow-300 hover:bg-yellow-400">
            Donate now
          </button>
        </div>
      </div>
    </div>
  );
};

export default navbar;
