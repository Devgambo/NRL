"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Title from '@/components/Title'

const images = [
    '/hero2.jpeg',
    '/hero.jpeg',
    '/hero2.jpeg',
    '/hero.jpeg',
    '/hero2.jpeg',
    '/hero.jpeg',
    '/hero2.jpeg',
    '/hero.jpeg',
    '/hero2.jpeg',
]

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-black">
            {/* Spacer for navbar */}
            <div className="h-16 sm:h-20 md:h-24" />
            
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-8 sm:py-10 md:py-12 px-4 sm:px-6"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 font-display">
                    Our <span className="text-red-500">Gallery</span>
                </h1>
                <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
                    Capturing moments from our journey - launches, builds, and everything in between.
                </p>
            </motion.div>

            {/* Gallery Grid */}
            <section className="px-4 sm:px-6 md:px-10 pb-12 sm:pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {images.map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100 
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-300"
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Image number */}
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white/30 text-2xl sm:text-3xl md:text-4xl font-bold font-display"
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </motion.span>
                                
                                {/* Red accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
