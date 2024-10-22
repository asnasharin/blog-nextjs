import React from 'react';
import { getAllPost } from "../lib/data";
import { deletePost } from '@/lib/actions';

async function AdminPosts() {
  const posts = await getAllPost();
  
  return (
    <div className="bg-gray-100 text-black p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Posts</h2>
      <ul className="list-none space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <img src={post.image} alt={post.title} />
            <span className="font-medium">{post.title}</span>
            <form action={deletePost} className="flex items-center">
              <input type="hidden" name="id" value={post.id} />
              <button 
                type="submit" 
                className="ml-4 py-1 px-3 text-sm text-white bg-red-600 rounded hover:bg-red-500 transition-colors duration-200"
              >
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPosts;
