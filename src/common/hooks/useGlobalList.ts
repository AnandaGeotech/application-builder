/* eslint-disable boundaries/element-types */
/* eslint-disable boundaries/no-unknown */
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ColumnDef, createColumnHelper, SortingState } from '@tanstack/react-table';
import { createResource, delay } from '@/lib/utils';
import useDebounce from '@/common/hooks/use-debounce';
import { IApplicatioDBService } from '@/features/application/type/application.type';
import { IApplicationUsersListRes } from '@/types/common.type';

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
    read: () => IApplicationUsersListRes;
  } | null>(null);
  const [listData, setlistData] = useState<IApplicationUsersListRes | null>(null);

  const [columns, setcolumns] = useState<ColumnDef<T>[]>([]);
  const columnHelper = createColumnHelper<T>(); // Initialize column helper

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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...headers.map((it: keyof T) =>
          columnHelper.accessor(it as any, {
            cell: (info) => info.getValue(),
          })
        ),
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
