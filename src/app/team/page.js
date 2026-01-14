"use client"

import { motion } from 'framer-motion'
import TeamCard from '@/components/TeamCard'
import Title from '@/components/Title'
import coreTeamData from '@/../../core_team.json'
import teamData from '@/../../team.json'

export default function TeamPage() {
    // Group team members by subsystem
    const groupBySubsystem = (members) => {
        return members.reduce((acc, member) => {
            const subsystem = member.subsystem
            if (!acc[subsystem]) {
                acc[subsystem] = []
            }
            acc[subsystem].push(member)
            return acc
        }, {})
    }

    const teamBySubsystem = groupBySubsystem(teamData)
    const subsystems = Object.keys(teamBySubsystem).sort()

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
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-10 justify-items-center max-w-7xl mx-auto"
                >
                    {coreTeamData.map((member, index) => (
                        <TeamCard
                            key={index}
                            name={member.name}
                            position={member.system}
                            imageSrc={member.image}
                            index={index}
                            isCore={true}
                        />
                    ))}
                </motion.div>
            </section>

            {/* Subsystem Sections */}
            {subsystems.map((subsystem, subsystemIndex) => (
                <section key={subsystem} className="py-6 sm:py-8">
                    <Title title={subsystem.toUpperCase()} />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: subsystemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 px-4 sm:px-6 md:px-10 justify-items-center max-w-7xl mx-auto"
                    >
                        {teamBySubsystem[subsystem].map((member, index) => (
                            <TeamCard
                                key={index}
                                name={member.name}
                                position={subsystem}
                                imageSrc={member.image}
                                index={index}
                                isCore={false}
                            />
                        ))}
                    </motion.div>
                </section>
            ))}

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
