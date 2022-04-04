import { Button } from "gpl-tailwind-theme";
import React from "react";

const AddComment = () => {
  return (
    <div className="w-full border border-gray-100 rounded">
      <form>
        <textarea
          className="w-full text-gray-700 focus:outline-none font-medium placeholder-gray-500 focus:outline-none focus:bg-gray-100 p-4"
          name="body"
          placeholder="Write a comment..."
          required
        ></textarea>
        <div className="w-full md:flex md:items-start md:items-center ml-4 mb-4">
          <Button
            color="green"
            type="submit"
            size="base"
            ripple="light"
            className="rounded m-1"
          >
            PUBLISH
          </Button>
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
        </div>
      </form>
    </div>
  );
};

export default AddComment;
