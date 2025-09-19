"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  image: string;
  title: string;
  description: string;
  techs: string[];
  link: string;
};

const ProjectsCard = ({ image, title, description, techs, link }: Props) => {
  return (
    <Tilt glareEnable={true} glareColor="#ffffff" glareMaxOpacity={0.1}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden group"
      >
        {/* Imagem */}
        <div className="w-full h-48 relative overflow-hidden">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
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
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            Ver Projeto
          </motion.a>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectsCard;
