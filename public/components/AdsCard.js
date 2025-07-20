import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

export default function AdsCard({ title, info, image, bg, bgcolor, buttonColor }) {
  return (
    <div className={`w-full lg:w-48/100 xl:min-h-[320px] h-auto max-h-[250px] flex flex-col items-start p-4 lg:p-6 rounded-2xl relative overflow-hidden`} style={{ backgroundColor: bgcolor }}>
      <Image
        src={bg}
        alt='pattern'
        className='opacity-20'
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          width: '100%',
          height: '100%',
          transform: 'scale(1.8)',
          transformOrigin: 'center'
        }}
      />
      <Image src={image} alt='ads-image' className='z-1 absolute bottom-0 left-0 w-auto sm:w-full sm:h-auto min-[500px]:w-full min-[500px]:h-auto' />
      <h2 className='z-2 lg:mb-2 font-bold text-white text-2xl max-w-[240px]'>{title}</h2>
      <p className='z-2 lg:mb-2 text-white text-sm max-w-[240px]'>{info}</p>
      <Link href={'#popular-car'} className='z-2'><Button label='Rental Car' mb={45} buttonColor={buttonColor} /></Link>
    </div>
  )
}
