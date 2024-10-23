import { Outlet } from "react-router";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="min-h-[70px]" />
      <div className="flex h-full">

      <SideBar />
      <div className="flex-1 overflow-x-auto">
        <Outlet />
      </div>
      </div>
    </>
  );
};

export default Layout;
