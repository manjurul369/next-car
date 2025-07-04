import React from 'react';
import { FaHeart, FaGasPump } from "react-icons/fa";
import { PiSteeringWheelFill } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";
import Button from './Button';
import Image from 'next/image';

export default function CarCard({ carName, type, carImg, oil, cap, price }) {
  return (
    <div className='bg-white shadow-lg rounded-lg p-5 lg:p-8 flex flex-col w-full sm:max-w-[400px] min-w-[300px] cursor-pointer hover:shadow-xl transition-shadow duration-300 ease-in-out'>
        <div className='flex justify-between items-center mb-2'>
          <h2 className='font-bold text-xl lg:text-2xl'>{carName}</h2>
          <FaHeart className='text-red-500' />
        </div>
        <h2 className='text-sm lg:text-lg font-bold text-slate-gray mb-20'>{type}</h2>
        <div className='flex flex-row sm:flex-col'>
            <div className='w-full flex justify-center mb-4 lg:mb-8'>
                <Image src={carImg} alt={carName} className="w-full h-auto" />
            </div>
            <div className='flex flex-col sm:flex-row justify-start sm:justify-between items-start mb-4 gap-2 sm:gap-0 w-[120px] sm:w-auto'>
                <div className='flex items-center gap-2 text-slate-gray font-medium'>
                    <FaGasPump />
                    <p>{oil}</p>
                </div>
                <div className='flex items-center gap-2 text-slate-gray font-medium'>
                    <PiSteeringWheelFill />
                    <p>Manual</p>
                </div>
                <div className='flex items-center gap-2 text-slate-gray font-medium'>
                    <MdPeopleAlt />
                    <p>{cap}</p>
                </div>
            </div>
        </div>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-xl'>${price.toFixed(2)}/ <span className='text-slate-gray text-sm'>day</span></p>
          <Button label={"Rent Now"} buttonColor="#3563E9" />
        </div>
    </div>
  )
}
