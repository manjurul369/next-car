'use client';
import { React, useState } from 'react';
import { FaHeart, FaGasPump, FaRegHeart } from "react-icons/fa";
import { PiSteeringWheelFill } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";
import { useWishlist } from '@/public/contexts/WishlistContext';
import Button from './Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CarCard({ carID, carName, type, carImg, oil, cap, price }) {
  const router = useRouter();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isFavorite = isInWishlist(carID);

  function toggleFavorite(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(carID);
  }

  const handleRentNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/payment/${carID}`);
  };


  return (
    <div className='bg-white shadow-lg rounded-lg p-4 md:p-6 lg:p-8 flex flex-col w-full h-full max-w-[400px] min-w-[300px] md:max-w-none md:min-w-0 cursor-pointer hover:shadow-xl transition-shadow duration-300 ease-in-out'>
      <div className='flex justify-between items-center mb-2'>
        <h2 className='font-bold text-lg md:text-xl lg:text-2xl truncate pr-2'>{carName}</h2>
        {isFavorite ? (
          <FaHeart
            className='text-red-500 cursor-pointer flex-shrink-0'
            size={22}
            onClick={toggleFavorite}
          />
        ) : (
          <FaRegHeart
            className='text-gray-400 cursor-pointer flex-shrink-0'
            size={22}
            onClick={toggleFavorite}
          />
        )}
      </div>
      <h2 className='text-sm lg:text-lg font-bold text-slate-gray mb-6 md:mb-8 lg:mb-20'>{type}</h2>
      <div className='w-full flex justify-center mb-4 md:mb-6 lg:mb-8 flex-grow'>
        <div className='relative w-full h-[120px] md:h-[140px] lg:h-[160px] flex items-center justify-center'>
          <Image 
            src={carImg} 
            alt={carName} 
            className="w-full h-full object-contain"
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </div>
      <div className='flex justify-between items-center mb-4 md:grid md:grid-cols-3 md:gap-2'>
        <div className='flex items-center gap-1 md:gap-2 text-xs md:text-sm text-slate-gray font-medium md:justify-center'>
          <FaGasPump size={14} />
          <p>{oil}</p>
        </div>
        <div className='flex items-center gap-1 md:gap-2 text-xs md:text-sm text-slate-gray font-medium md:justify-center'>
          <PiSteeringWheelFill size={16} />
          <p>Manual</p>
        </div>
        <div className='flex items-center gap-1 md:gap-2 text-xs md:text-sm text-slate-gray font-medium md:justify-center'>
          <MdPeopleAlt size={16} />
          <p>{cap}</p>
        </div>
      </div>
      <div className='flex justify-between items-center mt-auto'>
        <p className='font-bold text-lg md:text-xl'>${price.toFixed(2)}/ <span className='text-slate-gray text-xs md:text-sm'>day</span></p>
        <Button label={"Rent Now"} buttonColor="#3563E9" onClick={handleRentNow} />
      </div>
    </div>
  )
}
