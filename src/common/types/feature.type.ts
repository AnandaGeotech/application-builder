import { IApplicationUser } from './application.type';
import { IApplicationGlobalListRes, ILoginUser, IQueryFile, IRegisterUser } from '@/common/types/common.type';

/* eslint-disable no-unused-vars */
export interface IApplicationDBService<T> {
  getSingleFileDataFn: (fileId: string) => Promise<T>;
  getAllDataFromDBFn: (props: IQueryFile) => Promise<IApplicationGlobalListRes<T>>;
  deleteDataFromDBFn: (id: string) => Promise<void>;
  upsertDataToDBFn: (payload: T) => Promise<T | void>;
}
export interface IApplicationUserDBService {
  getSingleFileDataFn: (fileId: string) => Promise<IApplicationUser>;
  getAllDataFromDBFn: (props: IQueryFile) => Promise<IApplicationGlobalListRes<IApplicationUser>>;
  deleteDataFromDBFn: (id: string) => Promise<void>;
  upsertDataToDBFn: (payload: IApplicationUser) => Promise<IApplicationUser | void>;
}
export interface IAuthenticationDBService {
  // userInfoDataFn: (token: string) => ILoginUser;
  // userLogoutFromDBFn: () => void;
  userLoginFromDBFn: (email: string, password: string) => Promise<ILoginUser | undefined>;
  userRegisterToDBFn: (payload: IRegisterUser) => Promise<IRegisterUser>;
}
