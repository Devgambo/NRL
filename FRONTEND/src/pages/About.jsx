import { ScrollBasedVelocityDemo } from '@/components/VelScroll'
import Title from '@/components/Title'
import React from 'react'

function About() {
    return (
        <div className='text-white'>
            {/* <ScrollBasedVelocityDemo  text={"ABOUT"}/> */}
            <Title title={"ABOUT US"}/>
            <div className='grid grid-cols-5'>
                <div className='m-10 col-span-3 mb-4 text-xl space-grotesk text-neutral-300 md:text-xl'>
                NITK Rocket League is a student-led rocketry team at NITK, founded to design, build, and launch high-performance rockets for national and international competitions. With a strong focus on propulsion and aerodynamics, we develop innovative airframes and solid rocket motors, optimizing performance through simulations and experimental testing. From achieving precise altitude targets in model rocketry to pioneering indigenous propellant research for the Spaceport America Cup, we are dedicated to pushing the boundaries of aerospace engineering.
                </div>
                <div className='col-span-2'>
                    image
                </div>
            </div>
        </div>
    )
}

export default About
