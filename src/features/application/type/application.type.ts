/* eslint-disable boundaries/no-unknown */
/* eslint-disable no-unused-vars */
import { AccessorKeyColumnDef } from '@tanstack/react-table';
import React from 'react';
import { Education, IApplicationUser, Profession } from '@/types/application.type';
import { IApplicationUsersListRes, IQueryFile } from '@/types/common.type';

export interface IApplicationJsonApiDBService {
  getSingleFileDataFn: (fileId: string) => Promise<Required<IApplicationUser>>;
  getAllDataFromDBFn: (props: IQueryFile) => Promise<IApplicationUsersListRes>;
  deleteDataFromDBFn: (id: string) => Promise<void>;
  upsertDataToDBFn: (payload: IApplicationUser) => Promise<IApplicationUser | void>;
}

export interface TableApplicationUserListProps {
  // Function to set selected file info
  openModal: (data: Required<IApplicationUser>) => void; // Function to open the modal
  dataResource: {
    read: () => IApplicationUsersListRes; // Function to read data, always returning FileInfo[]
  } | null; // dataResource can be null,

  headers: (keyof IApplicationUser)[];
  getDisplayValue: (defaultValue: unknown) => string;
  handleConfirm: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
  columns: AccessorKeyColumnDef<Required<IApplicationUser>, string | Education[] | Profession[]>[];
  handleSearch: (query: string) => void;
  handlePageChange: (query: number) => void;
  currentPage: number;
  visibleHeaders: Set<string>;
  toggleHeader: (key: string) => void;
  handleConfirmOptionModalFn?: () => void;
  closeOptionModalFn: () => void;
  openOptionModalFn: () => void;
  setIsModalOptionOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOptionOpen: boolean;
}
