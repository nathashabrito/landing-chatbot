"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import Image from "next/image";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 50) setNavBg(true);
      else setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { id: 1, url: "#", label: "Home" },
    { id: 2, url: "#produtos", label: "Produtos" },
    { id: 3, url: "#conteudo", label: "Conteúdo" },
    { id: 4, url: "#quem-somos", label: "Quem Somos" },
    { id: 5, url: "#clientes", label: "Clientes" },
    { id: 6, url: "#contato", label: "Contato" },
  ];

  return (
    <header className={`fixed w-full h-20 transition-all duration-300 z-[1000] flex items-center ${
      navBg ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
    }`}>
      <div className="flex items-center justify-between w-[90%] xl:w-[85%] mx-auto h-full">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Voltar para a página inicial">
            <Image
              src="/PNG-05-main.png"
              alt="Logo Archio"
              width={130}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Links de Navegação (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-10">
          {links.map((link) => (
            <Link 
              href={link.url} 
              key={link.id}
              className="text-[15px] font-semibold text-[#262626] hover:text-[#003964] transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Lado Direito */}
        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="px-6 py-2.5 bg-[#003964] text-white font-bold text-sm hover:bg-[#005da6] transition-all rounded-sm shadow-md"
          >
            Login
          </Link>
          {/* <Link
            href="#contato"
            className="px-6 py-2.5 bg-[#003964] text-white font-bold text-sm hover:bg-[#005da6] transition-all rounded-sm shadow-md"
          >
            Começar
          </Link> */}

          <button
            onClick={openNav}
            className="p-1 lg:hidden text-[#262626]"
            aria-label="Abrir menu"
          >
            <HiBars3BottomRight className="w-8 h-8 cursor-pointer" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
