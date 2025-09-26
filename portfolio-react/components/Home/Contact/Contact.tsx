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
import { Roboto_Condensed } from "next/font/google";
import { motion } from "framer-motion";

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
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    try {
      await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `-----------------------------------------------\n📩 **Nova Mensagem de ${name}**\n\n**Mensagem:**\n\n🙋🏻‍♀️ **Nome:** ${name}\n📧 **Email:** ${email}\n📞 **Telefone:** ${
            phone || "Não informado"
          }\n📝 **Conteúdo:**\n>>> ${message}`,
        }),
      });
      alert(
        "✅ Sua mensagem foi enviada com sucesso!\n📬 Obrigada por entrar em contato. Responderei em breve!"
      );
      form.reset();
    } catch (err) {
      console.error(err);
      alert(
        "❌ Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde."
      );
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 ${robotoCondensed.className}`}
    >
      <motion.div
        className="w-full max-w-5xl grid lg:grid-cols-2 gap-8 items-center"
        initial="hidden"
        animate="visible"
      >
        {/* Lado Esquerdo */}
        <div className="space-y-6">
          <div className="space-y-3">
            <motion.h1
              className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500 leading-snug cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              Quer conversar sobre ideias ou oportunidades?
            </motion.h1>
            <p className="text-gray-400 text-base">
              Entre em contato comigo e envie uma mensagem!
            </p>
          </div>

          {/* Informações */}
          <div className="space-y-4">
            {[
              {
                icon: BiPhone,
                label: "+ (15) 99742-2080",
                link: "https://wa.me/5515997422080?text=Ol%C3%A1,%20adorei%20seu%20trabalho!%0AGostaria%20de%20conversar%20sobre%20uma%20ideia?",
              },
              {
                icon: BiLogoGmail,
                label: "eduardaclaro1dev@gmail.com",
                link: "mailto:eduardaclaro1dev@gmail.com",
              },
              { icon: BiMap, label: "Sorocaba - SP" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-3 bg-[#4c036245] p-3 rounded-xl cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  rotate: idx % 2 === 0 ? -1 : 1,
                  boxShadow: "0 8px 16px rgba(128,0,255,0.4)",
                }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 text-base font-semibold hover:underline"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-purple-300 text-base font-semibold">
                    {item.label}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Redes Sociais */}
          <div className="flex gap-3">
            {[
              { icon: BiLogoGithub, link: "https://github.com/EduardaClaro" },
              {
                icon: BiLogoLinkedin,
                link: "https://www.linkedin.com/in/maria-eduarda-claro-90b017313/",
              },
              {
                icon: BiLogoInstagram,
                link: "https://www.instagram.com/eduarda_claro_/",
              },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4c036245] rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{
                  scale: 1.15,
                  rotate: idx % 2 === 0 ? 12 : -12,
                  backgroundColor: "#9c5aed",
                  boxShadow: "0 6px 16px rgba(124,58,237,0.5)",
                }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <item.icon className="w-5 h-5 text-purple-200" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Lado Direito - Formulário */}
        <motion.div
          className="bg-[#4c036245] p-6 rounded-2xl shadow-lg"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 12px 24px rgba(128,0,255,0.3)",
          }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-3">
              {["name", "email", "phone"].map((field) => (
                <motion.input
                  key={field}
                  name={field}
                  type={
                    field === "email"
                      ? "email"
                      : field === "phone"
                      ? "tel"
                      : "text"
                  }
                  placeholder={
                    field === "name"
                      ? "Nome"
                      : field === "email"
                      ? "Endereço de Email"
                      : "Número de Celular"
                  }
                  className="w-full bg-slate-800/50 border border-purple-500/30 text-white placeholder:text-purple-300/70 h-12 text-base focus:border-purple-400 focus:ring-2 focus:ring-purple-400 rounded-lg outline-none px-3"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 4px 12px rgba(124,58,237,0.4)",
                  }}
                  transition={{ type: "spring", stiffness: 120 }}
                  required={field !== "phone"}
                />
              ))}

              <motion.textarea
                name="message"
                placeholder="Sua Mensagem"
                rows={5}
                className="w-full bg-slate-800/50 border border-purple-500/30 text-white placeholder:text-purple-300/70 text-base resize-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400 rounded-lg outline-none p-3"
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 4px 12px rgba(124,58,237,0.4)",
                }}
                transition={{ type: "spring", stiffness: 120 }}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12 text-base font-semibold rounded-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 18px rgba(124,58,237,0.5)",
              }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              Enviar Mensagem
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
