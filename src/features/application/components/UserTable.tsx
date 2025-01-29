/* eslint-disable @typescript-eslint/no-empty-function */
import { FC } from 'react';
import { TUserListReturn } from '../hooks/useApplicationUserlist';
import UserListReactTable from './UserListReactTable';
import ConfirmModal from '@/common/components/ConfirmModal';

type hooksOptions = {
  hooksOptions: TUserListReturn;
};
const UserTable: FC<hooksOptions> = ({ hooksOptions }) => {
  const { dataResource, handleConfirm, closeModal, isModalOpen } = hooksOptions;
  if (!dataResource) {
    throw new Promise(() => {});
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

      <UserListReactTable hooksOptions={{ ...hooksOptions, data }} />
    </>
  );
};
export default UserTable;
