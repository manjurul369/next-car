"use client";
import { BsTelephone } from "react-icons/bs";
import { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { useForm } from "react-hook-form"
import { FaFacebookSquare, FaRegUserCircle } from "react-icons/fa";
import { PiPasswordBold } from "react-icons/pi";
import Image from 'next/image';
import { google } from '@/public/assets/images';
import { useAdminLogin } from '@/public/contexts/AdminLoginContext';
import { useRouter } from "next/navigation";


export default function signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { handleclick } = useAdminLogin();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);


    const onSubmit = async (data) => {
        setIsSubmitting(true);
        console.log(data);
        // Simulate an API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        
        // Redirect or perform further actions after successful submission
        router.push('/admin/dashboard');
    }
    

    const termsAccepted = watch("terms");

    const validatePassword = (password) => {
        const minLength = /.{8,}/;
        const hasUpperCase = /[A-Z]/;
        const hasLowerCase = /[a-z]/;
        const hasNumber = /\d/;
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

        if (!minLength.test(password)) {
            return "Password must be at least 8 characters long";
        }
        if (!hasUpperCase.test(password)) {
            return "Password must contain at least 1 uppercase letter";
        }
        if (!hasLowerCase.test(password)) {
            return "Password must contain at least 1 lowercase letter";
        }
        if (!hasNumber.test(password)) {
            return "Password must contain at least 1 number";
        }
        if (!hasSpecialChar.test(password)) {
            return "Password must contain at least 1 special character (!@#$%^&*()_+-=[]{}|;':\"\\,./<>?)";
        }
        return true;
    }
    
    return (
        <div className='bg-white p-5 lg:p-15 lg:px-20 rounded-xl w-[90vw] lg:w-auto'>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-center'>
                    <h2 className='font-bold text-3xl'>SIGN UP</h2>
                </div>
                <div className='relative w-full flex flex-col mt-8'>
                    <input type="name" placeholder='Full name' id='name' className='px-5 py-3 pl-12 bg-body rounded-md mb-2 outline-none' required {...register("name", { required: true })} />
                    {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
                    <FaRegUserCircle className='absolute text-gray-300 top-3 left-3' size={25} />
                </div>
                <div className='relative w-full flex flex-col mt-2'>
                    <input type="phone" placeholder='Enter phone number' id='phone' className='px-5 py-3 pl-12 bg-body rounded-md mb-2 outline-none' required {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^[+]?[\d\s\-()]+$/,
                            message: "Please enter a valid phone number"
                        }
                    })} />
                    {errors.phone && <span className="text-red-500 text-xs">Phone is required</span>}
                    <BsTelephone className='absolute text-gray-300 top-3 left-3' size={25} />
                </div>
                <div className='relative w-full flex flex-col mt-2'>
                    <input type="email" placeholder='Enter email address' id='email' className='px-5 py-3 pl-12 bg-body rounded-md mb-2 outline-none' required {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
                    <MdOutlineEmail className='absolute text-gray-300 top-3 left-3' size={25} />
                </div>
                <div className='relative w-full flex flex-col mt-2'>
                    <input type="password" placeholder='Create a password' id='password' className='px-5 py-3 pl-12 bg-body rounded-md mb-2 outline-none' required {...register("password", {
                        required: "Password is required",
                        validate: validatePassword
                    })} />
                    {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                    <PiPasswordBold className='absolute text-gray-300 top-3 left-3' size={25} />

                </div>
                <div className='flex items-center mt-3'>
                    <input type="checkbox" name="terms" id="terms" {...register("terms", { required: "You must accept the terms & conditions" })}/>
                    <label htmlFor="terms" className='ml-2 text-slate-gray text-xs'>I accept all the <span className="text-primary">terms & conditions</span></label>
                </div>
                {errors.terms && <span className="text-red-500 text-xs">{errors.terms.message}</span>}
                <button 
                    type='submit'
                    disabled={!termsAccepted || isSubmitting}
                    className={`cursor-pointer mt-5 w-full p-3 text-white font-semibold text-sm rounded-md transition-colors ${
                        (!termsAccepted || isSubmitting)
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-primary hover:bg-primary-dark'
                    }`}
                >
                    SIGN UP
                </button>
                <div className='flex flex-col items-center mt-5'>
                    <h2 className='text-slate-gray text-sm text-center'>Already have an account?<br></br> please <span className='text-primary cursor-pointer' onClick={handleclick} >login</span></h2>
                    <h2 className='text-slate-gray mt-5'>or sign up with</h2>
                </div>
                <div className='flex flex-2 gap-3 mt-3 mb-5'>
                    <button className='cursor-pointer flex items-center justify-center gap-2 text-[#1877F2] border p-3 rounded-md w-full mt-3'>
                        <FaFacebookSquare size={20} />
                        <span>Facebook</span>
                    </button>
                    <button className='cursor-pointer flex items-center justify-center gap-2 text-[#0F9D58] border p-3 rounded-md w-full mt-3'>
                        <Image src={google} alt="Google" width={20} height={20} />
                        <span>Google</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
