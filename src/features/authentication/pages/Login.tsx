/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { Button } from '@/common/components/Button';

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  return (
    <div className="flex flex-col space-y-8 min-h-screen items-center justify-center bg-slate-950">
      {/* Logo & Title */}
      <div className="flex items-center space-x-3 justify-center">
        <img src="https://flowbite.com/images/logo.svg" alt="icon" className="w-10 h-10" />
        <h2 className="text-3xl font-bold text-slate-200">Application Builder</h2>
      </div>

      {/* Form Container */}
      <div className="w-[95%] sm:w-full max-w-md p-6 bg-inherit rounded-2xl border-4 border-slate-900">
        <h2 className="text-2xl mb-4 text-gray-500 text-center font-bold">Login Page</h2>

        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <LoginForm setError={setError} />

        {/* Register Redirect */}
        <p className="mt-4 text-md text-center text-gray-500 dark:text-slate-400">
          Don&apos;t have an account?{' '}
          <Button
            onClick={() => navigate('/auth/register')}
            className="text-blue-500 hover:text-blue-500 cursor-pointer hover:underline border-none hover:bg-slate-950"
          >
            Sign up
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Login;
