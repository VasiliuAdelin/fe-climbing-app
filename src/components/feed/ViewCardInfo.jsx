import React from "react";
import CommentSection from "./CommentSection";

const ViewCardInfo = ({
  image = "",
  profile,
  name,
  description,
  createdAt,
  comments,
}) => {
  return (
    <div className="h-full w-4/5 bg-opacity-70 flex-row lg:flex rounded-xl overflow-scroll no-scrollbar lg:overflow-hidden">
      <div className="w-full my-auto mx-auto lg:w-4/5">
        <img className="w-auto h-auto mx-auto " src={image} alt="" />
      </div>
      <div className="w-full lg:w-3/6 lg:h-full 2xl:w-2/6 bg-white max-h-screen">
        <div className="flex-row">
          <div className="flex pt-5 px-5 lg:m-4">
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
          <div className="m-5">
            <p className="text-gray-700 max-h-32 overflow-scroll no-scrollbar">
              {description}
            </p>
          </div>
        </div>
        <div className="lg:overflow-y-auto no-scrollbar h-full">
          {comments.map((comm, index) => {
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

        <div className="flex items-center justify-center shadow-lg w-full bottom-0 sticky">
          <form className="w-full bg-white rounded-lg px-4 pt-2">
            <div className="flex flex-wrap -mx-3 mb-6">
              <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
                Add a new comment
              </h2>
              <div className="w-full md:w-full px-3 mb-2 mt-2">
                <textarea
                  className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                  name="body"
                  placeholder="Type Your Comment"
                  required
                ></textarea>
              </div>
              <div className="w-full flex items-start md:w-full px-3">
                <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                  <svg
                    fill="none"
                    className="w-5 h-5 text-gray-600 mr-1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-xs md:text-sm pt-px">
                    Will be sent for review...
                  </p>
                </div>
                <div className="-mr-1">
                  <input
                    type="submit"
                    className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                    value="Post Comment"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewCardInfo;
