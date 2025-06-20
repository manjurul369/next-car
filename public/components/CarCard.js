import React from 'react';
import { FaHeart, FaGasPump } from "react-icons/fa";
import { PiSteeringWheelFill } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";
import Button from './Button';
import Image from 'next/image';

export default function CarCard({ carName, type, carImg, oil, cap, price }) {
  return (
    <div className='bg-white shadow-lg rounded-lg p-5 flex flex-col max-w-[320px]'>
        <div className='flex justify-between items-center mb-2'>
          <h2 className='font-bold text-xl'>{carName}</h2>
          <FaHeart className='text-red-500' />
        </div>
        <h2 className='text-sm font-bold text-slate-gray mb-20'>{type}</h2>
        <div className='w-full flex justify-center mb-4'>
          <Image src={carImg} alt={carName} className="w-8/10 h-auto" />
        </div>
        <div className='flex justify-between items-center mb-4'>
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
        <div className='flex justify-between items-center'>
          <p className='font-bold text-xl'>${price.toFixed(2)}/ <span className='text-slate-gray text-sm'>day</span></p>
          <Button label={"Rent Now"} buttonColor="#3563E9" />
        </div>
    </div>
  )
}
