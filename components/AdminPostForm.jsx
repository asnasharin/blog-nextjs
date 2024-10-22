import React, { useState } from 'react';
import { createPost } from '@/lib/actions';

function AdminPostForm() {
  const [form, setForm] = useState({
    title: '',
    category: '',
    description: '',
    image: '', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('category', form.category);
    formData.append('content', form.content);
    formData.append("image", form.image)

    try {
      await createPost(formData); 
      console.log('Post created successfully');
      setForm({
        title: '',
        category: '',
        content: '',
        image: '',
      });
    } catch (error) {
      console.error('Error creating post', error);
    }
  };

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create or Update Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter post title"
            value={form.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Enter post category"
            value={form.category}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Image</label>
          <input
            type="text"
            name="image"
            placeholder="Enter image url"
            value={form.image}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Content</label>
          <textarea
            name="content"
            placeholder="Enter post content"
            value={form.content}
            onChange={handleInputChange}
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
