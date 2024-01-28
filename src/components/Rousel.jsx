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
      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
          effect="coverflow"
          navigation
          pagination={{ clickable: true }}
          loop="true"
          spaceBetween={20}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 35,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="swiper" id="swiper-1">
            <div className="swiper-wrapper">
              <SwiperSlide>
                <img
                  src="src\assets\1.jpg"
                  id="img1"
                  alt="img1"
                  loading="lazy"
                ></img>
                <div className="swiper-lazy-preloader"></div>
                <button>Hi</button>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="src\assets\2.jpg"
                  id="img2"
                  alt="img2"
                  loading="lazy"
                ></img>
                <div className="swiper-lazy-preloader"></div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="src\assets\3.jpg"
                  id="img3"
                  alt="img3"
                  loading="lazy"
                ></img>
                <div className="swiper-lazy-preloader"></div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="src\assets\4.jpg"
                  id="img4"
                  alt="img4"
                  loading="lazy"
                ></img>
                <div className="swiper-lazy-preloader"></div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="src\assets\1.jpg"
                  id="img1"
                  alt="img1"
                  loading="lazy"
                ></img>
                <div className="swiper-lazy-preloader"></div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Rousel;
