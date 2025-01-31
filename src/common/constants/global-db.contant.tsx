/* eslint-disable boundaries/element-types */
import { IApplicationUser } from '@/common/types/application.type';
import { IApplicationDBService, IAuthenticationDBService } from '@/common/types/feature.type';
import userJsonApiDBService from '@/features/application/services/users.service';
import userAuthenticationJsonApiDBService from '@/features/authentication/service/authentication.service';

export const SELECTED_SERVICE_TYPE = 'JSON_SERVER';
export const DB_TYPE_JSON_SERVER = 'JSON_SERVER';
export const DB_TYPE_INDEXDB = 'INDEXDB';
export const DB_TYPE_LOCAL_STORAGE = 'LOCAL_STORAGE';
interface IServiceMap {
  USER_SERVICE: IApplicationUser;
  // PRODUCT_SERVICE: IProduct;
}

// Separate Database Services
const FEATURE_SERVICES_DB_TYPE_JSON_SERVER: {
  [K in keyof IServiceMap]: IApplicationDBService<IServiceMap[K]>;
} = {
  USER_SERVICE: userJsonApiDBService,
  // PRODUCT_SERVICE: productJsonApiDBService,
};

// Authentication Services (Required) - Single Object Implementing IAuthenticationDBService
const AUTHENTICATION_SERVICES: IAuthenticationDBService = {
  // userInfoDataFn: userAuthenticationJsonApiDBService.userInfoDataFn,
  // userLogoutFromDBFn: userAuthenticationJsonApiDBService.userLogout,
  userLoginFromDBFn: userAuthenticationJsonApiDBService.userLoginFromDBFn,
  userRegisterToDBFn: userAuthenticationJsonApiDBService.userRegisterToDBFn,
};

// Consolidated DB_CONNECT with Authentication Services
export const DB_CONNECT: {
  [dbType: string]: {
    [K in keyof IServiceMap]: IApplicationDBService<IServiceMap[K]>;
  } & { AUTHENTICATION_SERVICE: IAuthenticationDBService }; // Authentication Services are now under "auth"
} = {
  [DB_TYPE_JSON_SERVER]: {
    ...FEATURE_SERVICES_DB_TYPE_JSON_SERVER,
    AUTHENTICATION_SERVICE: AUTHENTICATION_SERVICES, // Authentication services are now correctly structured
  },
};
