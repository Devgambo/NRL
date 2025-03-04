import { TypingAnimation } from "@/components/magicui/typing-animation"
import Navbar from "@/components/Navbar"
function Hero() {
    return (
        <div className="relative w-full h-screen bg-[url('/hero.jpeg')] bg-cover bg-center">
            
            <div className="flex items-center justify-center"><Navbar/></div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Gradient Fade-out to Black */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black"></div>
            {/* Content */}
            <div className="relative z-10 text-white text-3xl flex items-center justify-center h-full">
                <TypingAnimation>Content</TypingAnimation>
            </div>
        </div>
    )
}
export default Hero
