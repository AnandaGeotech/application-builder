/* eslint-disable boundaries/no-unknown */
import { useState } from 'react';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import applicationService from '../services/application.service';
import { IApplicationUser } from '@/common/types/application.type';
import useGlobalList, { ColumnDefinition } from '@/common/hooks/useGlobalList';
import { IApplicationGlobalListRes } from '@/common/types/common.type';

const { USER_SERVICE } = applicationService();
const columnHelper = createColumnHelper<IApplicationUser>(); // Initialize column helper

const generateColumns = (
  headers: (keyof IApplicationUser)[],
  data: IApplicationGlobalListRes<IApplicationUser>
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
    cell: (info) => info.getValue(),
  },
];
const useApplicationUserList = () => {
  const [columns, setColumns] = useState<ColumnDef<IApplicationUser>[]>([]);
  const options = useGlobalList<IApplicationUser>({ serviceMethods: USER_SERVICE, generateColumns, setColumns });

  return {
    ...options,
    columns,
  };
};
export type TUserListReturn = ReturnType<typeof useApplicationUserList>;
export default useApplicationUserList;
