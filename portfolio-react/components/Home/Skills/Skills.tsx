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
} from "react-icons/si";
import { Roboto_Condensed } from "next/font/google";
import Tilt from 'react-parallax-tilt';

// Definindo a fonte
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Interface para tipar os itens do array skills
interface Skill {
  name: string;
  icon: React.ReactElement;
  percentage: number;
}

// Array de habilidades com tipagem
const skills: Skill[] = [
  { name: "JavaScript", icon: <SiJavascript />, percentage: 80 },
  { name: "TypeScript", icon: <SiTypescript />, percentage: 90 },
  { name: "Node.js", icon: <SiNodedotjs />, percentage: 80 },
  { name: "Python", icon: <SiPython />, percentage: 95 },
  { name: "React", icon: <SiReact />, percentage: 80 },
  { name: "Docker", icon: <SiDocker />, percentage: 75 },
  { name: "PostgreSQL", icon: <SiPostgresql />, percentage: 75 },
];

const Skills = () => {
  return (
    <div className="text-white pt-16 pb-16">
      <h1
        className="text-center text-4xl sm:text-5xl font-bold text-transparent bg-clip-text hover:scale-105 transition-all cursor-pointer bg-purple-300 hover:bg-purple-500 animate-gradient-x"
      >
        Minhas Tecnologias
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skil) => (
          <Tilt key={skil.name} scale={1.5} transitionSpeed={400}>
            <div className="bg-[#4c036245] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
              <div className="text-5xl mb-4 text-gray-300">{skil.icon}</div>
              <p className="text-purple-400 mt-1 text-xl font-semibold">{skil.name}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Skills;
