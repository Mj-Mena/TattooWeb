import React from "react";
import "./components.css";
import { motion } from "framer-motion";
function Navi() {
  return (
    <>
      <div className="contNavi">
        <motion.nav
          initial={{ opacity: 0, marginTop: 0 }}
          animate={{ opacity: 1, marginTop: 5 }}
          transition={{ duration: 0.5 }}
          className="mNavi"
        >
          <section>
            <div>
              <p href="/" className="title">
                Ink Impression
              </p>
            </div>
          </section>
          <section className=" Nright">
            <div>
              <ul>
                <li>
                  <a href="#abt">ABOUT US</a>
                </li>
                <li>
                  <a href="#min">TATTOO</a>
                </li>
                <li>
                  <a href="#ra">ARTIST</a>
                </li>
                <li>
                  <a href="#cu">CONTACT US</a>
                </li>
              </ul>
            </div>
          </section>
        </motion.nav>
      </div>
    </>
  );
}

export default Navi;
