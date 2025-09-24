"use client";

import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiDocker,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { Roboto_Condensed } from "next/font/google";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

// Fonte
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface Skill {
  name: string;
  icon: React.ReactElement;
  percentage?: number;
}

const skillsLine1: Skill[] = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <SiPython /> },
];

const skillsLine2: Skill[] = [
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
];

const Skills: React.FC = () => {
  const renderSkillsLine = (skills: Skill[]) => (
    <motion.div
      className="flex flex-wrap justify-center gap-6 mt-8"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1, // tempo entre cada card
          },
        },
      }}
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
        >
          <Tilt scale={1.05} transitionSpeed={400}>
            <div
              className="bg-[#4c036245] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-140 hover:bg-[#330145] hover:shadow-xl"
              aria-label={skill.name}
              role="img"
            >
              <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
              <p className="text-purple-400 mt-1 text-xl font-semibold">{skill.name}</p>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section className={`text-white pt-15 pb-15 ${robotoCondensed.className}`}>
      <h1 className="text-center text-4xl sm:text-5xl font-bold text-transparent bg-clip-text hover:scale-105 transition-all cursor-pointer bg-purple-300 hover:bg-purple-500 mb-30 animate-gradient-x">
        Minhas Tecnologias
      </h1>

      {renderSkillsLine(skillsLine1)}
      {renderSkillsLine(skillsLine2)}
    </section>
  );
};

export default Skills;
