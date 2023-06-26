import React from "react";
import "./AboutPoster.css";

const AboutPoster = () => {
  return (
    <div className="flex items-center justify-between ">
      <div className="w-[900px] h-[300px] about_poster_background rounded-[40px] border-[1px] border-white border-opacity-60 ">
        <span></span>
      </div>
      <img src="./argos_logo_uni.svg" alt="" className="scale-[0.85] " />
    </div>
  );
};

export default AboutPoster;
