import React from 'react'
import { IoSearch } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import Image from 'next/image';
import { profile } from '../assets/images';
import Link from 'next/link';

export default function Nav() {
  return (
    <div>
        <div className='w-screen hidden py-4 px-10 lg:px-20 lg:flex justify-between items-center bg-white fixed top-0 left-0 z-100'>
            <div className='flex gap-10 items-center'>
                <h2 className='font-bold text-primary text-4xl'>
                    <Link href={"/"}>MORENT</Link>
                </h2>
                <div className='w-md px-4 py-3 rounded-full border border-border flex relative'>
                    <input type="text" placeholder='Serach something here' className='px-10 w-full border-none text-sm active:outline-none focus:outline-none'/>
                    <IoSearch className='absolute left-4 text-text' size={20} />
                    <LuSettings2 className='absolute right-4 text-text cursor-pointer' size={20} />
                </div>
            </div>
            <div className='flex gap-4'>
                <div className='circle text-text'>
                    <FaHeart size={15}/>
                </div>
                <div className='circle relative text-text'>
                    <IoIosNotifications size={20} />
                    <div className='w-2 h-2 bg-[#FF4423] absolute top-0 right-0 rounded-full'></div>
                </div>
                <div className='circle text-text'>
                    <IoMdSettings size={15} />
                </div>
                <div className='circle'>
                    <Image src={profile} alt='profile-pic' className='w-full h-full rounded-full' />
                </div>
            </div>
        </div>

        <div className='w-screen lg:hidden py-4 px-6 lg:px-20 flex flex-col gap-3 bg-white fixed z-100 top-0 left-0'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-primary text-xl sm:text-2xl md:text-3xl'>
                    <Link href={"/"}>MORENT</Link>
                </h2>
                <div className='circle'>
                    <Image src={profile} alt='profile-pic' className='w-full h-full rounded-full' />
                </div>
            </div>
            <div className='w-full px-4 py-3 rounded-xl border border-border flex relative'>
                    <input type="text" placeholder='Serach something here' className='px-10 w-full border-none text-sm active:outline-none focus:outline-none'/>
                    <IoSearch className='absolute left-4 text-slate-gray' size={20} />
                    <LuSettings2 className='absolute right-4 text-slate-gray cursor-pointer' size={20} />
            </div>
        </div>
    </div>
  )
}
