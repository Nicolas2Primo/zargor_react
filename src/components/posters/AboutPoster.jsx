import React from "react";
import "./AboutPoster.css";

const AboutPoster = () => {
  return (
    <div className="flex flex-col items-center  md:justify-between md:pr-[70px] md:flex-row ">
      <div className="hidden flex-col justify-start items-start overflow-clip  w-[260px]  h-[400px] md:w-[900px] md:h-[300px] about_poster_background rounded-[40px] border-[1px] border-white border-opacity-60 ">
        <div className="flex items-center justify-center w-full px-4 overflow-y-visible text-justify"></div>
      </div>
      <img
        src="./argos_logo_uni.svg"
        alt=""
        className=" md:flex scale-[0.85] "
      />
    </div>
  );
};

export default AboutPoster;
