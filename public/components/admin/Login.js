"use client";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form"
import { FaFacebookSquare } from "react-icons/fa";
import Image from 'next/image';
import { google } from '@/public/assets/images';
import { useAdminLogin } from '@/public/contexts/AdminLoginContext';


export default function login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { handleclick } = useAdminLogin();
    
    return (
        <div className='bg-white p-5 lg:p-15 lg:px-20 rounded-xl max-w-[90vw]'>
            <form className='flex flex-col' onSubmit={handleSubmit((data) => console.log(data.email))}>
                <div className='flex justify-center'>
                    <h2 className='font-bold text-3xl'>LOGIN</h2>
                </div>
                <div className='relative w-full flex flex-col mt-8'>
                    <input type="email" placeholder='Enter your email' id='email' className='px-5 py-3 pl-12 bg-body rounded-md mb-2 outline-none' required {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
                    <MdOutlineEmail className='absolute text-gray-300 top-3 left-3' size={25} />
                </div>
                <div className='relative w-full flex flex-col mt-4'>
                    <input type="password" placeholder='Enter your password' id='password' className='px-5 py-3 pl-12 bg-body rounded-md mb-2 outline-none' required {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long"
                        }
                    })} />
                    {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                    <FiLock className='absolute text-gray-300 top-3 left-3' size={25} />
                </div>
                <div className='flex items-center mt-3'>
                    <input type="checkbox" name="remember-me" id="" />
                    <label htmlFor="remember-me" className='ml-2'>Remember me</label>
                </div>
                <button type='submit' className='cursor-pointer mt-5 w-full bg-primary p-3 text-white font-semibold text-sm'>LOGIN</button>
                <div className='flex flex-col items-center mt-5'>
                    <h2 className='text-slate-gray text-sm'>Don't have an account? please <span className='text-primary cursor-pointer' onClick={handleclick} >sign Up</span></h2>
                    <h2 className='text-slate-gray mt-5'>or login with</h2>
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
