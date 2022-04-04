import React, { useState } from "react";

const Accordion = ({ title, children, containerClass, titleClass, titleContainerClass }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${containerClass}`}>
      <h2>
        <button
          type="button"
          className={`flex outline-0 justify-between items-center focus:outline-none ${titleContainerClass}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className={`${titleClass}`}>{title}</span>
          {isExpanded ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </button>
      </h2>
      <div className={`p-1 ${isExpanded ? "block" : "hidden"}`}>{children}</div>
    </div>
  );
};

Accordion.defaultProps = {
  title: "Accordion Title Here",
  children: null,
  containerClass: "",
  titleContainerClass:"",
  titleClass: "",
};

export default Accordion;
