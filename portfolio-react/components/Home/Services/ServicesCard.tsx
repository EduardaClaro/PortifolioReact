"use client";

import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

type Props = {
  icon: string;
  name: string;
  description: string;
  className?: string;
};

const ServicesCard = ({ icon, name, description, className }: Props) => {
  return (
    <Tilt
      glareEnable
      glareColor="#ffffff"
      glareMaxOpacity={0.2}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={800}
      transitionSpeed={300}
      scale={1.03}
    >
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className={`flex flex-col items-center justify-start text-center 
        bg-white/10 backdrop-blur-md border border-white/20
        rounded-xl shadow-md hover:shadow-purple-500/30 p-4 sm:p-5 ${className || ""}`}
      >
        {/* Ícone */}
        <div className="h-[90px] sm:h-[110px] flex items-center justify-center hover:scale-105 transition-transform">
          <Image
            src={icon}
            alt={name}
            width={80}
            height={80}
            className="object-contain w-16 sm:w-20 md:w-24 h-auto"
          />
        </div>

        {/* Título */}
        <h1 className="text-white text-lg sm:text-xl mt-3 font-semibold hover:text-purple-400 transition-colors">
          {name}
        </h1>

        {/* Descrição */}
        <p className="text-white/90 text-sm sm:text-base mt-2 leading-relaxed">
          {description}
        </p>
      </motion.div>
    </Tilt>
  );
};

export default ServicesCard;
