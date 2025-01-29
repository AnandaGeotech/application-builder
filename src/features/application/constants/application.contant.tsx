/* eslint-disable boundaries/no-unknown */
/* eslint-disable import/no-duplicates */
import userJsonApiDBService from '../services/users.service';
import productJsonApiDBService from '../services/users.service';
import { IApplicationDBService } from '@/common/types/feature.type';
import { IApplicationUser, IProduct } from '@/common/types/application.type';

export const SELECTED_SERVICE_TYPE = 'JSON_SERVER';
export const DB_TYPE_JSON_SERVER = 'JSON_SERVER';
export const DB_TYPE_INDEXDB = 'INDEXDB';
export const DB_TYPE_LOCAL_STORAGE = 'LOCAL_STORAGE';

interface IServiceMap {
  USER_SERVICE: IApplicationUser;
  PRODUCT_SERVICE: IProduct;
}
const FEATURE_SERVICES_DB_TYPE_JSON_SERVER: {
  [K in keyof IServiceMap]: IApplicationDBService<IServiceMap[K]>;
} = {
  USER_SERVICE: userJsonApiDBService,
  PRODUCT_SERVICE: productJsonApiDBService,
};

export const DB_CONNECT: {
  [dbType: string]: {
    [K in keyof IServiceMap]: IApplicationDBService<IServiceMap[K]>;
  };
} = {
  [DB_TYPE_JSON_SERVER]: FEATURE_SERVICES_DB_TYPE_JSON_SERVER,
};
