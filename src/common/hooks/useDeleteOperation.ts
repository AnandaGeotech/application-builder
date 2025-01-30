/* eslint-disable no-unused-vars */
import { useState } from 'react';
import toast from 'react-hot-toast';

export const useDeleteOperation = <T extends { id: string }>(deleteDataFromDBFn: (id: string) => Promise<void>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectUserInfo, setSelectUserInfo] = useState<T | undefined>();

  const openModal = (info: T) => {
    setSelectUserInfo(info);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleDelete = async () => {
    if (!selectUserInfo?.id) return;

    await deleteDataFromDBFn(selectUserInfo.id);
    toast.success('File deleted successfully!');
    closeModal();
  };

  return {
    isModalOpen,
    selectUserInfo,
    setSelectUserInfo,
    openModal,
    closeModal,
    handleDelete,
    handleConfirm: handleDelete,
  };
};
