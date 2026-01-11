"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

function RecieveMsg() {
    return (
        <div className='w-full text-white flex flex-col items-center'>
            <form 
                className="w-full" 
                target="_blank" 
                action="https://formsubmit.co/anacondakk01@gmail.com" 
                method="POST"
            >
                <div className="flex flex-col gap-3 sm:gap-4 w-full">
                    <div className="w-full">
                        <Input 
                            className="w-full p-2 text-sm sm:text-base rounded-lg border border-white/10 bg-white/5 focus:border-red-500/50 transition-colors" 
                            type="text" 
                            name="name" 
                            placeholder="Full Name" 
                            required 
                        />
                    </div>
                    <div className="w-full">
                        <Input 
                            className="w-full p-2 text-sm sm:text-base rounded-lg border border-white/10 bg-white/5 focus:border-red-500/50 transition-colors" 
                            type="email" 
                            name="email" 
                            placeholder="Email Address" 
                            required 
                        />
                    </div>
                    <div className="w-full">
                        <Textarea 
                            className="w-full p-2 text-sm sm:text-base rounded-lg border border-white/10 bg-white/5 focus:border-red-500/50 transition-colors resize-none" 
                            placeholder="Your Message" 
                            name="message" 
                            rows="4" 
                            required 
                        />
                    </div>
                </div>
                <div className='mt-3 sm:mt-4'>
                    <Button type="submit" className="w-full sm:w-auto px-6 py-2 text-xs sm:text-sm font-medium bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-lg transition-all duration-300">
                        Send Message
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default RecieveMsg
