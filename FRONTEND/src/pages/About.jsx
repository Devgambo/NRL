import { ScrollBasedVelocityDemo } from '@/components/VelScroll'
import React from 'react'

function About() {
    return (
        <div className='text-white'>
            <ScrollBasedVelocityDemo  text={"ABOUT"}/>
            <div className='grid grid-cols-5'>
                <div className='m-10 text-2xl col-span-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dignissimos magni, beatae accusamus fuga, magnam incidunt quidem quis autem quasi corporis cupiditate! Libero rem obcaecati odit quaerat eligendi nihil sapiente nobis modi esse ut doloribus fugit commodi laboriosam corrupti dolores, hic qui? Nulla, atque dicta dolorum quidem minima quam voluptatem aperiam in voluptas tempore officia illo asperiores, rem odio, veritatis ipsam. Id natus pariatur iusto culpa iure sequi tempora nostrum aspernatur explicabo a rerum corporis debitis reiciendis, tenetur, incidunt provident sint non odio ratione deserunt sunt. Nihil laboriosam earum ea enim voluptas perspiciatis fuga suscipit, a debitis temporibus, soluta officiis.
                </div>
                <div className='col-span-2'>
                    image
                </div>
            </div>
        </div>
    )
}

export default About
