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
      glareEnable={true}
      glareColor="#ffffff"
      glareMaxOpacity={0.25}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1000}
      transitionSpeed={400}
      scale={1.05}
    >
      <motion.div
        whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
        transition={{ type: "spring", stiffness: 150, damping: 10 }}
        className={`flex flex-col items-center justify-start text-center bg-white/10 backdrop-blur-md border border-white/20
        rounded-2xl shadow-lg hover:shadow-purple-500/40 p-6 ${className || ""}`}
      >
        <div className="h-[120px] sm:h-[150px] flex items-center justify-center transition-transform duration-500 ease-out hover:scale-110">
          <Image
            src={icon}
            alt={name}
            width={100}
            height={100}
            className="object-contain w-20 sm:w-28 md:w-32 h-auto"
          />
        </div>

        <h1 className="text-white text-xl sm:text-2xl mt-4 font-semibold transition-all duration-300 ease-in-out hover:text-purple-400 hover:scale-105">
          {name}
        </h1>
        <p className="text-white text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-purple-300">
          {description}
        </p>
      </motion.div>
    </Tilt>
  );
};

export default ServicesCard;
