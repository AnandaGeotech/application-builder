/* eslint-disable boundaries/no-unknown */
import applicationService from '../services/application.service';
import { IApplicationUser } from '@/types/application.type';
import useGlobalList from '@/common/hooks/useGlobalList';

const { USER_SERVICE } = applicationService();

const useApplicationUserList = () => useGlobalList<IApplicationUser>(USER_SERVICE);
export type TUserListReturn = ReturnType<typeof useApplicationUserList>;
export default useApplicationUserList;
