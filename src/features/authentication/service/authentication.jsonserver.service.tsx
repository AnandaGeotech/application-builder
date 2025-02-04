/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable boundaries/no-unknown */
import { IRegisterUser } from '@/common/types/application.type';
import { IAuthenticationDBService } from '@/common/types/feature.type';
import { loginUserFromApiServerByEmail, registerUserToApiServer } from '@/lib/db';

// Function to get a single file data by ID
const userLoginFromDBFn = async (
  email: string,
  password: string
): Promise<
  | {
      user: IRegisterUser;
      token: string;
    }
  | undefined
> =>
  // eslint-disable-next-line implicit-arrow-linebreak
  loginUserFromApiServerByEmail(email, password);

// Function to get all data from JsonApiDB
const userRegisterToDBFn = async (data: IRegisterUser): Promise<IRegisterUser> => registerUserToApiServer(data);

const userAuthenticationJsonApiDBService: IAuthenticationDBService = {
  userLoginFromDBFn,
  userRegisterToDBFn,
};
export default userAuthenticationJsonApiDBService;
