import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import Label from '@/common/components/form/Label';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Button } from '@/common/components/Button';

const Login = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      const formObject: { [key: string]: string } = {};
      formData.forEach((value, key) => {
        formObject[key] = value.toString();
      });
      console.log('formDta: ', formObject);
    }
    // authentication logic
  };

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

        <form onSubmit={handleSubmit} ref={formRef} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              className="text-md font-medium text-gray-400 mb-2 flex items-center gap-2"
              aria-label="email"
              htmlFor="email"
            >
              <MdOutlineEmail /> Your email :
            </label>
            {/* <Label htmlFor="email" label="Your email :" required className="block text-md font-medium text-gray-400 mb-2" /> */}
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 bg-gray-700 rounded-lg outline-none focus:border-blue-500 text-white"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              className="text-md font-medium text-gray-400 mb-2 flex items-center gap-2"
              aria-label="password"
              htmlFor="password"
            >
              <RiLockPasswordLine /> Password :
            </label>
            {/* <label htmlFor="password" label="Password :" required error={false} className="block text-md font-medium text-gray-400 mb-2" /> */}
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 bg-gray-700 rounded-lg outline-none text-white"
              placeholder="Enter your password"
              name="password"
              required
            />
          </div>

          {/* Login Button */}
          <Button type="submit" variant="Login" size="lg" style={{ marginTop: '50px' }} onClick={() => navigate('/')}>
            Log in
          </Button>
        </form>

        {/* Register Redirect */}
        <p className="mt-4 text-md text-center text-gray-500 dark:text-slate-400">
          Don&apos;t have an account?{' '}
          <Button
            onClick={() => navigate('/register')}
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
