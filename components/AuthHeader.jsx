import Link from 'next/link'
import React from 'react'

const AuthHeader = () => {

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className="flex justify-between items-center">
        <img src='logo.png' width={150} alt="logo" className='w-[80px] sm:w-[100px]' />
        <ul className='flex justify-center gap-8 font-medium text-[18px] cursor-pointer'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <div className='flex gap-4'>
        </div>
      </div>
      <div className="text-center my-8">
        <h1 className='text-3xl sm:text-5xl font-medium'>Join Us</h1>
        <p className='mt-6 max-w-[740px] m-auto text-xs sm:text-base'>
          Access premium features by logging in or registering today!
        </p>
      </div>
    </div>
  );
};

export default AuthHeader;
