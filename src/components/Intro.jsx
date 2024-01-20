import React from "react";
import "./components.css";
import Minimal from "./Minimal";
function Intro() {
  return (
    <>
      <div className="intCont">
        <section className="intro">
          <h1>Hello World</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quasi
          dolorem soluta praesentium laborum doloremque accusantium odit?
          Possimus, eaque consequatur.
        </section>
        <button className="intbtn">READ MORE</button>
      </div>
      <Minimal></Minimal>
    </>
  );
}

export default Intro;
