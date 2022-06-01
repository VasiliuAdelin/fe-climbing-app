/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function ToggleSwitch({ status = false, onToggle }) {
  const [toggle, setToggle] = useState(status);

  const toggleClassInput = ' right-0 border-green-400';
  const toggleLabel = ' bg-green-400';

  const handleOnChange = () => {
    onToggle(!toggle);
    setToggle(!toggle);
  };

  return (
    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        onChange={handleOnChange}
        className={`absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer ${toggle && toggleClassInput}`}
      />
      <label
        className={`block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${toggle && toggleLabel} `}
      />
    </div>

  );
}

export default ToggleSwitch;
