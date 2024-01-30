import React from "react";
import "./components.css";
import Minimal from "./Minimal";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Lifequotes from "./Lifequotes";
import Rousel from "./Rousel";
function Intro() {
  const { ref: sec1, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 10,
        opacity: 100,
      });
    }
    if (!inView) {
      animation.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [inView]);
  const handlerm = () => {
    window.location = "http://127.0.0.1:5173/#min";
  };
  return (
    <>
      <div id="abt" ref={sec1} className="intCont">
        <motion.section animate={animation} className="intro">
          <h1>About Us</h1>
          We're a bunch of rowdy people trying to find inspirations for our
          future tattoos. We were fascinated with the idea of gathering artists
          from all over the world that we liked and showcasing them to people.
          We wanted to capture different styles, experessions, and techniques
          and compile them into an easy to view website, thus Ink Impressions
          was born.
        </motion.section>
        <motion.button
          animate={animation}
          onClick={handlerm}
          className="intbtn"
        >
          BROWSE TATTOOS
        </motion.button>
      </div>
      <Rousel></Rousel>
    </>
  );
}

export default Intro;
