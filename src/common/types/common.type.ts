/* eslint-disable no-unused-vars */
import { ColumnDef, SortingState } from '@tanstack/react-table';
import React, { ReactNode } from 'react';
import { IApplicationUser } from '@/common/types/application.type';

export type TTheme = 'light' | 'dark';
export interface IApplicationGlobalListRes<T> {
  data: T[];
  first?: number;
  items?: number;
  last?: number;
  next?: number;
  pages?: number;
  prev?: null | number;
}

export type TGlobalTableProps<T> = {
  hooksOptions: Record<string, unknown> & {
    data: IApplicationGlobalListRes<T>;
    columns: ColumnDef<T>[];
    setSorting: React.Dispatch<React.SetStateAction<SortingState>>;
    sorting: SortingState;
    handlePageChange: (page: number) => void;
    currentPage: number;
    record: number;
  };
};
export interface IApplicationUsersListRes {
  data: IApplicationUser[];
  first?: number;
  items?: number;
  last?: number;
  next?: number;
  pages?: number;
  prev?: null | number;
}

export interface IQueryFile {
  currentPage?: number;
  record?: number;
  searchTerm?: string;
}
export interface FileInputProps {
  handleFileChange: (fileList: FileList | null) => void;
  preview: string | null;
}

interface InputProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  rules?: Record<string, unknown>;
  required?: boolean;
  disabled?: boolean;
}

export interface SelectProps extends InputProps {
  options: { value: string; label: string }[];
}

export interface LabelProps {
  htmlFor: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string; // For additional styling overrides
}

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode; // Optional custom fallback UI
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}
