/* eslint-disable boundaries/no-unknown */
/* eslint-disable @typescript-eslint/no-empty-function */
import { FC } from 'react';
import { FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaIdCardClip, FaXTwitter } from 'react-icons/fa6';
import { MdCorporateFare, MdEmail } from 'react-icons/md';
import { IApplicationUser } from '@/types/application.type';
import { capitalize } from '@/lib/utils';

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
type TProps = {
  dataResource: {
    read: () => IApplicationUser;
  } | null;
};
const UserInfo: FC<TProps> = ({ dataResource }) => {
  if (!dataResource) {
    throw new Promise(() => {});
  }

  const userInfoData = dataResource.read();
  if (!userInfoData) {
    throw new Error('User data is missing!');
  }

  return (
    <>
      <section className="w-11/12 md:w-4/5 bg-slate-900 flex flex-col md:flex-row gap-6 p-4 py-10 md:p-8 rounded-xl shadow-lg border-b-2 border-indigo-500/100">
        <div className="w-full md:w-1/3 flex flex-col items-center md:flex-row md:items-start md:space-x-6">
          <img
            src="/src/assets/jpgs/profile-img.jpg"
            alt="Profile"
            className="h-20 w-20 md:h-32 md:w-32 rounded-full border-4 border-indigo-500/100 hover:scale-75 hover:transition-all hover:ease-in-out"
          />
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-indigo-500/100">
              {capitalize(userInfoData?.firstName)} {capitalize(userInfoData?.lastName)}
            </h3>
            <p className="text-slate-400 mt-1">UI-UX Designer | Product Department</p>
            <p className="text-sm text-slate-500">Based in New York, USA</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6 text-indigo-500/100 ">
          <div className="flex items-center">
            <span className="text-indigo-500/100 mr-2">
              <FaIdCardClip />
            </span>
            <span className="text-sm md:text-base font-bold">ID :</span>
            <p className="ml-2 text-slate-400 break-all md:break-words">{userInfoData?.id} </p>
          </div>

          <div className="flex items-center">
            <span className="text-indigo-500/100 mr-2">
              <MdEmail />
            </span>
            <span className="text-sm md:text-base font-bold">Email :</span>
            <p className="ml-2 text-slate-400 break-all md:break-words"> {userInfoData?.email}</p>
          </div>
          <div className="flex items-center">
            <span className="text-indigo-500/100 mr-2">
              {' '}
              <FaPhoneAlt />
            </span>
            <span className="text-sm md:text-base font-bold">Ph. No :</span>
            <p className="ml-2 text-slate-400 break-all md:break-words"> {userInfoData?.phone}</p>
          </div>
          <div className="flex items-center">
            <span className="text-indigo-500/100 mr-2">
              <MdCorporateFare />
            </span>
            <span className="text-sm md:text-base font-bold">Company :</span>
            <p className="ml-2 text-slate-400 break-all md:break-words">{userInfoData?.company}</p>
          </div>
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
            <div>
              <h6 className="font-bold text-indigo-500/100">Gender</h6>
              <p className="text-slate-400"> {userInfoData?.gender}</p>
            </div>
            <div>
              <h6 className="font-bold text-indigo-500/100">Date of Birth</h6>
              <p className="text-slate-400">{userInfoData?.birthDate}</p>
            </div>
            <div>
              <h6 className="font-bold text-indigo-500/100">Hometown</h6>
              <p className="text-slate-400">{userInfoData?.hometown}</p>
            </div>
            <div>
              <h6 className="font-bold text-indigo-500/100">Language</h6>
              <p className="text-slate-400">{userInfoData?.language}</p>
            </div>
            <div>
              <h6 className="font-bold text-indigo-500/100">Marital Status</h6>
              <p className="text-slate-400">{userInfoData?.maritalStatus}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-6 py-4">
            <div>
              <h6 className="font-bold text-indigo-500/100">Permanent Address</h6>
              <p className="text-slate-400"> {userInfoData?.permanentAddress}</p>
            </div>
            <div>
              <h6 className="font-bold text-indigo-500/100">Current Address</h6>
              <p className="text-slate-400"> {userInfoData?.presentAddress}</p>
            </div>
          </div>
        </div>

        {/* Education & Professional Info */}
        <div className="w-full md:w-1/2 rounded-xl space-y-6">
          <div className="bg-slate-900 rounded-xl p-4 py-10 md:p-8 border-b-2 border-indigo-500/100">
            <h3 className="text-2xl font-bold pb-6 text-indigo-500/100 border-b-2 border-b-indigo-800/100">
              Education Information
            </h3>
            <div className="grid grid-cols-1 space-y-4 md:space-y-8 py-4">
              {userInfoData?.education.map(({ label, duration, description }) => (
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
          <div className="bg-slate-900 rounded-xl p-4 py-10 md:p-8 border-b-2 border-indigo-500/100">
            <h3 className="text-2xl font-bold pb-6 text-indigo-500/100 border-b-2 border-b-indigo-800/100">
              Professional Information
            </h3>
            <div className="grid grid-cols-1 space-y-4 md:space-y-8 py-4">
              {userInfoData?.profession?.map(({ label, duration, description }) => (
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
    </>
  );
};

export default UserInfo;
