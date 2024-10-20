import React from 'react';
import AdminPostForm from '../../components/AdminPostForm';
import AdminUsers from '../../components/AdminUsers';
import AdminPosts from '../../components/AdminPosts';
import Header from '@/components/Header';

const AdminPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-6 bg-black text-white min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center border-b border-white pb-4">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <AdminUsers />
          </div>
          <div>
            <AdminPosts />
          </div>
        </div>

        <div className="mt-8">
          <AdminPostForm />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
