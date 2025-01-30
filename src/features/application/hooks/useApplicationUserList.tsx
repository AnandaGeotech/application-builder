/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { useState } from 'react';
import useGlobalList, { ColumnDefinition } from '@/common/hooks/useGlobalList';
import { IApplicationUser } from '@/common/types/application.type';
import { IApplicationGlobalListRes } from '@/common/types/common.type';
import TableActionButton from '@/features/application/components/TableActionButton';
import applicationService from '@/features/application/services/application.service';

const { USER_SERVICE } = applicationService();
const columnHelper = createColumnHelper<IApplicationUser>(); // Initialize column helper

const generateColumns = (
  headers: (keyof IApplicationUser)[],
  data: IApplicationGlobalListRes<IApplicationUser>,
  openModal: (info: IApplicationUser) => void
): ColumnDefinition<IApplicationUser>[] => [
  ...headers.map((it) => {
    const sampleValue = data?.data?.[0]?.[it]; // Sample value to check type

    if (typeof sampleValue === 'object') {
      return columnHelper.accessor(it as any, {
        header: it as string,
        cell: '',
      });
    }
    return columnHelper.accessor(it as any, {
      header: it as string,
      cell: (info) => info.getValue(),
    });
  }),
  {
    accessorKey: 'action',
    id: 'action',
    header: 'Actions',
    cell: (info) => (
      <div className="flex justify-center">
        <TableActionButton info={info?.row} openModal={openModal} />
      </div>
    ),
  },
];
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
