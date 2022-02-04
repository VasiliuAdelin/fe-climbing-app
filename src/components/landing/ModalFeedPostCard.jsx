import React from "react";

export default function Modal({
  profile,
  name,
  postedTime,
  image,
  description,
}) {
  return (
    <>
      <div className="fixed h-500 w-500 top-50% left-50%">
        <img src={image} alt="" />
        <img src={profile} alt="" />
        <h6>{name}</h6>
      </div>
    </>
  );
}
