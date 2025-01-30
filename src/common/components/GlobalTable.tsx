import { Column, flexRender, getCoreRowModel, getSortedRowModel, Table, useReactTable } from '@tanstack/react-table';
import { createContext, CSSProperties, PropsWithChildren, useContext, useMemo } from 'react';
import { TGlobalTableProps } from '../types/common.type';
import { Button } from '@/common/components/Button';

const GlobalTableContext = createContext<any>(undefined);

const useGlobalTableContext = () => {
  const context = useContext(GlobalTableContext);

  if (!context) {
    throw new Error('useGlobalTableContext must be used within a GlobalTable');
  }

  return context;
};

const showArrow = (sort: string | boolean) => {
  let showIcon = '↕';
  if (sort === 'asc') {
    showIcon = '↑';
  } else if (sort === 'desc') {
    showIcon = '↓';
  }
  return showIcon;
};

function getCommonPinningStyles<T>(column: Column<T>): CSSProperties {
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn = isPinned === 'left' && column.getIsLastColumn('left');
  const isFirstRightPinnedColumn = isPinned === 'right' && column.getIsFirstColumn('right');

  let boxShadow;
  if (isLastLeftPinnedColumn) {
    boxShadow = '-4px 0 4px -4px gray inset';
  } else if (isFirstRightPinnedColumn) {
    boxShadow = '4px 0 4px -4px gray inset';
  }
  return {
    boxShadow,
    left: isPinned === 'left' ? `${column.getStart('left') - 100}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px ` : undefined,
    opacity: 1,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  };
}

export default function GlobalTable<T>({ children, hooksOptions }: TGlobalTableProps<T> & PropsWithChildren) {
  const { setSorting, sorting, data: userData, columns } = hooksOptions;

  const table = useReactTable<T>({
    data: userData?.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
    columnResizeMode: 'onChange',
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <GlobalTableContext.Provider value={useMemo(() => ({ hooksOptions, table }), [hooksOptions, table])}>
      <div>
        <div className="table-container relative overflow-x-auto shadow-md sm:rounded-lg">
          <table style={{ width: table.getTotalSize() }} className="text-sm">
            {children}
          </table>
        </div>
      </div>
    </GlobalTableContext.Provider>
  );
}
GlobalTable.TableBody = function TableBody<T>() {
  const { table: tableOptions } = useGlobalTableContext();
  const table: Table<T> = tableOptions;
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id} className="">
          {row.getVisibleCells().map((cell) => {
            const { column } = cell;

            return (
              <td
                key={cell.id}
                style={{ ...getCommonPinningStyles(column) }}
                className="px-6 py-4  border-b border-slate-100 dark:border-slate-500  last:border-none bg-white dark:bg-slate-900"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

GlobalTable.TableHead = function TableHead<T>() {
  const { table: tableOptions } = useGlobalTableContext();
  const table: Table<T> = tableOptions;
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className="bg-white dark:bg-slate-900">
          {headerGroup.headers.map((header) => {
            const { column } = header;

            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                className="px-6 py-3 bg-white dark:bg-slate-900"
                style={{ ...getCommonPinningStyles(column) }}
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
                  {header.column.getCanSort() && <span className="ml-2">{showArrow(header.column.getIsSorted())}</span>}
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
  );
};
