import React from 'react';
import { footerLinks } from '../constants';

export default function Footer({}) {
  return (
    <div className='bg-white p-10 md:p-20 lg:p-30 mt-20'>
        <div className=' flex justify-between flex-col md:flex-row'>
            <div>
                <h2 className='font-bold text-primary text-3xl'>
                    MORENT
                </h2>
                <p className='text-slate-gray text-sm w-2/3 mt-2 mb-8'>Our vision is to provide convenience and help increase your sales business.</p>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-start gap-10 lg:gap-20 xl:gap-30'>
                {footerLinks.map((link) => (
                    <div key={link.id}>
                        <h3 className='font-semibold text-lg mb-4 text-[#1A202C]'>{link.title}</h3>
                        <ul className='list-none'>
                            {link.links.map((item, index) => (
                                <li key={index} className='text-sm font-medium text-slate-gray mb-2'>
                                    <a href={item.url} className='hover:text-primary transition-colors duration-200'>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <div className='mt-15 w-full h-[1px] bg-slate-gray'></div>
        <div className='flex flex-col-reverse mt-5 lg:mt-10 md:flex-row justify-between items-center'>
            <h2 className='font-bold text-[#1A202C] text-sm'>©2022 MORENT. All rights reserved</h2>
            <div className='mb-4 md:mb-0 flex justify-between items-center gap-5 md:gap-10 text-[#1A202C] font-bold text-sm'>
                <h2>Privacy & Policy</h2>
                <h2>Terms & Conditions</h2>
            </div>
        </div>
        <div className='mt-3 w-full flex justify-center md:justify-start text-[#1A202C] font-bold text-sm text-center md:text-start'>
            <h2 className='w-8/10'>Design inspired by <a href="http://www.figma.com/design/O8Ho6HBGpfhMTt7tRjNyON/Car-Rent-Website-Design---Pickolab-Studio--Community-?node-id=1-5&p=f&t=PpWBvzuFTuDiiJ7J-0" className='underline text-blue-500' target="_blank" rel="noopener noreferrer">Pickolab Studio</a> - all credit goes to them. This site is for educational and practice purposes only.</h2>
        </div>
    </div>
  )
}
