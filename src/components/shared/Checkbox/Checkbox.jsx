import React from "react";

const Checkbox = ({ options, onChange }) => {
  console.log(options);
  return (
    <div>
      {options.map(({ name, value, isChecked }, index) => {
        return (
          <div className="">
            <input
              type="checkbox"
              id={`custom-checkbox-${name}-${index}`}
              name={name}
              value={value}
            //   checked={isChecked}
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
        );
      })}
    </div>
  );
};

Checkbox.defaultProps = {
  options: [],
  onChange: () => undefined,
};
export default Checkbox;
