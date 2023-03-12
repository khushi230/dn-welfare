import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="font-bold font-sans text-yellow-300">DAYANAND</h1>
      <h2>WELFARE EDUCATION</h2>
      <h2>SOCIETY</h2>
    </Link>
  );
};

export default Logo;
