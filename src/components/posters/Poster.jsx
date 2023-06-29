import React, { useState } from "react";
import "./Poster.css";

const Poster = () => {
  const [posters, setPosters] = useState(["Dragonfruit"]);

  return (
    <div className="flex gap-[80px] text-white text-[15px] tracking-[0.15rem]">
      {posters.map((post) => (
        <div className="flex flex-col">
          <div className="poster_background w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-[10px]" />
          <span className="px-2 pt-1">{post}</span>
        </div>
      ))}
    </div>
  );
};

export default Poster;
