import React from "react";

const CategoryItem = ({ label, onSelect, isSelected = false }) => (
  <div className={`m-2 p-2 uppercase ${isSelected ? 'text-green-500' : 'text-green-900'}  font-bold cursor-pointer hover:text-green-500 tracking-wider `}>
    <span onClick={onSelect}>{label}</span>
  </div>
);

const SkillsCategories = ({ categories, onSelect, selected }) => {
  return (
    <div className="flex justify-center align-center w-full">
      {categories.map(({ name, label }, index) => (
        <CategoryItem
          key={`${name}-${index}`}
          label={label}
          onSelect={() => onSelect(name)}
          isSelected={selected === name}
        />
      ))}
    </div>
  );
};

SkillsCategories.defaultProps = {
  categories: [],
  selected: "",
  onSelect: (label) => undefined,
};

export default SkillsCategories;
