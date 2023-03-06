import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full ">
      <div
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1507747586703-16d5436bd01d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&w=1000&q=80")',
          width: "100%",
          height: "45rem",
          opacity: "1",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center w-full h-full py-60 ">
          <h1 className="font-bold text-5xl font-sans text-yellow-300">
            Happiness <span className=" text-white">comes from</span>
          </h1>
          <h1 className="font-bold text-5xl font-sans text-yellow-300">
            your donations <span className="text-white">.</span>
          </h1>
          <h2 className="font-semibold text-xl font-sans text-white">
            Be a part of the breakthrough and make someone’s dream come true.
          </h2>
          <button className="font-sans font-semibold rounded-full ... p-2 justify-center text-center bg-yellow-300 ">
            Donate now
          </button>{" "}
        </div>
      </div>

      <div className="  p-10 h-auto sm:h-auto w-full">
        <h2 className="text-center font-bold font-sans text-3xl">WHO WE ARE</h2>
        <p className="p-5 font-sans text-center ">
          Established in 2003, Dayanand welfare Education Society is an Indian
          development organization, directly benefiting the children of rural
          areas. We have various live welfare projects on education, healthcare,
          and women empowerment in all over India.
        </p>
        <p className="px-5  font-sans text-center">
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

export default Header;
