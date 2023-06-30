import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "./Poster.css";

const Poster = ({ post, link }) => {
  return (
    <Link to={link} className="flex flex-col">
      <div className="poster_background w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-[10px]" />
      <span className="px-2 pt-1 text-white text-[15px] tracking-[0.15rem] normal-case ">
        {post}
      </span>
    </Link>
  );
};

export default Poster;
