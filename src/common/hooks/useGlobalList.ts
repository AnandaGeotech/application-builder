/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */
import { ColumnDef, SortingState } from '@tanstack/react-table';
import React, { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { createResource, delay } from '@/common/components/utils';
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
  generateColumns?: (
    headers: (keyof T)[],
    data: IApplicationGlobalListRes<T>,
    navigate: NavigateFunction,
    openModal?: (info: T) => void
  ) => ColumnDefinition<T>[];

  setColumns?: React.Dispatch<React.SetStateAction<ColumnDef<T>[]>>;
  enablePagination?: boolean;
  enableDelete?: boolean;
}

const useGlobalList = <T extends Record<string, unknown> & { id: string }>({
  serviceMethods,
  generateColumns,
  setColumns,
}: UseGlobalListOptions<T>) => {
  const { getAllDataFromDBFn, deleteDataFromDBFn } = serviceMethods;
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [selectUserInfo, setSelectUserInfo] = useState<T | undefined>();
  const [sorting, setSorting] = useState<SortingState>([]);

  const [dataResource, setDataResource] = useState<{
    read: () => IApplicationGlobalListRes<T>;
  } | null>(null);
  const [listData, setListData] = useState<IApplicationGlobalListRes<T> | null>(null);

  // Optional pagination hook
  const pagination = usePagination();

  // Optional search hook
  const search = useSearch();

  // Optional delete hook
  const deleteOps = useDeleteOperation<T>(deleteDataFromDBFn);

  const loadData = async () => {
    setDataResource(null);
    setListData(null); // Optionally clear previous data to indicate loading
    setError(null); // Reset any previous error state
    await delay(1000);

    try {
      const allDataPromise = getAllDataFromDBFn({
        currentPage: pagination.currentPage,
        record: pagination.record,
        searchTerm: search.debouncedSearchTerm,
      });

      const res = await allDataPromise; // Wait for the promise to resolve

      if (generateColumns && setColumns) {
        const headers = res?.data?.length && res.data.length > 0 ? (Object.keys(res.data[0]) as (keyof T)[]) : [];
        setColumns(generateColumns(headers, res, navigate, deleteOps?.openModal ?? (() => {})));
      }
      setListData(res);

      const resource = createResource(() => allDataPromise);
      setDataResource(resource);
    } catch (error: any) {
      setError(error?.message || 'An error occurred while loading data. Please try again later.'); // Set error message
    }
  };

  useEffect(() => {
    loadData();
  }, [search.debouncedSearchTerm, pagination.currentPage, deleteOps.invalidateTag]);

  return {
    dataResource,
    listData,
    setListData,
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
