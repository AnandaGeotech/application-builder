/* eslint-disable react/no-array-index-key */
import ThemeProvider from '../ThemeProvider';
import TableSkeleton from './TableSkeleton';
import SearchSkeleton from './SearchSkeleton';

function DashboardSkeletonLoader() {
  return (
    <div className="dark:bg-gray-900">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <div className="flex ms-2 md:me-24">
                <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse me-3" />
                <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse" />
              </div>

              <div className="flex items-center">
                <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse" />
              </div>
              <div className="hidden">
                <ThemeProvider />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 hidden md:block">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="h-4 bg-gray-300 dark:bg-gray-700 rounded m-4 animate-pulse" />
        ))}
      </aside>

      <div className="sm:ml-64 flex flex-col justify-between h-screen p-6">
        <div className="mt-16">
          <div className="h-4 w-48 bg-gray-300 dark:bg-gray-700  rounded animate-pulse" />
          <SearchSkeleton />
          <TableSkeleton />
        </div>
        <footer className="text-gray-400 dark:text-gray-500 py-6 text-center">
          <div className="h-5 w-48 bg-gray-300 dark:bg-gray-700 rounded animate-pulse mx-auto" />
        </footer>
      </div>
    </div>
  );
}

export default DashboardSkeletonLoader;
