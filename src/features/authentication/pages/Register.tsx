import Form from '@/common/components/form/Form';
import RegisterForm from '@/features/authentication/components/RegisterForm';

export const Component = () => (
  <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
    <div className="max-w-screen-xl  flex justify-center flex-1">
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div className=" flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">User Sign up</h1>
            <p className="text-[12px] text-gray-500">Hey enter your details to create your account</p>
          </div>
          <Form defaultValues={{}}>
            <RegisterForm />
          </Form>
        </div>
      </div>
    </div>
  </div>
);
