'use client';

import React from 'react'

export default function Button({ label, buttonColor="#3563E9", mb = "0", size='sm' }) {
  return (
    <button className={`cursor-pointer z-2 rounded-sm text-white text-${size} mt-2 ` + (size === "sm" ? 'py-2 px-4' : 'py-4 px-8')} style={{background: `${buttonColor}`, marginBottom: `${mb}px`}}>{label}</button>
  )
}
