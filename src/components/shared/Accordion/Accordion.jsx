import React, { useState } from 'react';

function Accordion({
  title,
  children,
  containerClass,
  titleClass,
  titleContainerClass,
}) {
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
            <i className="fa-solid fa-angle-up" />
          ) : (
            <i className="fa-solid fa-angle-down" />
          )}
        </button>
      </h2>
      <div className={`lg: p-1 ${isExpanded ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
}

Accordion.defaultProps = {
  title: 'Accordion Title Here',
  children: null,
  containerClass: '',
  titleContainerClass: '',
  titleClass: '',
};

export default Accordion;
