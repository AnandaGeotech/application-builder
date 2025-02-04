/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import ApplicationUserService from '../services/users.service';
import useGlobalList, { ColumnDefinition } from '@/common/hooks/useGlobalList';
import { IApplicationUser } from '@/common/types/application.type';
import { IApplicationGlobalListRes } from '@/common/types/common.type';
import MenuBar from '@/common/components/MenuBar';

const userApplicationServiceMethods = ApplicationUserService();
const columnHelper = createColumnHelper<IApplicationUser>();

const generateColumns = (
  headers: (keyof IApplicationUser)[],
  data: IApplicationGlobalListRes<IApplicationUser>,
  navigate: NavigateFunction,
  openModal?: (info: IApplicationUser) => void
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
    cell: (info: any) => (
      <div className="flex justify-center">
        {/* <TableActionButton info={info?.row} openModal={openModal} /> */}
        <MenuBar>
          <MenuBar.MenuItem
            handleItemClick={() => {
              navigate(`/edit/${info.original.id}`);
            }}
          >
            Edit
          </MenuBar.MenuItem>
          <MenuBar.MenuItem
            handleItemClick={() => {
              navigate(`/user/${info.original.id}`);
            }}
          >
            View
          </MenuBar.MenuItem>
          <MenuBar.MenuItem
            handleItemClick={() => {
              if (openModal) {
                openModal(info.original);
              }
            }}
          >
            Delete
          </MenuBar.MenuItem>
        </MenuBar>
      </div>
    ),
  });
  return columnsArray;
};
const useApplicationUserList = () => {
  const [columns, setColumns] = useState<ColumnDef<IApplicationUser>[]>([]);
  const navigate = useNavigate();

  function customColumnGenerate(
    res: IApplicationGlobalListRes<IApplicationUser>,
    openModal: (info: IApplicationUser) => void
  ) {
    const headers =
      res?.data?.length && res.data.length > 0 ? (Object.keys(res.data[0]) as (keyof IApplicationUser)[]) : [];
    setColumns(generateColumns(headers, res, navigate, openModal));
  }

  const options = useGlobalList<IApplicationUser>({
    serviceMethods: userApplicationServiceMethods,
    customColumnGenerate,
  });

  return {
    ...options,
    columns,
  };
};
export type TUserListReturn = ReturnType<typeof useApplicationUserList>;
export default useApplicationUserList;
