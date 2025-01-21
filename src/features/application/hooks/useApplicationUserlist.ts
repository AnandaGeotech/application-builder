/* eslint-disable boundaries/no-unknown */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import applicationService from '../services/application.service';

import { createResource, delay } from '@/lib/utils';
import useDebounce from '@/common/hooks/use-debounce';
import { IApplicationUsersListRes } from '@/types/common.type';

const { getAllDataFromDBFn, deleteDataFromDBFn } = applicationService();

const useApplicationUserList = () => {
  const [limitperPage, setlimitperPage] = useState(10);
  const [searchTerm, setsearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500); // Debounce for 500ms

  const [currentPage, setCurrentPage] = useState(1);
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

  // const handleDelete = async (id: string) => {
  //   await deleteDataFromDBFn(id);
  //   setdataResource(null);

  //   toast.success('File deleted successfully!');
  //   loadData();
  // };
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

  return {
    dataResource,
    setdataResource,
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
  };
};

export default useApplicationUserList;
