/* eslint-disable no-unused-vars */
import { ColumnDef, SortingState } from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import useFetchData from './useFetchData';
import { useDeleteOperation } from '@/common/hooks/useDeleteOperation';
import { usePagination } from '@/common/hooks/usePagination';
import { useSearch } from '@/common/hooks/useSearch';
import { IApplicationGlobalListRes, IQueryFile } from '@/common/types/common.type';

export type GroupedColumnDef<T> = {
  id: string;
  header: string;
  columns: ColumnDef<T>[];
};

export type ColumnDefinition<T> = ColumnDef<T> | GroupedColumnDef<T>;

interface UseGlobalListOptions<T> {
  serviceMethods: {
    getAllDataFromDBFn: (props: IQueryFile) => Promise<IApplicationGlobalListRes<T>>;
    deleteDataFromDBFn?: (id: string) => Promise<void>;
  };
  customColumnGenerate?: (res: IApplicationGlobalListRes<T>, openModal: (info: T) => void) => void;
}

const useGlobalList = <T extends Record<string, unknown> & { id: string }>({
  serviceMethods,
  customColumnGenerate,
}: UseGlobalListOptions<T>) => {
  const { getAllDataFromDBFn, deleteDataFromDBFn } = serviceMethods;
  const [selectUserInfo, setSelectUserInfo] = useState<T | undefined>();
  const [sorting, setSorting] = useState<SortingState>([]);

  // Optional pagination hook
  const pagination = usePagination();

  // Optional search hook
  const search = useSearch();

  // Optional delete hook
  const deleteOps = useDeleteOperation<T>(deleteDataFromDBFn);
  const { dataResource, fetchData: listData, error, loadData } = useFetchData<IApplicationGlobalListRes<T>>();

  async function fetchDataFn() {
    const res = await loadData(() =>
      getAllDataFromDBFn({
        currentPage: pagination.currentPage,
        record: pagination.record,
        searchTerm: search.debouncedSearchTerm,
      })
    );
    if (customColumnGenerate) {
      customColumnGenerate(res, deleteOps.openModal);
    }
  }
  useEffect(() => {
    fetchDataFn();
  }, [search.debouncedSearchTerm, pagination.currentPage, deleteOps.invalidateTag]);

  return {
    dataResource,
    listData,
    // setListData,
    sorting,
    setSorting,
    ...pagination,
    ...deleteOps,
    ...search,
    selectUserInfo,
    setSelectUserInfo,
    loadData,
    error,
  };
};

export default useGlobalList;
