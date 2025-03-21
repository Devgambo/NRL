import { motion } from "framer-motion";
import React from 'react';
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    const scrollToSection = (id) => {
        if (location.pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.location.href = `/#${id}`;
        }
    };

    return (
        <motion.div
            whileHover={{
                scale: 1.01,
                boxShadow: '0px 10px 30px rgba(255, 255, 255, 0.2)',
                transition: { duration: 0.15 },
            }}
            whileTap={{ scale: 0.99 }}
            className='fixed top-2 z-50 w-[95%] h-[10vh] bg-black rounded-3xl flex flex-row items-center justify-between px-6'
        >
            {/* Logo on the Left */}
            <Link to='/'>
                <div className=" w-[30%] rounded-3xl ml-4">
                    <img src="/logo.png" alt="logo" />
                </div>
            </Link>

            <div className='flex flex-row gap-4 mr-4'>
                <Link to="/" onClick={() => scrollToSection('hero')}>
                    <InteractiveHoverButton>Home</InteractiveHoverButton>
                </Link>
                <Link to="/" onClick={() => scrollToSection('about')}>
                    <InteractiveHoverButton>About</InteractiveHoverButton>
                </Link>
                <Link to="/" onClick={() => scrollToSection('sub-sigs')}>
                    <InteractiveHoverButton>Subsystem</InteractiveHoverButton>
                </Link>
                <Link to="/" onClick={() => scrollToSection('projects')}>
                    <InteractiveHoverButton>Projects</InteractiveHoverButton>
                </Link>
                <Link to="/" onClick={() => scrollToSection('sponsers')}>
                    <InteractiveHoverButton>Sponsers</InteractiveHoverButton>
                </Link>
                <Link to="/team">
                    <InteractiveHoverButton>Team</InteractiveHoverButton>
                </Link>
                <Link to="/pictures">
                    <InteractiveHoverButton>Media</InteractiveHoverButton>
                </Link>
                <Link to="/" onClick={() => scrollToSection('footer')}>
                    <InteractiveHoverButton>Contact</InteractiveHoverButton>
                </Link>
            </div>
        </motion.div>
    );
}

export default Navbar;