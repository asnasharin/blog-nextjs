'use client';

import Link from 'next/link';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
    const { data: session } = useSession();

    const handleLogout = () => {
        signOut({ callbackUrl: '/login' });
    };

    return (
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <img src='logo.png' width={150} alt='logo' className='w-[80px] sm:w-[100px]' />
                <ul className='flex justify-center gap-8 font-medium text-[18px] cursor-pointer'>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    {session?.user?.email === 'admin@gmail.com' && (
                        <div>
                            <Link href='/admin'>Admin</Link>
                        </div>
                    )}
                </ul>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
                    <Link href='/register'>Get started</Link>
                </button>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
                    <Link href='/login'>Login</Link>
                </button>
                <button 
                    className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]' 
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Header;
