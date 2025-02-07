// import markdownIndexedDBService from '../services/markdown.indexdb.service';
// import markdownLocalStorageService from '../services/markdown.localStorage.service';

import userAuthenticationJsonApiDBService from '@/features/authentication/service/authentication.jsonserver.service';
import { IAuthenticationDBService } from '@/common/types/feature.type';

export const DB_TYPE_NAME = 'INDEXDB';
export const DB_TYPE_INDEXDB = 'INDEXDB';
export const DB_TYPE_LOCALSTROAGE = 'LOCALSTROAGE';
export const DB_TYPE_JSON_SERVER = 'JSONSERVER';
export const SELECTED_AUTHENTICATION_SERVICE_TYPE = DB_TYPE_JSON_SERVER;
export const COPY_TYPE_HTML = 'HTML';
export const COPY_TYPE_MARKDOWN = 'MARKDOWN';

export const AUTHENTICATION_DB_CONNECT: Record<string, IAuthenticationDBService> = {
  //   [DB_TYPE_INDEXDB]: markdownIndexedDBService,
  //   [DB_TYPE_LOCALSTROAGE]: markdownLocalStorageService,
  [DB_TYPE_JSON_SERVER]: userAuthenticationJsonApiDBService,
} as const;
