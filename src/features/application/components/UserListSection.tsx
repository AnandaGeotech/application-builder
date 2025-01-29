/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { TableApplicationUserListProps } from '../type/application.type';
import UserTable from './UserTable';
import { Button } from '@/common/components/Button';
import ErrorBoundary from '@/common/components/ErrorBoundary';
import TableSkeleton from '@/common/components/TableSkeleton';

const UserListSection = ({ hooksOptions }: { hooksOptions: TableApplicationUserListProps }) => {
  const { handleSearch } = hooksOptions;
  const navigate = useNavigate();

  const handleCreate = () => navigate('/add');

  return (
    <section className="dark:bg-slate-950 bg-white py-16  mx-auto px-6 pt-20">
      <h3 className="font-bold  dark:text-white text-gray-500  text-4xl ">Users</h3>
      <div className=" pb-5 mx-auto rounded-lg">
        <div className="py-4 flex flex-wrap flex-col md:flex-row md:justify-between md:items-center space-y-3">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <BiSearch />
            </div>
            <input
              onChange={(e) => handleSearch(e.target.value)}
              type="text"
              id="table-search"
              className={`rounded-full block py-2 ps-10 text-sm outline-none text-gray-900 border border-gray-300 w-80 bg-gray-50 focus:ring-indigo-500/100
                 focus:border-indigo-500/100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="Search for items"
            />
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleCreate}
              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 rounded-s-lg bg-white hover:text-gray-700
               hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:hover:text-gray-300 dark:hover:bg-gray-700`}
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
