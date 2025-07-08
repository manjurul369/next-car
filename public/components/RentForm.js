"use client"
import React from 'react'
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image';
import { bitcoin, visa, paypal, safety } from '../assets/images';
import Button from './Button';

const locations = [
    // Barishal Division (6)
    "Barguna",
    "Barishal",
    "Bhola",
    "Jhalokati",
    "Patuakhali",
    "Pirojpur",

    // Chattogram Division (11)
    "Bandarban",
    "Brahmanbaria",
    "Chandpur",
    "Chattogram",
    "Cumilla",
    "Cox's Bazar",
    "Feni",
    "Khagrachari",
    "Lakshmipur",
    "Noakhali",
    "Rangamati",

    // Dhaka Division (13)
    "Dhaka",
    "Faridpur",
    "Gazipur",
    "Gopalganj",
    "Kishoreganj",
    "Madaripur",
    "Manikganj",
    "Munshiganj",
    "Narayanganj",
    "Narsingdi",
    "Rajbari",
    "Shariatpur",
    "Tangail",

    // Khulna Division (10)
    "Bagerhat",
    "Chuadanga",
    "Jashore",
    "Jhenaidah",
    "Khulna",
    "Kushtia",
    "Magura",
    "Meherpur",
    "Narail",
    "Satkhira",

    // Mymensingh Division (4)
    "Jamalpur",
    "Mymensingh",
    "Netrokona",
    "Sherpur",

    // Rajshahi Division (8)
    "Bogra",
    "Jaipurhat",
    "Naogaon",
    "Natore",
    "Nawabganj",
    "Pabna",
    "Rajshahi",
    "Sirajganj",

    // Rangpur Division (8)
    "Dinajpur",
    "Gaibandha",
    "Kurigram",
    "Lalmonirhat",
    "Nilphamari",
    "Panchagarh",
    "Rangpur",
    "Thakurgaon",

    // Sylhet Division (4)
    "Habiganj",
    "Moulvibazar",
    "Sunamganj",
    "Sylhet"
];

const timeList = [
    "12:00 AM", "12:15 AM", "12:30 AM", "12:45 AM",
    "1:00 AM", "1:15 AM", "1:30 AM", "1:45 AM",
    "2:00 AM", "2:15 AM", "2:30 AM", "2:45 AM",
    "3:00 AM", "3:15 AM", "3:30 AM", "3:45 AM",
    "4:00 AM", "4:15 AM", "4:30 AM", "4:45 AM",
    "5:00 AM", "5:15 AM", "5:30 AM", "5:45 AM",
    "6:00 AM", "6:15 AM", "6:30 AM", "6:45 AM",
    "7:00 AM", "7:15 AM", "7:30 AM", "7:45 AM",
    "8:00 AM", "8:15 AM", "8:30 AM", "8:45 AM",
    "9:00 AM", "9:15 AM", "9:30 AM", "9:45 AM",
    "10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM",
    "11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM",
    "12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM",
    "1:00 PM", "1:15 PM", "1:30 PM", "1:45 PM",
    "2:00 PM", "2:15 PM", "2:30 PM", "2:45 PM",
    "3:00 PM", "3:15 PM", "3:30 PM", "3:45 PM",
    "4:00 PM", "4:15 PM", "4:30 PM", "4:45 PM",
    "5:00 PM", "5:15 PM", "5:30 PM", "5:45 PM",
    "6:00 PM", "6:15 PM", "6:30 PM", "6:45 PM",
    "7:00 PM", "7:15 PM", "7:30 PM", "7:45 PM",
    "8:00 PM", "8:15 PM", "8:30 PM", "8:45 PM",
    "9:00 PM", "9:15 PM", "9:30 PM", "9:45 PM",
    "10:00 PM", "10:15 PM", "10:30 PM", "10:45 PM",
    "11:00 PM", "11:15 PM", "11:30 PM", "11:45 PM"
];

