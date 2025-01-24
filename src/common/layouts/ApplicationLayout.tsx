import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
