import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorBoundary from '@/common/components/ErrorBoundary';
import { createResource, delay } from '@/common/components/utils';
import GlobalDBService from '@/common/services/global.service';
import { IApplicationUser } from '@/common/types/application.type';
import UserDetailSkeletonLoader from '@/features/application/components/UserDetailSkeletonLoader';
import UserInfo from '@/features/application/components/UserInfo';

const { USER_SERVICE } = GlobalDBService();

export const Component = () => {
  const { id: userId } = useParams();

  // const [userInfo, setUserInfoData] = useState<IApplicationUser | undefined>();

  const [dataResource, setDataResource] = useState<{
    read: () => IApplicationUser;
  } | null>(null);

  const getSingleUser = async () => {
    setDataResource(null);
    await delay(1000);

    const allDataPromise = USER_SERVICE.getSingleFileDataFn(userId as string);
    // allDataPromise.then((res) => setUserInfoData(res));

    const resource = createResource(() => allDataPromise);
    setDataResource(resource);
  };

  useEffect(() => {
    if (userId) {
      getSingleUser();
    }
  }, [userId]);

  return (
    <main className="dark:bg-slate-950 bg-white text-slate-200 min-h-screen flex flex-col items-center space-y-6 py-6">
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
