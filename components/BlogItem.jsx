import { getAllPost } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function BlogItem() {
  const posts = await getAllPost();

  return (
    <div className="flex flex-wrap gap-8 justify-center p-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="max-w-[330px] sm:max-w-[300px] bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <Link href={`/blog/${post.id}`}>
            <Image
              src={post.image || '/image.png'}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h5 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                {post.title}
              </h5>
              <div className="mt-4 inline-flex items-center text-blue-600 font-semibold cursor-pointer">
                Read more...
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogItem;
