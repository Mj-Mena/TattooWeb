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
                  <a>About Us</a>
                </li>
                <li>
                  <a>Artist</a>
                </li>
                <li>
                  <a>Random Art</a>
                </li>
                <li>
                  <a>Contact us </a>
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
