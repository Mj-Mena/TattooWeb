import React from "react";
import "./components.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Rousel from "./Rousel";
import Lifequotes from "./Lifequotes";
function Minimal() {
  const { ref: sec1, inView } = useInView();
  const { ref: sec2, inView: wew } = useInView();
  const { ref: sec3, inView: wew2 } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 100,
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);
  useEffect(() => {
    if (wew) {
      animation2.start({
        opacity: 100,
      });
    } else {
      animation2.start({
        opacity: 0,
      });
    }
  }, [wew]);
  useEffect(() => {
    if (wew2) {
      animation3.start({
        opacity: 100,
      });
    } else {
      animation3.start({
        opacity: 0,
      });
    }
  }, [wew2]);
  return (
    <>
      <div className="minCont">
        <motion.section
          ref={sec1}
          animate={animation}
          className="min1"
        ></motion.section>
        <motion.section animate={animation} className="even1">
          <h1 className="heven" style={{ fontFamily: "'Oswald' , san-serif" }}>
            MINIMALISTIC
          </h1>{" "}
          <p className="peven"
          >
            Minimalistic tattoos feature simple, clean designs with a focus on
            essential elements, using limited detail, often in black ink.
            Popular for their timeless
          </p>
          <h5
            className="rm"

          >
            READ MORE
          </h5>
        </motion.section>
        <motion.section animate={animation} className="min2"></motion.section>
        <motion.section ref={sec2} animate={animation2} className="even1">
          <h1 className="heven" style={{ fontFamily: "'Oswald' , san-serif" }}>ABSTRACT</h1>{" "}
          <p className="peven"
          >
            Abstract tattoos showcase non-representational designs, emphasizing
            creativity with shapes and lines. They offer a unique and
            imaginative form of personal expression.
          </p>
          <h5
            className="rm"
          >
            READ MORE
          </h5>
        </motion.section>
        <motion.section
          ref={sec2}
          animate={animation2}
          className="min3"
        ></motion.section>
        <motion.section animate={animation2} className="even1">
          <h1 className="heven" style={{ fontFamily: "'Oswald' , san-serif" }}>TRIBAL</h1>{" "}
          <p className="peven"
          >
            Tribal tattoos, rooted in indigenous cultures, are bold black
            designs symbolizing heritage or status. Merging tradition with
            contemporary styles, they serve as powerful expressions of identity.
          </p>
          <h5
            className="rm"
          >
            READ MORE
          </h5>
        </motion.section>
      </div>
      <Rousel></Rousel>
    </>
  );
}

export default Minimal;
