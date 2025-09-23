"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import Image from "next/image";

type Props = {
  image: string;
  video: string;
  title: string;
  description: string;
  techs: string[];
  link: string;
};

const ProjectsCard = ({ image, video, title, description, techs, link }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Tilt glareEnable={true} glareColor="#ffffff" glareMaxOpacity={0.1}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden group cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          {/* Imagem com ícone de play */}
          <div className="w-full h-48 relative overflow-hidden">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover w-full h-full transition-transform duration-300"
              />
            </motion.div>

            {/* Ícone de play */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
              <motion.div whileHover={{ scale: 1.2 }} className="text-white text-5xl">
                ▶
              </motion.div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="p-6 flex flex-col justify-between h-full">
            <h2 className="text-white text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors">
              {title}
            </h2>
            <p className="text-gray-300 text-sm mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {techs.map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(168,85,247,0.8)",
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm rounded-lg shadow-md hover:bg-purple-500 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Ver Projeto
            </motion.a>
          </div>
        </motion.div>
      </Tilt>

      {/* Modal do vídeo */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white text-2xl z-10"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes />
              </button>

              <video
                src={video}
                controls
                autoPlay
                className="w-full h-auto max-h-[90vh] rounded-lg shadow-lg object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsCard;
