"use client";
import React from "react";
import { motion } from "framer-motion";
import { Settings, Cpu, Clock, Shield, Cloud, Headset } from "lucide-react";

const features = [
  {
    icon: <Settings className="w-8 h-8 text-[#003964]" />,
    title: "CONFIGURAÇÃO",
    description: "Configure documentos, modelos de contratos e processos de forma intuitiva ou utilize modelos pré-configurados"
  },
  {
    icon: <Cpu className="w-8 h-8 text-[#003964]" />,
    title: "INTELIGÊNCIA ARTIFICIAL",
    description: "Automatize processos e analise informações com uso de Inteligência Artificial"
  },
  {
    icon: <Clock className="w-8 h-8 text-[#003964]" />,
    title: "RETENÇÃO",
    description: "Controle prazos dos documentos com notificação automática"
  },
  {
    icon: <Shield className="w-8 h-8 text-[#003964]" />,
    title: "SEGURANÇA",
    description: "Controle o acesso a nível de documentos ou grupo de documentos, por usuário ou time de usuários"
  },
  {
    icon: <Cloud className="w-8 h-8 text-[#003964]" />,
    title: "PRESERVAÇÃO",
    description: "Garantia de preservação das informações, redundância de servidores em nuvem e backups automatizados"
  },
  {
    icon: <Headset className="w-8 h-8 text-[#003964]" />,
    title: "TREINAMENTO",
    description: "Nosso suporte acompanha toda a configuração do sistema para que os objetivos sejam rapidamente atingidos"
  }
];

const Destaques = () => {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#262626] mb-4 uppercase tracking-wider">Destaques</h2>
          <div className="w-20 h-1.5 bg-[#003964] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-[#f7f7f7] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#003964]/20"
            >
              <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#262626] mb-4">{feature.title}</h3>
              <p className="text-[#666] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destaques;
