import React from 'react';
import { Link } from 'react-router-dom';

function TrainerCard({
  name,
  description,
  mainImage,
  position,
  id,
}) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
        <div
          className="relative z-10"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))',
          }}
        >
          <img className="w-full" src={mainImage} alt="Profile" />
        </div>
        <div className="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
          <div className="text-center">
            <p className="text-dark tracking-wide uppercase text-lg font-bold">
              {name}
            </p>
          </div>
          <Link to={`/profile/${id}`}>
            <button type="button" className="p-2 w-12 h-12 bg-greenNormal rounded-full hover:bg-green-900 focus:bg-greenDark transition ease-in duration-200 focus:outline-none">
              <i className="fa-solid fa-envelope text-white" />
            </button>
          </Link>
        </div>
        <div className="pt-6 pb-8 text-gray-600 text-center">
          <p>{position}</p>
          <p className="text-sm">{description}</p>
        </div>

        <div className="pb-10 uppercase text-center tracking-wide flex justify-around">
          <div className="posts">
            <p className="text-gray-400 text-sm">Posts</p>
          </div>
          <div className="followers">
            <p className="text-gray-400 text-sm">Likes</p>
          </div>
          <div className="following">
            <p className="text-gray-400 text-sm">Feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}

TrainerCard.defaultProps = {
  name: 'John Doe',
  description: 'Lorem ipsum',
  mainImage: 'https://via.placeholder.com/700',
  position: 'Climbing Expert',
};
export default TrainerCard;
