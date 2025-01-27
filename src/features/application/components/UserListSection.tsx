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
  // const navigate = useNavigate();

  // const handleCreate = () => navigate('/add');

  // const featureDetails = [
  //   {
  //     icon: '\u{2699}',
  //     featureName: 'Drag-and-Drop',
  //     description: 'Easily create applications with an intuitive drag-and-drop interface.',
  //   },
  //   {
  //     icon: '\u{1F4BB}',
  //     featureName: 'Customizable Templates',
  //     description: 'Choose from a variety of pre-built templates tailored to your needs.',
  //   },
  //   {
  //     icon: '\u{1F4E6}',
  //     featureName: 'Seamless Integration',
  //     description: 'Connect with popular tools and services effortlessly.',
  //   },
  // ];
  return (
    <>
      {/* <section className="dark:bg-slate-950 bg-white py-16">
        <div className="container mx-auto px-6 text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-indigo-500/100 mb-4">Build Applications Faster</h1>
            <p className="text-lg text-slate-400 dark:text-slate-700 mb-6">
              Create powerful and customizable applications without writing a single line of code.
            </p>
            <div className="space-x-4">
              <Button
                className="px-6 py-3 text-white bg-indigo-500/100 rounded-lg shadow hover:bg-blue-700"
                onClick={handleCreate}
              >
                Create Project
              </Button>
            </div>
          </div>
          <div className="container mx-auto px-6 text-center">
            <div className="mt-8 md:mt-0 md:w-1/2 mx-auto flex items-center space-x-4 bg-slate-300 shadow-lg rounded-full p-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full p-2 text-gray-700 outline-none bg-slate-300"
              />
              <Button className="bg-indigo-500/100 text-white p-2 rounded-full shadow-md hover:bg-indigo-600/100 focus:outline-none focus:ring focus:ring-blue-200">
                <FaSearch size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      {/* <section className="py-16 pb-24 dark:bg-slate-900/100 bg-slate-300 text-slate-200 dark:text-slate-700">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center   text-black  dark:text-indigo-500/100  mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-4/5 mx-auto md:w-full">
            {featureDetails.map(({ icon, featureName, description }) => (
              <div
                className="p-6 dark:bg-slate-950 bg-white shadow-sm shadow-black dark:shadow-none rounded-lg text-center border-x-4 border-indigo-500/100"
                key={featureName}
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-2  text-black  dark:text-indigo-500/100">{featureName}</h3>
                <p className="text-slate-400 dark:text-slate-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="dark:bg-slate-950 bg-white py-16 pb-24 mx-auto px-6 pt-40">
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
            fallback={
              <h2 className="text-white text-center text-3xl">Oops! An error occurred.Please reload the page</h2>
            }
          >
            <Suspense fallback={<TableSkeleton />}>
              <UserTable hooksOptions={hooksOptions} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>
    </>
  );
};

export default UserListSection;
