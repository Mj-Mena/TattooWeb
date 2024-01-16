import React from "react";
import Wed from "./Wed";
function About() {
  return (
    <>
      <div className="Acont">
        <section className="gray">
          <section className="leftsec">
            <section style={{ marginTop: "-15%" }}>
              <section className="uno"></section>
              <section className="dos"></section>
            </section>
            <section style={{ marginBottom: "-15%" }}>
              <section className="tres"></section>
              <section className="quat"></section>
            </section>
          </section>
          <section className="rightsec">
            <p className="pti"> About Us</p>
            <p className="bod">
              We are a group of students with a passion in arts and a curiosity
              in tattoos. In our research we came upon various artists that we
              loved and were inspired to create this website to organize the
              artists that we love in one place and share their amazing art for
              everyone to see.{" "}
            </p>
            <p className="bod">
              In our search for websites that promotes tattoo artists, we are
              often left frustrated because we could not find much websites that
              promotes them, instead we are always led to forums where the only
              thing we learn is their names, sometimes there’s an Instagram link
              but most of the time it’s just names. So we decided to take it
              upon ourselves and create Ink Impressions, a place where we could
              showcase artists and their arts, their personal blogs or social
              media, and their workplace or contact number.
            </p>
            <p className="bod">
              This way, if a person liked an art, they can immediately see more
              art from that artist, and if they were inspired enough that they
              wanted a tattoo, they can immediately find their shop and book an
              appointment if possible.
            </p>
          </section>
        </section>
      </div>
    </>
  );
}

export default About;
