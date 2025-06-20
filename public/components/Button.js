'use client';

import React from 'react'

export default function Button({ label, buttonColor, mb = "0" }) {
  return (
    <button className='cursor-pointer z-2 py-2 px-4 rounded-sm text-white text-sm mt-2' style={{background: `${buttonColor}`, marginBottom: `${mb}px`}}>{label}</button>
  )
}
