/* eslint-disable no-unused-vars */
/* eslint-disable boundaries/no-unknown */
import { useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import applicationService from '../services/application.service';
import UserInfo from '../components/UserInfo';
import UserDetailSkeletonLoader from '../components/UserDetailSkeletonLoader';
import { IApplicationUser } from '@/types/application.type';
import ErrorBoundary from '@/common/components/ErrorBoundary';
import { createResource, delay } from '@/lib/utils';

const serviceMethods = applicationService();

export const Component = () => {
  const { id: userId } = useParams();

  const [userInfoData, setUserInfoData] = useState<Required<IApplicationUser> | undefined>();

  const [dataResource, setdataResource] = useState<{
    read: () => Required<IApplicationUser>;
  } | null>(null);

  const getSingleUser = async () => {
    setdataResource(null);
    await delay(1000);

    const allDataPromise = serviceMethods.getSingleFileDataFn(userId as string);
    allDataPromise.then((res) => setUserInfoData(res));

    const resource = createResource(() => allDataPromise);
    setdataResource(resource);
  };

  // const getSingleUser = async () => {
  //   const toastId = toast.loading('Uploading data...');
  //   try {
  //     const resDta = await serviceMethods.getSingleFileDataFn(userId as string);
  //     console.log(resDta, 'resDta');
  //     setUserInfoData(resDta);
  //     toast.dismiss(toastId);
  //   } catch (error) {
  //     toast.error('Something went wrong!', { id: toastId });
  //     throw error;
  //   }
  // };

  useEffect(() => {
    if (userId) {
      getSingleUser();
    }
  }, [userId]);

  return (
    <main className="bg-slate-800 text-slate-200 min-h-screen flex flex-col items-center space-y-6 py-6">
      {/* Header Section */}
      <section className="w-11/12 md:w-4/5">
        <h3 className="text-indigo-500/100 text-3xl md:text-4xl font-bold text-center">User Information</h3>
      </section>

      <ErrorBoundary fallback={<h2 className="text-white text-center text-3xl">Oops! An error occurred.</h2>}>
        <Suspense fallback={<UserDetailSkeletonLoader />}>
          {/* User Info Card */}
          <UserInfo dataResource={dataResource} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
};
