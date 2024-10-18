import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const AuthHeader = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleRegisterClick = () => {
    router.push("/register");
  };

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
          <button 
            className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] hover:bg-gray-600 hover:text-white transition-all"
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button 
            className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] hover:bg-gray-600 hover:text-white transition-all"
            onClick={handleRegisterClick}
          >
            Register
          </button>
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
