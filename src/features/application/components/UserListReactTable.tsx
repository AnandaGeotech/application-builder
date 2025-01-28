/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable boundaries/no-unknown */
/* eslint-disable no-nested-ternary */
import { CSSProperties } from 'react';

import { Column, flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { TableApplicationUserListProps } from '../type/application.type';
import TableActionButton from './TableActionButton';
import { IApplicationUser } from '@/types/application.type';
import { Pagination } from '@/common/components/Pagination';
import { Button } from '@/common/components/Button';
import { IApplicationUsersListRes } from '@/types/common.type';

const getCommonPinningStyles = (column: Column<IApplicationUser>): CSSProperties => {
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn = isPinned === 'left' && column.getIsLastColumn('left');
  const isFirstRightPinnedColumn = isPinned === 'right' && column.getIsFirstColumn('right');

  return {
    boxShadow: isLastLeftPinnedColumn
      ? '-4px 0 4px -4px gray inset'
      : isFirstRightPinnedColumn
        ? '4px 0 4px -4px gray inset'
        : undefined,
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px ` : undefined,
    opacity: isPinned ? 0.95 : 1,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  };
};

export default function UserListReactTable({
  hooksOptions,
}: {
  hooksOptions: TableApplicationUserListProps & { data: IApplicationUsersListRes };
}) {
  const {
    openModal,
    setSorting,
    sorting,
    data: userData,
    columns,
    handlePageChange,
    currentPage,
    limitperPage,
  } = hooksOptions;
  const table = useReactTable({
    data: userData?.data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
    columnResizeMode: 'onChange',
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

  //   const randomizeColumns = () => {
  //     table.setColumnOrder(
  //       faker.helpers.shuffle(table.getAllLeafColumns().map((d) => d.id)),
  //     );
  //   };

  return (
    <div className="">
      <div
        className="table-container relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-slate-950 bg-white [&::-webkit-scrollbar]:h-2
[&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-track]:dark:bg-slate-800 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-opacity-50
[&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-thumb]:rounded-full py-4"
      >
        <table
          style={{
            width: table.getTotalSize(),
          }}
          className="text-sm"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const { column } = header;

                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="px-6 py-3 bg-white dark:bg-slate-900"
                      style={{ ...getCommonPinningStyles(column as any) }}
                    >
                      <div
                        className="whitespace-nowrap"
                        onClick={header.column.getToggleSortingHandler()}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            header.column.getToggleSortingHandler()?.(e);
                          }
                        }}
                      >
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}{' '}
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
                      {!header.isPlaceholder && header.column.getCanPin() && (
                        <div className="flex gap-1 justify-center">
                          {header.column.getIsPinned() !== 'left' ? (
                            <Button
                              className=" px-2"
                              onClick={() => {
                                header.column.pin('left');
                              }}
                            >
                              {'<='}
                            </Button>
                          ) : null}
                          {header.column.getIsPinned() ? (
                            <Button
                              className=" px-2"
                              onClick={() => {
                                header.column.pin(false);
                              }}
                            >
                              X
                            </Button>
                          ) : null}
                          {header.column.getIsPinned() !== 'right' ? (
                            <Button
                              className=" px-2"
                              onClick={() => {
                                header.column.pin('right');
                              }}
                            >
                              {'=>'}
                            </Button>
                          ) : null}
                        </div>
                      )}
                      <div
                        {...{
                          onDoubleClick: () => header.column.resetSize(),
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          className: `resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`,
                        }}
                      />
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="">
                {row.getVisibleCells().map((cell) => {
                  const { column } = cell;

                  return (
                    <td
                      key={cell.id}
                      // IMPORTANT: This is where the magic happens!
                      style={{ ...getCommonPinningStyles(column as any) }}
                      className="px-6 py-4  border-b border-slate-100 dark:border-slate-500  last:border-none bg-white dark:bg-slate-900"
                    >
                      {column.id === 'action' ? (
                        <TableActionButton info={row} openModal={openModal} />
                      ) : (
                        flexRender(cell.column.columnDef.cell, cell.getContext())
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing
          <span className="font-semibold text-gray-900 dark:text-white p-2">
            {limitperPage * (currentPage - 1) + 1} -{Number(userData?.data?.length) + limitperPage * (currentPage - 1)}
          </span>
          of
          <span className="font-semibold text-gray-900 dark:text-white p-2">{userData?.items}</span>
        </span>
        <div className="">
          <Pagination currentPage={currentPage} totalPages={Number(userData?.pages)} onPageChange={handlePageChange} />
        </div>
      </nav>
      <div className="h-4" />

      <div className="h-4" />
      <div className="inline-block border border-black shadow rounded">
        <div className="px-1 border-b border-black">
          <label>
            <input
              {...{
                type: 'checkbox',
                checked: table.getIsAllColumnsVisible(),
                onChange: table.getToggleAllColumnsVisibilityHandler(),
              }}
            />{' '}
            Toggle All
          </label>
        </div>
        {table.getAllLeafColumns().map((column) => (
          <div key={column.id} className="px-1 ">
            <label>
              <input
                {...{
                  type: 'checkbox',
                  checked: column.getIsVisible(),
                  onChange: column.getToggleVisibilityHandler(),
                }}
              />{' '}
              {column.id}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
