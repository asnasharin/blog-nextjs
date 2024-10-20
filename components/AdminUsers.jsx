import React from 'react';

function AdminUsers() {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <ul className="list-none space-y-2">
        <li className="p-2 border-b border-gray-300">User 1 - user1@example.com</li>
        <li className="p-2 border-b border-gray-300">User 2 - user2@example.com</li>
        <li className="p-2 border-b border-gray-300">User 3 - user3@example.com</li>
      </ul>
    </div>
  );
}

export default AdminUsers;
