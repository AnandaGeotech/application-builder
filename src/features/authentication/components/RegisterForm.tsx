import { FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { USER_REGISTER_BUILDER_FORM_FIELDS } from '../constants/authentication.constant';
import useUserRegister from '../hooks/useUserRegister';
import Input from '@/common/components/form/Input';
import SkeletonFormLoader from '@/common/components/form/FormLoader';
import { Button } from '@/common/components/Button';

const RegisterForm = () => {
  const { methods, submit, uiLoading } = useUserRegister();

  return uiLoading ? (
    <SkeletonFormLoader />
  ) : (
    <form onSubmit={methods.handleSubmit(submit)} className="w-full flex-1 mt-8">
      <div className="mx-auto max-w-xs flex flex-col">
        <Input {...USER_REGISTER_BUILDER_FORM_FIELDS.FIRST_NAME} />
        <Input {...USER_REGISTER_BUILDER_FORM_FIELDS.LAST_NAME} />
        <Input {...USER_REGISTER_BUILDER_FORM_FIELDS.EMAIL} />
        <Input {...USER_REGISTER_BUILDER_FORM_FIELDS.PASSWORD} />
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
