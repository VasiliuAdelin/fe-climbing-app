import React from "react";
import CommentSection from "../components/feed/CommentSection";
import ComplexLayout from "../components/layouts/ComplexLayout";
import AddComment from "../components/Comment/AddComment";
import Breadcrumb from "../components/shared/Breadcrumb";
import { Icon } from "@material-tailwind/react";
import { Button } from "gpl-tailwind-theme";

const mockSkill = {
  id: 12345,
  title: "How to get to climbing?",
  description: "Lorem imspun lorem impasjd k asdk sakdn kasd sakdn askd",
  mainImage:
    "https://explore-share.imgix.net/wp-content/uploads/2017/11/Arrampicata-trad-avanzato-2.jpg",
};

const MOCK_COMMENTS = [
  {
    user: {
      profile:
        "https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-14.png?resize=255%2C255&ssl=1",
      name: "Darwin Watterson",
    },
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    postedAt: new Date().toDateString(),
  },
  {
    user: {
      profile:
        "https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-18.png?resize=250%2C250&ssl=1",
      name: "Doggo Guda",
    },
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    postedAt: new Date().toDateString(),
  },
  {
    user: {
      profile:
        "https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-22.png?resize=256%2C256&ssl=1",
      name: "Winnie The Pooh",
    },
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    postedAt: new Date().toDateString(),
  },
  {
    user: {
      profile:
        "https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-22.png?resize=256%2C256&ssl=1",
      name: "Winnie The Pooh",
    },
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    postedAt: new Date().toDateString(),
  },
  {
    user: {
      profile:
        "https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-22.png?resize=256%2C256&ssl=1",
      name: "Winnie The Pooh",
    },
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    postedAt: new Date().toDateString(),
  },
];

const routesBreadcrumb = [
  {
    name: "ClimbAround",
    icon: "home",
    urlTo: "/",
  },
  {
    name: "Iasi",
    icon: "map",
    urlTo: "/areas/iasi",
  },
  {
    name: "All the routes from Iasi",
    icon: "people",
    urlTo: "#",
  },
  {
    name: "Muntele Negru 2",
    icon: "hiking",
    urlTo: "#",
  },
];

const AboutPost = () => {
  return (
    <div>
      <div className="flex m-4 items-center justify-between">
        <div className="flex">
          <img
            className="w-12 h-12 rounded-full"
            src={
              "https://i.natgeofe.com/n/7dbdf95f-fffa-42de-b935-9cbb11aeed16/adam-ondra-day-5-pitch_square.jpg"
            }
            alt="as"
          />
          <div className="ml-2 mt-0.5">
            <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
              Admin Admin
            </span>
            <div className="flex mt-2 items-center">
              <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug ">
                Created in Jun 4, 2021
              </span>
              <span className="w-2 h-2 rounded bg-gray-500 mx-2"></span>
              <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug ">
                26 min climb
              </span>
              <span className="w-2 h-2 rounded bg-gray-500 mx-2"></span>
              <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug ">
                BELAYING
              </span>
            </div>
          </div>
        </div>

        <div className="flex">
          <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug ">
            <i className="fa-solid fa-link"></i> Copy link
          </span>
        </div>
      </div>
    </div>
  );
};
const ViewCRag = () => {
  const { title, description, mainImage } = mockSkill;
  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title="RouteList Muntele Negru 2"
      subtitle="E chiar ok"
      customBackground={mainImage}
    >
      <Breadcrumb routes={routesBreadcrumb} />
      <div className="flex ">
        <div className="w-1/6 border-r border-gray-100">
          <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
            Following is an example of a state object declaration. The code
          </p>
          <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
            <span className="font-bold text-lg bg-gray-100 p-2 rounded mr-2">
              Type:{" "}
            </span>
            <p className="m-2">Building</p>
          </p>
          <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
            <span className="font-bold text-lg bg-gray-100 p-2 rounded mr-2 mb-2">
              Grade:{" "}
            </span>
            <p className="m-2">8+</p>
          </p>
          <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
            <span className="font-bold text-lg bg-gray-100 p-2 rounded mr-2 mb-2">
              Seekness:{" "}
            </span>
            <p className="m-2">Boild</p>
          </p>
          <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
            <span className="font-bold text-lg bg-gray-100 p-2 rounded mr-2 mb-2">
              Style:{" "}
            </span>

            <p className="m-2">FreeStyle</p>
          </p>
          <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
            <span className="font-bold text-lg bg-gray-100 p-2 rounded mr-2 mb-2">
              Position:{" "}
            </span>
            <p className="m-2">1234.23, 345,21</p>
          </p>
        </div>
        <div className="w-4/6 m-auto ">
          <div className="flex">
            <Button
              color="green"
              ripple="dark"
              rounded
              className="m-1 py-2 px-6"
            >
              <Icon name="hiking" />
              Done
            </Button>
            <Button
              color="blue"
              ripple="dark"
              rounded
              className="m-1 py-2 px-6"
            >
              <Icon family="font-awesome" name="fa-solid fa-plus" />
              TO DO
            </Button>
          </div>

          <AboutPost />
          <div className="font-bold text-xl my-2">{title}</div>
          <div>{description}</div>
          <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
            Following is an example of a state object declaration. The code
            below might be a bit outdated due to the use of class components,
            but it makes sense to go back a little bit to understand the tenants
            of this core React Feature :
          </p>
          <div className="h-500">No Posts yet</div>
          <hr />
          <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
            Comments:
          </p>
          <AddComment />
          <div className="h-500">
            <div className="lg:overflow-y-auto h-full border border-gray-100 h-500">
              {MOCK_COMMENTS.map((comm, index) => {
                const { user, comment, postedAt } = comm;
                return (
                  <CommentSection
                    key={index}
                    profile={user.profile}
                    name={user.name}
                    comment={comment}
                    postedAt={postedAt}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ComplexLayout>
  );
};

export default ViewCRag;
