import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

const Home = () => {
  return <div className="overflow-hidden h-auto">
    <Hero/>
    <Services/>
    <Resume/>
    <Projects/>
    <Skills/>
    <Contact/>
  </div>
};

export default Home;
