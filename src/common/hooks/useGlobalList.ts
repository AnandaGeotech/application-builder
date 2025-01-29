/* eslint-disable boundaries/no-unknown */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ColumnDef, SortingState } from '@tanstack/react-table';
import { createResource, delay } from '@/lib/utils';
import useDebounce from '@/common/hooks/use-debounce';
import { IApplicationGlobalListRes } from '@/types/common.type';
import { IApplicatioDBService } from '@/types/feature.type';

export type GroupedColumnDef<T> = {
  id: string;
  header: string;
  columns: ColumnDef<T>[];
};

export type ColumnDefinition<T> = ColumnDef<T> | GroupedColumnDef<T>;
const useGlobalList = <T extends Record<string, unknown> & { id: string }>({
  serviceMethods,
  generateColumns,
  setcolumns,
}: {
  serviceMethods: IApplicatioDBService<T>;
  generateColumns?: (headers: (keyof T)[], data: IApplicationGlobalListRes<T>) => ColumnDefinition<T>[];
  setcolumns?: React.Dispatch<React.SetStateAction<ColumnDef<T>[]>>;
}) => {
  const { getAllDataFromDBFn, deleteDataFromDBFn } = serviceMethods;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectuserInfo, setselectuserInfo] = useState<T | undefined>();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [limitperPage, setlimitperPage] = useState(5);
  const [searchTerm, setsearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // Debounce for 500ms
  const [currentPage, setCurrentPage] = useState(1);
  const [dataResource, setdataResource] = useState<{
    read: () => IApplicationGlobalListRes<T>;
  } | null>(null);
  const [listData, setlistData] = useState<IApplicationGlobalListRes<T> | null>(null);

  const loadData = async () => {
    setdataResource(null);
    await delay(1000);

    const allDataPromise = getAllDataFromDBFn({
      currentPage,
      limitperPage,
      searchTerm: debouncedSearchTerm,
    });
    allDataPromise.then((res) => {
      const headers = res?.data?.length && res.data.length > 0 ? (Object.keys(res.data[0]) as (keyof T)[]) : [];
      if (generateColumns && setcolumns) {
        setcolumns(generateColumns(headers, res));
      }

      setlistData(res);
    });
    // Dynamically extract headers if data exists

    const resource = createResource(() => allDataPromise);
    setdataResource(resource);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleSearch = (query: string) => {
    setdataResource(null);
    setsearchTerm(query);
  };
  useEffect(() => {
    loadData();
  }, [debouncedSearchTerm, currentPage]);
  const openModal = (info: T) => {
    setselectuserInfo(info);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const handleDelete = async () => {
    await deleteDataFromDBFn(selectuserInfo?.id as string);
    setdataResource(null);

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
    setsearchTerm,
    limitperPage,
    setlimitperPage,
    listData,
    setlistData,
    handleDelete,
    selectuserInfo,
    setselectuserInfo,
    openModal,
    handleConfirm,
    closeModal,
    isModalOpen,
    sorting,
    setSorting,
  };
};

export default useGlobalList;
