import React from "react";
import ServicesCard from "./ServicesCard";
import { Roboto_Condensed } from "next/font/google";

// Fonte
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Services = () => {
  return (
    <div className={`pt-16 pb-16 ${robotoCondensed.className}`}>
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:text-purple-400 mt-30">
        Competências Técnicas
      </h1>

      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20 mb-20 items-stretch">
        <ServicesCard
          icon="/assets/s1.png"
          name="UI / UX"
          description="Criando interfaces intuitivas, eficientes e agradáveis para uma melhor experiência de uso."
        />
        <ServicesCard
          icon="/assets/s2.png"
          name="App Web e Mobile"
          description="Criação de apps web e mobile com eficiência, otimizada para usabilidade e desempenho."
        />
        <ServicesCard
          icon="/assets/s3.png"
          name="Design & Criativo"
          description="Desenvolvendo layouts intuitivos e atrativos para garantir experiências otimizadas e acessíveis."
        />
        <ServicesCard
          icon="/assets/s4.png"
          name="Desenvolvimento"
          description="Construção de aplicações completas, integrando frontend e backend."
        />
        <ServicesCard
          icon="/assets/s5.png"
          name="API & Servidores"
          description="Criação de APIs REST com Node.js, CSharp, Python e integração com microsserviços."
        />
        <ServicesCard
          icon="/assets/s6.png"
          name="Banco de Dados"
          description="Experiência com SQL (PostgreSQL, MySQL) e NoSQL (MongoDB), modelagem e otimização de consultas."
        />
      </div>
    </div>
  );
};

export default Services;
