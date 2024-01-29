import React, {useState} from "react";
import "./components.css";
import { motion } from "framer-motion";
import Modal from "./Modal";
function Navi() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = () => {
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };

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
                  <a href="#cu"onClick={openContactModal}>CONTACT US</a>
                </li>
              </ul>
            </div>
          </section>
        </motion.nav>
      </div>
      {isContactModalOpen && (
        <Modal onClose={closeContactModal}>
          {/* Add your Contact Us form or content here */}
          <h2>09614316527</h2>
          <p>jerome@gmail.com</p>
        </Modal>
      )}
    </>
  );
}

export default Navi;
