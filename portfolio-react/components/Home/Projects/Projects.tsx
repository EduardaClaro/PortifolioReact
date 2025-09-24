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
    image: "/assets/proj1.jpg",
    video: "/assets/proj1.mp4",
    title: "CâmbioEx",
    description: "Conversor de Moedas, feito em React Native com Expo Go, converte moedas com interface fluida para iOS e Android.",
    techs: ["React Native", "JavaScript", "Expo Go"],
    link: "https://github.com/EduardaClaro/ConversionApp",
  },
  {
    image: "/assets/proj2.jpg",
    video: "/assets/proj2.mp4",
    title: "Extração Dados",
    description: "Extração de Dados usa FastAPI, Python, PostgreSQL e Docker para extrair dados de documentos e notas fiscais com escalabilidade.",
    techs: ["FastAPI", "Python", "PostgreSQL", "Docker"],
    link: "https://github.com/Avaliacao-de-Desempenho/MariaEduarda-AVALIACAO",
  },
  {
    image: "/assets/proj3.jpg",
    video: "/assets/proj3.mp4",
    title: "FastEdit",
    description: "O FastEdit remove fundos de imagens e salva edições, usando FastAPI em Python, biblioteca gratuita e integração com Docker.",
    techs: ["FastAPI", "Python", "Docker"],
    link: "https://github.com/EduardaClaro/FastAPI-edit",
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
