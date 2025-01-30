import {
  Column,
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import React, { CSSProperties } from 'react';
import { IApplicationGlobalListRes } from '../types/common.type';

export const showArrow = (sort: string | boolean) => {
  let showIcon = '↕';
  if (sort === 'asc') {
    showIcon = '↑';
  } else if (sort === 'desc') {
    showIcon = '↓';
  }
  return showIcon;
};

export function getCommonPinningStyles<T>(column: Column<T>): CSSProperties {
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
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px ` : undefined,
    opacity: 1,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  };
}
export default function useReactTableUtility<T>({
  sorting,
  setSorting,
  columns,
  data,
}: {
  data: IApplicationGlobalListRes<T>;
  sorting: SortingState;
  setSorting: React.Dispatch<React.SetStateAction<SortingState>>;
  columns: ColumnDef<T>[];
}) {
  const table = useReactTable({
    data: data?.data,
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

  return table;
}
