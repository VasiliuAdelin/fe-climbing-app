import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@material-tailwind/react/Navbar";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import Icon from "@material-tailwind/react/Icon";
import { useSelector } from "react-redux";
import { selectState } from "../features/auth/authSlice";
import CurrentUserDropdown from "./CurrentUserDropdown";
import logo from "../assets/img/Untitled-4.png";

const LoggedInLinks = [
  {
    to: "/climb",
    name: "Climb",
    icon: "hiking",
  },
  {
    to: "/news",
    name: "News",
    icon: "people",
  },
  {
    to: "/skills",
    name: "Skills",
    icon: "book",
  },
  {
    to: "/forum",
    name: "Forum",
    icon: "forum",
  },
];

const NavbarListAnonym = [
  {
    to: "/faq",
    name: "FAQ",
    icon: "question_answer",
  },
  {
    to: "/forum",
    name: "Forum",
    icon: "discount",
  },
  {
    to: "/events",
    name: "Events",
    icon: "event_available",
  },
  {
    to: "/newsfeed",
    name: "News Feed",
    icon: "people",
  },
  {
    to: "/trainers",
    name: "Trainers",
    icon: "hiking",
  },
  {
    to: "/skills",
    name: "Skills",
    icon: "book",
  },
  {
    to: "/login",
    name: "Account",
    icon: "person",
  },
];

export default function DefaultNavbar() {
  const location = useLocation().pathname;
  const [openNavbar, setOpenNavbar] = useState(false);
  const { isLoggedIn } = useSelector(selectState);

  return (
    <Navbar
      color="transparent"
      navbar
      className="bg-gray-900 lg:bg-transparent mt-3"
    >
      <NavbarContainer>
        <NavbarWrapper>
          <Link to="/">
            <NavbarBrand>
              {/* <span className="rounded-custom-shape bg-green-500 p-4 w-50 h-10 inline-block"> */}
              <img className="w-36 md:w-36" src={logo} alt="" />
              {/* </span> */}
            </NavbarBrand>
          </Link>
          <div className="flex justify-center">
            <NavbarToggler
              onClick={() => setOpenNavbar(!openNavbar)}
              color="white"
            />
            <div className="lg:hidden">
              <CurrentUserDropdown />
            </div>
          </div>
        </NavbarWrapper>
        <NavbarCollapse open={openNavbar}>
          <Nav className="text-white">
            {isLoggedIn && (
              <>
                {LoggedInLinks.map(({ to, name, icon }, index) => (
                  <NavbarWrapper key={index} className="mx-2">
                    <Link to={to}>
                      <div
                        className={clsx(
                          "flex justify-center items-center w-full  p-3 font-medium cursor-pointer whitespace-no-wrap rounded-md text-gray-900 text-white hover:bg-light-blue-500 hover:shadow-md-light-blue transition-all duration-300",
                          location === to &&
                            "text-white bg-gradient-to-tr from-light-blue-500 to-light-blue-700 shadow-md-light-blue transition-all duration-300"
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
            {!isLoggedIn &&
              NavbarListAnonym.map(({ to, name, icon }, index) => (
                <NavbarWrapper key={index} className="mx-2">
                  <Link to={to}>
                    <div
                      className={clsx(
                        "flex justify-center items-center w-full  p-3 font-medium cursor-pointer whitespace-no-wrap rounded-md text-gray-900 text-white hover:bg-green-500 hover:shadow-md-light-green transition-all duration-300",
                        location === to &&
                          "text-white bg-green-500 transition-all duration-300"
                      )}
                    >
                      <Icon name={icon} size="2xl" color="white" />
                      <span className="ml-2">{name}</span>
                    </div>
                  </Link>
                </NavbarWrapper>
              ))}
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
