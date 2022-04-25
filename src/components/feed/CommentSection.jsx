import React from "react";

const CommentSection = ({
  profile = "",
  name = "",
  comment = "",
  postedAt = "",
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-gray-200 p-4 antialiased flex">
      <div>
        <div className="bg-gray-100 dark:bg-gray-700 rounded-xl px-4 pt-2 pb-2.5 w-full">
          <div className="flex">
            <img
              className="rounded-full h-8 w-8 mr-2 mt-1 "
              src={profile}
              alt={name}
            />
            <div className="text-md leading-relaxed my-auto">{name}</div>
          </div>
          <div className="text-normal leading-snug md:leading-normal">
            {comment}
          </div>
        </div>
        <div className="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">
          {postedAt}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
