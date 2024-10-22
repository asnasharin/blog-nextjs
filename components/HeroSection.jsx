import React from 'react';

function HeroSection() {
  return (
    <>
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid
          quisquam ipsam explicabo perferendis illum enim, voluptatibus aperiam recusandae
          cum consectetur quibusdam.
        </p>
        <form
          action=''
          className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'
        >
          <input
            type='email'
            placeholder='Enter your email'
            className='pl-4 outline-none'
          />
          <button
            type='submit'
            className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}

export default HeroSection;
