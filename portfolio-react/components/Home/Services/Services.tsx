"use client";

import React from "react";
import ServicesCard from "./ServicesCard";
import { Roboto_Condensed } from "next/font/google";
import { motion } from "framer-motion";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const services = [
  {
    icon: "/assets/s1.png",
    name: "UI / UX",
    description: "Interfaces intuitivas e agradáveis para uma melhor experiência de uso.",
  },
  {
    icon: "/assets/s2.png",
    name: "App Web e Mobile",
    description: "Apps eficientes, otimizados para usabilidade e desempenho.",
  },
  {
    icon: "/assets/s3.png",
    name: "Design & Criativo",
    description: "Layouts atrativos que garantem acessibilidade e fluidez.",
  },
  {
    icon: "/assets/s4.png",
    name: "Desenvolvimento",
    description: "Aplicações completas integrando frontend e backend.",
  },
  {
    icon: "/assets/s5.png",
    name: "API & Servidores",
    description: "APIs REST com Node.js, C#, Python e microsserviços.",
  },
  {
    icon: "/assets/s6.png",
    name: "Banco de Dados",
    description: "SQL (PostgreSQL, MySQL) e MongoDB: modelagem e otimização.",
  },
];

const Services = () => {
  return (
    <div className={`pt-16 sm:pt-20 xl:pt-24 pb-16 sm:pb-20 xl:pb-24 ${robotoCondensed.className}`}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-purple-300 hover:bg-purple-500 transition-all cursor-pointer"
      >
        Competências Técnicas
      </motion.h1>

      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-12 sm:mt-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <ServicesCard
              icon={service.icon}
              name={service.name}
              description={service.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
