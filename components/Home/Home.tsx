"use client";

import React from "react";
import Carousel, { CarouselItem } from "@/components/Home/Carrossel/Carrossel";
import Destaques from "@/components/Home/Destaques/destaques";
import QuemSomos from "@/components/Home/QuemSomos";
import Conteudo from "@/components/Home/Conteudo";
import Depoimentos from "@/components/Home/Depoimentos";
import Contato from "@/components/Home/Contato";

const carouselItems: CarouselItem[] = [
  {
    type: "video" as const,
    src: "/WhatsAppVideo2025-11-21at12.46.34.mp4",
    alt: "Gestão Inteligente da Informação",
    title: "GESTÃO DE DOCUMENTOS INTELIGENTE",
    description: "Gerencie suas informações, sejam documentos físicos ou eletrônicos, de forma a permitir sua preservação e recuperação imediata.",
    ctaText: "Saiba Mais"
  },
  {
    type: "image" as const,
    src: "/site_2_gestao_processos.png",
    alt: "Gestão de Processos",
    title: "GESTÃO DE PROCESSOS (WORKFLOWS)",
    description: "Automatize e gerencie cada etapa de seus processos, mantenha registros das operações, identifique gargalos e ganhe produtividade.",
    ctaText: "Ver Detalhes"
  },
  {
    type: "image" as const,
    src: "/site_3_gestao_contratos.png",
    alt: "Gestão de Contratos",
    title: "GESTÃO DE CONTRATOS",
    description: "Colete assinaturas (eSignature), gerencie e armazene seus contratos, permitindo controlar seu ciclo de vida.",
    ctaText: "Saiba Mais"
  },
  {
    type: "image" as const,
    src: "/site_4_automacao_processos.png",
    alt: "Automação de Processos",
    title: "AUTOMAÇÃO DE PROCESSOS COM IA",
    description: "Automatize processos de indexação de documentos, OCR, assinatura digital e a coleta de informações para criação de uma base de conhecimento corporativa.",
    ctaText: "Explorar"
  },
  {
    type: "image" as const,
    src: "/site_5_analise_informacoes.png",
    alt: "Análise de Informações",
    title: "ANALISE SUAS INFORMAÇÕES COM IA",
    description: "Tenha insights, localize informações em documentos, sumarize informações e gerencie métricas dos processos e acervo.",
    ctaText: "Começar agora"
  },
];

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* O pt-16 compensa a altura da sua Navbar fixa */}
      <div className="pt-16">
        <Carousel items={carouselItems} autoPlayInterval={6000} />
      </div>

      {/* Seção de Destaques */}
      <Destaques />

      {/* Seção de Conteúdo (Blog) */}
      <Conteudo />

      {/* Seção Quem Somos */}
      <QuemSomos />

      {/* Seção Depoimentos de Clientes */}
      <Depoimentos />

      {/* Seção de Contato */}
      <Contato />

      {/* Footer Simples */}
      <footer className="py-12 bg-[#262626] text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/50 text-sm">
            © 2026 Archio Gestão Documental. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
