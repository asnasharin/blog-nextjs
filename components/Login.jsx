import { login } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';

const Register = () => {

    const router = useRouter();

    const [form, setForm] = useFormState(login)

    useEffect(() => {
        form?.success && router.push("/")
    }, [form?.success,router])
  return (
    <form action={setForm} className='max-w-[500px] m-auto mt-10 p-8 rounded-lg border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300'>

      <div className='mb-6'>
        <label htmlFor="email" className='block text-sm font-semibold mb-2 text-gray-700'>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:border-black focus:ring-2 focus:ring-gray-800 transition-all duration-200 outline-none'
          required
        />
      </div>

      <div className='mb-6'>
        <label htmlFor="password" className='block text-sm font-semibold mb-2 text-gray-700'>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:border-black focus:ring-2 focus:ring-gray-800 transition-all duration-200 outline-none'
          required
        />
      </div>

      <button
        type="submit"
        className='w-full py-3 text-white bg-gray-800 rounded-md font-semibold border border-black shadow-[-7px_7px_0px_#000000] hover:bg-gray-700 active:bg-gray-600 transition-all duration-200'
      >
        Login
      </button>
    </form>
  );
};

export default Register;
