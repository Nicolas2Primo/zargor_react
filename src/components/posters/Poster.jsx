import React from "react";
import "./Poster.css";

const Poster = () => {
  return (
    <div className="flex gap-[80px] text-white text-[15px] tracking-[0.15rem]">
      <div className="flex flex-col">
        <div className="poster_background w-[300px] h-[300px] rounded-[10px]" />
        <span className="px-2 pt-1">Dragon Fruit</span>
      </div>

      <div className="flex flex-col">
        <div className="poster_background w-[300px] h-[300px] rounded-[10px]" />
        <span className="px-2 pt-1">Dragon Fruit</span>
      </div>
      <div className="flex flex-col">
        <div className="poster_background w-[300px] h-[300px] rounded-[10px]" />
        <span className="px-2 pt-1">Dragon Fruit</span>
      </div>
      <div className="flex flex-col">
        <div className="poster_background w-[300px] h-[300px] rounded-[10px]" />
        <span className="px-2 pt-1">Dragon Fruit</span>
      </div>
    </div>
  );
};

export default Poster;
