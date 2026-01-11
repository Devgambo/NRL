"use client"

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

function Navbar() {
    const pathname = usePathname()
    const [hidden, setHidden] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()
        if (latest > previous && latest > 150) {
            setHidden(true)
            setMobileMenuOpen(false)
        } else {
            setHidden(false)
        }
    })

    const scrollToSection = (id) => {
        setMobileMenuOpen(false)
        if (pathname === '/') {
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            window.location.href = `/#${id}`
        }
    }

    const navItems = [
        { label: "Home", id: "hero", href: "/" },
        { label: "About", id: "about", href: "/" },
        { label: "Subsystems", id: "sub-sigs", href: "/" },
        { label: "Projects", id: "projects", href: "/" },
        { label: "Sponsors", id: "sponsers", href: "/" },
        { label: "Team", id: null, href: "/team" },
        { label: "Media", id: null, href: "/pictures" },
        { label: "Contact", id: "footer", href: "/" },
    ]

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3"
            >
                <div className="w-full max-w-7xl flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-lg">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image 
                            src="/logo.png" 
                            alt="NRL Logo" 
                            width={180} 
                            height={60} 
                            priority 
                            className="h-8 sm:h-10 md:h-12 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={(e) => {
                                    if (item.id) {
                                        e.preventDefault()
                                        scrollToSection(item.id)
                                    }
                                }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-3 xl:px-4 py-2 rounded-xl text-xs xl:text-sm font-medium text-white/80 hover:text-white bg-white/0 hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20 transition-all duration-200 font-sans"
                                >
                                    {item.label}
                                </motion.button>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 lg:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed top-16 sm:top-20 left-3 right-3 z-50 lg:hidden"
                    >
                        <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                            <div className="flex flex-col gap-2">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={(e) => {
                                                if (item.id) {
                                                    e.preventDefault()
                                                    scrollToSection(item.id)
                                                } else {
                                                    setMobileMenuOpen(false)
                                                }
                                            }}
                                            className="block px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
