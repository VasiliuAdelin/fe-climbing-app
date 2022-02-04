import React from "react";
import Container from "../login/Container";
import ClickAwayListener from "react-click-away-listener";
import Modal from "./ModalFeedPostCard";

function FeedPostCard({ profile, name, postedTime, image, description }) {
  const [showModal, setShowModal] = React.useState(false);
  const handleClickAway = () => {
    console.log("Maybe close the popup");
    setShowModal(false);
  };
  return (
    <>
      <div
        role="listitem"
        className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
      >
        <div className="rounded overflow-hidden shadow-md bg-white">
          <div className="flex">
            <div className="h-32 w-32 left-0">
              <img
                src={profile}
                alt="Display Picture of Andres Berlin"
                role="img"
                className="rounded-full object-cover shadow-md w-full h-full"
              />
            </div>
            <div className="flex-row w-4/6">
              <h1 className="font-bold text-3xl text-center mt-8">{name}</h1>
              <p className="text-gray-800 text-sm text-center">{postedTime}</p>
            </div>
          </div>
          <a onClick={() => setShowModal(true)}>
            <img className="mt-5" src={image} alt="" />
            <p className="text-center text-gray-600 text-base pt-3 font-normal line-clamp-3 px-6 mt-5">
              {description}
            </p>
          </a>
          <div className="w-full flex justify-between pt-5 pb-5">
            <a href="javascript:void(0)" className="mx-5">
              <div aria-label="Github" role="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="blue"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-github"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </div>
            </a>
            <div className="flex">
              <a href="javascript:void(0)" className="mx-5">
                <div aria-label="Twitter" role="img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="green"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </div>
              </a>
              <a href="javascript:void(0)" className="mx-5">
                <div aria-label="Instagram" role="img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="green"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <Container>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className="bg-gray-700 block absolute">
              <Modal
                profile={profile}
                name={name}
                postedTime={postedTime}
                image={image}
                description={description}
              />
            </div>
          </ClickAwayListener>
        </Container>
      ) : null}
    </>
  );
}

export default FeedPostCard;
