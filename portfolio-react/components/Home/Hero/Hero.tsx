"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import ParticlesHero from "./ParticleBackgroud";
import { Roboto_Condensed } from "next/font/google";

// Fonte Roboto Condensed
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const Hero = () => {
  return (
    <div
      className={`${robotoCondensed.className} relative h-screen flex items-center justify-center text-white overflow-hidden`}
    >
      <ParticlesHero />

      <div className="relative z-10 flex flex-col items-center w-[90%] max-w-6xl mx-auto px-4">
        {/* Avatar com animação */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <Image
            src="/assets/avatarDuda.png"
            alt="heroimage"
            className="w-32 sm:w-44 md:w-56 lg:w-72 h-auto mb-6 rounded-full shadow-lg"
            width={300}
            height={300}
          />
        </motion.div>

        {/* Textos */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <motion.h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold"
            whileHover={{ scale: 1.05, color: "#D8B4FE" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Sejam <span className="text-purple-500">Bem Vindos</span>
          </motion.h1>

          <motion.h2
            className="mt-4 text-sm sm:text-lg md:text-xl font-medium flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            whileHover={{ scale: 1.02, color: "#D8B4FE" }}
          >
            Portfólio
            <span className="text-purple-500 font-bold">
              <Typewriter
                options={{
                  strings: ["Maria Eduarda Claro"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  wrapperClassName:
                    "pl-2 transition-all duration-300 ease-in-out",
                }}
              />
            </span>
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
