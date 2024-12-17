import React from "react";
import Hero from "./sections/hero";
import Facilities from "./sections/facilities";
import BoardOfDirectors from "./sections/board";
import BentoGrid from "./sections/bentoGrid";
import Journy from "./sections/journy";

const About = () => {
  return (
    <>
      <Hero />
      <BentoGrid />
      <Journy />
      <Facilities />
      <BoardOfDirectors />
    </>
  );
};

export default About;
