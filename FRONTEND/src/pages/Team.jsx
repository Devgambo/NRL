import TeamCard from '@/components/TeamCard';
import React from 'react'
import { FiTwitter, FiLinkedin } from 'react-icons/fi';

function Team() {

    const links = [
        { url: 'https://twitter.com', icon: <FiTwitter/>, label: 'Twitter' },
        { url: 'https://linkedin.com', icon: <FiLinkedin/>, label: 'LinkedIn' },
    ];


    return (
        <div>
            <div className='h-[15vh]'/>
            <div className="flex justify-center items-center">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
                    <TeamCard
                        name="John Doe"
                        position="Developer"
                        imageSrc="./team/mem1.jpg"
                        links={links}
                    />
                    <TeamCard
                        name="John Doe"
                        position="Developer"
                        imageSrc="./team/mem2.jpg"
                        links={links}
                    />
                    <TeamCard
                        name="John Doe"
                        position="Developer"
                        imageSrc="./team/mem3.jpg"
                        links={links}
                    />
                    <TeamCard
                        name="John Doe"
                        position="Developer"
                        imageSrc="./team/mem4.jpg"
                        links={links}
                    />
                    <TeamCard
                        name="John Doe"
                        position="Developer"
                        imageSrc="./team/mem4.jpg"
                        links={links}
                    />
                    <TeamCard
                        name="John Doe"
                        position="Developer"
                        imageSrc="./team/mem2.jpg"
                        links={links}
                    />
                </div>
            </div>
        </div>
    );

}

export default Team
