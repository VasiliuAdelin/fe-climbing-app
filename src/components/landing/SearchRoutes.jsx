import React, { useState } from 'react';
import Select from 'react-select';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { Button } from '@material-tailwind/react';
import useRouter from '../../hooks/useRouter';
import TYPES from '../../types';
import { formatCountries, formatCities } from './landing.utils';

const { COUNTRIES } = TYPES;

const COUNTRIES_OPTIONS = formatCountries(COUNTRIES);

function SearchRoutes() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cities, setCities] = useState([]);
  const { push } = useRouter();

  const onSelectCountry = (country) => {
    const { value } = country;
    setSelectedCity(null);
    setSelectedCountry(country);
    setCities(formatCities(COUNTRIES, value));
  };

  const onSelectCity = (city) => {
    setSelectedCity(city);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formatedCity = selectedCity.value;
    const formatedCountry = selectedCountry.value;

    push(`/areas/${formatedCountry}/${formatedCity}/routelist`);
  };

  return (
    <Card className="mt-10 w-auto inline-block">
      <CardHeader color="green" className="rounded-custom-shape">
        <span className="text-xl md:text-2xl">Find the best Rock Climbing Routes</span>
      </CardHeader>
      <CardBody>
        <form onSubmit={onSubmit}>
          <div className="lg:flex justify-around items-center">
            <Select
              defaultValue={selectedCountry}
              onChange={onSelectCountry}
              options={COUNTRIES_OPTIONS}
              placeholder="Select Country"
              className="w-full my-2 lg:m-2"
              value={selectedCountry}
            />
            <Select
              isDisabled={!selectedCountry}
              defaultValue={selectedCity}
              onChange={onSelectCity}
              options={cities}
              placeholder="Select City"
              className="w-full my-2 lg:m-2"
              value={selectedCity}
            />
          </div>
          <div>
            <Button
              disabled={!(selectedCity && selectedCountry)}
              type="submit"
              color={selectedCity && selectedCountry ? 'green' : 'gray'}
              ripple="dark"
              className="w-full my-2 lg:w-auto lg:m-4"
            >
              SEARCH
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}

export default SearchRoutes;
