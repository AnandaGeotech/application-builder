import ConfirmModal from '@/common/components/ConfirmModal';
import { Pagination } from '@/common/components/Pagination';
import GlobalTable from '@/common/components/table/GlobalTable';
import { IApplicationUser } from '@/common/types/application.type';
import { TUserListReturn } from '@/features/application/hooks/useApplicationUserList';

const UserTable = ({ hooksOptions }: { hooksOptions: TUserListReturn }) => {
  const { dataResource, handleConfirm, closeModal, isModalOpen } = hooksOptions;
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

      <GlobalTable<IApplicationUser> hooksOptions={{ ...hooksOptions, data }} />
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
