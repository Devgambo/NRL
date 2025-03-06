import React from 'react'
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
                <div className="flex flex-col gap-5 w-full">
                    <div className="w-full">
                        <Input 
                            className="w-full p-2 rounded border border-gray-300" 
                            type="text" 
                            name="name" 
                            placeholder="Full Name" 
                            required 
                        />
                    </div>
                    <div className="w-full">
                        <Input 
                            className="w-full p-2 rounded border border-gray-300" 
                            type="email" 
                            name="email" 
                            placeholder="Email Address" 
                            required 
                        />
                    </div>
                    <div className="w-full">
                        <Textarea 
                            className="w-full p-2 rounded border border-gray-300" 
                            placeholder="Your Message" 
                            name="message" 
                            rows="10" 
                            required 
                        />
                    </div>
                </div>
                <div className='mt-5 flex justify-center'>
                    <Button type="submit" className={"w-[40%] items-center"}>
                        Send message
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default RecieveMsg