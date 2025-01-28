/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable boundaries/no-unknown */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line boundaries/no-unknown
import { FC } from 'react';
import { TableApplicationUserListProps } from '../type/application.type';
import UserListReactTable from './UserListReactTable';
import GlobalModal from '@/common/components/Modal';
import ConfirmModal from '@/common/components/ConfirmModal';

type hooksOptions = {
  hooksOptions: TableApplicationUserListProps;
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
