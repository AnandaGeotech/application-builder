/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import { FC } from 'react';
import { TableApplicationUserListProps } from '../type/application.type';
import UserListSection from './UserListSection';

type hooksOptions = {
  hooksOptions: TableApplicationUserListProps;
};
const DashboardTest: FC<hooksOptions> = ({ hooksOptions }) => (
  <div className=" ">
    <div className="dark:border-gray-700 ">
      <UserListSection hooksOptions={hooksOptions} />
    </div>
  </div>
);

export default DashboardTest;
