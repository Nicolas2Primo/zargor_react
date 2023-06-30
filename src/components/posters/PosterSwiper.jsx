import React, { useState } from "react";
import Poster from "./Poster";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const PosterSwiper = () => {
  const [posters, setPosters] = useState([
    "dragonfruit",
    "dragonfruit",
    "dragonfruit",
    "dragonfruit",
  ]);
  return (
    <Swiper slidesPerView={1} className="">
      {posters.map((post, i) => (
        <SwiperSlide key={i} className="flex">
          <div className="flex">
            <Poster post={post} link={post} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PosterSwiper;