import React from 'react'
import About from "./HeroContent/About"
import Hero from "./HeroContent/Hero"
import Projects from "./HeroContent/Projects"
import Sponsers from "./HeroContent/Sponsers"
import SubSigs from "./HeroContent/SubSigs"

function HeroPage() {
    return (
        <>
            <div className="w-full flex flex-col scroll-smooth bg-black overflow-auto scrollbar-none">
                <section>
                    <div id="hero" className="w-full h-[100vh]"><Hero /></div>
                    <div id="about" className="mb-30"><About /></div>
                    <div id="sub-sigs" className="mb-30"><SubSigs /></div>
                    <div id="projects" className="mb-30"><Projects /></div>
                    <div id="sponsers" className="mb-30"><Sponsers /></div>
                </section>
            </div>
        </>
    )
}

export default HeroPage
