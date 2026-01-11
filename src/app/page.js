import About from "@/components/HeroContent/About"
import Hero from "@/components/HeroContent/Hero"
import Projects from "@/components/HeroContent/Projects"
import Sponsers from "@/components/HeroContent/Sponsers"
import SubSigs from "@/components/HeroContent/SubSigs"

export default function Home() {
  return (
    <div className="w-full flex flex-col scroll-smooth bg-black overflow-auto scrollbar-none">
      <section>
        <div id="hero" className="w-full h-[100vh]"><Hero /></div>
        <div id="about" className="mb-30"><About /></div>
        <div id="sub-sigs" className="mb-30"><SubSigs /></div>
        <div id="projects" className="mb-30"><Projects /></div>
        <div id="sponsers" className="mb-30"><Sponsers /></div>
      </section>
    </div>
  )
}
