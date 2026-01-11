"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

function Title({ title }) {
    const ref = useRef(null)
    const inView = useInView(ref, { triggerOnce: true })

    return (
        <div ref={ref} className="px-6 sm:px-8 md:px-10 py-6 sm:py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-center gap-3 sm:gap-4"
            >
                <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-red-600 to-red-400" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display">
                    {title}
                </h2>
            </motion.div>
        </div>
    )
}

export default Title
