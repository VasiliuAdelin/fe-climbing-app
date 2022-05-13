import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import clsx from 'clsx';

import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Icon from '@material-tailwind/react/Icon';
import { useSelector } from 'react-redux';
import { selectState } from '../features/auth/authSlice';
import CurrentUserDropdown from './CurrentUserDropdown';
import logo from '../assets/img/logo-large-dark.png';
import logoSmall from '../assets/img/logo-small-dark.png';
import DropdownComponent from './shared/DropdownComponent';

const LoggedInLinks = [
  {
    to: '/areas',
    name: 'Map',
    icon: 'map',
  },
  {
    to: '/faq',
    name: 'FAQ',
    icon: 'question_answer',
  },
  {
    to: '/forum',
    name: 'Forum',
    icon: 'discount',
  },
  {
    to: '/events',
    name: 'Events',
    icon: 'event_available',
  },
  {
    to: '/newsfeed',
    name: 'News Feed',
    icon: 'people',
  },
  {
    to: '/trainers',
    name: 'Trainers',
    icon: 'hiking',
  },
  {
    to: '/skills',
    name: 'Skills',
    icon: 'book',
  },
];

const NavbarListAnonym = [
  {
    to: '/faq',
    name: 'FAQ',
    icon: 'question_answer',
  },
  {
    to: '/forum',
    name: 'Forum',
    icon: 'discount',
  },
  {
    to: '/events',
    name: 'Events',
    icon: 'event_available',
  },
  {
    to: '/newsfeed',
    name: 'News Feed',
    icon: 'people',
  },
  {
    to: '/trainers',
    name: 'Trainers',
    icon: 'hiking',
  },
  {
    to: '/skills',
    name: 'Skills',
    icon: 'book',
  },
  {
    to: '/login',
    name: 'Account',
    icon: 'person',
  },
];

export default function DefaultNavbar({ bgColor = 'transparent' }) {
  const location = useLocation().pathname;
  const [openNavbar] = useState(false);
  const { isLoggedIn } = useSelector(selectState);

  return (
    <Navbar
      color={bgColor}
      navbar
      className="mt-3 z-50"
    >
      <NavbarContainer>
        <NavbarWrapper className="items-center">
          <Link to="/">
            <NavbarBrand>
              <span className="hidden p-4 w-50 h-10 md:inline-block">
                <img className="w-36 -mt-6" src={logo} alt="" />
              </span>
              <span className="inline-block h-10 md:hidden">
                <img className="w-20" src={logoSmall} alt="" />
              </span>
            </NavbarBrand>
          </Link>
          <div className="lg:hidden flex items-center justify-center">
            {isLoggedIn && <CurrentUserDropdown />}
            <DropdownComponent
              navbarList={isLoggedIn ? LoggedInLinks : NavbarListAnonym}
            />
          </div>
        </NavbarWrapper>
        <NavbarCollapse open={openNavbar}>
          <ul className="flex lg:items-center flex-col lg:flex-row list-none ml-auto ">
            {isLoggedIn && (
              <>
                {LoggedInLinks.map(({ to, name, icon }, index) => (
                  <NavbarWrapper key={index} className="mx-2">
                    <Link to={to}>
                      <div
                        className={clsx(
                          'flex justify-center items-center w-full  p-3 font-medium cursor-pointer whitespace-no-wrap rounded-md text-gray-900 text-white hover:bg-light-green-500 hover:shadow-md-light-green transition-all duration-300',
                          location === to
                            && 'text-white bg-gradient-to-tr from-light-green-500 to-light-green-700 shadow-md-light-green transition-all duration-300',
                        )}
                      >
                        <Icon name={icon} size="2xl" color="white" />
                        <span className="ml-2">{name}</span>
                      </div>
                    </Link>
                  </NavbarWrapper>
                ))}
                <div className="hidden lg:flex">
                  <CurrentUserDropdown />
                </div>
              </>
            )}
            {!isLoggedIn
              && NavbarListAnonym.map(({ to, name, icon }, index) => (
                <NavbarWrapper key={index} className="mx-2">
                  <Link to={to}>
                    <div
                      className={clsx(
                        'flex justify-center items-center w-full  p-3 font-medium cursor-pointer whitespace-no-wrap rounded-md text-gray-900 text-white hover:bg-greenNormal hover:shadow-md-light-green transition-all duration-300',
                        location === to
                          && 'text-white bg-greenNormal transition-all duration-300',
                      )}
                    >
                      <Icon name={icon} size="2xl" color="white" />
                      <span className="ml-2">{name}</span>
                    </div>
                  </Link>
                </NavbarWrapper>
              ))}
          </ul>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
