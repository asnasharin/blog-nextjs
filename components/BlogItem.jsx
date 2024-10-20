import Image from 'next/image'
import React from 'react'

function BlogItem() {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
        <Image src='/image.png' width={400} height={400} className='border-b border-black'/>
        <p className='ml-5 mt-5 inline-block bg-black text-white text-sm'>Lorem</p>
        <div className="p-5">
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>blogtitle</h5>
            <p className='mb-3 text-sm tracking-tight text-gray-700'>description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, deserunt perspicia</p>
            <div className='inline-flex items-center py-2 font-semibold text-center cursor-pointer'>read more...</div>
        </div>
    </div>
  )
}

export default BlogItem