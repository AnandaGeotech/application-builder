/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable boundaries/no-unknown */
import { ILoginUser, IRegisterUser } from '@/common/types/application.type';
import { IAuthenticationDBService } from '@/common/types/feature.type';
import { loginUserFromApiServerByEmail, regsiterUserToApiServer } from '@/lib/db';

// Function to get a single file data by ID
const userLoginFromDBFn = async (email: string, password: string): Promise<ILoginUser | undefined> =>
  // eslint-disable-next-line implicit-arrow-linebreak
  loginUserFromApiServerByEmail(email, password);

// Function to get all data from JsonApiDB
const userRegisterToDBFn = async (data: IRegisterUser): Promise<IRegisterUser> => regsiterUserToApiServer(data);

const userAuthenticationJsonApiDBService: IAuthenticationDBService = {
  userLoginFromDBFn,
  userRegisterToDBFn,
};
export default userAuthenticationJsonApiDBService;
