import React from 'react';

function Checkbox({ options, onChange }) {
  return (
    <div>
      {options.map(({ name, value }, index) => (
        <div className="">
          <input
            type="checkbox"
            id={`custom-checkbox-${name}-${index}`}
            name={name}
            value={value}
            onChange={onChange}
            className="mx-2"
          />
          <label
            htmlFor={`custom-checkbox-${name}-${index}`}
            className="text-gray-900"
          >
            {name}
          </label>
        </div>
      ))}
    </div>
  );
}

Checkbox.defaultProps = {
  options: [],
  onChange: () => undefined,
};
export default Checkbox;
