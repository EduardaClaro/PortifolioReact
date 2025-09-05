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

      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl px-4">
        <Image
          src="/assets/avatarDuda.png"
          alt="heroimage"
          className="max-w-xs md:max-w-md lg:max-w-xl h-auto mb-8 transition-all duration-500 ease-in-out hover:scale-108"
          width={370}
          height={370}
        />

        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold items-center transition-all duration-300 ease-in-out hover:scale-108 hover:text-purple-300">
            Sejam <span className="text-purple-500">Bem Vindos</span>
          </h1>

          <h2 className="mt-5 text-sm sm:text-2xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:text-purple-300">
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

        <div className="mt-6">
          <button
            className="px-6 py-2 bg-purple-900 hover:bg-purple-950 transition-all duration-300 ease-in-out
            cursor-pointer rounded-full text-lg font-medium flex items-center justify-center hover:scale-108"
          >
            <span>Meus Projetos</span>
            <span className="w-5 h-5 ml-2 inline-block">
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
