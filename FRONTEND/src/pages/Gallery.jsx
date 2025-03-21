import { ParallaxScroll } from '@/components/Pictures'
import React from 'react'


const images = [

    './hero2.jpeg',
    './hero2.jpeg',
    './hero2.jpeg',
    './hero2.jpeg',
    './hero2.jpeg',
    './hero2.jpeg',
    './hero2.jpeg',
    './hero2.jpeg',
    './hero2.jpeg',
    './hero.jpeg',
    './hero.jpeg',
    './hero.jpeg',
    './hero.jpeg',
    './hero.jpeg',
    './hero.jpeg',
    './hero.jpeg',
    './hero.jpeg',
    './hero.jpeg',
    './hero.jpeg',

]

function Gallery() {

    return (
        <div className='h-screen'>
            <div className='w-full absolute top-20'>
                <ParallaxScroll images={images} />
            </div>
        </div>
    )
}

export default Gallery
