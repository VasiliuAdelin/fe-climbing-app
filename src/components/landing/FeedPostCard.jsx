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
        className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-16 sm:mb-24 xl:max-w-sm lg:w-2/5 inline-block"
      >
        <div className="rounded overflow-hidden shadow-md bg-white">
          <div className="flex m-4">
            <img className="w-12 h-12 rounded-full" src={profile} />
            <div className="ml-2 mt-0.5">
              <span classNAme="block font-medium text-base leading-snug text-black dark:text-gray-100">
                Loyce Kuvalis
              </span>
              <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                16 December at 08:25
              </span>
            </div>
          </div>
          <a onClick={() => setShowModal(true)}>
            <img className="mt-5" src={image} alt="" />
            <p className="text-center text-gray-600 text-base pt-3 font-normal line-clamp-3 px-6 mt-5">
              {description}
            </p>
          </a>
          <div className="w-full flex justify-between py-5">
            <div className="flex mx-3">
              <div class="flex mr-2 text-gray-700 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="green"
                  className="w-25 h-25 mr-1"
                  stroke="green"
                  stroke-width="1.7"
                >
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="mt-0.5">12</span>
              </div>
              <div class="flex mr-2 text-gray-700 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-25 h-25 mr-1"
                  stroke="green"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                <span className="mt-0.5">8</span>
              </div>
            </div>

            <div className="flex mx-3">
              <div aria-label="Twitter" role="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  stroke="green"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-twitter mr-2"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </div>
              <div aria-label="Instagram" role="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  stroke="green"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {showModal ? (
          <Container>
            <ClickAwayListener onClickAway={handleClickAway}>
              <div className="">
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
      </div>
    </>
  );
}

export default FeedPostCard;
