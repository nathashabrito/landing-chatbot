"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lorem ipsum",
    role: "Lorem ipsum dolor",
    company: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    name: "Lorem ipsum",
    role: "Lorem ipsum dolor",
    company: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    name: "Lorem ipsum",
    role: "Lorem ipsum dolor",
    company: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  }
];

const Depoimentos = () => {
  return (
    <section id="clientes" className="py-24 bg-[#003964]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wider">Depoimentos de Clientes</h2>
          <div className="w-20 h-1.5 bg-white/30 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 relative"
            >
              <Quote className="absolute top-6 right-8 text-white/20 w-12 h-12" />
              <p className="text-white text-lg italic mb-8 leading-relaxed relative z-10">
                &quot;{t.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-white/70 text-sm">{t.role} - {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
