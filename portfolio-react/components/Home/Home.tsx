import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import ResponsiveNav from "./Navbar/ResponsiveNav";

const Home = () => {
  return (
    <div className="overflow-hidden h-auto">
      <ResponsiveNav />

      <section id="Hero" className="scroll-mt-[80px]">
        <Hero />
      </section>

      <section id="Services" className="scroll-mt-[80px]">
        <Services />
      </section>

      <section id="Resume" className="scroll-mt-[80px]">
        <Resume />
      </section>

      <section id="Projects" className="scroll-mt-[80px]">
        <Projects />
      </section>

      <section id="Skills" className="scroll-mt-[80px]">
        <Skills />
      </section>

      <section id="Contact" className="scroll-mt-[80px]">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
