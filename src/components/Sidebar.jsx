import { useState } from 'react';
import AdminNavbar from './AdminNavbar';

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState('-left-64');

  return (
    <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
  );
}
