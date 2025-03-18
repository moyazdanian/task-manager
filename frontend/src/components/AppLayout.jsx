import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="h-screen bg-[#f4faff]">
      <Outlet />
    </div>
  );
}

export default AppLayout;
