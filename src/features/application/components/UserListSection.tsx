/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import { Suspense } from 'react';
import UserTable from './UserTable';
import { Button } from '@/common/components/Button';
import ErrorBoundary from '@/common/components/ErrorBoundary';
import TableSkeleton from '@/common/components/TableSkeleton';

const UserListSection = ({ hooksOptions }) => {
  const { handleSearch, openOptionModalFn } = hooksOptions;

  return (
    <section className="dark:bg-slate-950 bg-white py-16 pb-24 mx-auto px-6">
      <h3 className="font-bold text-indigo-500/100 text-4xl mb-8 text-center">Users List</h3>
      <div
        className="container overflow-x-auto pb-5 mx-auto rounded-lg dark:bg-slate-950 bg-white [&::-webkit-scrollbar]:h-2
[&::-webkit-scrollbar-track]:bg-slate-900 [&::-webkit-scrollbar-track]:dark:bg-slate-200 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-opacity-50
[&::-webkit-scrollbar-thumb]:bg-indigo-500/100 [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        <div className="py-4 flex justify-between items-center">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={(e) => handleSearch(e.target.value)}
              type="text"
              id="table-search"
              className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
          <Button
            onClick={() => {
              openOptionModalFn();
            }}
            className=" bg-indigo-500 text-white rounded hover:bg-indigo-600  "
          >
            Select Columns to Display
          </Button>
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
