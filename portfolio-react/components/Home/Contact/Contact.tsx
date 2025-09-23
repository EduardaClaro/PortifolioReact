"use client";

import React from "react";
import {
  BiMap,
  BiPhone,
  BiLogoGmail,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";
import { ChevronUp } from "lucide-react";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ContactPage() {
  const webhookURL =
    "https://discord.com/api/webhooks/1419717294124433528/abRArWrq6a0iJkt7NZVTvl8S16yo2bWcz_aP2gerM6dOD3YWsYNSaTQMgB02MqGvjRAH";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `-----------------------------------------------\n📩 **Nova Mensagem de ${name}**\n\n**Mensagem:**\n\n🙋🏻‍♀️ **Nome:** ${name}\n📧 **Email:** ${email}\n📞 **Telefone:** ${phone || "Não informado"}\n📝 **Conteúdo:**\n>>> ${message}`,
        }),
      });

      alert("✅ Sua mensagem foi enviada com sucesso!\n📬 Obrigada por entrar em contato. Responderei em breve!");
      form.reset();
    } catch (err) {
      console.error(err);
      alert("❌ Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.");
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-8 ${robotoCondensed.className}`}
    >
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text hover:scale-105 transition-all cursor-pointer bg-gradient-to-r from-purple-300 to-purple-500 leading-tight">
              Quer conversar sobre ideias ou oportunidades?
            </h1>
            <p className="text-gray-400 text-lg">
              Entre em contato comigo e envie uma mensagem!
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-[#4c036245] p-4 rounded-2xl hover:scale-105 hover:-rotate-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <BiPhone className="w-5 h-5 text-white" />
              </div>
              <span className="text-purple-300 text-lg font-semibold">+ (15) 99742-2080</span>
            </div>

            <div className="flex items-center gap-4 bg-[#4c036245] p-4 rounded-2xl hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <BiLogoGmail className="w-5 h-5 text-white" />
              </div>
              <span className="text-purple-300 text-lg font-semibold">eduardaclaro1dev@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 bg-[#4c036245] p-4 rounded-2xl hover:scale-105 hover:-rotate-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <BiMap className="w-5 h-5 text-white" />
              </div>
              <span className="text-purple-300 text-lg font-semibold">Sorocaba - SP</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/EduardaClaro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#4c036245] rounded-full flex items-center justify-center hover:bg-purple-600 hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer"
            >
              <BiLogoGithub className="w-5 h-5 text-purple-200" />
            </a>

            <a
              href="https://www.linkedin.com/in/maria-eduarda-claro-90b017313/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#4c036245] rounded-full flex items-center justify-center hover:bg-purple-600 hover:scale-110 hover:-rotate-12 transition-all duration-300 cursor-pointer"
            >
              <BiLogoLinkedin className="w-5 h-5 text-purple-200" />
            </a>

            <a
              href="https://www.instagram.com/eduarda_claro_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#4c036245] rounded-full flex items-center justify-center hover:bg-purple-600 hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer"
            >
              <BiLogoInstagram className="w-5 h-5 text-purple-200" />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-[#4c036245] p-8 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Nome"
                className="w-full bg-slate-800/50 border border-purple-500/30 text-white placeholder:text-purple-300/70 h-14 text-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-400 rounded-xl hover:scale-105 transition-all duration-200 outline-none px-4"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Endereço de Email"
                className="w-full bg-slate-800/50 border border-purple-500/30 text-white placeholder:text-purple-300/70 h-14 text-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-400 rounded-xl hover:scale-105 transition-all duration-200 outline-none px-4"
                required
              />

              <input
                name="phone"
                type="tel"
                placeholder="Número de Celular"
                className="w-full bg-slate-800/50 border border-purple-500/30 text-white placeholder:text-purple-300/70 h-14 text-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-400 rounded-xl hover:scale-105 transition-all duration-200 outline-none px-4"
              />

              <textarea
                name="message"
                placeholder="Sua Mensagem"
                rows={6}
                className="w-full bg-slate-800/50 border border-purple-500/30 text-white placeholder:text-purple-300/70 text-lg resize-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400 rounded-xl hover:scale-105 transition-all duration-200 outline-none p-4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white h-14 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
