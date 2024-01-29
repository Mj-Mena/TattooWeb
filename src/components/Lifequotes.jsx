import React from "react";
import "swiper/css/bundle";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Rousel from "./Rousel";
import Minimal from "./Minimal";
function Lifequotes() {
  return (
    <>
      <div className="quoteCont">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          loop="true"
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides="true"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="swiper" id="swiper-2">
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="quote">
                  <p>
                    <center className="cent">
                      {" "}
                      ` THERE IS SOMETHING IN THE ACT OF HAVING TATTOOS DONE
                      THAT I LOVE. IT CAN BE ADDICTIVE `
                      <p className="author">Lena Headey</p>
                    </center>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="quote">
                  <p>
                    <center className="cent">
                      {" "}
                      `IT`S YOUR SKIN, YOU MUST DECIDE WHAT TO DO WITH IT. LIKE
                      IN LIFE, THERE`S ALWAYS A CHOICE `
                      <p className="author">Patric Castillo</p>
                    </center>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="quote">
                  <p>
                    <center className="cent">
                      {" "}
                      ` I COULD LOOK AT A CERTAIN TATTOO, IT ALWAYS REMIND ME OF
                      A CERTAIN TIME IN MY LIFE `<p className="author">Tyga</p>
                    </center>
                  </p>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </div>
      <Minimal></Minimal>
    </>
  );
}

export default Lifequotes;
