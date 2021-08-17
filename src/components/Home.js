import React from "react";
import Body from "./Body";
import BodyTwo from "./BodyTwo";
import Footer from "./Footer";
import Gamify from "./Gamify";
import Hero from "./Hero";

function Home() {
  return (
    <div>
      <Hero />
      <Body />
      <Gamify />
      <BodyTwo />
      <Footer />
    </div>
  );
}

export default Home;
