import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import MainLayout from './MainLayout';

function AdminLayout({ children }) {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <MainLayout>
      <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
      <div className={`${toggleSidebar ? 'ml-64' : 'ml-0'} transition-all duration-300 min-w-300`}>
        {children}
      </div>
    </MainLayout>
  );
}

export default AdminLayout;
