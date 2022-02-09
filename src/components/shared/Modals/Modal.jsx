import React from "react";

const Modal = ({ open, onClose, children }) => {
  if (!open) {
    return null;
  }
  return (
    <div className="fixed left-0 bottom-0 w-full h-full bg-gray-800 z-50 bg-opacity-70">
      <div className="absolute top-4 right-4">
        <svg
          className="ml-auto fill-current text-gray-500 cursor-pointer w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
          onClick={onClose}
        >
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
        </svg>
      </div>
      <div className="w-full h-full flex justify-center items-center py-12 px-24">
        {children}
      </div>
    </div>
  );
};

export default Modal;
