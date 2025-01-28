/* eslint-disable react/no-array-index-key */
const UserDetailSkeletonLoader = () => {
  const Div1 = <div className="h-6 bg-gray-300 rounded dark:bg-gray-700 w-1/2 animate-pulse" />;

  const Div2 = <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 w-3/4 animate-pulse" />;

  const Div3 = <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 w-2/3 animate-pulse" />;

  return (
    <>
      <section className="w-11/12 md:w-4/5 flex flex-col md:flex-row  bg-slate-200 dark:bg-gray-800 p-4 md:p-8 rounded-xl shadow-lg ">
        <div className="dark:bg-gray-800 bg-slate-200 w-full   p-4 py-10 md:p-8 ">
          <div className="grid grid-cols-2 gap-y-4 md:gap-y-8 py-4">
            {Array.from({ length: 1 }).map((_, index) => (
              <div key={index}>
                <div className="flex flex-col space-y-4">
                  {Div1}
                  {Div2}
                  {Div3}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Information Section */}
      <section className="w-11/12 md:w-4/5 flex flex-col md:flex-row gap-6 ">
        {/* Personal Info */}
        <div className="bg-slate-200 dark:bg-gray-800  w-full md:w-1/2 rounded-xl p-4 py-10 md:p-8 border-b-2 border-gray-600">
          <h3 className="text-2xl font-bold pb-6 dark:text-white text-gray-700 border-b-2 border-gray-600">
            Personal Information
          </h3>

          <div className="grid grid-cols-2 gap-y-4 md:gap-y-8 py-4 pb-16">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index}>
                <div className="flex flex-col space-y-4">
                  {Div1}
                  {Div2}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-y-6 py-4">
            <div>
              <div className="flex flex-col space-y-4">
                {Div1}
                {Div2}
                {Div3}
              </div>
            </div>
            <div />
          </div>
        </div>

        {/* Education & Professional Info */}
        <div className="w-full md:w-1/2 rounded-xl space-y-6">
          <div className="bg-slate-200 dark:bg-gray-800  rounded-xl p-4 py-10 md:p-8 border-b-2 border-gray-600">
            <h3 className="text-2xl font-bold pb-6 dark:text-white text-gray-700 border-b-2 border-gray-600">
              Education Information
            </h3>
            <div className="grid grid-cols-1 space-y-4 md:space-y-8 py-4">
              {Array.from({ length: 1 }).map((_, index) => (
                <div key={index}>
                  <div className="flex flex-col space-y-4">
                    {Div1}
                    {Div2}
                    {Div3}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-200 dark:bg-gray-800 rounded-xl p-4 py-10 md:p-8 border-b-2 border-gray-600">
            <h3 className="text-2xl font-bold pb-6 dark:text-white text-gray-700 border-b-2 border-gray-600">
              Professional Information
            </h3>
            <div className="grid grid-cols-1 space-y-4 md:space-y-8 py-4">
              {Array.from({ length: 1 }).map((_, index) => (
                <div key={index}>
                  <div className="flex flex-col space-y-4">
                    {Div1}
                    {Div2}
                    {Div3}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section
        className="w-11/12 md:w-4/5 flex flex-col gap-4 justify-between dark:bg-gray-800 bg-slate-200 mt-6 p-4 md:p-8 py-10 rounded-xl border-b-2 border-gray-600
       dark:text-slate-400 text-slate-700"
      >
        <h3 className="text-2xl font-bold dark:text-white text-gray-700 border-b-2 pr-2 border-gray-600 pb-6">
          Social Links
        </h3>
      </section>
    </>
  );
};
export default UserDetailSkeletonLoader;
