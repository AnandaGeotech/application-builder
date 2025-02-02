/* eslint-disable no-alert */
import { COMMON_DB_CONNECT, SELECTED_COMMON_SERVICE_TYPE } from '@/common/constants/global-db.constant';

const GlobalDBService = () => {
  if (SELECTED_COMMON_SERVICE_TYPE in COMMON_DB_CONNECT) {
    return COMMON_DB_CONNECT[SELECTED_COMMON_SERVICE_TYPE];
  }

  window.alert(`Invalid database type. Please choose between ${Object.keys(COMMON_DB_CONNECT).join(',')} .`);
  throw new Error('Invalid database type');
};

export default GlobalDBService;
