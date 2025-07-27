"use client";
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { FaHeart, FaUser } from "react-icons/fa";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import Link from 'next/link';
import { useWishlist } from '@/public/contexts/WishlistContext';
import { useRouter } from 'next/navigation';

export default function Nav() {
    const router = useRouter();
    const { getWishlistCount } = useWishlist();
    const wishlistCount = getWishlistCount();
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    const toggleMobileDropdown = () => {
        setIsMobileDropdownOpen(!isMobileDropdownOpen);
    };

    const closeMobileDropdown = () => {
        router.push('/wishlist');
        setIsMobileDropdownOpen(false);
    };


    return (
        <div>
            {/* Desktop Navigation */}
            <div className='w-screen hidden py-4 px-10 lg:px-20 lg:flex justify-between items-center bg-white fixed top-0 left-0 z-100'>
                <div className='flex gap-10 items-center'>
                    <h2 className='font-bold text-primary text-4xl'>
                        <Link href={"/"}>MORENT</Link>
                    </h2>
                    <div className='w-md px-4 py-3 rounded-full border border-border flex relative'>
                        <input type="text" placeholder='Serach something here' className='px-10 w-full border-none text-sm active:outline-none focus:outline-none' />
                        <IoSearch className='absolute left-4 text-text' size={20} />
                        <LuSettings2 className='absolute right-4 text-text cursor-pointer' size={20} />
                    </div>
                </div>
                <div className='flex gap-4'>
                    <Link href={"/wishlist"}>
                        <div className='circle text-text relative'>
                            <FaHeart size={15} />
                            {wishlistCount > 0 && (
                                <div className='w-4 h-4 bg-red-500 absolute -top-1 -right-1 rounded-full flex items-center justify-center text-white text-xs'>
                                    {wishlistCount}
                                </div>
                            )}
                        </div>
                    </Link>
                    <div className='circle relative text-text'>
                        <IoIosNotifications size={20} />
                        <div className='w-2 h-2 bg-red-500 absolute top-0 right-0 rounded-full'></div>
                    </div>
                    <div className='circle text-text'>
                        <IoMdSettings size={15} />
                    </div>
                    <div className='circle'>
                        <FaUser />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className='w-screen lg:hidden py-4 px-6 lg:px-20 flex flex-col gap-3 bg-white fixed z-100 top-0 left-0'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold text-primary text-xl sm:text-2xl md:text-3xl'>
                        <Link href={"/"}>MORENT</Link>
                    </h2>
                    <div className='relative'>
                        <div className='circle cursor-pointer' onClick={toggleMobileDropdown}>
                            <FaUser size={15} />
                        </div>

                        {/* Mobile Dropdown Menu */}
                        {isMobileDropdownOpen && (
                            <>
                                {/* Backdrop to close dropdown when clicking outside */}
                                <div
                                    className='fixed inset-0 z-10'
                                    onClick={closeMobileDropdown}
                                ></div>

                                {/* Dropdown Content */}
                                <div className='absolute right-0 top-11 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-200'>
                                    <div className='py-2'>
                                        <button
                                            className='w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 border-b border-gray-100'
                                            onClick={closeMobileDropdown}
                                        >
                                            <FaHeart className='text-red-500' size={16} />
                                            <span className='text-gray-700'>
                                                Wishlist
                                                {wishlistCount > 0 && (
                                                    <span className='ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full'>
                                                        {wishlistCount}
                                                    </span>
                                                )}
                                            </span>
                                        </button>

                                        <button
                                            className='w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 border-b border-gray-100'
                                            onClick={closeMobileDropdown}
                                        >
                                            <IoIosNotifications className='text-blue-500' size={18} />
                                            <span className='text-gray-700'>
                                                Notifications
                                                <span className='ml-2 w-2 h-2 bg-red-500 rounded-full inline-block'></span>
                                            </span>
                                        </button>

                                        <button
                                            className='w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3'
                                            onClick={closeMobileDropdown}
                                        >
                                            <IoMdSettings className='text-gray-600' size={18} />
                                            <span className='text-gray-700'>Settings</span>
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className='w-full px-4 py-3 rounded-xl border border-border flex relative'>
                    <input type="text" placeholder='Serach something here' className='px-10 w-full border-none text-sm active:outline-none focus:outline-none' />
                    <IoSearch className='absolute left-4 text-slate-gray' size={20} />
                    <LuSettings2 className='absolute right-4 text-slate-gray cursor-pointer' size={20} />
                </div>
            </div>
        </div>
    )
}