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

  const breakpoints = {
    // quando a tela for menor que 640px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // quando a tela for maior que 640px e menor que 768px
    590: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // quando a tela for maior que 768px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };

  return (
    <Swiper breakpoints={breakpoints} className="">
      {posters.map((post, i) => (
        <SwiperSlide key={i} className="">
          <div className="flex justify-center">
            <Poster post={post} link={post} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PosterSwiper;
