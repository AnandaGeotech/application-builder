import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { TUserListReturn } from '../hooks/useApplicationUserlist';
import UserTable from './UserTable';
import { Button } from '@/common/components/Button';
import ErrorBoundary from '@/common/components/ErrorBoundary';
import TableSkeleton from '@/common/components/TableSkeleton';

const UserListSection = ({ hooksOptions }: { hooksOptions: TUserListReturn }) => {
  const { handleSearch } = hooksOptions;
  const navigate = useNavigate();

  const handleCreate = () => navigate('/add');

  return (
    <section className="dark:bg-slate-950 bg-white py-16  mx-auto px-6 pt-20">
      <h3 className="font-bold  dark:text-white text-gray-500  text-4xl ">Users</h3>
      <div className=" pb-5 mx-auto rounded-lg">
        <div className="py-4 flex flex-wrap flex-col md:flex-row md:justify-between md:items-center space-y-3">
          <div className="relative mt-1 flex gap-2">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none px-2">
              <BiSearch />
            </div>
            <input
              onChange={(e) => handleSearch(e.target.value)}
              type="text"
              id="table-search"
              className="custom-input px-4"
              placeholder="Search for items"
            />
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleCreate}
              className="'
          "
            >
              Add User
            </Button>
          </div>
        </div>
        <ErrorBoundary
          fallback={<h2 className="text-white text-center text-3xl">Oops! An error occurred.Please reload the page</h2>}
        >
          <Suspense fallback={<TableSkeleton />}>
            <UserTable hooksOptions={hooksOptions} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default UserListSection;
