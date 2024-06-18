import { Outlet } from "react-router-dom"
import Drawer from "../components/Drawer"

const MainLayout = () => {
  return (
    <div className="flex" >
      
      <Drawer />
      <div className="flex-grow">
        <Outlet />
      </div>
      
    </div>
  );
};

export default MainLayout