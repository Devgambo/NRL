import { motion } from "motion/react"
import React from 'react'
import { InteractiveHoverButton } from "./magicui/interactive-hover-button"

function Navbar() {
    return (
<motion.div
    whileHover={{
        scale: 1.01,
        boxShadow: '0px 10px 30px rgba(255, 255, 255, 0.2)',
        transition: { duration: 0.15 },
    }}
    whileTap={{ scale: 0.99 }}
    className='fixed top-2 z-50 w-[95%] h-[10vh] bg-black   rounded-3xl flex flex-row items-center justify-between px-6'>
    
    {/* Logo on the Left */}
    <div className="text-white w-[10%] rounded-3xl ml-4">
        <img src="public/logo.png" alt="logo" />
    </div>

    {/* Buttons on the Right */}
    <div className='flex flex-row gap-4 mr-4'>
        {/* <DottedButton text={"Home"}/> */}
        
        <a href="#hero"><InteractiveHoverButton>Home</InteractiveHoverButton></a>
        <a href="#about"><InteractiveHoverButton>About</InteractiveHoverButton></a>
        <a href="#sub-sigs"><InteractiveHoverButton>Subsystem</InteractiveHoverButton></a>
        <a href="#projects"><InteractiveHoverButton>Projects</InteractiveHoverButton></a>
        <a href="#sponsers"><InteractiveHoverButton>Sponsers</InteractiveHoverButton></a>
        <a href="/team"><InteractiveHoverButton>Team</InteractiveHoverButton></a>
        <a href="/media"><InteractiveHoverButton>Media</InteractiveHoverButton></a>
        <a href="#footer"><InteractiveHoverButton>Contact us</InteractiveHoverButton></a>
    </div>

</motion.div>

)
}

export default Navbar
