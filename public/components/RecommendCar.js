"use client";
import {React, useState} from 'react';
import { FaHeart, FaGasPump, FaRegHeart } from "react-icons/fa";
import { PiSteeringWheelFill } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";
import { useWishlist } from '@/public/contexts/WishlistContext';
import Button from './Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CarCard({ carID, carName, type, carImg, oil, cap, price }) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const router = useRouter();

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
    <div className='bg-white shadow-lg rounded-lg p-4 lg:p-6 flex flex-col w-full h-full min-h-[400px] cursor-pointer hover:shadow-xl transition-shadow duration-300 ease-in-out'>
      <div className='flex justify-between items-center mb-2'>
        <h2 className='font-bold text-lg lg:text-xl truncate pr-2'>{carName}</h2>
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
      <h2 className='text-sm lg:text-base font-bold text-slate-gray mb-4 lg:mb-6'>{type}</h2>
      <div className='flex flex-col flex-grow'>
        <div className='flex-grow mb-4 lg:mb-6 flex items-center justify-center'>
          <div className='relative w-full h-[120px] lg:h-[140px]'>
            <Image 
              src={carImg} 
              alt={carName} 
              className="w-full h-full object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority={false}
            />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-2 mb-4 lg:mb-6'>
          <div className='flex items-center justify-center gap-1 text-xs lg:text-sm text-slate-gray font-medium'>
            <FaGasPump size={14} />
            <p>{oil}</p>
          </div>
          <div className='flex items-center justify-center gap-1 text-xs lg:text-sm text-slate-gray font-medium'>
            <PiSteeringWheelFill size={16} />
            <p>Manual</p>
          </div>
          <div className='flex items-center justify-center gap-1 text-xs lg:text-sm text-slate-gray font-medium'>
            <MdPeopleAlt size={16} />
            <p>{cap}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center mt-auto pt-2'>
        <p className='font-bold text-lg lg:text-xl'>${price.toFixed(2)}/ <span className='text-slate-gray text-xs lg:text-sm'>day</span></p>
        <Button label={"Rent Now"} buttonColor="#3563E9" onClick={handleRentNow} />
      </div>
    </div>
  )
}
