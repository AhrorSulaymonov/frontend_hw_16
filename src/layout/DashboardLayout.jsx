import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-amber-100">
          <Navbar />
          <div className="bg-white m-3 p-3 rounded shadow">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
