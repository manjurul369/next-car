import { recommendedCar, popularCar } from "@/public/constants";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaStar, FaRegStar } from "react-icons/fa";
import pattern from "@/public/assets/images/pattern.png";
import RentForm from "@/public/components/RentForm";


export default async function Page({ params }) {
    const { slug } = await params;
    const carId = Number(slug);

    const allCars = [...recommendedCar, ...popularCar];
    const car = allCars.find((c) => c.id === carId);

    if (!car) {
        notFound();
    }

    const filledStars = [];
    const emptyStars = [];
    for (let i = 0; i < car.star; i++) {
        filledStars.push(<FaStar key={`filled-${i}`} />);
    }
    for (let i = 0; i < 5 - car.star; i++) {
        emptyStars.push(<FaRegStar key={`empty-${i}`} />);
    }

    return (
        <div className="mt-20 px-5 pt-20 md:py-20 lg:px-20 lg:py-15">
            <div className="flex flex-col md:flex-row-reverse gap-0 md:gap-5 lg:gap-10">
                <div className="w-full xl:w-4/10 bg-white p-6 flex flex-col rounded-lg self-start">
                    <h1 className="text-xl font-bold">Rental Summary</h1>
                    <p className="text-md mt-2 text-slate-gray">Prices may change depending on the length of the rental and the price of your rental car.</p>
                    <div className="flex mt-5 items-center">
                        <div className="relative min-h-[100px] md:min-h-[130px] 2xl:min-h-[160px] 3xl:min-h-[180px] rounded-xl bg-primary w-4/10 mr-5 flex justify-center items-center">
                            <Image
                                src={pattern}
                                alt="Pattern"
                                fill
                                style={{ objectFit: 'cover', zIndex: 0 }}
                                className="pointer-events-none select-none"
                            />
                            <Image
                                src={car.carImg}
                                alt="Car Image"
                                className="select-none w-8/10 hover:scale-105 transition-transform duration-300 cursor-pointer z-1"
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-2">{car.carName}</h2>
                            <div className="flex flex-col xl:flex-row gap-2 xl:items-center items-start">
                                <span className='text-yellow-500 2xl:text-xl flex gap-1'>
                                    {filledStars}
                                    {emptyStars}
                                </span>
                                <span className='text-slate-gray text-sm 2xl:text-lg'>{car.rattingCount}+ Reviewer</span>
                            </div>
                        </div>
                    </div>
                    <span className="mt-10 mb-5 w-full h-0.5 bg-gray-200"></span>
                    <div>
                        <div className="flex justify-between mb-2">
                            <h2 className="text-slate-gray text-md">Subtotal</h2>
                            <h2 className="font-bold text-xl">${car.price.toFixed(2)}</h2>
                        </div>
                        <div className="flex justify-between mb-2">
                            <h2 className="text-slate-gray text-md">Tax</h2>
                            <h2 className="font-bold text-xl">${car.tax.toFixed(2)}</h2>
                        </div>
                    </div>
                    <div className="mt-5 mb-10 flex justify-between items-center relative">
                        <input
                            type="text"
                            placeholder="Apply Promo Code"
                            className="bg-[#F6F7F9] pl-6 pr-30 py-4 rounded-md p-2 w-full focus:outline-none focus:ring-0 focus:border-transparent"
                        />
                        <button className="absolute right-0 px-4 py-2 cursor-pointer font-semibold">Apply now</button>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-bold">Total Rental Price</h2>
                            <h2 className="text-md text-slate-gray">Overall Rental Price</h2>
                        </div>
                        <h2 className="text-2xl font-bold">${(car.price + car.tax).toFixed(2)}</h2>
                    </div>
                </div>
                <div className="w-full xl:w-6/10">
                    <RentForm />
                </div>
            </div>
        </div>

    )
}
