/* eslint-disable no-alert */

import {
  APPLICATION_USER_DB_CONNECT,
  SELECTED_APPLICATION_USER_SERVICE_TYPE,
} from '@/features/application/constants/user.constant';

const ApplicationUserService = () => {
  if (SELECTED_APPLICATION_USER_SERVICE_TYPE in APPLICATION_USER_DB_CONNECT) {
    return APPLICATION_USER_DB_CONNECT[SELECTED_APPLICATION_USER_SERVICE_TYPE];
  }
  window.alert(`Invalid database type. Please choose between ${Object.keys(APPLICATION_USER_DB_CONNECT).join(',')} .`);
  throw new Error('Invalid database type');
};

export default ApplicationUserService;
