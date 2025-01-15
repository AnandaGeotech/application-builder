import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="h-20 md:h-24 bg-slate-900 flex space-x-4 items-center">
      <div className="w-20 md:w-24 bg-indigo-500/100 h-full rounded-r-2xl shadow-xl flex justify-center items-center border-b-2 border-slate-900">
        <Link to="/">
          <img src="src/assets/pngs/img1.png" alt="icon" className="h-12 w-12" />
        </Link>
      </div>
      <h3 className="text-slate-100 font-bold text-xl">Application Builder</h3>
    </nav>
  );
}

export default Navbar;
