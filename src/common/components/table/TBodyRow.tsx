import { flexRender, Row } from '@tanstack/react-table';
import { getCommonPinningStyles } from '@/common/hooks/useReactTableUtility';

export default function TBodyRow<T>({ row }: { row: Row<T> }) {
  return (
    <tr key={row.id} style={{ width: '1px' }}>
      {row.getVisibleCells().map((cell) => {
        const { column } = cell;

        return (
          <td
            key={cell.id}
            style={{ ...getCommonPinningStyles(column as any) }}
            className="px-6 py-4  border-b border-slate-100 dark:border-slate-500   bg-white dark:bg-slate-900"
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        );
      })}
    </tr>
  );
}
