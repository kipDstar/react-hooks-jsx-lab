import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>I am currently a learner in this realm of software development but you shall not be mistaken in addressing me as a progidy</p>
    {image ? <img src={image} alt="I made this" /> : null}
  </div>;
}

export default About;
