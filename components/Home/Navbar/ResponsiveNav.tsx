'use client'
import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav'; // Removidas as chaves para bater com o export default

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);

    const handleNavShow = () => {
        setShowNav(true);
    };

    const handleNavClose = () => {
        setShowNav(false);
    };

    return (
        // Usamos uma div relativa ou vazia para garantir que as Navs (que são fixas) 
        // não conflitem com o resto do conteúdo
        <> 
            <Nav openNav={handleNavShow} />
            <MobileNav showNav={showNav} closeNav={handleNavClose} />    
        </>
    );
};

export default ResponsiveNav;