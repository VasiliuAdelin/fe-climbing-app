import React, { useState } from "react";
import Select from "react-select";
import TYPES from "../../types";
import { formatObjectSelect } from "./crags.utils";

const { CRAGS } = TYPES;
const { GENRE_TYPE, STEEPNESS_TYPES, STYLE_TYPES, HOLD_TYPES, GRADES_TYPES } =
  CRAGS;

const TYPE_OF_CRAGS_OPTIONS = formatObjectSelect(GENRE_TYPE);
const GRADES_OPTIONS = formatObjectSelect(GRADES_TYPES);
const FEATURES_OPTIONS = formatObjectSelect({
  ...STEEPNESS_TYPES,
  ...STYLE_TYPES,
  ...HOLD_TYPES,
});

const INITIAL_STATE = {
  grade: [],
  type: [],
  features: [],
};

const FilterSection = ({ onChange }) => {
  const [values, setValues] = useState(INITIAL_STATE);

  const handleOnChangeSelect = (name, data) => {
    const payload = {
      ...values,
      [name]: data,
    };

    setValues({
      ...payload,
    });

    const { grade, type, features } = payload;

    const dataForCB = {
      grade: grade.map((gd) => Number(gd.value)),
      type: type.map((tp) => tp.value),
      features: features.map((ft) => ft.value),
    };

    onChange(dataForCB);
  };
  return (
    <>
      <h1 className="text-gray-500">Filters:</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Select
          defaultValue={values.type}
          onChange={(payload) => handleOnChangeSelect("type", payload)}
          options={TYPE_OF_CRAGS_OPTIONS}
          placeholder="Filter by type"
          className="w-full"
          value={values.type}
          isMulti
        />
        <Select
          defaultValue={values.grade}
          onChange={(payload) => handleOnChangeSelect("grade", payload)}
          options={GRADES_OPTIONS}
          placeholder="Filter by grade"
          className="w-full"
          value={values.grade}
          isMulti
        />
        <Select
          defaultValue={values.features}
          onChange={(payload) => handleOnChangeSelect("features", payload)}
          options={FEATURES_OPTIONS}
          placeholder="Filter by features"
          className="w-full m-0 p-0 col-span-2"
          value={values.features}
          isMulti
        />
      </div>
    </>
  );
};

FilterSection.defaultProps = {
  onChange: () => undefined,
};

export default FilterSection;
