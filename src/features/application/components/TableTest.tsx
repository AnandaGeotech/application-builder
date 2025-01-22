/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable boundaries/no-unknown */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import { AccessorKeyColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiPencil, BiTrashAlt } from 'react-icons/bi';
import { BsEyeFill, BsThreeDotsVertical } from 'react-icons/bs';
import { Button } from '@/common/components/Button';
import { Education, IApplicationUser, Profession } from '@/types/application.type';
import { Pagination } from '@/common/components/Pagination';
import { IApplicationUsersListRes } from '@/types/common.type';

const TableTest = ({
  data: userData,
  columns,
  handlePageChange,
  currentPage,
}: {
  data: IApplicationUsersListRes;
  columns: AccessorKeyColumnDef<Required<IApplicationUser>, string | Education[] | Profession[]>[];

  handlePageChange: () => void;
  currentPage: () => void;
}) => {
  const [data, _setData] = useState<Required<IApplicationUser>[]>(() => []);

  useEffect(() => {
    if (userData.data.length) {
      _setData(userData.data);
    }
  }, [userData.data.length]);
  const [activeRowId, setActiveRowId] = useState<string | null>(null);

  const toggleIcons = (id: string) => {
    setActiveRowId((prevId) => (prevId === id ? null : id)); // Toggle or close the icon list
  };
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                <th scope="col" className="px-6 py-3">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </th>

                {headerGroup.headers.map((header) => (
                  <th key={header.id} scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      <a href="#">
                        <svg
                          className="w-3 h-3 ms-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                ))}
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="w-4 p-4">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <td className="px-6 py-4 relative">
                  {activeRowId === row.original?.id && (
                    <div className="absolute flex justify-center bg-slate-900 dark:bg-slate-300 items-center px-3 rounded-lg left-0">
                      <Link className="" to={`/edit/${row.original?.id}`}>
                        <BiPencil size={14} className="hover:text-slate-400" />
                      </Link>
                      <Button>
                        <BiTrashAlt className="text-red-500 hover:text-red-400" size={14} />
                      </Button>
                      <Link to={`user/${row.original?.id}`}>
                        <BsEyeFill className="text-indigo-500 hover:text-indigo-400" size={14} />
                      </Link>
                    </div>
                  )}

                  <Button onClick={() => toggleIcons(row.original?.id)}>
                    <BsThreeDotsVertical />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing
            <span className="font-semibold text-gray-900 dark:text-white">
              1-
              {userData?.data?.length}
            </span>{' '}
            of
            <span className="font-semibold text-gray-900 dark:text-white">{userData?.items}</span>
          </span>
          <Pagination currentPage={currentPage} totalPages={Number(userData?.pages)} onPageChange={handlePageChange} />
        </nav>
      </div>
    </div>
  );
};

export default TableTest;
