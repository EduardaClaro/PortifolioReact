"use client";

import React from "react";
import ProjectsCard from "./ProjectsCard";
import { Roboto_Condensed } from "next/font/google";
import { motion } from "framer-motion";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const projects = [
  {
    image: "/assets/proj1.jpg",
    title: "CâmbioEx",
    description: "App Conversor de Moedas: iOS/Android, React Native/JS, Expo Go para testes, UI fluida e responsiva.",
    techs: ["React Native", "JavaScript", "Expo Go"],
    link: "https://github.com/EduardaClaro/ConversionApp",
  },
  {
    image: "/projects/project2.png",
    title: "Extração Dados",
    description: "backend para extrair dados de docs/notas, FastAPI/Python, PostgreSQL, Docker escalável.",
    techs: ["Python", "FastAPI", "Docker", "PostgreSQL"],
    link: "https://github.com/seuusuario/landing-page-criativa",
  },
  {
    image: "/projects/project3.png",
    title: "FastEdit",
    description: "Gerenciamento de tarefas com filtros dinâmicos e sincronização local.",
    techs: ["Python", "Docker", "React", "TypeScript"],
    link: "https://github.com/seuusuario/app-tarefas",
  },
];

const Projects = () => {
  return (
    <div className={`pt-16 pb-16 ${robotoCondensed.className}`}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl sm:text-5xl font-bold text-transparent bg-clip-text hover:scale-105 transition-all cursor-pointer bg-purple-300 hover:bg-purple-500 animate-gradient-x"
      >
        Meus Projetos
      </motion.h1>

      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mt-12">
        {projects.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
