"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { BsArrowRight } from "react-icons/bs";
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
        <Image
          src="/assets/avatarDuda.png"
          alt="heroimage"
          className="w-40 sm:w-56 md:w-72 lg:w-96 h-auto mb-8 transition-all duration-500 ease-in-out hover:scale-105"
          width={370}
          height={370}
        />

        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:text-purple-300">
            Sejam <span className="text-purple-500">Bem Vindos</span>
          </h1>

          <h2 className="mt-5 text-base sm:text-xl md:text-2xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:text-purple-300">
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
          </h2>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
        </div>
      </div>
    </div>
  );
};

export default Hero;
