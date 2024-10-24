import { getAllPost } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

async function BlogItem() {
  const posts = await getAllPost();

  return (
    <div className='flex flex-wrap gap-4'>
      {posts.map((post) => (
        <div key={post.id} className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
          <Image 
            src={post.image || '/image.png'} 
            alt={post.title} 
            width={400} 
            height={400} 
            className='border-b border-black'
          />
          <p className='ml-5 mt-5 inline-block bg-black text-white text-sm'>Lorem</p>
          <div className="p-5">
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{post.title}</h5>
            <p className='mb-3 text-sm tracking-tight text-gray-700'>{post.description}</p>
            <div className='inline-flex items-center py-2 font-semibold text-center cursor-pointer'>
              <span className='text-blue-600'>Read more...</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogItem;
