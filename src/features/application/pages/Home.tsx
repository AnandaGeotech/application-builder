import UserListSection from '@/features/application/components/UserListSection';
import useApplicationUserList from '@/features/application/hooks/useApplicationUserList';

const Home = () => {
  const hooksOptions = useApplicationUserList();
  return (
    <div className=" ">
      <div className="dark:border-gray-700 ">
        <UserListSection hooksOptions={hooksOptions} />
      </div>
    </div>
  );
};
export default Home;
