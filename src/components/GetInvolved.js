import React from "react";
import { Link } from "react-router-dom";
import { MdGroups } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";
import { Box } from "@mui/system";

const GetInvolved = () => {
  return (
    <div className="w-full h-auto p-10 bg-white">
      <h1 className="text-center font-bold font-sans text-3xl">GET INVOLVED</h1>
      <div className="m-auto text-center grid gap-5 md:grid-cols-1 lg:grid-cols-3">
        <div>
          <Link className="">
            <MdGroups className="w-64 h-56 relative top-12" />
          </Link>
          <Box className="w-72 h-40 my-1 bg-yellow-300"></Box>
        </div>
        <div>
          <Link className="   ">
            <BiDonateHeart className="w-64 h-56 relative top-4" />
          </Link>
          <Box className="w-72 h-40 my-1 bg-gray-700"></Box>
        </div>

        <div>
          <Link className="  ">
            <GrAnnounce className="w-60 h-44  top-10" />
          </Link>
          <Box className="w-72 h-40 my-12 bg-yellow-300 "></Box>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
