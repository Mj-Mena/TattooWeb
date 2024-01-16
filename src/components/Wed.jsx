import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import img from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
const images = [img, img2, img3, img4];
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
function Wed() {
  const handleClick = () => {
    console.log("idk");
  };
  return (
    <>
      <h1 className="disc" style={{ marginLeft: " 43%" }}>
        Discover Artist
      </h1>
      <div className="wedCont">
        <div className="card img1">
          <div className="overlay">
            <h1>Name</h1>
            <p style={{ fontSize: ".8rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              quas?
            </p>
            <button
              className="btn"
              style={{
                maxWidth: "60%",
                maxHeight: "60%",
                marginTop: "15%",
                margin: " 0 auto",
              }}
            >
              See Artworks
            </button>
          </div>
        </div>
        <div className="card img2">
          <div className="overlay2">
            <h1>Name</h1>
            <p style={{ fontSize: ".8rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              quas?
            </p>
            <button
              className="btn"
              style={{
                maxWidth: "60%",
                maxHeight: "60%",
                marginTop: "15%",
                margin: " 0 auto",
              }}
            >
              See Artworks
            </button>
          </div>
        </div>
        <div className="card img3">
          <div className="overlay3">
            <h1>Name</h1>
            <p style={{ fontSize: ".8rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              quas?
            </p>
            <button
              className="btn"
              style={{
                maxWidth: "60%",
                maxHeight: "60%",
                marginTop: "15%",
                margin: " 0 auto",
              }}
            >
              See Artworks
            </button>
          </div>
        </div>
        <div className="card img4">
          <div className="overlay4">
            <h1>Name</h1>
            <p style={{ fontSize: ".8rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              quas?
            </p>
            <button
              className="btn"
              style={{
                maxWidth: "60%",
                maxHeight: "60%",
                marginTop: "15%",
                margin: " 0 auto",
              }}
            >
              See Artworks
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wed;
