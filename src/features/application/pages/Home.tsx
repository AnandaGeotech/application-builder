/* eslint-disable boundaries/no-unknown */
/* eslint-disable import/no-extraneous-dependencies */
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/common/components/Button';
import { staticFormData, capitalize } from '@/lib/utils';

const Home = () => {
  const navigate = useNavigate();

  const handleCreate = () => navigate('/add');

  return (
    <div className="bg-slate-800 text-gray-800">
      {/* Hero Section */}
      <section className="bg-slate-800 py-16">
        <div className="container mx-auto px-6 text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-indigo-500/100 mb-4">Build Applications Faster</h1>
            <p className="text-lg text-slate-400 mb-6">
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

          {/* Search Box div */}
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
      </section>

      {/* Features Section */}
      <section className="py-16 pb-24 bg-slate-900 text-slate-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-indigo-500/100 mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-4/5 mx-auto md:w-full">
            <div className="p-6 bg-slate-800 shadow-sm shadow-black rounded-lg text-center border-x-4 border-indigo-500/100">
              <div className="text-blue-600 text-4xl mb-4">&#x2699;</div>
              <h3 className="text-xl font-bold mb-2">Drag-and-Drop</h3>
              <p className="text-slate-400">Easily create applications with an intuitive drag-and-drop interface.</p>
            </div>
            <div className="p-6 bg-slate-800 shadow-sm shadow-black rounded-lg text-center border-x-4 border-indigo-500/100">
              <div className="text-blue-600 text-4xl mb-4">&#x1F4BB;</div>
              <h3 className="text-xl font-bold mb-2 ">Customizable Templates</h3>
              <p className="text-slate-400">Choose from a variety of pre-built templates tailored to your needs.</p>
            </div>
            <div className="p-6 bg-slate-800 shadow-sm shadow-black rounded-lg text-center border-x-4 border-indigo-500/100">
              <div className="text-blue-600 text-4xl mb-4">&#x1F4E6;</div>
              <h3 className="text-xl font-bold mb-2 ">Seamless Integration</h3>
              <p className="text-slate-400">Connect with popular tools and services effortlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* table */}
      <section className="bg-slate-800 py-16 pb-24 mx-auto px-6">
        <h3 className="font-bold text-indigo-500/100 text-xl lg:text-4xl mb-4 text-center">Table Demo</h3>
        <div
          className="container py-4 overflow-x-auto mx-auto rounded-lg bg-slate-800 [&::-webkit-scrollbar]:h-2
  [&::-webkit-scrollbar-track]:bg-slate-900 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-opacity-50
  [&::-webkit-scrollbar-thumb]:bg-indigo-500/100 [&::-webkit-scrollbar-thumb]:rounded-full
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          <table className="table-auto border border-indigo-500/100 w-full">
            <thead>
              <tr className=" text-indigo-500/100 bg-slate-900 text-sm md:text-base h-8">
                {staticFormData.map((item) => (
                  <th key={item.id} className=" p-2  px-4 text-left font-bold whitespace-nowrap text-center">
                    {capitalize(item.id)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-700 transition-colors h-12">
                {staticFormData.map((item) => (
                  <td
                    key={item.id}
                    className=" px-4 text-slate-300 text-sm md:text-base whitespace-nowrap text-center bg-slate-900"
                  >
                    {item.defaultValue?.toString() !== 'false' || item.defaultValue ? item.defaultValue : 'N/A'}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Demo Section */}
      <section className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-indigo-500/100">Try the Demo</h2>
          <p className="text-lg mb-6">Explore the features of our application builder and see how it works.</p>
          <Button
            className="px-6 py-3 bg-indigo-500/100 text-slate-200 font-bold rounded-lg shadow hover:bg-gray-100"
            onClick={handleCreate}
          >
            Launch Demo
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Application Builder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default Home;
