/* eslint-disable no-alert */

import { SELECTED_AUTHENTICATION_SERVICE_TYPE, AUTHENTICATION_DB_CONNECT } from '../constants/authentication.constant';

const authenticationService = () => {
  if (SELECTED_AUTHENTICATION_SERVICE_TYPE in AUTHENTICATION_DB_CONNECT) {
    return AUTHENTICATION_DB_CONNECT[SELECTED_AUTHENTICATION_SERVICE_TYPE];
  }

  window.alert(`Invalid database type. Please choose between ${Object.keys(AUTHENTICATION_DB_CONNECT).join(',')} .`);
  throw new Error('Invalid database type');
};

export default authenticationService;
