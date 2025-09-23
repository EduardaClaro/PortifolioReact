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
} from "react-icons/si";
import { Roboto_Condensed } from "next/font/google";
import Tilt from "react-parallax-tilt";

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

const skills: Skill[] = [
  { name: "JavaScript", icon: <SiJavascript />, percentage: 80 },
  { name: "TypeScript", icon: <SiTypescript />, percentage: 90 },
  { name: "Python", icon: <SiPython />, percentage: 95 },
  { name: "Node.js", icon: <SiNodedotjs />, percentage: 80 },
  { name: "React", icon: <SiReact />, percentage: 80 },
  { name: "Next.js", icon: <SiNextdotjs />, percentage: 85 },
  { name: "Tailwind", icon: <SiTailwindcss />, percentage: 85 },
  { name: "Docker", icon: <SiDocker />, percentage: 75 },
  { name: "PostgreSQL", icon: <SiPostgresql />, percentage: 75 },
];

const Skills: React.FC = () => {
  return (
    <section className={`text-white pt-15 pb-15 ${robotoCondensed.className}`}>
      <h1 className="text-center text-4xl sm:text-5xl font-bold text-transparent bg-clip-text hover:scale-105 transition-all cursor-pointer bg-purple-300 hover:bg-purple-500 mb-30 animate-gradient-x">
        Minhas Tecnologias
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skill) => (
          <Tilt key={skill.name} scale={1.05} transitionSpeed={400}>
            <div
              className="bg-[#4c036245] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition-transform hover:scale-130"
              aria-label={skill.name}
              role="img"
            >
              <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
              <p className="text-purple-400 mt-1 text-xl font-semibold">{skill.name}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
