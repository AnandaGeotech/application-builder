/* eslint-disable boundaries/no-unknown */
/* eslint-disable import/no-duplicates */
import userJsonApiDBService from '../services/users.service';
import productJsonApiDBService from '../services/users.service';
import { IApplicatioDBService } from '../type/application.type';
import { IApplicationUser, IProduct } from '@/types/application.type';

export const SELECTED_SERVICE_TYPE = 'JSON_SERVER';
export const DB_TYPE_JSON_SERVER = 'JSON_SERVER';
export const DB_TYPE_INDEXDB = 'INDEXDB';
export const DB_TYPE_LOCALSTROAGE = 'LOCALSTROAGE';

interface IServiceMap {
  USER_SERVICE: IApplicationUser;
  PRODUCT_SERVICE: IProduct;
}
const FEATURE_SERVICES_DB_TYPE_JSON_SERVER: {
  [K in keyof IServiceMap]: IApplicatioDBService<IServiceMap[K]>;
} = {
  USER_SERVICE: userJsonApiDBService,
  PRODUCT_SERVICE: productJsonApiDBService,
};

export const DB_CONNECT: {
  [dbType: string]: {
    [K in keyof IServiceMap]: IApplicatioDBService<IServiceMap[K]>;
  };
} = {
  [DB_TYPE_JSON_SERVER]: FEATURE_SERVICES_DB_TYPE_JSON_SERVER,
};
