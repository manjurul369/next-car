import Image from 'next/image'
import React from 'react'
import {pattern} from '@/public/assets/images'

export default function CarGallery( {
    carImg, thumbImg
} ) {
  return (
    <div className='w-full lg:w-1/2 flex flex-col gap-5'>
        <div className='relative flex flex-col bg-primary rounded-lg p-10 lg:p-10 gap-2'>
            <Image
                src={pattern}
                alt="Pattern"
                fill
                style={{ objectFit: 'cover', zIndex: 0 }}
                className="pointer-events-none select-none"
            />
            <div className='relative z-10 flex flex-col gap-2'>
                <h2 className='text-white text-2xl w-9/10 font-semibold'>Sports car with the best designn and acceleration</h2>
                <p className='text-white text-md w-6/10'>Safety and comfort while driving a futuristic and elegant sports car</p>
                <div className='w-full flex justify-center py-5'>
                    <Image src={carImg} alt="Car Image" className='w-8/10 h-auto' />
                </div>
            </div>
        </div>

        <div>
            <div className='flex flex-row gap-5 overflow-x-auto'>
                {thumbImg.map((img, index) => (
                    <div key={index} className='w-1/3 h-32 relative rounded-lg overflow-hidden'>
                        <Image
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="pointer-events-none select-none"
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
