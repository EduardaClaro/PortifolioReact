"use client";

import React from "react";
import ProjectsCard from "./ProjectsCard";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const projects = [
  {
    image: "/assets/proj1.jpg",   // imagem de preview
    video: "/assets/proj1.mp4",   // vídeo do projeto
    title: "CâmbioEx",
    description: "App Conversor de Moedas...",
    techs: ["React Native", "JavaScript", "Expo Go"],
    link: "https://github.com/EduardaClaro/ConversionApp",
  },
];

const Projects = () => {
  return (
    <div className={`pt-16 pb-37 ${robotoCondensed.className}`}>
      <h1
        className="text-center text-4xl sm:text-5xl font-bold text-transparent bg-clip-text hover:scale-105 transition-all cursor-pointer bg-purple-300 hover:bg-purple-500 animate-gradient-x"
      >
        Meus Projetos
      </h1>

      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mt-12">
        {projects.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
