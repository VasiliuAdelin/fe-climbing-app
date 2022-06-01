import React from 'react';
import DefaultNavbar from '../DefaultNavbar';

function MainLayout({ children }) {
  return (
    <>
      <div className="w-full z-20 bg-gradient-to-tr from-greenNormal to-greenDark shadow-lg overflow-hidden">
        <DefaultNavbar />
      </div>
      <div className="bg-gray-100 z-20 m-0 p-0 overflow-x-scroll">{children}</div>
    </>
  );
}

export default MainLayout;
