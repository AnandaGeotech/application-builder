/* eslint-disable boundaries/no-unknown */
import {
  addDataToApiServer,
  deleteDataFromApiServerById,
  getAllDataFromApiServer,
  getDataFromApiServerById,
  patchDataInApiServerById,
} from '@/lib/db';
import { IApplicationUser } from '@/common/types/application.type';
import { IApplicationGlobalListRes, IQueryFile } from '@/common/types/common.type';
import { IApplicationUserDBService } from '@/common/types/feature.type';

// Function to get a single file data by ID
const getSingleFileDataFn = async (fileId: string): Promise<IApplicationUser> => getDataFromApiServerById(fileId);

// Function to get all data from JsonApiDB
const getAllDataFromDBFn = async (props: IQueryFile): Promise<IApplicationGlobalListRes<IApplicationUser>> =>
  getAllDataFromApiServer(props);

// Function to delete data by ID
const deleteDataFromDBFn = async (id: string) => deleteDataFromApiServerById(id);

// Function to upsert (add or update) data in JsonApiDB
const upsertDataToDBFn = async (payload: IApplicationUser) => {
  if (payload.id) {
    return patchDataInApiServerById(payload.id, payload as IApplicationUser);
  }
  const data = addDataToApiServer(payload);
  return data;
};

const userJsonApiDBService: IApplicationUserDBService = {
  getSingleFileDataFn,
  getAllDataFromDBFn,
  deleteDataFromDBFn,
  upsertDataToDBFn,
};
export default userJsonApiDBService;
