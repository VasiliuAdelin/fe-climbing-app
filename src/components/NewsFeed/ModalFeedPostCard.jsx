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
      <div className="absolute !important top:0">
        <img src={image} alt="" />
        <h1 className="text-white">{image}</h1>
        <img
          src={profile}
          alt="Display Picture of Andres Berlin"
          role="img"
          className="rounded-full object-cover shadow-md w-full h-full"
        />
        <h6>{name}</h6>
      </div>
    </>
  );
}
