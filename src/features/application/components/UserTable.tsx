/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import { TableApplicationUserListProps } from '../type/application.type';
import UserListReactTable from './UserListReactTable';
import GlobalModal from '@/common/components/Modal';
import ConfirmModal from '@/common/components/ConfirmModal';

type hooksOptions = {
  hooksOptions: TableApplicationUserListProps;
};
const UserTable: FC<hooksOptions> = ({ hooksOptions }) => {
  const {
    dataResource,
    headers,
    handleConfirm,
    closeModal,
    isModalOpen,
    visibleHeaders,
    toggleHeader,
    handleConfirmOptionModalFn,
    closeOptionModalFn,
    isModalOptionOpen,
  } = hooksOptions;
  if (!dataResource) {
    throw new Promise(() => {
      // dummy comment
    });
  }
  const data = dataResource.read();

  return (
    <>
      <ConfirmModal
        isOpen={isModalOpen}
        title="Delete account"
        description="Are you sure you want to Delete your account? This action cannot be undone."
        onClose={closeModal}
        onConfirm={handleConfirm}
        confirmLabel="Delete"
        cancelLabel="Cancel"
      />
      <GlobalModal
        isOpen={isModalOptionOpen}
        title="Option Modal"
        description=""
        onClose={closeOptionModalFn}
        onConfirm={handleConfirmOptionModalFn}
        confirmLabel="Submit"
        cancelLabel="Cancel"
      >
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Select Columns to Display:</h2>
          <div className="grid grid-cols-2 gap-2 text-black">
            {headers.map((key) => (
              <label key={key as string} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={visibleHeaders.has(key)}
                  onChange={() => toggleHeader(key)}
                />
                <span>{key}</span>
              </label>
            ))}
          </div>
        </div>
      </GlobalModal>
      <UserListReactTable hooksOptions={{ ...hooksOptions, data }} />
    </>
  );
};
export default UserTable;
