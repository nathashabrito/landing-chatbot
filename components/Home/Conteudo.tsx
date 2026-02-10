"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    category: "Gestão Documental",
    title: "Transformação Digital em 2026: o que muda na gestão documental",
    excerpt:
      "Descubra como a transformação digital em 2026 redefine a gestão documental com IA contextual, automação inteligente e segurança reforçada.",
    date: "26 Jan, 2026",
    image:
      "https://3adigitall.com.br/wp-content/uploads/2025/12/3A-Digitall-Tecnologia-Transformacao-Digital-em-2026-o-que-muda-na-gestao-documental-1024x576.png",
    url: "https://3adigitall.com.br/transformacao-digital-em-2026-o-que-muda-na-gestao-documental/",
  },
  {
    category: "Inteligência Artificial",
    title:
      "OCR e Inteligência Artificial: um salto em direção à transformação digital",
    excerpt:
      "Entenda como a união do OCR com a Inteligência Artificial está criando processos 100% digitais, seguros e ágeis.",
    date: "10 Dez, 2021",
    image:
      "https://evertectrends.com/wp-content/uploads/2025/08/MerchantRetail-e1755197112587.jpg",
    url: "https://evertectrends.com/pt-br/ocr-e-inteligencia-artificial/",
  },
  {
    category: "Segurança",
    title: "Migração para a Nuvem: Como Garantir a Conformidade com a LGPD?",
    excerpt:
      "A migração para a nuvem exige atenção redobrada à LGPD para evitar multas e garantir a proteção de dados pessoais.",
    date: "30 Jan, 2025",
    image:
      "https://dataprotectionbrasil.com.br/wp-content/uploads/2025/12/T248-Capa-960x619.png",
    url: "https://dataprotectionbrasil.com.br/2025/01/30/lgpd-e-nuvem/",
  },
];

const Conteudo = () => {
  return (
    <section id="conteudo" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#262626] mb-4 uppercase tracking-wider">
              Conteúdo
            </h2>
            <div className="w-20 h-1.5 bg-[#003964] rounded-full mb-6"></div>
            <p className="text-[#666] text-lg">
              Artigos, notícias e insights sobre gestão documental e tecnologia.
            </p>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#003964] font-bold flex items-center gap-2 border-b-2 border-[#003964] pb-1"
          >
            Ver todos os artigos <ArrowUpRight size={20} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Imagem Clicável */}
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <div className="overflow-hidden rounded-2xl mb-6 bg-[#f7f7f7] aspect-[16/10] relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#003964]/10 to-transparent"></div>
                </div>
              </a>

              <span className="text-xs font-bold text-[#003964] uppercase tracking-widest mb-3 block">
                {article.category}
              </span>

              {/* Título Clicável */}
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-bold text-[#262626] mb-3 group-hover:text-[#003964] transition-colors duration-300">
                  {article.title}
                </h3>
              </a>

              <p className="text-[#666] mb-4 line-clamp-2">{article.excerpt}</p>

              <span className="text-sm text-[#999]">{article.date}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conteudo;
