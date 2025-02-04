// import markdownIndexedDBService from '../services/markdown.indexdb.service';
// import markdownLocalStorageService from '../services/markdown.localStorage.service';

import userJsonApiDBService from '@/features/application/services/users.jsonserver.service';
import { IApplicationUserDBService } from '@/common/types/feature.type';

export const DB_TYPE_NAME = 'INDEXDB';
export const DB_TYPE_INDEXDB = 'INDEXDB';
export const DB_TYPE_LOCALSTROAGE = 'LOCALSTROAGE';
export const DB_TYPE_JSON_SERVER = 'JSONSERVER';
export const SELECTED_APPLICATION_USER_SERVICE_TYPE = DB_TYPE_JSON_SERVER;
export const COPY_TYPE_HTML = 'HTML';
export const COPY_TYPE_MARKDOWN = 'MARKDOWN';

export const APPLICATION_USER_DB_CONNECT: Record<string, IApplicationUserDBService> = {
  //   [DB_TYPE_INDEXDB]: markdownIndexedDBService,
  //   [DB_TYPE_LOCALSTROAGE]: markdownLocalStorageService,
  [DB_TYPE_JSON_SERVER]: userJsonApiDBService,
} as const;
