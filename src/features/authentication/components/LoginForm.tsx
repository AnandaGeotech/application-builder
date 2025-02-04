import { FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import useUserLogin from '../hooks/useUserLogin';
import { USER_REGISTER_BUILDER_FORM_FIELDS } from '@/features/authentication/constants/authentication.form.constant';
import Input from '@/common/components/form/Input';
import { Button } from '@/common/components/Button';

const LoginForm = () => {
  const { methods, submit, customFetchLoading, showPassword, setShowPassword, error } = useUserLogin();

  return (
    <form onSubmit={methods.handleSubmit(submit)} className="w-full flex-1 mt-8">
      <div className="mx-auto max-w-xs flex flex-col">
        <Input {...USER_REGISTER_BUILDER_FORM_FIELDS.EMAIL} />
        <div className="relative">
          <Input {...USER_REGISTER_BUILDER_FORM_FIELDS.PASSWORD} type={showPassword ? 'text' : 'password'} />
          <Button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-8 right-1 flex items-center  border-0   "
            variant="link"
          >
            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </Button>
        </div>
        <Button className="" disabled={customFetchLoading}>
          <FiUserPlus size={20} />

          <span className="ml-3">Sign In</span>
        </Button>
        {error && (
          <h2 className="text-red-500 text-center text-lg">{error}</h2> // Display error message
        )}
        <p className="mt-6 text-xs text-gray-600 text-center">
          Don&rsquo;t have an account?{' '}
          <Link to="/auth/register">
            <span className="text-blue-900 font-semibold">Create new account</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
