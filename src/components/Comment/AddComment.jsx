import React, { useState } from 'react';
import { Button } from 'gpl-tailwind-theme';

function AddComment({ onSubmit }) {
  const [message, setMessage] = useState('');

  const handleOnSubmit = () => {
    onSubmit(message);
    setMessage('');
  };
  return (
    <div className="w-full border-t border-gray-100 rounded bg-white">
      <textarea
        className="w-full text-gray-700 focus:outline-none font-medium placeholder-gray-500 focus:outline-none focus:bg-gray-100 p-4"
        name="body"
        placeholder="Write a comment..."
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        row={4}
      />
      <div className="w-full flex justify-center items-center m-0 p-4">
        <Button
          color={!message ? 'gray' : 'green'}
          size="base"
          ripple="light"
          disabled={!message}
          className="rounded m-1"
          onClick={handleOnSubmit}
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-xs md:text-sm pt-px">Will be sent for review...</p>
        </div>
      </div>
    </div>
  );
}

AddComment.defaultProps = {
  onSubmit: () => null,
};

export default AddComment;
