import React from "react";
import Navig from "./Navi";
import About from "./About";
function Header() {
  return (
    <>
      <div className="cont">
        <section>
          <Navig></Navig>
        </section>
        <section>
          <div className="bg">
            <section className="leftintro">
              <div className="drop">
                <h1>INK IMPRESSION</h1>
                <p>
                  Welcome to Ink Impressions, we’re here to showcase the art of
                  various tattoo artists from all over the world! Come join us
                  as we take a leap into the world of tattoos, we hope to leave
                  you with a great impression in your adventure!
                </p>
                <button className="btn">Get Started </button>
              </div>
            </section>
          </div>
        </section>
      </div>
      <About></About>
    </>
  );
}

export default Header;
