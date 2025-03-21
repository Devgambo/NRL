import { TypingAnimation } from "@/components/magicui/typing-animation"
import Navbar from "@/components/Navbar"
function Hero() {
    return (
        <div className="relative w-full h-screen">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover "
                src="/ved1.mp4"
                autoPlay
                loop
                muted
                playsInline
            ></video>
            {/* Dark Overlay
            <div className="absolute inset-0 bg-black/50"></div> */}
            {/* Gradient Fade-out to Black */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black"></div>
            {/* Content */}
            <div className="relative z-10 text-white text-3xl flex items-center justify-center h-full">
                <TypingAnimation className={"text-white space-grotesk"}>TO INFINITY AND BEYOND.</TypingAnimation>
            </div>
        </div>
    )
}
export default Hero
 