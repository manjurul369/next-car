"use client";
import { BsTelephone } from "react-icons/bs";
import { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { useForm } from "react-hook-form"
import { FaFacebookSquare, FaRegUserCircle } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { PiPasswordBold, PiIdentificationCardLight, PiIdentificationBadgeThin } from "react-icons/pi";
import Image from 'next/image';
import { google } from '@/public/assets/images';
import { useAdminLogin } from '@/public/contexts/AdminLoginContext';
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react';


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


export default function signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { handleclick } = useAdminLogin();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");


    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            const response = await fetch('/api/users',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const result = await response.json();

            if (result.success){
                setSubmitMessage("User created successfully");
                console.log(result.user);

                setTimeout(() => {
                    handleclick();
                    router.push('/auth/admin/login');
                }, 2000);
            }
            else{
                setSubmitMessage(result.message || "Failed to create user");
            }

        } catch (error) {
            console.error("Error creating user:", error);
            setSubmitMessage("Failed to create user");
        }
        finally {
            setIsSubmitting(false);
        }
    }

    const handleGoogleSignUp = async () => {
        try {
            setSubmitMessage("Redirecting to Google...");
            const result = await signIn('google', {
                callbackUrl: '/auth/admin/dashboard',
                redirect: true,
            });
            
            if (result?.error) {
                setSubmitMessage("Google sign-up failed. Please try again.");
            }
        } catch (error) {
            console.error("Google sign-up error:", error);
            setSubmitMessage("Google sign-up failed. Please try again.");
        }
    };


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
            <form className='flex flex-col w-auto lg:w-[600px]' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-center'>
                    <h2 className='font-bold text-3xl'>SIGN UP</h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-5 mt-0 lg:mt-5">
                    <div className='relative w-full flex flex-col mt-8 lg:mt-0'>
                        <input type="name" placeholder='Full name' id='name' className='px-5 py-3 pl-12 bg-body rounded-md mb-2 outline-none' required {...register("name", { required: true })} />
                        {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
                        <FaRegUserCircle className='absolute text-gray-300 top-3 left-3' size={25} />
                    </div>
                    <div className='relative w-full flex flex-col mt-2 lg:mt-0'>
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
                </div>
                <div className='relative w-full flex flex-col mt-2'>
                    <input type="email" placeholder='Enter email address' id='email' className='px-5 py-3 pl-12 bg-body rounded-md mb-2 outline-none' required {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
                    <MdOutlineEmail className='absolute text-gray-300 top-3 left-3' size={25} />
                </div>
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-5 mt-0 lg:mt-2">
                    <div className='relative w-full flex flex-col mt-2 lg:mt-0'>
                        <input type="address" placeholder='Full address' id='address' className='px-5 py-3 pl-12 bg-body rounded-md mb-2 outline-none' required {...register("address", { required: true })} />
                        {errors.address && <span className="text-red-500 text-xs">Address is required</span>}
                        <IoHomeOutline className='absolute text-gray-300 top-3 left-3' size={25} />
                    </div>
                    <div className='flex flex-col w-full my-2 lg:my-0'>
                        <select
                            className={`w-full input-field custom-select ${!watch('district') ? 'text-slate-gray' : ''}`}
                            id="district"
                            required
                            {...register("district", { required: true })}
                        >
                            <option value="">Select your district</option>
                            {locations.map((loc) => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>
                        {errors.district && <span className="text-red-500 text-xs">Pick-Up location is required</span>}
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-5 mt-0 lg:mt-2">
                    <div className='relative w-full flex flex-col mt-2 lg:mt-0'>
                        <input type="number" placeholder='Enter your NID number' id='nid' className='px-5 py-3 pl-12 bg-body rounded-md mb-2 outline-none' required {...register("nid", { required: true })} />
                        {errors.nid && <span className="text-red-500 text-xs">NID is required</span>}
                        <PiIdentificationCardLight className='absolute text-gray-300 top-3 left-3' size={25} />
                    </div>
                    <div className='relative flex flex-col w-full my-2 lg:my-0'>
                        <input type="number" placeholder='Enter your driving license' id='driving-license' className='px-5 py-3 pl-12 bg-body rounded-md mb-2 outline-none' />
                        <PiIdentificationBadgeThin className='absolute text-gray-300 top-3 left-3' size={25} />
                    </div>
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
                    <input type="checkbox" name="terms" id="terms" {...register("terms", { required: "You must accept the terms & conditions" })} />
                    <label htmlFor="terms" className='ml-2 text-slate-gray text-xs'>I accept all the <span className="text-primary">terms & conditions</span></label>
                </div>
                {errors.terms && <span className="text-red-500 text-xs">{errors.terms.message}</span>}

                {submitMessage && (
                    <div className={`mt-3 p-2 rounded text-sm text-center ${
                        submitMessage.includes("successfully") ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                        {submitMessage}
                    </div>
                )}

                <button
                    type='submit'
                    disabled={!termsAccepted || isSubmitting}
                    className={`cursor-pointer mt-5 w-full p-3 text-white font-semibold text-sm rounded-md transition-colors ${(!termsAccepted || isSubmitting)
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary hover:bg-primary-dark'
                        }`}
                >
                    {isSubmitting ? 'CREATING ACCOUNT...' : 'SIGN UP'}
                </button>
                <div className='flex flex-col items-center mt-5'>
                    <h2 className='text-slate-gray text-sm text-center'>Already have an account?<br></br> please <span className='text-primary cursor-pointer' onClick={handleclick} >login</span></h2>
                    <h2 className='text-slate-gray mt-5'>or sign up with</h2>
                </div>
                <div className='flex flex-2 gap-3 mt-3 mb-5'>
                    <button type="button" className='cursor-pointer flex items-center justify-center gap-2 text-[#1877F2] border p-3 rounded-md w-full mt-3'>
                        <FaFacebookSquare size={20} />
                        <span>Facebook</span>
                    </button>
                    <button 
                        type="button" 
                        onClick={handleGoogleSignUp}
                        className='cursor-pointer flex items-center justify-center gap-2 text-[#0F9D58] border border-gray-300 hover:border-[#0F9D58] p-3 rounded-md w-full mt-3 transition-colors hover:bg-green-50'
                    >
                        <Image src={google} alt="Google" width={20} height={20} />
                        <span>Google</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
