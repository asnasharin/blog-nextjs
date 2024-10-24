import React from 'react';
import { getAllUsers } from '@/lib/data';
import { deleteUser } from '@/lib/actions';

async function AdminUsers() {
  const users = await getAllUsers();

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      {users.map((user) => (
        <form action={deleteUser} method="POST" key={user.id} className="flex justify-between items-center border-b border-gray-300 p-2">
          <input type="hidden" name="id" value={user.id} />
          <span>{user.name}</span>
          <button
            type="submit"
            className="ml-4 py-1 px-3 text-sm text-white bg-red-600 rounded hover:bg-red-500 transition-colors duration-200"
          >
            Delete
          </button>
        </form>
      ))}
    </div>
  );
}

export default AdminUsers;
