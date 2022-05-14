import React from 'react';
import Select from 'react-select';

function CategoryItem({ label, onSelect, isSelected = false }) {
  return (
    <div className={`m-2 p-2 uppercase ${isSelected ? 'text-greenNormal' : 'text-green-900'}  font-bold cursor-pointer hover:text-greenNormal tracking-wider `}>
      <span role="button" tabIndex={0} onClick={onSelect}>{label}</span>
    </div>
  );
}

function SkillsCategories({ categories, onSelect, selected }) {
  return (
    <>
      <div className="lg:hidden z-50">
        <Select
          defaultValue={selected}
          onChange={(category) => onSelect(category)}
          options={categories}
          placeholder="Select Category"
          className="w-full m-0 p-0 z-50"
          value={selected}
        />
      </div>

      <div className="hidden lg:flex justify-center align-center w-full">
        {categories.map((category, index) => (
          <CategoryItem
            key={`${category.value}-${index}`}
            label={category.label}
            onSelect={() => onSelect(category)}
            isSelected={selected.value === category.value}
          />
        ))}
      </div>
    </>

  );
}

SkillsCategories.defaultProps = {
  categories: [],
  selected: '',
  onSelect: () => undefined,
};

export default SkillsCategories;
