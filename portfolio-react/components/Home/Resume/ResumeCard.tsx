import React from "react";
import { IconType } from "react-icons";

type Props = {
  role: string;
  Icon: IconType;
  date?: string;
  description: string;
  link?: string; // novo campo para o certificado
};

const ResumeCard = ({ Icon, role, date, description, link }: Props) => {
  return (
    <div className="w-full h-full group">
      <div
        className="flex flex-col sm:flex-row items-start gap-6 bg-white/5 backdrop-blur-md border border-white/10 
        transition-all duration-500 p-6 sm:p-8 rounded-2xl w-full h-full 
        hover:scale-[1.03] hover:shadow-xl hover:border-purple-500/40 hover:bg-white/10"
      >
        {/* Ícone */}
        <div
          className="sm:w-14 sm:h-14 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-500 
          rounded-full flex items-center justify-center shadow-md"
        >
          <Icon
            className="sm:w-7 sm:h-7 w-6 h-6 text-white transition-transform duration-500 group-hover:rotate-180"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex-1">
          {date && (
            <h1 className="mb-3 inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs sm:text-sm font-bold">
              {date}
            </h1>
          )}
          <h2 className="text-gray-100 text-lg sm:text-2xl font-semibold group-hover:text-purple-300 transition-colors">
            {role}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base pt-3 leading-relaxed">
            {description}
          </p>

          {/* Botão para abrir certificado */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white text-sm rounded-lg shadow-md 
                         hover:bg-purple-500 transition-colors"
            >
              Ver Certificado
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
