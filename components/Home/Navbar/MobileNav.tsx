"use client";
import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpenClass = showNav ? "translate-x-0" : "translate-x-full";
  const overlayVisibleClass = showNav ? "opacity-100 visible" : "opacity-0 invisible";

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 z-[10005] bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${overlayVisibleClass}`}
      />

      {/* Painel Lateral */}
      <nav // SUGESTÃO: Usar a tag <nav> para semântica
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[300px] bg-white dark:bg-zinc-900 shadow-2xl z-[10010] transform transition-transform duration-300 ease-in-out ${navOpenClass} flex flex-col`}
        aria-label="Navegação mobile"
      >
        <div className="flex justify-end p-6">
          <button 
            onClick={closeNav} 
            aria-label="Fechar menu" // SUGESTÃO: Melhorar acessibilidade
            className="p-1"
          >
            <CgClose className="w-7 h-7 text-zinc-800 dark:text-white cursor-pointer" />
          </button>
        </div>

        <div className="flex flex-col space-y-6 px-10 pt-4">
          {navLinks.map((link, index) => (
            <Link href={link.url} key={link.id} onClick={closeNav}>
              {/* 
                SUGESTÃO: Animação escalonada.
                - A opacidade e a translação são controladas pela classe `navOpenClass` no painel pai.
                - `transition-all` e `duration-500` criam a animação suave.
                - `transition-delay` é aplicado dinamicamente com base no índice do link.
              */}
              <p
                className="text-zinc-800 dark:text-white text-lg font-medium hover:text-[#003964] transition-all duration-500 cursor-pointer"
                style={{
                  transitionDelay: `${showNav ? 150 + index * 50 : 0}ms`,
                  transform: showNav ? 'translateX(0)' : 'translateX(20px)',
                  opacity: showNav ? 1 : 0,
                }}
              >
                {link.label}
              </p>
            </Link>
          ))}
          
          <div 
            className="pt-6 border-t border-zinc-200 dark:border-zinc-800 transition-all duration-500"
            style={{
              transitionDelay: `${showNav ? 150 + navLinks.length * 50 : 0}ms`,
              transform: showNav ? 'translateX(0)' : 'translateX(20px)',
              opacity: showNav ? 1 : 0,
            }}
          >
            {/* SUGESTÃO: Usar Link para consistência com o Nav desktop */}
            <Link
              href="/login"
              onClick={closeNav}
              className="block w-full text-center font-semibold bg-[#003964] hover:bg-[#005da6] text-white py-3 shadow-md active:scale-95 transition-all"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
