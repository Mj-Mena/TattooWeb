import React from "react";
import Navig from "./Navi";
import Intro from "./Intro";
import { motion } from "framer-motion";
import Lifequotes from "./Lifequotes";
function Header() {
  const handlegs = () => {
    window.location = "http://127.0.0.1:5173/#abt";
  };
  return (
    <>
      <div className="cont">
        <section>
          <Navig></Navig>
        </section>
        <section>
          <div className="bg">
            <motion.section
              initial={{ opacity: 0, marginTop: 20 }}
              animate={{ opacity: 1, marginTop: 30 }}
              transition={{ duration: 0.5 }}
              className="leftintro"
            >
              <div className="drop">
                <h1>INK IMPRESSION</h1>
                <p>
                  Welcome to Ink Impressions, we’re here to showcase the art of
                  various tattoo artists from all over the world! Come join us
                  as we take a leap into the world of tattoos, we hope to leave
                  you with a great impression in your adventure!
                </p>
                <button onClick={handlegs} className="btn">
                  GET STARTED{" "}
                </button>
              </div>
            </motion.section>
          </div>
        </section>
      </div>
      <Lifequotes></Lifequotes>
    </>
  );
}

export default Header;
