import React from "react";
import "./AboutPoster.css";

const AboutPoster = () => {
  return (
    <div className="flex flex-col items-center w-full md:justify-between md:pr-[70px] md:flex-row">
      <div className="w-[230px] h-[200px] md:w-[900px] md:h-[300px] about_poster_background rounded-[40px] border-[1px] border-white border-opacity-60 ">
        <span></span>
      </div>
      <img
        src="./argos_logo_uni.svg"
        alt=""
        className="scale-[0.20] md:scale-[0.85]"
      />
    </div>
  );
};

export default AboutPoster;
