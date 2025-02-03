/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable boundaries/no-unknown */
import { useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';
import React, { useRef, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Button } from '@/common/components/Button';
import { useAuth } from '@/common/context/auth.context';

type LoginFormPropType = {
  setError: React.Dispatch<React.SetStateAction<string>>;
};

const LoginForm = ({ setError }: LoginFormPropType) => {
  const navigate = useNavigate();
  const { login, loading, token } = useAuth();

  const formRef = useRef<HTMLFormElement>(null);

  // state for showing the password as per the user interaction
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Only trigger toggle for Enter (13) or Space (32) key presses
    if (e.key === 'Enter' || e.key === ' ') {
      toggleShowPassword();
    }
  };

  // Redirect if already logged in
  if (token) navigate('/');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;

      try {
        await login(email, password);
        navigate('/');
      } catch {
        setError('Invalid email or password');
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} ref={formRef} className="space-y-4">
      {/* Email Field */}
      <div>
        <label className="text-md font-medium text-gray-400 mb-2 flex items-center gap-2" htmlFor="email">
          <MdOutlineEmail />
          Your email :
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 w-full px-4 py-2 bg-gray-700 rounded-lg outline-none focus:border-blue-500 text-white"
          placeholder="Enter your email"
          name="email"
          required
        />
      </div>

      {/* Password Field */}
      <div>
        <label className="text-md font-medium text-gray-400 mb-2 flex items-center gap-2" htmlFor="password">
          <RiLockPasswordLine />
          Password :
        </label>
        <div className="flex items-center relative">
          <input
            type={`${showPassword ? 'text' : 'password'}`}
            className="mt-1 w-full px-4 py-2 bg-gray-700 rounded-lg outline-none text-white"
            placeholder="Enter your password"
            name="password"
            required
          />
          <div
            className="p-2 rounded-r-lg flex items-center absolute right-0 text-gray-400 bg-gray-700"
            onClick={toggleShowPassword}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
          >
            {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
          </div>
        </div>
      </div>

      {/* Login Button */}
      <Button type="submit" variant="Login" size="lg" style={{ marginTop: '50px' }} disabled={loading}>
        {loading ? 'Logging in...' : 'Log in'}
      </Button>
    </form>
  );
};

export default LoginForm;
