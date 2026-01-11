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
            <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-300 w-full ${
                isCore ? 'max-w-[280px]' : 'max-w-[240px]'
            } mx-auto`}>
                {/* Image Container */}
                <div className={`relative overflow-hidden ${isCore ? 'h-[280px] sm:h-[320px]' : 'h-[240px] sm:h-[280px]'}`}>
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
                    
                    {/* Core badge */}
                    {isCore && (
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-red-400 bg-red-500/20 backdrop-blur-sm rounded-full border border-red-500/30"
                        >
                            Core Team
                        </motion.span>
                    )}
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between">
                        <div>
                            <motion.h3 
                                className="text-white font-bold text-base sm:text-lg"
                            >
                                {name}
                            </motion.h3>
                            <p className="text-white/60 text-xs sm:text-sm mt-1">{position}</p>
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
