import userJsonApiDBService from '../services/users.service';
import { IApplicationJsonApiDBService } from '../type/application.type';

export const SELECTED_SERVICE_TYPE = 'JSON_SERVER';
export const DB_TYPE_JSON_SERVER = 'JSON_SERVER';
export const DB_TYPE_INDEXDB = 'INDEXDB';
export const DB_TYPE_LOCALSTROAGE = 'LOCALSTROAGE';

export const DB_CONNECT: Record<string, IApplicationJsonApiDBService> = {
  [DB_TYPE_JSON_SERVER]: userJsonApiDBService,
};
