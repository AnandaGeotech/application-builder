/* eslint-disable @typescript-eslint/no-empty-function */
import ConfirmModal from '@/common/components/ConfirmModal';
import GlobalTable from '@/common/components/GlobalTable';
import { Pagination } from '@/common/components/Pagination';
import { IApplicationUser } from '@/common/types/application.type';
import { TUserListReturn } from '@/features/application/hooks/useApplicationUserList';

const UserTable = ({ hooksOptions }: { hooksOptions: TUserListReturn }) => {
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

      {/* <UserListReactTable hooksOptions={{ ...hooksOptions, data }} /> */}

      <GlobalTable<IApplicationUser> hooksOptions={{ ...hooksOptions, data }}>
        <GlobalTable.TableHead<IApplicationUser> />
        <GlobalTable.TableBody<IApplicationUser> />
      </GlobalTable>

      <div className="flex justify-end mt-4">
        <Pagination
          currentPage={hooksOptions?.currentPage || 0}
          totalPages={data?.pages || 0}
          onPageChange={hooksOptions?.handlePageChange}
        />
      </div>
    </>
  );
};
export default UserTable;
