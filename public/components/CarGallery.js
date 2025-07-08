"use client";

import Image from 'next/image'
import React from 'react'
import {pattern, pattern2} from '@/public/assets/images'

export default function CarGallery( {
    carImg, thumbImg
} ) {

    const [currentImg, setCurrentImg] = React.useState(carImg);
    const handleThumbnailClick = (img) => {
        setCurrentImg(img);
    };

  return (
    <div className='w-full lg:w-1/2 flex flex-col gap-5'>
        <div className='relative flex flex-col bg-primary rounded-lg p-8 lg:p-10 gap-2'>
            <Image
                src={pattern}
                alt="Pattern"
                fill
                style={{ objectFit: 'cover', zIndex: 0 }}
                className="pointer-events-none select-none"
            />
            <div className='relative z-10 flex flex-col gap-2'>
                <h2 className='text-white text-2xl w-9/10 font-semibold'>Sports car with the best designn and acceleration</h2>
                <p className='text-white text-md sm:w-6/10 w-8/10'>Safety and comfort while driving a futuristic and elegant sports car</p>
                <div className='w-full flex justify-center py-2'>
                    <Image src={currentImg} alt="Car Image" className='w-8/10 h-auto' />
                </div>
            </div>
        </div>

        <div>
            <div className='flex flex-row gap-5 overflow-x-auto'>
                {thumbImg.map((img, index) => (
                    <div key={index} className={`w-1/3 h-15 md:h-20 lg:h-35 relative rounded-lg bg-secondary flex justify-center items-center overflow-hidden ` + (currentImg === img ? 'border-3 border-primary' : 'border-3 border-transparent')} onClick={() => handleThumbnailClick(img)}>
                        <Image
                            src={pattern2}
                            alt="Pattern"
                            fill
                            style={{ objectFit: 'cover', zIndex: 0 }}
                            className="pointer-events-none select-none"
                        />
                        <Image
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="select-none w-9/10 sm:w-8/10 hover:scale-105 transition-transform duration-300 cursor-pointer z-1"
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
