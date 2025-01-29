/* eslint-disable boundaries/element-types */
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';
import ThemeProvider from '../components/ThemeProvider';
import Sidebar from '@/features/application/components/Sidebar';
import { Button } from '@/common/components/Button';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <Button
                onClick={toggleSidebar}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="border-0 md:hidden hover:bg-transparent"
              >
                <span className="sr-only">Open sidebar</span>
                <FaBarsStaggered />
              </Button>
              <Link to="/" className="flex ms-2 md:me-24">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Application Builder
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div className="flex">
                  <Button
                    type="button"
                    className="border-0 "
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user "
                    />
                  </Button>
                  <ThemeProvider />
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                      Neil Sims
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform sm:translate-x-0 -translate-x-full  bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <Sidebar />
      </aside>

      {/* mobile aside  */}
      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:-translate-x-full`}
        aria-label="Sidebar"
      >
        <Sidebar />
      </aside>
      <div className=" sm:ml-64 flex flex-col justify-between h-screen ">
        <div className="dark:border-gray-700 ">
          <Outlet />
        </div>
        <footer className=" text-gray-400 py-6">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2025 Application Builder. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
