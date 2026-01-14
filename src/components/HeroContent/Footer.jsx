"use client"

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ScreenEndText } from '@/components/ScreenEndText'
import RecieveMsg from '@/components/RecieveMsg'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FiInstagram, FiYoutube, FiTwitter, FiLinkedin } from 'react-icons/fi'

const socialLinks = [
    { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FiYoutube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
]

// Rocketry facts and jokes that display randomly on each page refresh
const rocketryFacts = [
    "🚀 The Saturn V rocket remains the most powerful rocket ever successfully flown!",
    "🔥 Rocket fuel can burn at temperatures over 3,300°C — hotter than molten lava!",
    "🌙 It only takes about 3 days to travel from Earth to the Moon by rocket.",
    "💨 The exhaust velocity of a rocket can exceed 4.5 km/s!",
    "🛸 Why did the rocket break up with the satellite? It needed more space!",
    "🧑‍🚀 A rocket must reach 11.2 km/s to escape Earth's gravity — that's escape velocity!",
    "🎯 SpaceX's Falcon 9 has landed successfully over 200 times!",
    "😄 What do rockets eat? Launch meat!",
    "🔬 Robert Goddard launched the first liquid-fueled rocket in 1926.",
    "⚡ The Space Shuttle's main engines produced 37 million horsepower at liftoff!",
    "🌍 Rockets work in space because they don't need air — they carry their own oxidizer!",
    "😂 Why don't rockets ever get lost? They always follow their trajectory!",
    "🏗️ The Starship rocket stands 120 meters tall — taller than the Statue of Liberty!",
    "💡 Solid rocket boosters can't be turned off once ignited — commitment level: maximum!",
    "🎉 Why did the rocket go to school? To get a little more thrust in life!",
]

function Footer() {
    const pathname = usePathname()
    const [visitCount, setVisitCount] = useState(null)

    // Select a random fact on component mount (changes on page refresh)
    const randomFact = useMemo(() => {
        return rocketryFacts[Math.floor(Math.random() * rocketryFacts.length)]
    }, [])

    useEffect(() => {
        // Increment visit count on component mount
        const trackVisit = async () => {
            try {
                const response = await fetch('/api/visits', {
                    method: 'POST',
                })
                const data = await response.json()
                // Ensure we have a valid count, fallback to 0 if undefined
                setVisitCount(data.count ?? 0)
            } catch (error) {
                console.error('Error tracking visit:', error)
                // Fallback: just get the count without incrementing
                try {
                    const response = await fetch('/api/visits')
                    const data = await response.json()
                    // Ensure we have a valid count, fallback to 0 if undefined
                    setVisitCount(data.count ?? 0)
                } catch (fallbackError) {
                    console.error('Error fetching visit count:', fallbackError)
                    // Set to 0 if all else fails to prevent undefined errors
                    setVisitCount(0)
                }
            }
        }

        trackVisit()
    }, [])

    const scrollToSection = (id) => {
        if (pathname === '/') {
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            window.location.href = `/#${id}`
        }
    }

    const navLinks = [
        { label: 'Home', id: 'hero', href: '/' },
        { label: 'About', id: 'about', href: '/' },
        { label: 'Subsystems', id: 'sub-sigs', href: '/' },
        { label: 'Projects', id: 'projects', href: '/' },
    ]

    const resourceLinks = [
        { label: 'Team', href: '/team' },
        { label: 'Media', href: '/pictures' },
        { label: 'Sponsors', id: 'sponsers', href: '/' },
    ]

    return (
        <footer className="relative bg-black" id="footer">
            {/* Top border accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Section - Logo & Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="col-span-2 sm:col-span-2 lg:col-span-4"
                    >
                        <Link href="/" className="inline-block mb-4 sm:mb-6">
                            <Image src="/logo.png" alt="NRL Logo" width={180} height={60} className="h-10 sm:h-14 w-auto" />
                        </Link>
                        <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                            NITK Rocket League is a student-led rocketry team pushing the boundaries of aerospace engineering.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-2 sm:gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-red-500 hover:border-red-500/50 transition-colors duration-200"
                                    aria-label={social.label}
                                >
                                    <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="col-span-1 lg:col-span-2"
                    >
                        <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Navigation</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        onClick={(e) => {
                                            if (link.id) {
                                                e.preventDefault()
                                                scrollToSection(link.id)
                                            }
                                        }}
                                        className="text-white/60 hover:text-red-400 transition-colors text-xs sm:text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Resources Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="col-span-1 lg:col-span-2"
                    >
                        <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {resourceLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        onClick={(e) => {
                                            if (link.id) {
                                                e.preventDefault()
                                                scrollToSection(link.id)
                                            }
                                        }}
                                        className="text-white/60 hover:text-red-400 transition-colors text-xs sm:text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="col-span-2 lg:col-span-4"
                    >
                        <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Get in Touch</h4>
                        <RecieveMsg />
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4"
                >
                    <p className="text-white/40 text-xs sm:text-sm text-center">
                        © {new Date().getFullYear()} NITK Rocket League. All rights reserved.
                    </p>
                    <p className="text-white/40 text-xs sm:text-sm text-center">
                        {randomFact}
                    </p>
                </motion.div>
            </div>

            {/* Screen End Text */}
            <div className="hidden md:block">
                <ScreenEndText />
            </div>
            <div className="md:hidden flex justify-center pb-6 sm:pb-8">
                <Image src="/logo.png" alt="logo" width={150} height={50} className="opacity-20" />
            </div>
        </footer>
    )
}

export default Footer