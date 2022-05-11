import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import CommentSection from '../Comment/CommentSection';

function ViewCardInfo({
  id,
  image = '',
  profile,
  name,
  description,
  createdAt,
  comments,
  onSubmit,
}) {
  return (
    <div className="h-full w-full lg:w-full bg-opacity-70 flex-row lg:flex lg:rounded-xl overflow-scroll no-scrollbar lg:overflow-hidden lg:border lg:border-white">
      <div className="w-full my-auto mx-auto lg:w-4/5">
        <img className="w-auto h-auto mx-auto " src={image} alt="" />
      </div>
      <div className="w-full lg:w-3/6 lg:h-full 2xl:w-2/6 bg-white max-h-screen min-h-500">
        <div className="flex-row border-b">
          <div className="flex pt-5 px-5 lg:m-4">
            <Link to={`/profile/${id}`}>
              <img
                className="w-12 h-12 rounded-full"
                src={profile}
                alt={name}
              />
            </Link>
            <div className="ml-2 mt-0.5">
              <Link to={`/profile/${id}`}>
                <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
                  {name}
                </span>
              </Link>
              <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                {moment(createdAt).fromNow()}
              </span>
            </div>
          </div>
          <div className="m-5">
            <p className="text-gray-700 max-h-32 overflow-scroll no-scrollbar">
              {description}
            </p>
          </div>
        </div>

        <CommentSection comments={comments} onSubmit={onSubmit} />
      </div>
    </div>
  );
}

ViewCardInfo.defaultProps = {
  id: '',
  image: '',
  profile: '',
  name: '',
  description: '',
  createdAt: '',
  comments: [],
  onSubmit: () => undefined,
};

export default ViewCardInfo;
