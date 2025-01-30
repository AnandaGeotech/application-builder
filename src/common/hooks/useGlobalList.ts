/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ColumnDef, SortingState } from '@tanstack/react-table';
import { createResource, delay } from '@/common/components/utils';
import useDebounce from '@/common/hooks/use-debounce';
import { IApplicationGlobalListRes } from '@/common/types/common.type';
import { IApplicationDBService } from '@/common/types/feature.type';

export type GroupedColumnDef<T> = {
  id: string;
  header: string;
  columns: ColumnDef<T>[];
};

export type ColumnDefinition<T> = ColumnDef<T> | GroupedColumnDef<T>;
const useGlobalList = <T extends Record<string, unknown> & { id: string }>({
  serviceMethods,
  generateColumns,
  setColumns,
}: {
  serviceMethods: IApplicationDBService<T>;
  generateColumns?: (
    headers: (keyof T)[],
    data: IApplicationGlobalListRes<T>,
    openModal: (info: T) => void
  ) => ColumnDefinition<T>[];
  setColumns?: React.Dispatch<React.SetStateAction<ColumnDef<T>[]>>;
}) => {
  const { getAllDataFromDBFn, deleteDataFromDBFn } = serviceMethods;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectUserInfo, setSelectUserInfo] = useState<T | undefined>();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [record, setRecord] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // Debounce for 500ms
  const [currentPage, setCurrentPage] = useState(1);
  const [dataResource, setDataResource] = useState<{
    read: () => IApplicationGlobalListRes<T>;
  } | null>(null);
  const [listData, setlistData] = useState<IApplicationGlobalListRes<T> | null>(null);
  const openModal = (info: T) => {
    setSelectUserInfo(info);
    setIsModalOpen(true);
  };
  const loadData = async () => {
    setDataResource(null);
    await delay(1000);

    const allDataPromise = getAllDataFromDBFn({
      currentPage,
      record,
      searchTerm: debouncedSearchTerm,
    });
    allDataPromise.then((res) => {
      const headers = res?.data?.length && res.data.length > 0 ? (Object.keys(res.data[0]) as (keyof T)[]) : [];
      if (generateColumns && setColumns) {
        setColumns(generateColumns(headers, res, openModal));
      }

      setlistData(res);
    });
    // Dynamically extract headers if data exists

    const resource = createResource(() => allDataPromise);
    setDataResource(resource);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleSearch = (query: string) => {
    setDataResource(null);
    setSearchTerm(query);
  };
  useEffect(() => {
    loadData();
  }, [debouncedSearchTerm, currentPage]);

  const closeModal = () => setIsModalOpen(false);
  const handleDelete = async () => {
    await deleteDataFromDBFn(selectUserInfo?.id as string);
    setDataResource(null);

    toast.success('File deleted successfully!');
    loadData();
    closeModal();
  };

  const handleConfirm = () => {
    handleDelete();
  };

  return {
    dataResource,
    handlePageChange,
    currentPage,
    setCurrentPage,
    handleSearch,
    searchTerm,
    setSearchTerm,
    record,
    setRecord,
    listData,
    setlistData,
    handleDelete,
    selectUserInfo,
    setSelectUserInfo,
    openModal,
    handleConfirm,
    closeModal,
    isModalOpen,
    sorting,
    setSorting,
  };
};

export default useGlobalList;
