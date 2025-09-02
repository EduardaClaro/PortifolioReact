"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { BsArrowRight } from "react-icons/bs";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4">
        <Image
          src="/assets/avatarDuda.png"
          alt="heroimage"
          className="max-w-xs md:max-w-md lg:max-w-xl h-auto mr-0 md:mr-8"
          width={400}
          height={400}
        />

        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-wide">
            Sejam Bem Vindos
            <span className="text-cyan-200 block">ao meu Portifólio</span>
          </h1>
          <h2 className="mt-5 text-sm sm:text-2xl font-medium flex items-center gap-2">
            Olá! Eu sou
            <span className="text-cyan-200 font-bold">
              <Typewriter
                options={{
                  strings: [
                    "a Maria Eduarda Claro",
                    "Desenvolvedora Full Stack",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  wrapperClassName: 'pl-2',
                }}
              />
            </span>
          </h2>
          <button className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300
          cursor-pointer rounded-full text-lg font-medium flex items-center">
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
