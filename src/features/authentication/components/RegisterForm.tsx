import { FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import useUserRegister from '../hooks/useUserRegister';
import { USER_REGISTER_BUILDER_FORM_FIELDS } from '@/features/authentication/constants/authentication.form.constant';
import Input from '@/common/components/form/Input';
import SkeletonFormLoader from '@/common/components/form/FormLoader';
import { Button } from '@/common/components/Button';

const RegisterForm = () => {
  const { methods, submit, uiLoading, showPassword, setShowPassword } = useUserRegister();

  return uiLoading ? (
    <SkeletonFormLoader />
  ) : (
    <form onSubmit={methods.handleSubmit(submit)} className="w-full flex-1 mt-8">
      <div className="mx-auto max-w-xs flex flex-col">
        <Input {...USER_REGISTER_BUILDER_FORM_FIELDS.FIRST_NAME} />
        <Input {...USER_REGISTER_BUILDER_FORM_FIELDS.LAST_NAME} />
        <Input {...USER_REGISTER_BUILDER_FORM_FIELDS.EMAIL} />
        <div className="relative">
          <Input {...USER_REGISTER_BUILDER_FORM_FIELDS.PASSWORD} type={showPassword ? 'text' : 'password'} />
          <Button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-8 right-1 flex items-center text-gray-500 border-0 hover:bg-transparent hover:text-gray-500"
          >
            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </Button>
        </div>
        <Input {...USER_REGISTER_BUILDER_FORM_FIELDS.PHONE} />

        <Button className="">
          <FiUserPlus size={20} />

          <span className="ml-3">Sign Up</span>
        </Button>
        <p className="mt-6 text-xs text-gray-600 text-center">
          Already have an account?{' '}
          <Link to="/auth/login">
            <span className="text-blue-900 font-semibold">Sign in</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
