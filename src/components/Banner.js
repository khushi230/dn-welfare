import React from "react";

const Banner = () => {
  return (
    <div className="w-full">
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
            your contribution<span className="text-white">.</span>
          </h1>
          <h2 className="font-semibold text-xl font-sans text-white my-3">
            Be a part of the breakthrough and make someone’s dream come true.
          </h2>
          <button className="font-sans font-semibold rounded-full ... p-3 justify-center text-center bg-yellow-300 hover:bg-yellow-400 ">
            Donate now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
