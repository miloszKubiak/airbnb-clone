import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="p-5">
      <Navbar />
      <Outlet />
    </div>
  );
};
