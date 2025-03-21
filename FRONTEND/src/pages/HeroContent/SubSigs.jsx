import { NeonGradientCardDemo } from '@/components/NeonGradientCardDemo'
import React, { useRef, useEffect } from 'react'
// import { motion } from "motion/react"
import { motion , useInView} from "framer-motion";
import Title from '@/components/Title'
function SubSigs() {
    const subsystems = [
        { heading: "Structures & Aerodynamics", text: "We design and optimize the rocket’s airframe for maximum strength and aerodynamic efficiency. Our focus is on lightweight, durable materials, stability analysis, and drag reduction through simulations and wind tunnel testing." },
        { heading: "Propulsion", text: "Our propulsion team develops and tests solid rocket motors, working on propellant formulation, burn rate optimization, and thrust curve analysis. We ensure efficient and reliable motor performance through simulations and static fire tests." },
        { heading: "Avionics", text: "We handle flight electronics, sensor integration, and telemetry systems to ensure accurate data collection and control. Our team works on altimeters, GPS tracking, and recovery systems to enhance mission success and safety." },
        { heading: "Media & Marketing", text: "We manage outreach, branding, and sponsorships, showcasing our achievements to the public and potential partners. Through engaging content, social media, and events, we promote our rocketry endeavors and build a strong support network." }
    ];
    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: true });
    
    return (
        <div className='bg-black flex flex-col'>
            <Title title="SUB-SYSTEMS" />
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -50 }}
                animate={inView?{ opacity: 1, x: 0 }:{}}
                transition={{ duration: 1.25 }}
                className='grid grid-cols-12 mx-4 sm:mx-6 md:mx-9 gap-5'
            >
                {subsystems.map((subsystem, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95, rotate: "2.5deg" }}
                        key={index}
                        className='col-span-12 sm:col-span-6 lg:col-span-3 space-grotesk'>
                        <NeonGradientCardDemo text={subsystem.text} heading={subsystem.heading} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default SubSigs
