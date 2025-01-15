import { MdEmail } from 'react-icons/md';
import { FaIdCardClip } from 'react-icons/fa6';
import { FaPhoneAlt, FaAddressCard } from 'react-icons/fa';

export const Component = () => (
  <main className="bg-slate-800 text-slate-200 min-h-screen flex flex-col items-center space-y-10 py-6">
    <section className="w-4/5 ">
      <h3 className="text-indigo-500/100 text-4xl font-bold text-center">User Information</h3>
    </section>

    <section className="w-4/5 bg-slate-900 flex flex-col md:flex-row gap-6 p-2 md:p-6 rounded-xl">
      <div className="w-full md:w-1/2 flex justify-start items-center space-x-6 md:space-x-12">
        <img src="src/assets/pngs/profile-img.jpg" alt="profile" className="h-16 md:h-24 w-16 md:w-24 rounded-full" />
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-indigo-500/100">John Doe</h3>
          <p className="text-slate-400">UI-UX Designer | Product Department</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 grid grid-cols-2">
        <p className="flex items-center gap-1">
          <FaIdCardClip className="text-indigo-500/100" />
          ID:
        </p>
        <p>
          <MdEmail className="text-indigo-500/100" />
          Email:
        </p>
        <p>
          <FaPhoneAlt className="text-indigo-500/100" />
          Ph. No:
        </p>
        <p>
          <FaAddressCard className="text-indigo-500/100" />
          Address:
        </p>
      </div>
    </section>
  </main>
);

// export default UserDetails;
