import Image from 'next/image';
import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function Reviews({
    reviewDetails = [],
}) {

    const filledStars = [];
    const emptyStars = [];
    for (let i = 0; i < reviewDetails.rating; i++) {
        filledStars.push(<FaStar key={`filled-${i}`} />);
    }
    for (let i = 0; i < 5-reviewDetails.rating; i++) {
        emptyStars.push(<FaRegStar key={`empty-${i}`} />);
    }

  return (
    <div className='my-5 lg:my-10 xl:my-14'>
        <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center gap-4'>
                <Image src={reviewDetails.userImg} alt="user" width={50} height={50} className='rounded-full border-2 border-primary' />
                <div>
                    <h2 className='text-2xl font-semibold'>{reviewDetails.userName}</h2>
                    <h2 className='text-md text-slate-gray font-semibold'>{reviewDetails.designation}</h2>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-end'>
                <p className='text-md text-slate-gray'>{reviewDetails.date}</p>
                <span className='text-yellow-500 flex gap-2'>
                    {filledStars}
                    {emptyStars}
                </span>
            </div>
        </div>
        <p className='text-md lg:text-lg text-slate-gray ml-16 line-clamp-2'>{reviewDetails.review}</p>
    </div>
  )
}
