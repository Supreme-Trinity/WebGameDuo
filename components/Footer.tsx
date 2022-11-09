import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';



const Footer: NextPage = () => (
  <div className='mt-6 hidden xl:block'>
    <Link  href='/about'>
    <p className=' mt-5 text-gray-400 text-sm  hover:underline cursor-pointer'>About</p>
    </Link>
    <p className='text-gray-400 text-sm mt-5'>© WebGameDuo Webster</p>
  </div>
);

export default Footer;
