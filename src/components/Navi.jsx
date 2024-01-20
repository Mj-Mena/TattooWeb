import React from "react";
import "./components.css";
function Navi() {
  return (
    <>
      <div className="contNavi">
        <nav className="mNavi">
          <section>
            <div>
              <p className="title">Ink Impression</p>
            </div>
          </section>
          <section className=" Nright">
            <div>
              <ul>
                <li>
                  <a href="#abt">ABOUT US</a>
                </li>
                <li>
                  <a href="#artist">ARTIST</a>
                </li>
                <li>
                  <a href="#ra">RANDOM ART</a>
                </li>
                <li>
                  <a href="#cu">CONTACT US</a>
                </li>
              </ul>
            </div>
          </section>
        </nav>
      </div>
    </>
  );
}

export default Navi;
