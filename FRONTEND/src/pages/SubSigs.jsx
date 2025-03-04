import { NeonGradientCard } from '@/components/magicui/neon-gradient-card'
import { NeonGradientCardDemo } from '@/components/NeonGradientCardDemo'
import { Rocket } from 'lucide-react'
import React from 'react'

function SubSigs() {

    const text = [
        "",
        "",
        "",
    ]

    return (
        <div className='bg-black flex flex-col'>
            <h1 className='text-white text-5xl m-10'>SUB-SYSTEMS</h1>
            <div className='grid grid-cols-6 mx-9 gap-x-5 gap-y-5'>
                <div className='col-span-2' ><NeonGradientCardDemo text={"djkskjdjkabdkbsjbuabcb uuihdkjasbudb buihwbd"} heading={"Rocket"} /></div>
                <div className='col-span-2'><NeonGradientCardDemo text={"djkskjdjkabdkbsjbuabcb uuihdkjasbudb buihwbd"} heading={"Rocket"} /></div>
                <div className='col-span-2'><NeonGradientCardDemo text={"djkskjdjkabdkbsjbuabcb uuihdkjasbudb buihwbd"} heading={"Rocket"} /></div>
                <div className='col-span-2'><NeonGradientCardDemo text={"djkskjdjkabdkbsjbuabcb uuihdkjasbudb buihwbd"} heading={"Rocket"} /></div>
            </div>
        </div>
    )
}

export default SubSigs
