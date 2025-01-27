/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable boundaries/no-unknown */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AccessorKeyColumnDef, createColumnHelper, SortingState } from '@tanstack/react-table';
import applicationService from '../services/application.service';

import { TableApplicationUserListProps } from '../type/application.type';
import { createResource, delay } from '@/lib/utils';
import useDebounce from '@/common/hooks/use-debounce';
import { IApplicationUsersListRes } from '@/types/common.type';
import { IApplicationUser } from '@/types/application.type';

const { getAllDataFromDBFn, deleteDataFromDBFn } = applicationService();

const useApplicationUserList = () => {
  const [limitperPage, setlimitperPage] = useState(5);
  const [searchTerm, setsearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500); // Debounce for 500ms

  const [currentPage, setCurrentPage] = useState(1);

  const [selectuserInfo, setselectuserInfo] = useState<undefined | Required<IApplicationUser>>();
  const [listData, setlistData] = useState<IApplicationUsersListRes | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const [dataResource, setdataResource] = useState<{
    read: () => IApplicationUsersListRes;
  } | null>(null);

  const loadData = async () => {
    setdataResource(null);
    await delay(1000);

    const allDataPromise = getAllDataFromDBFn({
      currentPage,
      limitperPage,
      searchTerm: debouncedSearchTerm,
    });
    allDataPromise.then((res) => setlistData(res));

    const resource = createResource(() => allDataPromise);
    setdataResource(resource);
  };

  // Load data from IndexedDB

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

  // State for selected rows
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  // Handler for individual row selection
  const handleRowSelect = (id: string) => {
    setSelectedRows((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  // Handler for "select all" functionality
  const handleSelectAll = (isChecked: boolean) => {
    if (isChecked) {
      const allIds = listData?.data?.map((IFileInfo) => IFileInfo.id) || [];
      if (allIds?.length > 0) {
        setSelectedRows(new Set(allIds as string[]));
      }
    } else {
      setSelectedRows(new Set());
    }
  };

  function getDisplayValue(defaultValue: unknown): string {
    if (defaultValue === '' || defaultValue === false || defaultValue === undefined) {
      return 'N/A';
    }
    if (defaultValue === true) {
      return 'null';
    }
    if (Array.isArray(defaultValue)) {
      return defaultValue
        .map((item) => (typeof item === 'object' && item !== null ? Object.values(item).join(', ') : String(item)))
        .join(', ');
    }
    if (typeof defaultValue === 'object' && defaultValue !== null) {
      // Handle objects: join all values with commas
      return Object.values(defaultValue).join(', ');
    }
    return String(defaultValue);
  }

  // Dynamically extract headers if data exists
  const headers =
    listData?.data?.length && listData.data.length > 0
      ? (Object.keys(listData.data[0]) as (keyof IApplicationUser)[]).filter(
          (it) => !['profession', 'education', 'id', 'professional'].includes(it)
        )
      : [];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (info: Required<IApplicationUser>) => {
    setselectuserInfo(info);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const [isModalOptionOpen, setIsModalOptionOpen] = useState(false);

  const openOptionModalFn = () => {
    setIsModalOptionOpen(true);
  };
  const closeOptionModalFn = () => setIsModalOptionOpen(false);

  const [visibleHeaders, setVisibleHeaders] = useState<Set<string>>(new Set());

  const columnHelper = createColumnHelper<Required<IApplicationUser>>();

  const [columns, setcolumns] = useState<AccessorKeyColumnDef<Required<IApplicationUser>, any>[]>([]);
  useEffect(() => {
    if (headers.length) {
      const tt = new Set(headers.map((header) => header));
      setVisibleHeaders(tt);
      setcolumns(
        headers?.map((it) =>
          columnHelper.accessor(it, {
            cell: (info) => info.getValue(),
          })
        )
      );
    }
  }, [headers.length]);

  const toggleHeader = (key: string) => {
    setVisibleHeaders((prev) => {
      const newSet = new Set(prev);
      if (newSet.size > 1 && newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }

      return newSet;
    });
  };
  const handleConfirmOptionModalFn = () => {
    setcolumns(
      Array.from(visibleHeaders).map((key) =>
        columnHelper.accessor(key as keyof IApplicationUser, {
          cell: (info) => info.getValue(),
        })
      ) as AccessorKeyColumnDef<Required<IApplicationUser>, any>[]
    );
    closeOptionModalFn();
  };

  const handleDelete = async () => {
    await deleteDataFromDBFn(selectuserInfo?.id as string);
    setdataResource(null);

    toast.success('File deleted successfully!');
    loadData();
    closeModal();
  };

  const [activeRowId, setActiveRowId] = useState<string | null>(null);

  const toggleIcons = (id: string) => {
    setActiveRowId((prevId) => (prevId === id ? null : id)); // Toggle or close the icon list
  };

  const handleConfirm = () => {
    handleDelete();
  };
  const [sorting, setSorting] = useState<SortingState>([]);

  const hooksOptions: TableApplicationUserListProps = {
    dataResource,
    handlePageChange,
    currentPage,
    setCurrentPage,
    handleSearch,
    searchTerm,
    setsearchTerm,
    limitperPage,
    setlimitperPage,
    handleSelectAll,
    selectedRows,
    handleRowSelect,
    listData,
    setlistData,
    handleDelete,
    selectuserInfo,
    setselectuserInfo,
    headers,
    getDisplayValue,
    openModal,
    handleConfirm,
    closeModal,
    isModalOpen,
    columns,
    toggleHeader,
    visibleHeaders,
    handleConfirmOptionModalFn,
    closeOptionModalFn,
    openOptionModalFn,
    isModalOptionOpen,
    setIsModalOptionOpen,
    toggleIcons,
    activeRowId,
    sorting,
    setSorting,
  };
  return hooksOptions;
};

export default useApplicationUserList;
