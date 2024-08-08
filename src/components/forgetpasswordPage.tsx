import React from 'react';

interface ForgotPasswordPage {
  setView: React.Dispatch<React.SetStateAction<'register' | 'login' | 'verify' | 'forgot' | 'reset'>>;
}

const ForgotPasswordPage: React.FC<ForgotPasswordPage> = ({ setView }) => (
  <>
    <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="email" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
      </div>
      <button type="submit" className="w-full bg-[#cc6699] text-white py-2 rounded-lg hover:bg-[#cc6699]">
        Send Reset Link
      </button>
      <p className="text-gray-600 mt-4 text-center">
        Remembered your password? <a onClick={() => setView('login')} className="text-[#cc6699] hover:underline cursor-pointer">Login</a>
      </p>
    </form>
  </>
);

export default ForgotPasswordPage;