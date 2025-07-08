'use client';

import React from 'react'

const sizeClasses = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-3 px-6 text-base',
  lg: 'py-4 px-8 text-lg',
  xl: 'py-5 px-10 text-xl'
};

export default function Button({ label, buttonColor="#3563E9", mb = "0", size='sm' }) {
  return (
    <button className={`cursor-pointer z-2 rounded-sm text-white text-${size} mt-2 ${sizeClasses[size] || sizeClasses.sm}`} style={{background: `${buttonColor}`, marginBottom: `${mb}px`}}>{label}</button>
  )
}
