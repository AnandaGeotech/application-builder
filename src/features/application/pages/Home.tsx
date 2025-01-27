import useApplicationUserList from '../hooks/useApplicationUserlist';
import UserListSection from '../components/UserListSection';

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
