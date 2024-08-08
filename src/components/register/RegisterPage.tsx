// src/pages/RegisterPage.tsx
import React from 'react';

const RegisterPage: React.FC = () => {
  return (
    <section className="w-full h-screen bg">
      
      
<div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    <h2 className="text-2xl font-bold mb-6">Register</h2>
    <form>
      
      <div className="mb-4">
        <label className="block text-gray-700">Full Name</label>
        <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-lg hover:bg-blue-100" />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="email" className="mt-1 p-2 w-full border border-gray-300 rounded-lg hover:bg-blue-100" />
      </div>
     
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input type="password" className="mt-1 p-2 w-full border border-gray-300 rounded-lg hover:bg-blue-100" />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Confirm Password</label>
        <input type="password" className="mt-1 p-2 w-full border border-gray-300 rounded-lg hover:bg-blue-100" />
      </div>
    
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700">
        Register
      </button>
      
      <p className="text-gray-600 mt-4 text-center">
        Already have an account? <a href="/login" className="text-[#d43585] hover:underline">Login</a>
      </p>
    </form>
  </div>
</div>

    </section>
  );
};

export default RegisterPage;