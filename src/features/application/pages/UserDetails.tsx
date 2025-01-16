import { MdEmail, MdCorporateFare } from 'react-icons/md';
import { FaIdCardClip, FaXTwitter } from 'react-icons/fa6';
import { FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const userDetails = [
  { icon: <FaIdCardClip />, label: 'ID', value: '12345' },
  { icon: <MdEmail />, label: 'Email', value: 'john.doe@exampse.com' },
  { icon: <FaPhoneAlt />, label: 'Ph. No', value: '+98 98999 98999' },
  { icon: <MdCorporateFare />, label: 'Company', value: 'GeoTech' },
];

const personalInfo = [
  { label: 'Gender', value: 'M' },
  { label: 'Date of Birth', value: '29/12/1994' },
  { label: 'Hometown', value: 'Michigan' },
  { label: 'Country', value: 'USA' },
  { label: 'Language', value: 'English' },
  { label: 'Marital Status', value: 'Single' },
];

const addresses = [
  { label: 'Permanent Address', value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nemo?' },
  { label: 'Current Address', value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, labore!' },
];

const educationInfo = [
  { label: 'College', duration: '2017-2021', description: 'Lorem ipsum dolor sit' },
  { label: 'Higher Secondary', duration: '2015-2017', description: 'Lorem ipsum dolor sit' },
  { label: 'Secondary', duration: '2013-2015', description: 'Lorem ipsum dolor sit' },
];

const professionalInfo = [
  { label: 'Company-3', duration: '2023-2024', description: 'Lorem ipsum dolor sit' },
  { label: 'Company-2', duration: '2022-2023', description: 'Lorem ipsum dolor sit' },
  { label: 'Company-1', duration: '2021-2022', description: 'Lorem ipsum dolor sit' },
];

const socialLinks = [
  {
    icon: <FaLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedIn/username',
    link: '/',
  },
  {
    icon: <FaXTwitter size={20} />,
    label: 'Twitter',
    value: 'x/username',
    link: '/',
  },
  {
    icon: <FaGithub size={20} />,
    label: 'GitHub',
    value: 'github/username',
    link: '/',
  },
];

export const Component = () => (
  <main className="bg-slate-800 text-slate-200 min-h-screen flex flex-col items-center space-y-6 py-6">
    {/* Header Section */}
    <section className="w-11/12 md:w-4/5">
      <h3 className="text-indigo-500/100 text-3xl md:text-4xl font-bold text-center">User Information</h3>
    </section>

    {/* User Info Card */}
    <section className="w-11/12 md:w-4/5 bg-slate-900 flex flex-col md:flex-row gap-6 p-4 py-10 md:p-8 rounded-xl shadow-lg border-b-2 border-indigo-500/100">
      <div className="w-full md:w-1/3 flex flex-col items-center md:flex-row md:items-start md:space-x-6">
        <img
          src="/src/assets/jpgs/profile-img.jpg"
          alt="Profile"
          className="h-20 w-20 md:h-32 md:w-32 rounded-full border-4 border-indigo-500/100 hover:scale-75 hover:transition-all hover:ease-in-out"
        />
        <div className="mt-4 md:mt-0 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-indigo-500/100">John Doe</h3>
          <p className="text-slate-400 mt-1">UI-UX Designer | Product Department</p>
          <p className="text-sm text-slate-500">Based in New York, USA</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6 text-indigo-500/100 ">
        {userDetails.map(({ icon, label, value }) => (
          <div className="flex items-center" key={label}>
            <span className="text-indigo-500/100 mr-2">{icon}</span>
            <span className="text-sm md:text-base font-bold">{label}:</span>
            <p className="ml-2 text-slate-400 break-all md:break-words">{value}</p>
          </div>
        ))}
      </div>
    </section>

    {/* More Information Section */}
    <section className="w-11/12 md:w-4/5 flex flex-col md:flex-row gap-6 ">
      {/* Personal Info */}
      <div className="bg-slate-900 w-full md:w-1/2 rounded-xl p-4 py-10 md:p-8 border-b-2 border-indigo-500/100">
        <h3 className="text-2xl font-bold pb-6 text-indigo-500/100 border-b-2 border-b-indigo-800/100">
          Personal Information
        </h3>
        <div className="grid grid-cols-2 gap-y-4 md:gap-y-8 py-4">
          {personalInfo.map(({ label, value }) => (
            <div key={label}>
              <h6 className="font-bold text-indigo-500/100">{label}</h6>
              <p className="text-slate-400">{value}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-y-6 py-4">
          {addresses.map(({ label, value }) => (
            <div key={label}>
              <h6 className="font-bold text-indigo-500/100">{label}</h6>
              <p className="text-slate-400">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Professional Info */}
      <div className="w-full md:w-1/2 rounded-xl space-y-6">
        {[
          { title: 'Education Information', data: educationInfo },
          { title: 'Professional Information', data: professionalInfo },
        ].map(({ title, data }) => (
          <div className="bg-slate-900 rounded-xl p-4 py-10 md:p-8 border-b-2 border-indigo-500/100" key={title}>
            <h3 className="text-2xl font-bold pb-6 text-indigo-500/100 border-b-2 border-b-indigo-800/100">{title}</h3>
            <div className="grid grid-cols-1 space-y-4 md:space-y-8 py-4">
              {data.map(({ label, duration, description }) => (
                <div key={label}>
                  <h6 className="font-bold text-indigo-500/100 flex justify-between">
                    {label}
                    <span className="font-bold text-slate-700 text-sm">{duration}</span>
                  </h6>
                  <p className="text-slate-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Social Links Section */}
    <section className="w-11/12 md:w-4/5 flex flex-col md:flex-row gap-4 justify-between bg-slate-900 mt-6 p-4 md:p-8 py-10 md:py-4 rounded-xl border-b-2 border-indigo-500/100">
      <h3 className="text-2xl font-bold text-indigo-500/100 border-b-2 md:border-b-0 md:border-r-2 pr-2 border-indigo-800/100">
        Social Links
      </h3>
      {socialLinks.map(({ icon, label, value, link }) => (
        <div className="flex items-center space-x-2" key={label}>
          <a
            href={link}
            className="text-indigo-500/100 hover:text-indigo-400 transition"
            aria-label={`${label} Profile`}
          >
            {icon}
          </a>
          <p className="text-slate-400 hover:border-b-2 border-indigo-500/100 cursor-pointer">
            <a href={`${link}`}>{value}</a>
          </p>
        </div>
      ))}
    </section>
  </main>
);
