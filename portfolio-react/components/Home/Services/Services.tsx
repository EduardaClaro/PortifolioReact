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
    <div
      className={`pt-14 sm:pt-20 xl:pt-24 pb-14 sm:pb-20 xl:pb-24 ${robotoCondensed.className}`}
    >
      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
        text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-purple-600 
        hover:scale-105 transition-transform duration-500"
      >
        Competências Técnicas
      </motion.h1>

      {/* Grid de cards */}
      <div className="w-[92%] max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-14">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
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
