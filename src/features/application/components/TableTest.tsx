/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable boundaries/no-unknown */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import {
  AccessorKeyColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import React, { useEffect, useState } from 'react';
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
  openModal,
  limitperPage,
  toggleIcons,
  activeRowId,
  sorting,
  setSorting,
}: {
  data: IApplicationUsersListRes;
  columns: AccessorKeyColumnDef<Required<IApplicationUser>, string | Education[] | Profession[]>[];
  openModal: (data: Required<IApplicationUser>) => void;
  handlePageChange: (query: number) => void;
  currentPage: number;
  limitperPage: number;
  toggleIcons: (id: string) => void;
  activeRowId: string | null;
  sorting: SortingState;
  setSorting: React.Dispatch<React.SetStateAction<SortingState>>;
}) => {
  const [data, _setData] = useState<Required<IApplicationUser>[]>(() => []);

  useEffect(() => {
    if (userData.data.length) {
      _setData(userData.data);
    }
  }, [userData.data.length]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting, // Update sorting state
    getSortedRowModel: getSortedRowModel(), // Enable sorted row model
    sortingFns: {
      myCustomSorting: (rowA, rowB, columnId) => {
        const valueA = rowA.getValue(columnId) as string | number;
        const valueB = rowB.getValue(columnId) as string | number;
        return valueA < valueB ? -1 : 1;
      },
    },
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
                  <th key={header.id} className="px-6 py-3 border-b">
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={header.column.getToggleSortingHandler()}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          header.column.getToggleSortingHandler()?.(e);
                        }
                      }}
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getCanSort() && (
                        <span className="ml-2">
                          {header.column.getIsSorted() === 'asc'
                            ? '↑'
                            : header.column.getIsSorted() === 'desc'
                              ? '↓'
                              : '↕'}
                        </span>
                      )}
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
                        <BiTrashAlt
                          onClick={() => openModal(row.original)}
                          className="text-red-500 hover:text-red-400"
                          size={14}
                        />
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
              {limitperPage * (currentPage - 1) + 1}-{Number(userData?.data?.length) + limitperPage * (currentPage - 1)}
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
