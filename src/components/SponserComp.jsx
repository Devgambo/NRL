"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const sponsors = [
    {
        name: "SolidWorks",
        logo: "/solidworks_logo.png",
    },
    {
        name: "Ansys",
        logo: "/Ansys_logo.png",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
}

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 pb-12 sm:pb-20">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-2 gap-12 sm:gap-16 md:gap-20"
            >
                {sponsors.map((sponsor, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Logo */}
                        <div className="relative w-full h-32 sm:h-40 md:h-48">
                            <Image
                                src={sponsor.logo}
                                alt={sponsor.name}
                                fill
                                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA for potential sponsors */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-10 sm:mt-16 text-center"
            >
                <motion.p
                    animate={{ opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white/40 text-xs sm:text-sm mb-4 sm:mb-6"
                >
                    Interested in partnering with us?
                </motion.p>
                <motion.a
                    href="#footer"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-full transition-all duration-300 shadow-lg shadow-red-500/25"
                >
                    Become a Sponsor
                    <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        →
                    </motion.span>
                </motion.a>
            </motion.div>
        </div>
    )
}
