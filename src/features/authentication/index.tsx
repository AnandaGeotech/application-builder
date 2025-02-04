import authenticationService from './service/authentication.service';
import { authenticationRoutes } from '@/features/authentication/authentication.routes';

const { retrieveUserByTokenFromDBFn } = authenticationService();

export { authenticationRoutes, retrieveUserByTokenFromDBFn };
