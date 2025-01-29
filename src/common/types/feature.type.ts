import { IApplicationGlobalListRes, IQueryFile } from './common.type';

/* eslint-disable no-unused-vars */
export interface IApplicationDBService<T> {
  getSingleFileDataFn: (fileId: string) => Promise<T>;
  getAllDataFromDBFn: (props: IQueryFile) => Promise<IApplicationGlobalListRes<T>>;
  deleteDataFromDBFn: (id: string) => Promise<void>;
  upsertDataToDBFn: (payload: T) => Promise<T | void>;
}
