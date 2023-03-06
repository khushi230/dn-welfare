import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className=" h-auto p-3  shadow-md shadow-slate-400  flex justify-between   ">
      <Link to="/">
        <h1 className="font-bold font-sans text-yellow-300">DAYANAND</h1>
        <h2>WELFARE EDUCATION</h2>
        <h2>SOCIETY</h2>
      </Link>

      <div className="flex space-x-5 my-6  ">
        <Link to="/home">Home</Link>
        <Link to="/charity">Charity</Link>
        <Link to="/news">News</Link>
        <Link to="/events">Events</Link>
        <Link to="/mission">Mission</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>

        <button className="font-sans rounded-full ... p-1 justify-center text-center bg-yellow-300">
          Donate now
        </button>
      </div>
    </div>
  );
};

export default navbar;
