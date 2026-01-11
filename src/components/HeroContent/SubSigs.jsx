"use client"

import { motion } from "framer-motion"
import Title from '@/components/Title'

const SubsystemCard = ({ heading, text, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/50 transition-all duration-300"
        >
            {/* Red accent line */}
            <div className="absolute top-0 left-4 right-4 sm:left-6 sm:right-6 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Number indicator */}
            <span className="text-red-500/20 text-4xl sm:text-5xl md:text-6xl font-bold font-display absolute top-3 sm:top-4 right-3 sm:right-4 select-none">
                0{index + 1}
            </span>
            
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 relative z-10 pr-8">
                {heading}
            </h3>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed relative z-10">
                {text}
            </p>
        </motion.div>
    )
}

function SubSigs() {
    const subsystems = [
        { 
            heading: "Structures & Aerodynamics", 
            text: "Designing and optimizing rocket airframes for maximum strength and aerodynamic efficiency through simulations and wind tunnel testing." 
        },
        { 
            heading: "Propulsion", 
            text: "Developing and testing solid rocket motors with optimized propellant formulation, burn rates, and thrust curves." 
        },
        { 
            heading: "Avionics", 
            text: "Building flight electronics, sensor integration, and telemetry systems for accurate data collection and mission control." 
        },
        { 
            heading: "Media & Marketing", 
            text: "Managing outreach, branding, and sponsorships to showcase achievements and build our support network." 
        }
    ]
    
    return (
        <div className="bg-black">
            <Title title="SUBSYSTEMS" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 md:px-10 pb-8 sm:pb-10">
                {subsystems.map((subsystem, index) => (
                    <SubsystemCard 
                        key={index} 
                        heading={subsystem.heading} 
                        text={subsystem.text} 
                        index={index} 
                    />
                ))}
            </div>
        </div>
    )
}

export default SubSigs
