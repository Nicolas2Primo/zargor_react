import React from "react";
import Poster from "./posters/Poster";
import AboutPoster from "./posters/AboutPoster";
import ContactUsPoster from "./posters/ContactUsPoster";

const Section = ({ section_title, section_subtitle, poster, about_poster }) => {
  return (
    <div className="flex flex-col gap-16 mx-[22px] md:mx-[48px] border-y-[2px] h-[101vh] overflow-y-hidden overflow-x-hidden border-white border-opacity-40 text-white justify-center">
      <div className="flex flex-col">
        <span className="text-[25px] md:text-[45px] font-black ml-[-2px]">
          {section_title}
        </span>
        <span className="text-[11px] md:text-[13px] font-normal tracking-[0.17rem] w-48">
          {section_subtitle}
        </span>
      </div>
      <div className="flex justify-center md:justify-start">
        {poster == true ? (
          <Poster />
        ) : about_poster == true ? (
          <AboutPoster />
        ) : (
          <ContactUsPoster />
        )}
      </div>
    </div>
  );
};

export default Section;
