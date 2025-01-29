/* eslint-disable boundaries/no-unknown */
/* eslint-disable no-unused-vars */
import { AccessorKeyColumnDef, SortingState } from '@tanstack/react-table';
import React from 'react';
import { Education, IApplicationUser, Profession } from '@/types/application.type';
import { IApplicationUsersListRes } from '@/types/common.type';

// export interface IApplicatioDBService<T> {
//   getSingleFileDataFn: (fileId: string) => Promise<T>;
//   getAllDataFromDBFn: (props: IQueryFile) => Promise<IApplicationUsersListRes>;
//   deleteDataFromDBFn: (id: string) => Promise<void>;
//   upsertDataToDBFn: (payload: T) => Promise<T | void>;
// }

export interface TableApplicationUserListProps {
  // Function to set selected file info
  openModal: (data: Required<IApplicationUser>) => void; // Function to open the modal
  dataResource: {
    read: () => IApplicationUsersListRes; // Function to read data, always returning FileInfo[]
  } | null; // dataResource can be null,

  headers: (keyof IApplicationUser)[];
  handleConfirm: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
  columns: AccessorKeyColumnDef<Required<IApplicationUser>, string | Education[] | Profession[]>[];
  handleSearch: (query: string) => void;
  handlePageChange: (query: number) => void;
  currentPage: number;
  visibleHeaders: Set<string>;
  toggleHeader: (key: string) => void;
  setCurrentPage: (key: number) => void;
  handleConfirmOptionModalFn?: () => void;
  closeOptionModalFn: () => void;
  openOptionModalFn: () => void;
  setIsModalOptionOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOptionOpen: boolean;
  limitperPage: number;
  toggleIcons: (id: string) => void;
  setsearchTerm: React.Dispatch<React.SetStateAction<string>>;
  activeRowId: string | null;
  searchTerm: string;
  sorting: SortingState;
  setSorting: React.Dispatch<React.SetStateAction<SortingState>>;
  setlimitperPage: React.Dispatch<React.SetStateAction<number>>;
  handleSelectAll: (isChecked: boolean) => void;
  selectedRows: Set<string>;
  handleRowSelect: (id: string) => void;
  listData: IApplicationUsersListRes | null;
  setlistData: React.Dispatch<React.SetStateAction<IApplicationUsersListRes | null>>;
  handleDelete: () => Promise<void>;
  selectuserInfo: Required<IApplicationUser> | undefined;
  setselectuserInfo: React.Dispatch<React.SetStateAction<Required<IApplicationUser> | undefined>>;
}
