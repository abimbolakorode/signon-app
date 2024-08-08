import React from 'react';

const ResetPasswordPage: React.FC = () => (
  <> 
  <div className='min-h-screen flex items-center justify-center bg-gray-100 '>
  <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700">New Password</label>
        <input type="password" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Confirm New Password</label>
        <input type="password" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
      </div>
      <button type="submit" className="w-full bg-[#cc6699] text-white py-2 rounded-lg hover:bg-[#cc6699]">
        Reset Password
      </button>
      <p className="text-gray-600 mt-4 text-center">
        Back to <a onClick={() => ('login')} className="text-[#cc6699] hover:underline cursor-pointer">Login</a>
      </p>
    </form>
    </div>
    </div>
  </>
);

export default ResetPasswordPage;