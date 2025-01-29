/* eslint-disable boundaries/no-unknown */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC } from 'react';
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

// types and interfaces for this component
type TProps = {
  dataResource: {
    read: () => IApplicationUser;
  } | null;
};

interface DetailsSectionProps {
  label: string;
  value: string | undefined;
  icon: React.ReactNode;
}

interface InfoSectionProps {
  label: string;
  value: string | undefined;
}

// common styles and tsx structures used here
const infoTitleStyle = 'font-bold dark:text-white text-gray-700';

const DetailsSectionComponent: React.FC<DetailsSectionProps> = ({ icon, label, value }) => (
  <div className="flex items-center">
    <span className="dark:text-white text-gray-800 mr-2">{icon}</span>
    <span className={`text-sm md:text-base ${infoTitleStyle}`}>{label}:</span>
    <p className="ml-2 break-all md:break-words">{value}</p>
  </div>
);

const InformationSectionComponent: React.FC<InfoSectionProps> = ({ label, value }) => (
  <div>
    <h6 className={`${infoTitleStyle}`}>{label}</h6>
    <p>{value}</p>
  </div>
);

// Main component
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
      <section
        className="w-11/12 md:w-4/5  bg-slate-200 dark:bg-gray-800 flex flex-col md:flex-row gap-6 p-4 py-10 md:p-8 rounded-xl shadow-lg border-b-2
       dark:text-slate-400 text-slate-700 border-gray-600"
      >
        <div className="w-full md:w-1/3 flex flex-col items-center md:flex-row md:items-start md:space-x-6 ">
          <img
            src="/src/assets/jpgs/profile-img.jpg"
            alt="Profile"
            className="h-20 w-20 md:h-32 md:w-32 rounded-full border-4 border-gray-600 hover:scale-75 hover:transition-all hover:ease-in-out"
          />
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold dark:text-white text-gray-800">
              {capitalize(userInfoData?.firstName)}
              {capitalize(userInfoData?.lastName)}
            </h3>
            <p className=" mt-1">UI-UX Designer | Product Department</p>
            <p className="text-sm ">Based in New York, USA</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2  ">
          <div>
            <DetailsSectionComponent icon={<FaIdCardClip />} label="ID" value={userInfoData?.id} />
            <DetailsSectionComponent icon={<MdEmail />} label="Email" value={userInfoData?.email} />
          </div>
          <div>
            <DetailsSectionComponent icon={<FaPhoneAlt />} label="Ph. No" value={userInfoData?.phone} />
            <DetailsSectionComponent icon={<MdCorporateFare />} label="Company" value={userInfoData?.company} />
          </div>
        </div>
      </section>

      {/* More Information Section */}
      <section className="w-11/12 md:w-4/5 flex flex-col md:flex-row gap-6 dark:text-slate-400 text-slate-700">
        {/* Personal Info */}
        <div className="dark:bg-gray-800 bg-slate-200 w-full md:w-1/2 rounded-xl p-4 py-10 md:p-8 border-b-2 border-gray-600">
          <h3 className={`text-2xl pb-6 ${infoTitleStyle} border-b-2 border-b-gray-600`}>Personal Information</h3>

          <div className="grid grid-cols-2 gap-y-4 md:gap-y-8 py-4">
            <InformationSectionComponent label="Gender" value={userInfoData?.gender} />
            <InformationSectionComponent label="Date of Birth" value={userInfoData?.birthDate} />
            <InformationSectionComponent label="Hometown" value={userInfoData?.hometown} />
            <InformationSectionComponent label="Language" value={userInfoData?.language} />
            <InformationSectionComponent label="Marital Status" value={userInfoData?.maritalStatus} />
          </div>
          <div className="grid grid-cols-1 gap-y-6 py-4">
            <InformationSectionComponent label="Permanent Address" value={userInfoData?.permanentAddress} />
            <InformationSectionComponent label="Current Address" value={userInfoData?.presentAddress} />
          </div>
        </div>

        {/* Education & Professional Info */}
        <div className="w-full md:w-1/2 rounded-xl space-y-6 ">
          <div className="dark:bg-gray-800 bg-slate-200 rounded-xl p-4 py-10 md:p-8 border-b-2 border-gray-600">
            <h3 className={`text-2xl pb-6 ${infoTitleStyle} border-b-2 border-b-gray-600`}>Education Information</h3>
            <div className="grid grid-cols-1 space-y-4 md:space-y-8 py-4">
              {userInfoData?.education.map(({ label, duration, description }) => (
                <div key={label}>
                  <h6 className={`${infoTitleStyle} flex justify-between`}>
                    {label}
                    <span className="font-bold text-sm">{duration}</span>
                  </h6>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="dark:bg-gray-800 bg-slate-200 rounded-xl p-4 py-10 md:p-8 border-b-2 border-gray-600">
            <h3 className={`text-2xl pb-6 ${infoTitleStyle} border-b-2 border-b-gray-600`}>Professional Information</h3>
            <div className="grid grid-cols-1 space-y-4 md:space-y-8 py-4 ">
              {userInfoData?.profession?.map(({ label, duration, description }) => (
                <div key={label}>
                  <h6 className={`${infoTitleStyle} flex justify-between`}>
                    {label}
                    <span className="font-bold text-sm">{duration}</span>
                  </h6>
                  <p>{description}</p>
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
        <h3 className={`text-2xl ${infoTitleStyle} border-b-2 pr-2 border-gray-600 pb-6`}>Social Links</h3>
        {socialLinks.map(({ icon, label, value, link }) => (
          <div className="flex items-center space-x-2" key={label}>
            <a
              href={link}
              className="dark:text-white text-gray-600 hover:text-gray-600 transition"
              aria-label={`${label} Profile`}
            >
              {icon}
            </a>
            <p className=" hover:border-b-2 border-gray-600 cursor-pointer">
              <a href={`${link}`}>{value}</a>
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default UserInfo;
