import React from "react";

const ViewCardInfo = ({ image = "" }) => {
  return (
    <div className="h-full w-4/5 bg-gray-800 bg-opacity-70 flex">
      <div className="w-4/6 my-auto">
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="w-2/6 h-full bg-white"></div>
    </div>
  );
};

export default ViewCardInfo;
