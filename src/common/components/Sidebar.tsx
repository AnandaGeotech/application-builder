import { FaUsersGear } from 'react-icons/fa6';
import { GrHelpBook } from 'react-icons/gr';
import { IoLogoWebComponent } from 'react-icons/io5';
import { PiChartPieSliceFill } from 'react-icons/pi';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        <li>
          <Link
            to="/"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <PiChartPieSliceFill
              className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
            />
            <span className="ms-3">Dashboard</span>
          </Link>
        </li>

        <li>
          <Link
            to="/users"
            className={`flex items-center p-2 rounded-lg group ${
              location.pathname === '/users'
                ? 'dark:text-white bg-gray-300 dark:bg-gray-700'
                : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <FaUsersGear
              size={25}
              className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
            />
            <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
          </Link>
        </li>
        {/* <li>
          <Link
            to="/"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <FaShoppingBag
              className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
            />
            <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <PiSignInBold
              className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
            />
            <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <RiFileEditFill
              className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
            />
            <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
          </Link>
        </li> */}
      </ul>
      <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
        {/* <li>
          <Link
            to="/"
            className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
          >
            <IoDocumentAttachSharp
              className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
            />
            <span className="ms-3">Documentation</span>
          </Link>
        </li> */}
        <li>
          <Link
            to="/"
            className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
          >
            <IoLogoWebComponent
              className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
            />
            <span className="ms-3">Components</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
          >
            <GrHelpBook
              className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
            />
            <span className="ms-3">Help</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
