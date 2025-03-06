import { ScreenEndText } from '@/components/ScreenEndText'
import React from 'react'
import RecieveMsg from '@/components/RecieveMsg';
import Title from '@/components/Title'
function Footer() {
    return (
        <div className='relative'>
            <div className="">
                {/* <Title title={"CONTACT US"}/> */}
                <div className='z-12 grid grid-cols-12 gap-5'>
                    <div className='col-span-9'>links</div>
                    <div className='col-span-3 p-5'><RecieveMsg/></div>
                </div>
            </div>
            <ScreenEndText />
        </div>
    )
}

export default Footer
