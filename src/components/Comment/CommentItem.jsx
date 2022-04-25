import React from "react";
import moment from "moment";

const CommentItem = ({ userImage, userName, message, createdAt }) => (
  <div className="bg-white dark:bg-gray-800 text-black dark:text-gray-200 p-4 antialiased">
    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl px-4 pt-2 pb-2.5 w-full">
      <div className="flex">
        <img
          className="rounded-full h-8 w-8 mr-2 mt-1 "
          src={userImage}
          alt={userName}
        />
        <div className="text-md leading-relaxed my-auto">{userName}</div>
      </div>
      <div className="text-normal leading-snug md:leading-normal text-right">
        {message}
      </div>
    </div>
    <div className="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400 w-full">
      {moment(createdAt).fromNow()}
    </div>
  </div>
);

CommentItem.defaultProps = {
  userImage: "",
  userName: "",
  message: "",
  createdAt: "",
};
export default CommentItem;
