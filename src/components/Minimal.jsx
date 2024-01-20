import React from "react";
import "./components.css";
import Rousel from "./Rousel";
function Minimal() {
  return (
    <>
      <div className="minCont">
        <section className="min1"></section>
        <section className="even1">
          <h1 style={{ fontFamily: "'Oswald' , san-serif" }}>MINIMALISTIC</h1>{" "}
          <p
            style={{
              fontFamily: "'Raleway' , san-serif",
              fontSize: ".9rem",
              lineHeight: "1.5rem",
              color: "#828486",
            }}
          >
            Minimalistic tattoos feature simple, clean designs with a focus on
            essential elements, using limited detail, often in black ink.
            Popular for their timeless
          </p>
          <h5
            className="rm"
            style={{
              fontFamily: "'Oswald' , san-serif",
              fontSize: ".9rem",
              fontWeight: "400",
              lineHeight: "1.5rem",
            }}
          >
            READ MORE
          </h5>
        </section>
        <section className="min2"></section>
        <section className="even1">
          <h1 style={{ fontFamily: "'Oswald' , san-serif" }}>ABSTRACT</h1>{" "}
          <p
            style={{
              fontFamily: "'Raleway' , san-serif",
              fontSize: ".9rem",
              lineHeight: "1.5rem",
              color: "#828486",
            }}
          >
            Abstract tattoos showcase non-representational designs, emphasizing
            creativity with shapes and lines. They offer a unique and
            imaginative form of personal expression.
          </p>
          <h5
            className="rm"
            style={{
              fontFamily: "'Oswald' , san-serif",
              fontSize: ".9rem",
              fontWeight: "400",
              lineHeight: "1.5rem",
            }}
          >
            READ MORE
          </h5>
        </section>
        <section className="min3"></section>
        <section className="even1">
          <h1 style={{ fontFamily: "'Oswald' , san-serif" }}>TRIBAL</h1>{" "}
          <p
            style={{
              fontFamily: "'Raleway' , san-serif",
              fontSize: ".9rem",
              lineHeight: "1.5rem",
              color: "#828486",
            }}
          >
            Tribal tattoos, rooted in indigenous cultures, are bold black
            designs symbolizing heritage or status. Merging tradition with
            contemporary styles, they serve as powerful expressions of identity.
          </p>
          <h5
            className="rm"
            style={{
              fontFamily: "'Oswald' , san-serif",
              fontSize: ".9rem",
              fontWeight: "400",
              lineHeight: "1.5rem",
            }}
          >
            READ MORE
          </h5>
        </section>
      </div>
      <Rousel />
    </>
  );
}

export default Minimal;
