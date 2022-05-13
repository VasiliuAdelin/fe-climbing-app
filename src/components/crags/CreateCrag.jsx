import React, { useEffect, useState } from 'react';
import { InputIcon, Textarea, Button } from '@material-tailwind/react';
import Select from 'react-select';
import { isEmpty } from 'lodash';
import Card from '../shared/Card/Card';
import CardBody from '../shared/Card/CardBody';
import CardFooter from '../shared/Card/CardFooter';
import CardHeader from '../shared/Card/CardHeader';
import TYPES from '../../types';
import { formatObjectSelect } from './crags.utils';

const { CRAGS } = TYPES;
const {
  GENRE_TYPE, STEEPNESS_TYPES, STYLE_TYPES, HOLD_TYPES, GRADES_TYPES,
} = CRAGS;

const TYPE_OF_CRAGS_OPTIONS = formatObjectSelect(GENRE_TYPE);
const GRADES_OPTIONS = formatObjectSelect(GRADES_TYPES);
const FEATURES_OPTIONS = formatObjectSelect({
  ...STEEPNESS_TYPES,
  ...STYLE_TYPES,
  ...HOLD_TYPES,
});

const INITIAL_STATE = {
  name: '',
  grade: null,
  typeOfCrag: null,
  features: null,
  description: '',
  address: '',
  geoLocation: '',
  mainImage: 'https://via.placeholder.com/400',
};

const INITIAL_ERRORS = {
  grade: false,
  typeOfCrag: false,
  features: false,
};

function CreateCrag({ onSubmit }) {
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErros] = useState(INITIAL_ERRORS);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((positionPayload) => {
      if (positionPayload?.coords?.latitude) {
        const geoLocationData = `${positionPayload.coords.latitude}, ${positionPayload.coords.longitude}`;
        setValues({
          ...values,
          geoLocation: geoLocationData,
        });
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      address,
      description,
      features,
      geoLocation,
      grade,
      mainImage,
      name,
      typeOfCrag,
    } = values;

    if (isEmpty(features) || isEmpty(grade) || isEmpty(typeOfCrag)) {
      setErros({
        grade: isEmpty(grade),
        typeOfCrag: isEmpty(typeOfCrag),
        features: isEmpty(features),
      });
    } else {
      const payload = {
        name,
        description,
        address,
        geoLocation,
        assets: [mainImage],
        features: features.map((feature) => feature.value),
        grade: Number(grade.value),
        type: typeOfCrag.value,
      };
      onSubmit(payload);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setErros(INITIAL_ERRORS);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleOnChangeSelect = (name, payload) => {
    setErros(INITIAL_ERRORS);
    setValues({
      ...values,
      [name]: payload,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-screen h-screen flex justify-center items-center p-2">
        <Card className="rounded-xl w-full lg:w-3/5">
          <CardHeader color="green" className="rounded-xl">
            <span className="inline-block text-lg font-bold">
              Wow, a new place to climb. Let's see it!
            </span>
          </CardHeader>
          <CardBody className="max-h-500 overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="mb-6">
                <InputIcon
                  type="text"
                  color="green"
                  placeholder="Crag Name *"
                  required
                  value={values.name}
                  name="name"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-6">
                <InputIcon
                  type="text"
                  color="green"
                  placeholder="Crag Image Link *"
                  value={values.mainImage}
                  name="mainImage"
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="mb-6">
                <Select
                  defaultValue={values.typeOfCrag}
                  onChange={(payload) => handleOnChangeSelect('typeOfCrag', payload)}
                  options={TYPE_OF_CRAGS_OPTIONS}
                  placeholder="Select Type Of Crag"
                  className="w-full"
                  value={values.typeOfCrag}
                  required
                />
                {errors.typeOfCrag && (
                  <span className="inline-block text-red-500 mt-2 text-base">
                    This field is required!
                  </span>
                )}
              </div>
              <div className="mb-6">
                <Select
                  defaultValue={values.grade}
                  onChange={(payload) => handleOnChangeSelect('grade', payload)}
                  options={GRADES_OPTIONS}
                  placeholder="Select Grade"
                  className="w-full"
                  value={values.grade}
                />
                {errors.grade && (
                  <span className="inline-block text-red-500 mt-2 text-base">
                    This field is required!
                  </span>
                )}
              </div>
            </div>
            <div className="w-full mb-6">
              <Select
                defaultValue={values.features}
                onChange={(payload) => handleOnChangeSelect('features', payload)}
                options={FEATURES_OPTIONS}
                placeholder="Select Features"
                className="w-full m-0 p-0"
                value={values.features}
                isMulti
              />
              {errors.features && (
                <span className="inline-block text-red-500 mt-2 text-base">
                  This field is required!
                </span>
              )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              <div className="mb-6 col-span-2">
                <InputIcon
                  type="text"
                  color="green"
                  placeholder="Address *"
                  value={values.address}
                  name="address"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="mb-6">
                <InputIcon
                  type="text"
                  color="green"
                  placeholder="GeoLocation"
                  value={values.geoLocation}
                  name="geoLocation"
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="mb-6">
                <Textarea
                  color="green"
                  placeholder="Description *"
                  value={values.description}
                  name="description"
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
          </CardBody>
          <CardFooter>
            <div className="flex justify-center bg-bb">
              <Button type="submit" color="green" size="lg">
                Let's rock
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
}

CreateCrag.defaultProps = {
  onSubmit: () => undefined,
};
export default CreateCrag;
