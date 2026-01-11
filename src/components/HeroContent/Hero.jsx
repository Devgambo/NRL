import { TypingAnimation } from "@/components/magicui/typing-animation"

function Hero() {
    return (
        <div className="relative w-full h-screen">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/ved1.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            {/* Gradient Fade-out to Black */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />
            {/* Content */}
            <div className="relative z-10 text-white flex items-center justify-center h-full px-4">
                <TypingAnimation className="text-white font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-wider">
                    TO INFINITY AND BEYOND.
                </TypingAnimation>
            </div>
        </div>
    )
}

export default Hero
