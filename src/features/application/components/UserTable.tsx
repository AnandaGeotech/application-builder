/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable boundaries/no-unknown */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line boundaries/no-unknown

import { Link } from 'react-router-dom';
import { BiPencil, BiTrashAlt } from 'react-icons/bi';
import { BsEyeFill } from 'react-icons/bs';
import { FC } from 'react';
import { capitalize } from '@/lib/utils';
import GlobalModal from '@/common/components/Modal';
import { Button } from '@/common/components/Button';
import { IApplicationUsersListRes } from '@/types/common.type';

interface TableFileListProps {
  // Function to set selected file info
  openModal: (data: any) => void; // Function to open the modal
  dataResource: {
    read: () => IApplicationUsersListRes; // Function to read data, always returning FileInfo[]
  } | null; // dataResource can be null,

  headers: string[];
  getDisplayValue: (defaultValue: unknown) => string;
  handleConfirm: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
}
const UserTable: FC<TableFileListProps> = ({
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
  return (
    <>
      {' '}
      <div>
        {data?.data?.length > 0 ? (
          <table className="table-auto border border-indigo-500/100 w-full">
            <thead>
              <tr className="text-indigo-500/100 bg-slate-900 text-sm md:text-base h-8">
                <th className="p-4 font-bold whitespace-nowrap text-center">Actions</th>
                {headers.map((header) => (
                  <th key={header} className="p-4 font-bold whitespace-nowrap text-center">
                    {capitalize(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.data.map((item) => (
                <tr key={item.id} className="bg-slate-900 transition-colors h-10">
                  <td className="flex gap-3 text-white px-2 bg-slate-900 items-center p-4  text-sm md:text-base whitespace-nowrap text-center  bg-opacity-80">
                    <Link className="bg-slate-900 " to={`/edit/${item.id}`}>
                      <BiPencil size={20} />
                    </Link>
                    <Button onClick={() => openModal(item)}>
                      <BiTrashAlt className="text-red-500" size={20} />
                    </Button>
                    <Link to={`user/${item.id}`}>
                      <BsEyeFill className="text-indigo-500" size={20} />
                    </Link>
                  </td>
                  {headers.map((header) => (
                    <td
                      key={header}
                      className="p-4 text-slate-300 text-sm md:text-base whitespace-nowrap text-center bg-slate-900 bg-opacity-80"
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
