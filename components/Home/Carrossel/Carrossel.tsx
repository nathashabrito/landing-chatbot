"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Chatbot from "@/components/Home/Chatbot/Chatbot";

export interface CarouselItem {
  type: "image" | "video";
  src: string;
  alt: string;
  title?: string;
  description?: string;
  ctaText?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
}

export default function Carousel({
  items,
  autoPlayInterval = 6000,
}: CarouselProps) {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [prog, setProg] = useState(0);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [currentService, setCurrentService] = useState<{
    context: string;
    title: string;
  } | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (items[idx].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .catch((err) => console.log("Autoplay bloqueado:", err));
    }
  }, [idx, items]);

  const next = useCallback(() => {
    setIdx((p) => (p + 1) % items.length);
    setProg(0);
  }, [items.length]);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      setProg((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + 100 / (autoPlayInterval / 100);
      });
    }, 100);
    return () => clearInterval(t);
  }, [playing, autoPlayInterval, next]);

  const item = items[idx];
  if (!items || items.length === 0) return null;

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Container Principal com Gradiente de Fundo (Estilo Microsoft) */}
      <div className="w-full h-auto min-h-[500px] md:h-[540px] lg:h-[600px] bg-gradient-to-br from-[#f2f2f2] via-[#f7f7f7] to-[#ffffff] relative flex flex-col md:flex-row items-center overflow-hidden">
        
        {/* Lado do Texto (Esquerda no Desktop, Baixo no Mobile) */}
        <div className="order-2 md:order-1 w-full md:w-1/2 px-6 py-12 md:pl-16 lg:pl-24 flex flex-col items-center md:items-start text-center md:text-left z-20">
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-700">
            {/* Título */}
            {(item.title || item.alt) && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#262626] leading-tight">
                {item.title || item.alt}
              </h2>
            )}

            {/* Descrição */}
            {item.description && (
              <p className="mt-4 text-[#262626] text-base md:text-lg font-normal leading-relaxed max-w-[90%] md:max-w-[480px]">
                {item.description}
              </p>
            )}

            {/* Botão Saiba Mais */}
            <div className="mt-8">
              <Button 
                onClick={() => {
                  setCurrentService({
                    context: item.description || "",
                    title: item.title || item.alt,
                  });
                  setChatbotOpen(true);
                }}
                className="font-semibold bg-[#003964] text-white border-none px-6 py-2.5 text-[15px] rounded-sm shadow-md transition-all hover:bg-[#005da6] hover:shadow-lg active:scale-95"
              >
                {item.ctaText || "Saiba Mais"}
              </Button>
            </div>
          </div>
        </div>

        {/* Lado da Imagem/Mídia (Direita no Desktop, Cima no Mobile) */}
        <div className="order-1 md:order-2 w-full md:w-1/2 h-[350px] md:h-full relative flex items-center justify-center md:justify-end p-4 md:p-8 lg:p-12">
          {/* Container da Imagem com o arredondamento e sombra do print */}
          <div className="relative w-full h-full max-w-[550px] md:max-w-none aspect-video md:aspect-auto overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl transition-all duration-700 ease-in-out transform">
            {items.map((it, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  i === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {it.type === "image" ? (
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    ref={i === idx ? videoRef : null}
                    src={it.src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay={i === idx}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navegação Lateral (Setas) */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-30 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          className="pointer-events-auto rounded-full bg-white/60 text-[#262626] hover:bg-white/90 border-none h-10 w-10 md:h-12 md:w-12 shadow-md"
          onClick={() => {
            setIdx((idx - 1 + items.length) % items.length);
            setPlaying(false);
          }}
        >
          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="pointer-events-auto rounded-full bg-white/60 text-[#262626] hover:bg-white/90 border-none h-10 w-10 md:h-12 md:w-12 shadow-md"
          onClick={() => {
            next();
            setPlaying(false);
          }}
        >
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
        </Button>
      </div>

      {/* Controles Inferiores (Play/Pause e Indicadores) */}
      <div className="w-full flex justify-center items-center gap-6 py-6 bg-white">
        <button
          onClick={() => setPlaying(!playing)}
          className="text-[#262626] hover:scale-110 transition-transform focus:outline-none"
        >
          {playing ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <div className="flex gap-3 items-center">
          {items.map((_, i) => (
            <div
              key={i}
              onClick={() => {
                setIdx(i);
                setProg(0);
              }}
              className="h-1.5 w-8 md:w-12 rounded-full bg-zinc-200 overflow-hidden cursor-pointer"
            >
              <div
                className={`h-full bg-[#262626] transition-all duration-100 linear ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
                style={{ width: i === idx ? `${prog}%` : "100%" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Chatbot */}
      {currentService && (
        <Chatbot
          isOpen={chatbotOpen}
          onClose={() => setChatbotOpen(false)}
          serviceContext={currentService.context}
          serviceTitle={currentService.title}
        />
      )}
    </div>
  );
}
