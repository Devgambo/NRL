import { ScreenEndText } from '@/components/ScreenEndText'
import React from 'react'
import RecieveMsg from '@/components/RecieveMsg';
import { Link } from 'react-router-dom';

function Footer() {

    const scrollToSection = (id) => {
        if (location.pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.location.href = `/#${id}`;
        }
    };


    return (
        <div className='relative' id="footer">
            <div className="bg-black py-12">

                <div className='z-12 grid grid-cols-1 md:grid-cols-12 gap-5 container mx-auto px-4'>

                    <div className='md:col-span-9 flex flex-col'>

                        <div className="grid  md:grid-cols-2 text-white/80">
                            <div className='grid grid-cols-2' >
                                <div className="mb-8 md:mb-0">
                                    <h3 className="text-lg font-bold mb-4 text-white">Navigation</h3>
                                    <ul className="space-y-2">
                                        <li><Link onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors">Home</Link></li>
                                        <li><Link onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</Link></li>
                                        <li><Link onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">Projects</Link></li>
                                        <li><Link to="/team" className="hover:text-white transition-colors">Team</Link></li>
                                    </ul>
                                </div>
                                <div className="mb-8 md:mb-0">
                                    <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
                                    <ul className="space-y-2">
                                        <li><Link onClick={() => scrollToSection('sub-sigs')} className="hover:text-white transition-colors">Subsystems</Link></li>
                                        <li><Link onClick={() => scrollToSection('sponsers')} className="hover:text-white transition-colors">Sponsors</Link></li>
                                        <li><Link to="/pictures" className="hover:text-white transition-colors">Media</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-4 text-white">Connect</h3>
                                <div className="flex space-x-4 mb-6">
                                    {/* Social Icons */}
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>
                                    </a>
                                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-youtube">
                                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                        </svg>
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                        </svg>
                                    </a>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                            <rect x="2" y="9" width="4" height="12"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-white/60 mt-6">© {new Date().getFullYear()} NITK Rocket League. All rights reserved.</p>
                                <p className="text-white/40 text-sm mt-2">Made with ❤️ by Devgambo</p>
                            </div>
                        </div>

                    </div>
                    {/* Change col-span-3 to full width on mobile */}
                    <div className='md:col-span-3 p-5 mt-8 md:mt-0'>
                        <RecieveMsg />
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <ScreenEndText />
            </div>
            <div className='md:hidden flex justify-center relative bottom-7'>
                <div className=" w-[65%] rounded-3xl ml-4">
                    <img src="/logo.png" alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Footer
