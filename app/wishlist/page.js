"use client";
import Link from 'next/link';
import CarCard from '@/public/components/CarCard';
import RecommendCar from '@/public/components/RecommendCar';
import React from 'react';
import { popularCar, recommendedCar } from "@/public/constants";
import { useWishlist } from '@/public/contexts/WishlistContext';

export default function Wishlist() {
    const { wishlist} = useWishlist();
    const allcars = [...popularCar, ...recommendedCar];

    // Filter cars that are loved (isLoved is true)
    const lovedCars = allcars.filter(car => wishlist.includes(car.id));
    // console.log("Loved Cars:", allcars);
    

    return (
        <div>
            <div className="mt-20 px-5 pt-20 md:py-20 lg:px-20 lg:py-15">
                <h2 className="title">Wishlist</h2>
                { lovedCars.length === 0 && (
                    <div className="text-center mt-10 lg:mt-20">
                        <p className="text-gray-500">Your wishlist is empty.</p>
                        <p className="text-gray-500">Start adding cars to your wishlist!</p>
                    </div>)}
                <div className="relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8 mt-5 lg:mt-10">
                        {lovedCars.map((car) => (
                            <Link href={`/carpage/${car.id}`} key={car.id}><RecommendCar
                                key={car.id}
                                carID={car.id}
                                carName={car.carName}
                                type={car.type}
                                carImg={car.carImg}
                                oil={car.oil}
                                cap={car.cap}
                                price={car.price}
                            />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
