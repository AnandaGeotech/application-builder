import LoginForm from '../components/LoginForm';
import Form from '@/common/components/form/Form';

const Login = () => (
  <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
    <div className="max-w-screen-xl  flex justify-center flex-1">
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div className=" flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-2xl xl:text-4xl font-extrabold ">User Sign in</h1>
            <p className="text-[12px] text-gray-500">Hey enter your details to create your account</p>
          </div>
          <Form defaultValues={{}}>
            <LoginForm />
          </Form>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
