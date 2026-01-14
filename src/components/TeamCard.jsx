"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiLinkedin } from 'react-icons/fi'

export const TeamCard = ({ name, position, imageSrc, linkedin, index = 0, isCore = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative w-full"
        >
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-300 w-full max-w-[240px] mx-auto h-[320px] sm:h-[360px] flex flex-col">
                {/* Image Container - Fixed height for all cards */}
                <div className="relative overflow-hidden flex-shrink-0 h-[240px] sm:h-[280px]">
                    <Image
                        src={imageSrc || '/placeholder.svg'}
                        alt={`${name} - ${position}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    {/* Red accent on hover */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* System badge for core members */}
                    {isCore && position && (
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-black bg-red-500/10 backdrop-blur-sm rounded-full border border-black"
                        >
                            {position}
                        </motion.span>
                    )}
                </div>

                {/* Content - Flex grow to fill remaining space */}
                <div className="p-4 sm:p-5 flex-grow flex flex-col justify-center">
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                            <motion.h3
                                className="text-white font-bold text-base sm:text-lg truncate"
                            >
                                {name}
                            </motion.h3>
                        </div>

                        {/* LinkedIn Link */}
                        {linkedin && (
                            <motion.a
                                href={linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-blue-400 hover:border-blue-400/50 transition-colors duration-200"
                                aria-label={`${name}'s LinkedIn`}
                            >
                                <FiLinkedin size={14} className="sm:w-4 sm:h-4" />
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default TeamCard
