import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="p-5 flex flex-col min-h-screen max-w-6xl mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};
