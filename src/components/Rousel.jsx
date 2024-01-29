import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css/bundle";
import { Link } from "react-router-dom";
import {
  A11y,
  EffectCoverflow,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const Rousel = () => {
  const user1 = { id: "Just Galang", name: "Just Galang" };
  const user2 = { id: "Mikki Malonzo", name: "Mikki Malonzo" };
  const user3 = { id: "user3", name: "User 3" };
  const user4 = { id: "user4", name: "User 4" };

  return (
    <>
      <div id="ra" className="swiper-container">
        <h1 id="da" style={{ textAlign: "center" }}>
          Discover Artist
        </h1>
        <Swiper
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
          initialSlide={3}
          navigation
          pagination={{ clickable: true }}
          loop="true"
          spaceBetween={20}
          breakpoints={{
            600: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            800: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1920: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="swiper" id="swiper-1">
            <div className="swiper-wrapper">
              <SwiperSlide 
                onClick={() => {
                  window.location = `/gallery/${user1.id}`;
                }}
              >
                <div className="slide-1"></div>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => {
                    window.location = `/gallery/${user2.id}`;
                  }}
                >
                <div className="slide-2"></div>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => {
                  window.location = `/gallery/${user3.id}`;
                }}
              >
                <div className="slide-3"></div>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => {
                  window.location = `/gallery/${user4.id}`;
                }}
              >
                <div className="slide-4"></div>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => {
                  window.location = `/gallery/${user1.id}`;
                }}
              >
              <div className="slide-5"></div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Rousel;
