"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contato = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Informações de Contato */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#262626] mb-4 uppercase tracking-wider">Contato</h2>
            <div className="w-20 h-1.5 bg-[#003964] rounded-full mb-8"></div>
            <p className="text-[#666] text-lg mb-10">
              Estamos prontos para ajudar sua empresa a transformar a gestão de informações. Entre em contato conosco.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f7f7f7] rounded-xl flex items-center justify-center text-[#003964]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#999] font-bold uppercase tracking-widest">Telefone</p>
                  <p className="text-[#262626] font-medium">+55 (34) 9999 - 9999</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f7f7f7] rounded-xl flex items-center justify-center text-[#003964]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#999] font-bold uppercase tracking-widest">E-mail</p>
                  <p className="text-[#262626] font-medium">contato@archio.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f7f7f7] rounded-xl flex items-center justify-center text-[#003964]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#999] font-bold uppercase tracking-widest">Localização</p>
                  <p className="text-[#262626] font-medium">Uberaba, MG - Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 bg-[#f7f7f7] p-8 md:p-12 rounded-[2rem] shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#262626] uppercase tracking-wider">Nome</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome completo"
                    className="w-full bg-white border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#003964] outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#262626] uppercase tracking-wider">E-mail</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="w-full bg-white border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#003964] outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#262626] uppercase tracking-wider">Assunto</label>
                <input 
                  type="text" 
                  placeholder="Como podemos ajudar?"
                  className="w-full bg-white border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#003964] outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#262626] uppercase tracking-wider">Mensagem</label>
                <textarea 
                  rows={4}
                  placeholder="Sua mensagem..."
                  className="w-full bg-white border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#003964] outline-none transition-all resize-none"
                ></textarea>
              </div>
              <Button className="w-full md:w-auto bg-[#003964] hover:bg-[#005da6] text-white font-bold py-4 px-10 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg">
                Enviar Mensagem <Send size={18} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
