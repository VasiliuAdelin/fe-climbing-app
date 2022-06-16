/* eslint-disable react/style-prop-object */
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function FeedPostCard({
  id,
  userImage,
  userName,
  asset,
  description,
  createdAt,
  totalLikes,
  liked,
  totalComments,
  handleOnClick,
  handleOnLike,
}) {
  const currentItemLink = `${window.location.href}/newsfeed/${id}`;
  const shareTwitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentItemLink)}/`;
  const shareFbLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentItemLink)}/`;

  return (
    <div className="mb-2">
      <div className="rounded overflow-hidden shadow-md bg-white">
        <div className="flex m-4">
          <Link to={`/profile/${id}`}>
            <img
              className="w-12 h-12 rounded-full"
              src={userImage}
              alt={userName}
            />
          </Link>
          <div className="ml-2 mt-0.5">
            <Link to={`/profile/${id}`}>
              <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
                {userName}
              </span>
            </Link>
            <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
              {moment(createdAt).fromNow()}
            </span>
          </div>
        </div>
        <div className="text-center">
          <button type="button" onClick={handleOnClick}>
            <img
              className="mt-5 cursor-pointer m-auto"
              src={asset}
              alt="description"
            />
          </button>
          <p className="text-center text-gray-600 text-base pt-3 font-normal line-clamp-3 px-6 mt-5">
            {description}
          </p>
        </div>
        <div className="w-full flex justify-between py-5">
          <div className="flex mx-3">
            <div className="flex mr-2 text-gray-700 text-sm">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={liked ? 'green' : 'none'}
                className="w-25 h-25 mr-1 cursor-pointer"
                stroke="green"
                strokeWidth="1.7"
                onClick={handleOnLike}
              >
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="mt-0.5">{totalLikes}</span>
            </div>
            <div className="flex mr-2 text-gray-700 text-sm" tabIndex={0} role="button" onClick={handleOnClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="w-25 h-25 mr-1"
                stroke="green"
                strokeWidth="1.5"
              >
                <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              <span className="mt-0.5">{totalComments}</span>
            </div>
          </div>
          <div className="flex mx-3">
            <div aria-label="Twitter" role="img">
              <a href={shareTwitterLink} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  stroke="green"
                  strokeWidth="1.5"
                  className="feather feather-twitter mr-2 cursor-pointer"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>

            </div>
            <div className="text-green">
              <a href={shareFbLink} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook-square text-3xl text-green-500 hover:text-green-700 feather feather-twitter -mt-2 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FeedPostCard.defaultProps = {};

export default FeedPostCard;
