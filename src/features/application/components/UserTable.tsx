/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable boundaries/no-unknown */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line boundaries/no-unknown

import { Link } from 'react-router-dom';
import { BiPencil, BiTrashAlt } from 'react-icons/bi';
import { BsEyeFill, BsThreeDotsVertical } from 'react-icons/bs';
import { FC, useState } from 'react';
import { TableApplicationUserListProps } from '../type/application.type';
import { capitalize } from '@/lib/utils';
import GlobalModal from '@/common/components/Modal';
import { Button } from '@/common/components/Button';
// import { useClickAway } from 'ahooks';

const UserTable: FC<TableApplicationUserListProps> = ({
  dataResource,
  headers,
  getDisplayValue,
  openModal,
  handleConfirm,
  closeModal,
  isModalOpen,
}) => {
  if (!dataResource) {
    throw new Promise(() => {});
  }
  const data = dataResource.read();
  // console.log(data.data);

  const [activeRowId, setActiveRowId] = useState<string | null>(null);

  const toggleIcons = (id: string) => {
    setActiveRowId((prevId) => (prevId === id ? null : id)); // Toggle or close the icon list
  };
  // const iconListRef = useRef(null); // Ref for the icon list container

  // useClickAway(() => {
  //   setActiveRowId(null); // Close any open icon list when clicking outside
  // }, iconListRef);

  return (
    <>
      {' '}
      <div>
        {data?.data?.length > 0 ? (
          <table className="table-auto w-full relative">
            <thead>
              <tr className="text-indigo-500/100 bg-slate-800 dark:bg-slate-300 text-sm md:text-base h-8">
                <th className="font-bold whitespace-nowrap text-center">Actions</th>
                {headers.map((header) => (
                  <th key={header} className="p-4 font-bold whitespace-nowrap text-center">
                    {capitalize(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.data.map((item) => (
                <tr key={item.id} className="bg-slate-950 dark:bg-white transition-colors h-10">
                  <td className="flex gap-3 h-full text-slate-200 dark:text-slate-600 items-center p-4 bg-opacity-50 text-sm md:text-base whitespace-nowrap text-center">
                    <input type="checkbox" className="bg-slate-600 " />
                    {activeRowId === item.id && (
                      <div className="absolute flex justify-center bg-slate-900 dark:bg-slate-300 items-center px-3 rounded-lg left-0">
                        <Link className="" to={`/edit/${item.id}`}>
                          <BiPencil size={14} className="hover:text-slate-400" />
                        </Link>
                        <Button onClick={() => openModal(item)}>
                          <BiTrashAlt className="text-red-500 hover:text-red-400" size={14} />
                        </Button>
                        <Link to={`user/${item.id}`}>
                          <BsEyeFill className="text-indigo-500 hover:text-indigo-400" size={14} />
                        </Link>
                      </div>
                    )}

                    <Button onClick={() => toggleIcons(item.id)}>
                      <BsThreeDotsVertical />
                    </Button>
                  </td>
                  {headers.map((header) => (
                    <td
                      key={header}
                      className="p-4 text-slate-300 dark:text-slate-700 text-sm md:text-base whitespace-nowrap text-center bg-slate-950 dark:bg-white border-b-2 border-slate-700 dark:border-slate-200"
                    >
                      <p>{getDisplayValue(item[header])}</p>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-slate-300 text-sm md:text-base p-4">Loading data ...</div>
        )}
      </div>
      <GlobalModal
        isOpen={isModalOpen}
        title="Delete account"
        description="Are you sure you want to Delete your account? This action cannot be undone."
        onClose={closeModal}
        onConfirm={handleConfirm}
        confirmLabel="Delete"
        cancelLabel="Cancel"
      />
    </>
  );
};
export default UserTable;
