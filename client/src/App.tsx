import { Navbar } from "./components";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div className="p-5 flex flex-col min-h-screen max-w-5xl mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};
