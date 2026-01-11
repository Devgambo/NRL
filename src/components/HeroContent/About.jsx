"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Title from '@/components/Title'

function About() {
    return (
        <div className="text-white bg-black">
            <Title title="ABOUT US" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 px-6 md:px-10">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-1"
                >
                    <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                        NITK Rocket League is a student-led rocketry team at NITK, founded to design, build, and launch high-performance rockets for national and international competitions.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mt-4">
                        With a strong focus on propulsion and aerodynamics, we develop innovative airframes and solid rocket motors, optimizing performance through simulations and experimental testing.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mt-4">
                        From achieving precise altitude targets in model rocketry to pioneering indigenous propellant research for the Spaceport America Cup, we are dedicated to pushing the boundaries of aerospace engineering.
                    </p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2 relative h-[250px] sm:h-[300px] lg:h-[400px] rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                >
                    <Image
                        src="/hero.jpeg"
                        alt="About NRL"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
            </div>
        </div>
    )
}

export default About