export default function RentForm() {
    const { register, handleSubmit, formState: { errors }, watch, control } = useForm();
    return (
        <div>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <div className='flex flex-col gap-5 p-6 bg-white rounded-lg mt-10 md:mt-0'>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-xl font-bold'>Billing Info</h2>
                            <p className='text-slate-gray text-sm'>Step 1 of 4</p>
                        </div>
                        <p className='text-slate-gray text-sm mt-1'>Please enter your billing info</p>
                    </div>
                    <div className='flex flex-col xl:flex-row gap-6'>
                        <div className='flex gap-1 flex-col w-full'>
                            <label className='text-lg font-semibold' htmlFor="name">Name</label>
                            <input className='w-full input-field' type="text" id="name" placeholder="Your name" required {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
                        </div>
                        <div className='flex gap-1 flex-col w-full'>
                            <label className='text-lg font-semibold' htmlFor="address">Address</label>
                            <input className='w-full input-field' type="text" id="address" placeholder="Address" required {...register("address", { required: true })} />
                            {errors.address && <span className="text-red-500 text-xs">Address is required</span>}
                        </div>
                    </div>
                    <div className='flex flex-col xl:flex-row gap-6'>
                        <div className='flex gap-1 flex-col w-full'>
                            <label className='text-lg font-semibold' htmlFor="phone">Phone Number</label>
                            <input className='w-full input-field' type="text" id="phone" placeholder="Phone number" required {...register("phone", { required: true })} />
                            {errors.phone && <span className="text-red-500 text-xs">Phone number is required</span>}
                        </div>
                        <div className='flex gap-1 flex-col w-full'>
                            <label className='text-lg font-semibold' htmlFor="city">Town / City</label>
                            <input className='w-full input-field' type="text" id="city" placeholder="Town or city" required {...register("city", { required: true })} />
                            {errors.city && <span className="text-red-500 text-xs">City is required</span>}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 p-6 bg-white rounded-lg mt-10'>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-xl font-bold'>Rental Info</h2>
                            <p className='text-slate-gray text-sm'>Step 2 of 4</p>
                        </div>
                        <p className='text-slate-gray text-sm mt-1'>Please select your rental date</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='h-[20px] w-[20px] rounded-full bg-blue-100 flex items-center justify-center'>
                            <div className='h-[10px] w-[10px] rounded-full bg-primary'></div>
                        </div>
                        <h1 className='text-xl font-bold'>Pick - Up</h1>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-1 flex-col w-full'>
                            <label className='text-lg font-semibold' htmlFor="pickupLocation">Locations</label>
                            <select
                                className={`w-full input-field custom-select ${!watch('pickupLocation') ? 'text-slate-gray' : ''}`}
                                id="pickupLocation"
                                required
                                {...register("pickupLocation", { required: true })}
                            >
                                <option value="">Select your city</option>
                                {locations.map((loc) => (
                                    <option key={loc} value={loc}>{loc}</option>
                                ))}
                            </select>
                            {errors.pickupLocation && <span className="text-red-500 text-xs">Pick-Up location is required</span>}
                        </div>
                        <div className='flex gap-1 flex-col w-full'>
                            <label className='text-lg font-semibold' htmlFor="time">Time</label>
                            <select
                                className={`w-full input-field custom-select ${!watch('pickuptime') ? 'text-slate-gray' : ''}`}
                                id="pickuptime"
                                required
                                {...register("pickuptime", { required: true })}
                            >
                                <option value="">Select a time</option>
                                {timeList.map((loc) => (
                                    <option key={loc} value={loc}>{loc}</option>
                                ))}
                            </select>
                            {errors.pickuptime && <span className="text-red-500 text-xs">Pick-Up time is required</span>}
                        </div>
                        <div className='flex gap-1 flex-col w-full'>
                            <label className='text-lg font-semibold' htmlFor="address">Date</label>
                            <Controller
                                control={control}
                                name="pickupDate"
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <DatePicker
                                        {...field}
                                        selected={field.value}
                                        onChange={field.onChange}
                                        placeholderText="Select your date"
                                        className="w-full input-field"
                                        id="pickupDate"
                                        dateFormat="yyyy-MM-dd"
                                    />
                                )}
                            />
                            {errors.pickupDate && <span className="text-red-500 text-xs">Pick-Up date is required</span>}
                        </div>
                    </div>
                    <div className='flex gap-2 items-center mt-10'>
                        <div className='h-[20px] w-[20px] rounded-full bg-blue-100 flex items-center justify-center'>
                            <div className='h-[10px] w-[10px] rounded-full bg-secondary'></div>
                        </div>
                        <h1 className='text-xl font-bold'>Drop - Off</h1>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-1 flex-col w-full'>
                            <label className='text-lg font-semibold' htmlFor="dropoffLocation">Locations</label>
                            <select
                                className={`w-full input-field custom-select ${!watch('dropoffLocation') ? 'text-slate-gray' : ''}`}
                                id="dropoffLocation"
                                required
                                {...register("dropoffLocation", { required: true })}
                            >
                                <option value="">Select your city</option>
                                {locations.map((loc) => (
                                    <option key={loc} value={loc}>{loc}</option>
                                ))}
                            </select>
                            {errors.dropoffLocation && <span className="text-red-500 text-xs">Drop-Off location is required</span>}
                        </div>
                        <div className='flex gap-1 flex-col w-full'>
                            <label className='text-lg font-semibold' htmlFor="time">Time</label>
                            <select
                                className={`w-full input-field custom-select ${!watch('dropofftime') ? 'text-slate-gray' : ''}`}
                                id="dropofftime"
                                required
                                {...register("dropofftime", { required: true })}
                            >
                                <option value="">Select a time</option>
                                {timeList.map((loc) => (
                                    <option key={loc} value={loc}>{loc}</option>
                                ))}
                            </select>
                            {errors.dropofftime && <span className="text-red-500 text-xs">Drop-Off time is required</span>}
                        </div>
                        <div className='flex gap-1 flex-col w-full'>
                            <label className='text-lg font-semibold' htmlFor="city">Date</label>
                            <Controller
                                control={control}
                                name="dropoffDate"
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <DatePicker
                                        {...field}
                                        selected={field.value}
                                        onChange={field.onChange}
                                        placeholderText="Select your date"
                                        className="w-full input-field"
                                        id="dropoffDate"
                                        dateFormat="yyyy-MM-dd"
                                    />
                                )}
                            />
                            {errors.dropoffDate && <span className="text-red-500 text-xs">Drop-Off date is required</span>}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 p-6 bg-white rounded-lg mt-10'>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-xl font-bold'>Payment Method</h2>
                            <p className='text-slate-gray text-sm'>Step 3 of 4</p>
                        </div>
                        <p className='text-slate-gray text-sm mt-1'>Please enter your payment method</p>
                    </div>
                    <div className='bg-body flex flex-col gap-5 p-5 rounded-lg'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-1 items-center'>
                                <div className='h-[18px] w-[18px] rounded-full bg-blue-100 flex items-center justify-center'>
                                    <div className='h-[8px] w-[8px] rounded-full bg-primary'></div>
                                </div>
                                <h1 className='text-lg font-bold'>Credit Card</h1>
                            </div>
                            <Image src={visa} alt="Visa Card" className='w-20' />
                        </div>
                        <div className='flex gap-1 flex-col w-full'>
                            <label className='text-lg font-semibold' htmlFor="cardNumber">Card Number</label>
                            <input className='w-full input-field-white' type="text" id="cardNumber" placeholder="Card number" required {...register("cardNumber", { required: true })} />
                            {errors.cardNumber && <span className="text-red-500 text-xs">Card number is required</span>}
                        </div>
                        <div className='flex gap-1 flex-col w-full'>
                            <label className='text-lg font-semibold' htmlFor="cardHolder">Card Holder</label>
                            <input className='w-full input-field-white' type="text" id="cardHolder" placeholder="Card holder name" required {...register("cardHolder", { required: true })} />
                            {errors.cardHolder && <span className="text-red-500 text-xs">Card holder name is required</span>}
                        </div>
                        <div className='flex gap-1 flex-col w-full'>
                            <label className='text-lg font-semibold' htmlFor="expiryDate">Expiry Date</label>
                            <Controller
                                control={control}
                                name="expiryDate"
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <DatePicker
                                        {...field}
                                        selected={field.value}
                                        onChange={field.onChange}
                                        placeholderText="DD / MM / YYYY"
                                        className="w-full input-field-white"
                                        id="expiryDate"
                                        dateFormat="dd/MM/yyyy"
                                    />
                                )}
                            />
                            {errors.expiryDate && <span className="text-red-500 text-xs">Expiry date is required</span>}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {/* PayPal Option */}
                        <label
                            className={`flex items-center justify-between p-4 rounded-lg cursor-pointer border transition
                            ${watch('paymentMethod') === 'paypal' ? 'border-primary bg-blue-50' : 'border-transparent bg-body'}`}
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    value="paypal"
                                    {...register("paymentMethod", { required: true })}
                                    className="accent-primary"
                                    checked={watch('paymentMethod') === 'paypal'}
                                    readOnly
                                />
                                <span className="font-medium">PayPal</span>
                            </div>
                            <Image src={paypal} alt="PayPal" className="w-20" />
                        </label>

                        {/* Bitcoin Option */}
                        <label
                            className={`flex items-center justify-between p-4 rounded-lg cursor-pointer border transition
                            ${watch('paymentMethod') === 'bitcoin' ? 'border-primary bg-blue-50' : 'border-transparent bg-body'}`}
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    value="bitcoin"
                                    {...register("paymentMethod", { required: true })}
                                    className="accent-primary"
                                    checked={watch('paymentMethod') === 'bitcoin'}
                                    readOnly
                                />
                                <span className="font-medium">Bitcoin</span>
                            </div>
                            <Image src={bitcoin} alt="Bitcoin" className="w-20" />
                        </label>
                        {errors.paymentMethod && <span className="text-red-500 text-xs">Please select a payment method</span>}
                    </div>
                </div>
                <div className='flex flex-col gap-5 p-6 bg-white rounded-lg mt-10'>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-xl font-bold'>Confirmation</h2>
                            <p className='text-slate-gray text-sm'>Step 3 of 4</p>
                        </div>
                        <p className='text-slate-gray text-sm mt-1'>We are getting to the end. Just few clicks and your rental is ready!</p>
                    </div>
                    <div className="flex flex-col gap-4 mt-6">
                        <label className="flex items-start gap-3 p-4 rounded-lg cursor-pointer bg-body">
                            <input
                                type="checkbox"
                                {...register("marketingConsent")}
                                className="accent-primary mt-1"
                            />
                            <span className="text-sm font-medium text-[#596780]">
                                I agree with sending an Marketing and newsletter emails. No spam, promissed!
                            </span>
                        </label>
                        {/* Terms/Privacy Checkbox */}
                        <label className="flex items-start gap-3 p-4 rounded-lg cursor-pointer bg-body">
                            <input
                                type="checkbox"
                                {...register("termsConsent", { required: true })}
                                className="accent-primary mt-1"
                            />
                            <span className="text-sm font-medium text-[#596780]">
                                I agree with our <a href="#" className="underline">terms and conditions</a> and <a href="#" className="underline">privacy policy</a>!
                            </span>
                        </label>
                        {(errors.marketingConsent || errors.termsConsent) && (
                            <span className="text-red-500 text-xs">You must agree to both options to continue</span>
                        )}
                    </div>
                    <div>
                        <Button label={"Rental Now"} buttonColor="#3563E9" size='md' type="submit" className="mt-6" />
                    </div>
                    <div className='flex flex-col mt-4 gap-2'>
                        <Image src={safety} alt="Safety" className="w-10 mt-4" />
                        <h1 className='font-bold text-lg'>All your data are safe</h1>
                        <p className='font-medium text-slate-gray text-sm'>We are using the most advanced security to provide you the best experience ever.</p>
                    </div>
                </div>
            </form>
        </div>
    )
}
