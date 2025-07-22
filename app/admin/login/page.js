"use client";
import React from 'react'
import Login from '@/public/components/admin/Login';
import Signup from '@/public/components/admin/SignUp';
import { useAdminLogin } from '@/public/contexts/AdminLoginContext';


export default function Login() {
  const { isLogging } = useAdminLogin();
  
  return (
    <div className='w-full h-screen flex pt-40 lg:pt-0 lg:items-center items-start justify-center'>
      {isLogging ? <Login /> : <Signup />}
    </div>
  )
}