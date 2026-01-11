"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const sponsors = [
    {
        name: "NITK",
        logo: "/logo.png",
        tier: "Title Sponsor",
    },
    {
        name: "Partner Organization",
        logo: "/logo.png",
        tier: "Technical Partner",
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 pb-10 sm:pb-16">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
            >
                {sponsors.map((sponsor, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ 
                            y: -10, 
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 300 }
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/50 transition-all duration-300 flex flex-col items-center justify-center text-center overflow-hidden"
                    >
                        {/* Animated background gradient */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        
                        {/* Glowing orb effect */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 w-32 h-32 sm:w-40 sm:h-40 bg-red-500/20 rounded-full blur-3xl"
                        />
                        
                        {/* Tier badge */}
                        <motion.span 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-red-400 bg-red-500/10 rounded-full border border-red-500/20 z-10"
                        >
                            {sponsor.tier}
                        </motion.span>
                        
                        {/* Logo */}
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
                            transition={{ duration: 0.3 }}
                            className="relative w-32 h-20 sm:w-44 sm:h-24 mb-3 sm:mb-4 z-10"
                        >
                            <Image
                                src={sponsor.logo}
                                alt={sponsor.name}
                                fill
                                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>
                        
                        <motion.h3 
                            className="text-base sm:text-lg font-semibold text-white z-10"
                        >
                            {sponsor.name}
                        </motion.h3>
                        
                        {/* Shine effect */}
                        <motion.div
                            initial={{ x: "-100%", opacity: 0 }}
                            whileHover={{ x: "200%", opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                        />
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
