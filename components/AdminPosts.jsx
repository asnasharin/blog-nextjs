import React from 'react';

function AdminPosts() {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Manage Posts</h2>
      <ul className="list-none space-y-2">
        <li className="p-2 border-b border-gray-300">Post 1 - Title of the Post</li>
        <li className="p-2 border-b border-gray-300">Post 2 - Another Post Title</li>
        <li className="p-2 border-b border-gray-300">Post 3 - Yet Another Post</li>
      </ul>
    </div>
  );
}

export default AdminPosts;
