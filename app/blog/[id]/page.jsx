import { getAllPost, getSinglePost } from '@/lib/data'; 
import Image from 'next/image';
import React from 'react';

export default async function BlogDetails({ params }) {
  const { id } = params;
  const post = await getSinglePost(id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <h4>{post.category}</h4>
          <Image
            src={post?.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-auto mb-4"
          />
        <p className="text-gray-700 mt-4">{post.description}</p>
      </div>
    </div>
  );
}
