/* eslint-disable boundaries/no-unknown */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ColumnDef, createColumnHelper, SortingState } from '@tanstack/react-table';
import { createResource, delay } from '@/lib/utils';
import useDebounce from '@/common/hooks/use-debounce';
import { IApplicationGlobalListRes } from '@/types/common.type';
import { IApplicatioDBService } from '@/types/feature.type';

const useGlobalList = <T extends Record<string, unknown> & { id: string }>(
  applicationService: IApplicatioDBService<T>
) => {
  const { getAllDataFromDBFn, deleteDataFromDBFn } = applicationService;
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

  const [columns, setcolumns] = useState<ColumnDef<T>[]>([]);
  const columnHelper = createColumnHelper<T>(); // Initialize column helper
  const generateColumns = (headers: (keyof T)[], data: IApplicationGlobalListRes<T>) =>
    headers.map((it) => {
      const sampleValue = data?.data?.[0]?.[it]; // Sample value to check type
      if (typeof sampleValue === 'object' && sampleValue !== null) {
        // If value is an object, create grouped columns
        return {
          id: it as string, // Group identifier
          header: it as string, // Group name
          // columns: Object.keys(sampleValue).map((subKey) => columnHelper.accessor(`${it}.${subKey}` as any, {
          //   header: subKey,
          //   cell: (info) => info.getValue(),
          // })),
        };
      }
      // Regular column
      return columnHelper.accessor(it as any, {
        cell: (info) => info.getValue(),
      });
    });
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

      setcolumns([
        ...generateColumns(headers, res),
        {
          accessorKey: 'action',
          id: 'action',
          header: 'Actions',
          cell: (info) => info.getValue(),
        },
      ]);

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
    columns,
    sorting,
    setSorting,
  };
};

export default useGlobalList;
