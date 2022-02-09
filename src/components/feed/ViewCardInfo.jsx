import React from "react";

const ViewCardInfo = ({
  image = "",
  profile,
  name,
  description,
  createdAt,
}) => {
  return (
    <div className="h-full w-4/5 bg-gray-800 bg-opacity-70 flex">
      <div className="w-4/6 my-auto">
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="w-2/6 h-full bg-white">
        <div className="flex-row">
          <div className="flex m-4">
            <img className="w-12 h-12 rounded-full" src={profile} alt={name} />
            <div className="ml-2 mt-0.5">
              <span classNAme="block font-medium text-base leading-snug text-black dark:text-gray-100">
                {name}
              </span>
              <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                {createdAt}
              </span>
            </div>
          </div>
          <div className="m-5 ">
            <p className="text-gray-700 h-32 overflow-y-auto no-scrollbar">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCardInfo;
