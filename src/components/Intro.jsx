import React from "react";
import "./components.css";
import Minimal from "./Minimal";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Lifequotes from "./Lifequotes";
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
      <div ref={sec1} className="intCont">
        <motion.section animate={animation} id="abt" className="intro">
          <h1>Hello World</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quasi
          dolorem soluta praesentium laborum doloremque accusantium odit?
          Possimus, eaque consequatur.
        </motion.section>
        <motion.button
          animate={animation}
          onClick={handlerm}
          className="intbtn"
        >
          READ MORE
        </motion.button>
      </div>
      <Minimal></Minimal>
    </>
  );
}

export default Intro;
