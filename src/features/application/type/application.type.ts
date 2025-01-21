/* eslint-disable boundaries/no-unknown */
/* eslint-disable no-unused-vars */
import { IApplicationUser } from '@/types/application.type';
import { IApplicationUsersListRes, IQueryFile } from '@/types/common.type';

export interface IApplicationJsonApiDBService {
  getSingleFileDataFn: (fileId: string) => Promise<Required<IApplicationUser>>;
  getAllDataFromDBFn: (props: IQueryFile) => Promise<IApplicationUsersListRes>;
  deleteDataFromDBFn: (id: string) => Promise<void>;
  upsertDataToDBFn: (payload: IApplicationUser) => Promise<IApplicationUser | void>;
}
