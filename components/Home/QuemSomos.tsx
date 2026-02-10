"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-24 bg-[#f7f7f7]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#262626] mb-6 uppercase tracking-wider">Quem Somos</h2>
          <div className="w-20 h-1.5 bg-[#003964] mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-[#444] leading-relaxed mb-6">
            Archio nasceu de uma cissão da área de sistemas da SMARTSCAN SERVIÇOS DIGITAIS LTDA.
            Empresa da área de Gestão Documental fundada em 2.006 contando hoje com mais de 220 mil
            caixas de documentos armazenadas e 100 milhões de páginas digitalizadas.
          </p>
          <p className="text-lg text-[#444] leading-relaxed">
            O Archio é uma aplicação em nuvem que traz conceitos inovadores na gestão de documentos,
            gestão de processos e gestão de contratos, permitindo total controle de seu acervo e das
            informações nele disponíveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Missão */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-[#003964]"
          >
            <div className="w-14 h-14 bg-[#003964]/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[#003964]" />
            </div>
            <h3 className="text-2xl font-bold text-[#262626] mb-4">Nossa Missão</h3>
            <p className="text-[#666] leading-relaxed">
              Estruturar e permitir acesso às informações corporativas quando elas forem necessárias,
              transformando processos analógicos em digitais.
            </p>
          </motion.div>

          {/* Visão */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-[#003964]"
          >
            <div className="w-14 h-14 bg-[#003964]/10 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-[#003964]" />
            </div>
            <h3 className="text-2xl font-bold text-[#262626] mb-4">Nossa Visão</h3>
            <p className="text-[#666] leading-relaxed">
              Prestar serviços com foco na excelência, disponibilizando as informações de forma segura e
              simples através de sistema inovador e intuitivo.
            </p>
          </motion.div>

          {/* Valores */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-[#003964]"
          >
            <div className="w-14 h-14 bg-[#003964]/10 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-[#003964]" />
            </div>
            <h3 className="text-2xl font-bold text-[#262626] mb-4">Nossos Valores</h3>
            <ul className="text-[#666] space-y-2 list-disc pl-4">
              <li>Incansável busca pela perfeição</li>
              <li>Produtividade com qualidade</li>
              <li>Segurança e preservação de dados</li>
              <li>Integridade e Responsabilidade</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
