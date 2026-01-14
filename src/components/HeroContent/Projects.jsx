"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Title from '@/components/Title'

const projects = [
    {
        title: "Project Phoenix",
        description: "Our flagship high-powered rocket designed to reach 30,000 feet. Features custom-built avionics, carbon fiber airframe, and a K-class motor.",
        image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=2070&auto=format&fit=crop",
        tags: ["High-Power", "Competition", "2024"]
    }
]

function Projects() {
    return (
        <div className="bg-black">
            <Title title="PROJECTS" />
            <div className="px-4 sm:px-6 md:px-10 pb-10 sm:pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-red-500/40 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-40 sm:h-48 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            </div>
                            
                            {/* Content */}
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-white/60 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex}
                                            className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-red-400 bg-red-500/10 rounded-full border border-red-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
