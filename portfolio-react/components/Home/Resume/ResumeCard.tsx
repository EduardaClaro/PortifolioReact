"use client";

import React from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

type Props = {
  role: string;
  Icon: IconType;
  date?: string;
  description: string;
  link?: string;
};

const ResumeCard = ({ Icon, role, date, description, link }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
      className="w-full h-full group"
    >
      <div
        className="flex flex-col sm:flex-row items-start gap-4 bg-white/5 backdrop-blur-md border border-white/10 
        transition-all duration-500 p-4 sm:p-5 rounded-xl w-full h-full 
        hover:border-purple-500/40 hover:bg-white/10"
      >
        {/* Ícone */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          whileHover={{ rotate: 180 }}
          className="sm:w-12 sm:h-12 w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 
          rounded-full flex items-center justify-center shadow-md"
        >
          <Icon className="sm:w-6 sm:h-6 w-5 h-5 text-white" />
        </motion.div>

        {/* Conteúdo */}
        <div className="flex-1">
          {date && (
            <h1 className="mb-1 inline-block px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[11px] sm:text-xs font-bold">
              {date}
            </h1>
          )}
          <h2 className="text-gray-100 text-base sm:text-lg md:text-xl font-semibold group-hover:text-purple-300 transition-colors">
            {role}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm pt-1 leading-relaxed">
            {description}
          </p>

          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 12px rgba(168,85,247,0.7)",
              }}
              className="inline-block mt-3 px-3 py-1.5 bg-purple-600 text-white text-xs sm:text-sm rounded-md shadow-md 
                         hover:bg-purple-500 transition-colors"
            >
              Ver Certificado
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeCard;
