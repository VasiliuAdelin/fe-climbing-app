import React from "react";
import { Link } from "react-router-dom";
const SkillItem = ({ id, title, descripton, mainImage, category, isFirst }) => {
  return (
    <div
      className={`border my-2 p-1  rounded ${
        isFirst ? "flex w-full" : "w-1/3"
      }`}
    >
      <div className={`${isFirst && "w-3/5"}`}>
        <img
          src={mainImage}
          alt={title}
          className={`object-cover ${isFirst ? "w-full" : "h-64"} rounded`}
        />
      </div>
      <div className={`p-6 ${isFirst && "flex justify-center items-center"}`}>
        <div>
          <div className="w-full">
            <span className="font-bold uppercase text-xs tracking-wider text-green-900">
              {category}
            </span>
          </div>
          <Link to={`/skills/${id}`}>
            <p className="text-lg my-2 cursor-pointer hover:text-green-900">
              {title}
            </p>
          </Link>
          <p className="text-xs">{descripton}</p>
        </div>
      </div>
    </div>
  );
};

SkillItem.defaultProps = {
  title: "Some Nice title",
  descripton: "Lorem ipsim here",
  mainImage: "https://via.placeholder.com/400",
  category: "Science",
  isFirst: false,
  id:12345
};
export default SkillItem;
