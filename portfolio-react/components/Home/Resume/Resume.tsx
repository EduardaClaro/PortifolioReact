import React from "react"; 
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaCloud } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";
import { Roboto_Condensed } from "next/font/google";

// Fonte
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Resume = () => {
  return (
    <div className={`pt-20 pb-16 ${robotoCondensed.className}`}>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch"> 

        {/* Education Part */}
        <div className="flex flex-col h-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center md:text-center transition-all duration-300 ease-in-out hover:scale-105 hover:text-purple-400">
            Meus <span className="text-purple-500">Estudos</span>
          </h1>
          <div className="mt-10 w-full flex flex-col gap-6 h-full">
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
              description="Implementação e analise serviços de armazenamento de dados, empregando as principais tecnologias da área disponíveis de computação em nuvem."
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
        </div>

        {/* Work Part */}
        <div className="flex flex-col h-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center md:text-center transition-all duration-300 ease-in-out hover:scale-105 hover:text-purple-400">
            Minhas <span className="text-purple-500">Experiências</span>
          </h1>
          <div className="mt-10 w-full flex flex-col gap-6 h-auto">
            <ResumeCard 
              Icon={FaCodepen} 
              role="Desenvolvedora Full Stack"
              date="Jan - 2025"
              description="Na 2RPnet, onde sou estagiária Full Stack, alocada a squad da CaseX, utilizando C# no backend e React com TypeScript no frontend."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;
