// import userJsonApiDBService from '@/features/application/services/users.jsonserver.service';
import { IApplicationUserDBService } from '@/common/types/feature.type';

export const DB_TYPE_NAME = 'INDEXDB';
export const DB_TYPE_INDEXDB = 'INDEXDB';
export const DB_TYPE_LOCALSTROAGE = 'LOCALSTROAGE';
export const DB_TYPE_JSON_SERVER = 'JSONSERVER';
export const SELECTED_COMMON_SERVICE_TYPE = DB_TYPE_JSON_SERVER;
export const COPY_TYPE_HTML = 'HTML';
export const COPY_TYPE_MARKDOWN = 'MARKDOWN';

export const COMMON_DB_CONNECT: Record<string, IApplicationUserDBService> = {
  //   [DB_TYPE_INDEXDB]: markdownIndexedDBService,
  //   [DB_TYPE_LOCALSTROAGE]: markdownLocalStorageService,
} as const;
