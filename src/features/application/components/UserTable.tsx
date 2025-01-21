/* eslint-disable boundaries/no-unknown */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line boundaries/no-unknown

import useApplicationUserList from '../hooks/useApplicationUserlist';
import { capitalize, staticFormData } from '@/lib/utils';

const UserTable = () => {
  const {
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
    setlistData,
    listData,
  } = useApplicationUserList();

  function getDisplayValue(defaultValue: string | number | boolean | string[]): string {
    if (defaultValue === false) {
      return 'N/A';
    }
    if (defaultValue === '' || defaultValue === true) {
      return 'null';
    }
    return String(defaultValue);
  }

  console.log(listData, 'listData');

  return (
    <table className="table-auto border border-indigo-500/100 w-full">
      <thead>
        <tr className=" text-indigo-500/100 bg-slate-900 text-sm md:text-base h-8">
          {staticFormData.map((item) => (
            <th key={item.id} className="p-4 font-bold whitespace-nowrap text-center">
              {capitalize(item.id)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="bg-slate-700 transition-colors h-10">
          {staticFormData.map((item) => (
            <td
              key={item.id}
              className=" p-4 text-slate-300 text-sm md:text-base whitespace-nowrap text-center bg-slate-900 bg-opacity-80 "
            >
              {getDisplayValue(item.defaultValue)}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
export default UserTable;
