"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/app/libs/utils";

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
  const videoRef = useRef<HTMLVideoElement>(null);

  const next = useCallback(() => {
    setIdx((p) => (p + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(next, autoPlayInterval);
    return () => clearInterval(t);
  }, [playing, autoPlayInterval, next]);

  if (!items || items.length === 0) return null;
  const item = items[idx];

  return (
    // Container principal com fundo gradiente
    <section className="w-full bg-gradient-to-r from-[#f2f2f2] via-[#e6e6e6] to-[#f2f2f2] overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto">
        
        {/* Grid principal que controla o layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          {/* COLUNA DO TEXTO (ESQUERDA) */}
          {/* No mobile (order-2), ele aparece depois da imagem. No desktop (md:order-1), ele vem primeiro. */}
          <div className="order-2 md:order-1 px-6 md:px-10 py-12 md:py-16 text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
              {item.title || item.alt}
            </h2>
            <p className="mt-6 text-zinc-600 text-base md:text-lg leading-relaxed max-w-lg">
              {item.description}
            </p>
            <div className="mt-10">
              <Button className="bg-[#003964] hover:bg-[#005da6] text-white px-8 py-3 rounded-none shadow-lg transition-all font-semibold text-base active:translate-y-0.5">
                {item.ctaText || "Saiba mais"}
              </Button>
            </div>
          </div>

          {/* COLUNA DA IMAGEM/MÍDIA (DIREITA) */}
          {/* No mobile (order-1), aparece primeiro. No desktop (md:order-2), vem em segundo. */}
          <div className="order-1 md:order-2 w-full h-[300px] sm:h-[400px] md:h-[600px] relative">
            {items.map((it, i) => (
              <div
                key={i}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                  i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
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

        {/* CONTROLES DE NAVEGAÇÃO */}
        <div className="flex justify-center items-center gap-6 pt-8 pb-12">
          <button
            onClick={() => setPlaying(!playing)}
            className="text-zinc-800 hover:scale-110 transition-transform focus:outline-none"
          >
            {playing ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
          </button>

          <div className="flex gap-4 items-center">
            <ChevronLeft 
              className="w-6 h-6 cursor-pointer text-zinc-400 hover:text-black transition-colors" 
              onClick={() => setIdx((idx - 1 + items.length) % items.length)} 
            />
            <div className="flex gap-3">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={cn(
                    "w-3 h-3 rounded-full border border-zinc-400 transition-all",
                    i === idx ? "bg-zinc-800 border-zinc-800 scale-125" : "bg-transparent hover:border-zinc-600"
                  )}
                />
              ))}
            </div>
            <ChevronRight 
              className="w-6 h-6 cursor-pointer text-zinc-400 hover:text-black transition-colors" 
              onClick={next} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
