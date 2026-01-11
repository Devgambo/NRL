"use client"

import { motion } from 'framer-motion'
import TeamCard from '@/components/TeamCard'
import Title from '@/components/Title'

// Core team members (5 members)
const coreTeam = [
    { name: "John Smith", position: "Team Lead", imageSrc: "/team/mem1.jpg", linkedin: "https://linkedin.com" },
    { name: "Sarah Johnson", position: "Technical Head", imageSrc: "/team/mem2.jpg", linkedin: "https://linkedin.com" },
    { name: "Mike Chen", position: "Propulsion Lead", imageSrc: "/team/mem3.jpg", linkedin: "https://linkedin.com" },
    { name: "Emily Davis", position: "Avionics Lead", imageSrc: "/team/mem4.jpg", linkedin: "https://linkedin.com" },
    { name: "Alex Kumar", position: "Structures Lead", imageSrc: "/team/mem1.jpg" }, // No LinkedIn - optional
]

// Team members
const teamMembers = [
    { name: "David Wilson", position: "Avionics Engineer", imageSrc: "/team/mem2.jpg", linkedin: "https://linkedin.com" },
    { name: "Lisa Park", position: "Propulsion Engineer", imageSrc: "/team/mem3.jpg" },
    { name: "James Brown", position: "CAD Designer", imageSrc: "/team/mem4.jpg", linkedin: "https://linkedin.com" },
    { name: "Priya Sharma", position: "Electronics", imageSrc: "/team/mem1.jpg" },
    { name: "Tom Anderson", position: "Simulation", imageSrc: "/team/mem2.jpg", linkedin: "https://linkedin.com" },
    { name: "Nina Patel", position: "Media Head", imageSrc: "/team/mem3.jpg", linkedin: "https://linkedin.com" },
]

export default function TeamPage() {
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
                    Meet Our <span className="text-red-500">Team</span>
                </h1>
                <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
                    The passionate individuals behind NITK Rocket League, working together to push the boundaries of rocketry.
                </p>
            </motion.div>

            {/* Core Team Section */}
            <section className="py-6 sm:py-8">
                <Title title="CORE TEAM" />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-10 justify-items-center"
                >
                    {coreTeam.map((member, index) => (
                        <TeamCard
                            key={index}
                            name={member.name}
                            position={member.position}
                            imageSrc={member.imageSrc}
                            linkedin={member.linkedin}
                            index={index}
                            isCore={true}
                        />
                    ))}
                </motion.div>
            </section>

            {/* Team Members Section */}
            <section className="py-6 sm:py-8 pb-12 sm:pb-20">
                <Title title="TEAM MEMBERS" />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 px-4 sm:px-6 md:px-10 justify-items-center"
                >
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            name={member.name}
                            position={member.position}
                            imageSrc={member.imageSrc}
                            linkedin={member.linkedin}
                            index={index}
                            isCore={false}
                        />
                    ))}
                </motion.div>
            </section>

            {/* Join CTA */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="py-10 sm:py-16 px-4 sm:px-6 text-center"
            >
                <div className="max-w-2xl mx-auto p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 font-display">
                        Want to Join Us?
                    </h3>
                    <p className="text-white/60 text-sm sm:text-base mb-6 sm:mb-8">
                        We&apos;re always looking for passionate individuals to join our team. Whether you&apos;re into engineering, design, or marketing - there&apos;s a place for you.
                    </p>
                    <motion.a
                        href="#footer"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-full shadow-lg shadow-red-500/25"
                    >
                        Get in Touch
                    </motion.a>
                </div>
            </motion.section>
        </div>
    )
}
