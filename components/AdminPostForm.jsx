import React from 'react';

function AdminPostForm() {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create or Update Post</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Title</label>
          <input
            type="text"
            placeholder="Enter post title"
            className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Content</label>
          <textarea
            placeholder="Enter post content"
            className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
            rows="5"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded-md border border-white hover:bg-gray-800 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminPostForm;
