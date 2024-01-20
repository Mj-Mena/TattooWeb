import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "swiper/css";
function Rousel() {
  return (
    <>
      <div className="rouselCont">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </div>
    </>
  );
}

export default Rousel;
