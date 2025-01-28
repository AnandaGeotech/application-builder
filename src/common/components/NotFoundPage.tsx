import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="flex flex-col items-center space-y-6 justify-center min-h-screen text-center text-slate-200 bg-slate-900">
    <img src="/src/assets/pngs/error404.png" alt="error" className="h-5/12 md:h-2/12 w-5/12 md:w-2/12" />
    <h3 className="text-2xl lg:text-3xl font-bold text-indigo-500/100">Oops! Something went wrong!</h3>
    <Link
      to="/"
      className="mt-6 pl-4 pr-8 hover:bg-indigo-600/100 py-2 bg-indigo-500/100 rounded-full font-bold flex items-center space-x-1"
    >
      <IoMdArrowRoundBack />
      <p>Go Back Home</p>
    </Link>
  </div>
);

export default NotFoundPage;
