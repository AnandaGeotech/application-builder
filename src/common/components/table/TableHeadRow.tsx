import { flexRender, HeaderGroup } from '@tanstack/react-table';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { getCommonPinningStyles, showArrow } from '@/common/hooks/useReactTableUtility';
import { Button } from '@/common/components/Button';

export function TableHeadRow<T>({ headerGroup }: { headerGroup: HeaderGroup<T> }) {
  return (
    <tr key={headerGroup.id} className="bg-white dark:bg-slate-900 " style={{ width: '1px' }}>
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
              className="whitespace-nowrap flex"
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
                    <FaLongArrowAltLeft />
                  </Button>
                ) : null}
                {header.column.getIsPinned() ? (
                  <Button
                    className=" px-2"
                    onClick={() => {
                      header.column.pin(false);
                    }}
                  >
                    <RxCross2 />
                  </Button>
                ) : null}
                {header.column.getIsPinned() !== 'right' ? (
                  <Button
                    className=" px-2"
                    onClick={() => {
                      header.column.pin('right');
                    }}
                  >
                    <FaLongArrowAltRight />
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
  );
}
