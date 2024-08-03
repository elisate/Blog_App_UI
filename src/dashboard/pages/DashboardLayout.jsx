import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import NavDash from './NavDash'
function DashboardLayout() {
  return (
    <div>
      <NavDash />
      <Sidebar />

      <Outlet />
    </div>
  );
}

export default DashboardLayout