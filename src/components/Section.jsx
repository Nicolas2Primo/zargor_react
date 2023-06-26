import React from "react";
import Poster from "./posters/Poster";
import AboutPoster from "./posters/AboutPoster";
import ContactUsPoster from "./posters/ContactUsPoster";

const Section = ({ section_title, section_subtitle, poster, about_poster }) => {
  return (
    <div className="flex flex-col gap-16 mx-[48px] border-y-[2px] h-[101vh] border-white border-opacity-40 py-28 text-white justify-center">
      <div className="flex flex-col">
        <span className="text-[45px] font-black">{section_title}</span>
        <span className="text-[13px] font-normal tracking-[0.17rem] w-48">
          {section_subtitle}
        </span>
      </div>
      {poster == true ? (
        <Poster />
      ) : about_poster == true ? (
        <AboutPoster />
      ) : (
        <ContactUsPoster />
      )}
    </div>
  );
};

export default Section;
