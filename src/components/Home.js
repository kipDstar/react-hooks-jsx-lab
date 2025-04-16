import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return <div id="home">
    <h1 style={{ color: "firebrick" }}>
      {`Your name is ${name} and you live in ${city}.`};
    </h1>
  </div>;
}

export default Home;
