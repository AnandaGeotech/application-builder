/* eslint-disable @typescript-eslint/no-explicit-any */

import TableBodyRow from '@/common/components/table/TableBodyRow';
import { TableHeadRow } from '@/common/components/table/TableHeadRow';
import useReactTableUtility from '@/common/hooks/useReactTableUtility';
import { IApplicationGlobalListRes } from '@/common/types/common.type';

const tableContainer = `table-container relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-slate-950 bg-white [&::-webkit-scrollbar]:h-2
[&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-track]:dark:bg-slate-800 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-opacity-50
[&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-thumb]:rounded-full py-4`;

export default function GlobalTable<T extends object>({
  hooksOptions,
}: {
  hooksOptions: {
    setSorting: any;
    sorting: any;
    data: IApplicationGlobalListRes<T>;
    columns: any;
  };
}) {
  const { setSorting, sorting, data, columns } = hooksOptions;

  const table = useReactTableUtility<T>({
    sorting,
    setSorting,
    columns,
    data,
  });

  return (
    <div>
      <div className={tableContainer}>
        <table
          // style={{
          //   width: table.getTotalSize(),
          // }}
          className="text-sm w-full"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableHeadRow key={headerGroup.id} headerGroup={headerGroup} />
            ))}
          </thead>
          <tbody className="-z-20">
            {table.getRowModel().rows.map((row) => (
              <TableBodyRow key={row.id} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
