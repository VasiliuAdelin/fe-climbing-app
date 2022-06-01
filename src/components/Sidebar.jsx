/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';

const SIDEBAR_ROUTES = [
  {
    id: 1,
    name: 'Settings',
    icon: 'settings',
    uri: '/settings',
  },
  {
    id: 12,
    name: 'Comments',
    icon: 'toc',
    uri: '/comments-admin',
  },
];

export default function Sidebar({ toggleSidebar, setToggleSidebar }) {
  const [showSidebar, setShowSidebar] = useState(toggleSidebar ? 'left-0' : '-left-64');

  const handleOnClick = () => {
    setToggleSidebar(!toggleSidebar);
    setShowSidebar(showSidebar === '-left-64' ? 'left-0' : '-left-64');
  };

  return (
    <div
      className={`fixed top-25 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden w-64 pt-10  transition-all duration-300`}
    >
      <div className="fixed bottom-2 left-2 z-50">
        <Button
          color="green"
          size="lg"
          iconOnly
          rounded
          ripple="light"
          onClick={handleOnClick}
          className=" z-50"
        >
          <Icon name="menu" size="2xl" color="white" />
        </Button>
      </div>
      <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative ">
        <div className="flex flex-col">
          <ul className="flex-col min-w-full flex list-none">
            {SIDEBAR_ROUTES.map(({
              id, name, icon, uri,
            }) => (
              <li key={id} className="rounded-lg mb-4">
                <NavLink
                  to={uri}
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-green-500 to-green-700 text-white shadow-md mr-2 -ml-2"
                >
                  <Icon name={icon} size="2xl" />
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
