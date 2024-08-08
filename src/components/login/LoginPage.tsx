import React from 'react';

interface LoginPageProps {
  setView: (view: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ setView }) => (
  <div className='min-h-screen flex items-center justify-center bg-gray-100'>
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="mt-1 p-2 w-full border border-gray-300 rounded-lg hover:bg-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" className="mt-1 p-2 w-full border border-gray-300 rounded-lg hover:bg-blue-100" />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="/forgot-password" className="text-[#cc6699] hover:underline">Forgot Password?</a>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-[#332bac]">
          Login
        </button>
        <p className="text-gray-600 mt-4 text-center">
          Don't have an account? <a onClick={() => setView('register')} className="text-[#d43585] hover:underline cursor-pointer">Register</a>
        </p>
      </form>
    </div>
  </div>
);

export default LoginPage;