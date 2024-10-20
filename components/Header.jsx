import Link from 'next/link';
import React from 'react';
import { auth } from '@/lib/auth';

const Header = async () => {
    
    const session = await auth();

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
                            <Link href='/admin'>
                            Admin
                            </Link>
                        </div>
                    )}
                </ul>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
                    <Link href='/register'>Get started</Link>
                </button>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
                    <Link href='/login'>login</Link>
                </button>
            </div>
            <div className='text-center my-8'>
                <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
                <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid
                    quisquam ipsam explicabo perferendis illum enim, voluptatibus aperiam recusandae
                    cum consectetur quibusdam.
                </p>
                <form
                    action=''
                    className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
                    <input type='email' placeholder='Enter your email' className='pl-4 outline-none' />
                    <button
                        type='submit'
                        className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Header;
