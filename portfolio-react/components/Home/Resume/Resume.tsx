"use client";

import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaCloud } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";
import { Roboto_Condensed } from "next/font/google";
import { motion } from "framer-motion";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Resume = () => {
  return (
    <div className={`pt-16 pb-16 ${robotoCondensed.className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch"
      >
        {/* Estudos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col h-full"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center hover:scale-105 hover:text-purple-400 transition-all duration-300 ease-in-out">
            Meus <span className="text-purple-500">Estudos</span>
          </h1>
          <div className="mt-8 flex flex-col gap-6 h-full">
            <ResumeCard
              Icon={BiBadge}
              role="Análise e Desenvolvimento de Sistemas"
              date="Jan 2025 - Dec 2026 - em progresso"
              description="Curso superior de Tecnologia em Análise e Desenvolvimento de Sistemas na Faculdade SENAI Gaspar Ricardo Júnior como bolsista."
            />
            <ResumeCard
              Icon={FaCloud}
              role="Google Cloud Foundations"
              date="Abr - 2025"
              description="Implementação e análise de serviços de armazenamento de dados, empregando as principais tecnologias de computação em nuvem."
              link="/certificados/google-cloud.pdf"
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Java Cloud Native"
              date="Mar - 2025"
              description="Desenvolver, implantar e gerenciar aplicações Java com tecnologias de computação em nuvem."
              link="/certificados/java-cloud.pdf"
            />
          </div>
        </motion.div>

        {/* Experiências */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col h-full"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center hover:scale-105 hover:text-purple-400 transition-all duration-300 ease-in-out">
            Minhas <span className="text-purple-500">Experiências</span>
          </h1>
          <div className="mt-8 flex flex-col gap-6 h-auto">
            <ResumeCard
              Icon={FaCodepen}
              role="Desenvolvedora Full Stack"
              date="Jan - 2025"
              description="Na 2RPnet, onde sou estagiária Full Stack, alocada à squad da CaseX, utilizando C# no backend e React com TypeScript no frontend. Onde tenho, também, a função de migrar bancos de dados."
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume;
