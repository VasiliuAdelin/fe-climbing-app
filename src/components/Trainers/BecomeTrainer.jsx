import { InputIcon, Textarea, Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import Select from 'react-select';
import { isEmpty } from 'lodash';
import Card from '../shared/Card/Card';
import CardBody from '../shared/Card/CardBody';
import CardFooter from '../shared/Card/CardFooter';
import CardHeader from '../shared/Card/CardHeader';
import TYPES from '../../types';
import { formatObjectSelect } from '../crags/crags.utils';

const { CATEGORIES } = TYPES;

const CATEGORIES_OPTIONS = formatObjectSelect({
  ...CATEGORIES,
});

const INITIAL_STATE = {
  title: '',
  categories: null,
  description: '',
};

const INITIAL_ERRORS = {
  categories: false,
};

function BecomeTrainer({ onSubmit }) {
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErros] = useState(INITIAL_ERRORS);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      title,
      description,
      categories,
    } = values;

    if (isEmpty(categories)) {
      setErros({
        categories: isEmpty(categories),
      });
    } else {
      const formatCategories = !isEmpty(categories) ? categories.map((cat) => cat.value) : [];
      const payload = {
        title,
        description,
        categories: formatCategories,
      };

      onSubmit(payload);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
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
    <form className="h-screen overflow-y-scroll overflow-x-hidden py-12 pl-1" onSubmit={handleSubmit}>
      <div className="lg:w-screen lg:h-screen lg:flex lg:justify-center lg:items-center lg:p-2">
        <Card className="rounded-xl w-full lg:w-3/5">
          <CardHeader color="green" className="rounded-xl">
            <span className="inline-block text-lg font-bold">
              Wow, a new trainer is comming! Rock it!
            </span>
          </CardHeader>
          <CardBody>
            <div className="mb-6">
              <InputIcon
                type="text"
                color="green"
                placeholder="Title *"
                required
                value={values.title}
                name="title"
                onChange={handleOnChange}
              />
            </div>
            <div className="w-full mb-6">
              <Select
                defaultValue={values.categories}
                onChange={(payload) => handleOnChangeSelect('categories', payload)}
                options={CATEGORIES_OPTIONS}
                placeholder="Select Features"
                className="w-full m-0 p-0"
                value={values.categories}
                isMulti
              />
              {errors.categories && (
                <span className="inline-block text-red-500 mt-2 text-base">
                  This field is required!
                </span>
              )}
            </div>
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

BecomeTrainer.defaultProps = {
  onSubmit: () => undefined,
};
export default BecomeTrainer;
