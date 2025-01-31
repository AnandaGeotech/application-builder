/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef, createColumnHelper, Row } from '@tanstack/react-table';
import { useState } from 'react';
import useGlobalList, { ColumnDefinition } from '@/common/hooks/useGlobalList';
import GlobalDBService from '@/common/services/global.service';
import { IApplicationUser } from '@/common/types/application.type';
import { IApplicationGlobalListRes } from '@/common/types/common.type';
import TableActionButton from '@/features/application/components/TableActionButton';

const { USER_SERVICE } = GlobalDBService();
const columnHelper = createColumnHelper<IApplicationUser>(); // Initialize column helper

const generateColumns = (
  headers: (keyof IApplicationUser)[],
  data: IApplicationGlobalListRes<IApplicationUser>,
  openModal: (info: IApplicationUser) => void
): ColumnDefinition<IApplicationUser>[] => {
  const columnsArray = [];

  headers.map((it) => {
    const sampleValue = data?.data?.[0]?.[it]; // Sample value to check type

    if (typeof sampleValue !== 'object') {
      columnsArray.push(
        columnHelper.accessor(it as any, {
          header: it as string,
          cell: (info) => info.getValue(),
        })
      );
    }
    return sampleValue;
  });
  columnsArray.push({
    accessorKey: 'action',
    id: 'action',
    enableSorting: false,
    header: 'Actions',
    cell: (info: { row: Row<IApplicationUser> }) => (
      <div className="flex justify-center">
        <TableActionButton info={info?.row} openModal={openModal} />
      </div>
    ),
  });
  return columnsArray;
};
const useApplicationUserList = () => {
  const [columns, setColumns] = useState<ColumnDef<IApplicationUser>[]>([]);

  const options = useGlobalList<IApplicationUser>({
    serviceMethods: USER_SERVICE,
    generateColumns,
    setColumns,
  });

  return {
    ...options,
    columns,
  };
};
export type TUserListReturn = ReturnType<typeof useApplicationUserList>;
export default useApplicationUserList;
