import React, { useState } from "react";
import Select from "react-select";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import { Button } from "@material-tailwind/react";
import { useRouter } from "../../hooks/useRouter";

const COUNTRIES = [
  { value: "romania", label: "Romania" },
  { value: "italy", label: "Italy" },
  { value: "spain", label: "Spain" },
];

const CITIES = {
  romania: [
    { value: "iasi", label: "Iasi" },
    { value: "suceava", label: "Suceava" },
    { value: "alba-iulia", label: "Alba Iulia" },
  ],
  spain: [
    { value: "madrid", label: "Madrid" },
    { value: "barcelona", label: "Barcelona" },
    { value: "sevillia", label: "Sevillia" },
  ],
  italy: [
    { value: "italy1", label: "Italy 1" },
    { value: "italy2", label: "Genova" },
    { value: "italy3", label: "Altceva" },
  ],
};

const SearchRoutes = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cities, setCities] = useState([]);
  const { push } = useRouter();

  const onSelectCountry = (country) => {
    const { value } = country;
    setSelectedCity(null);
    setSelectedCountry(country);
    setCities(CITIES[value]);
  };

  const onSelectCity = (city) => {
    setSelectedCity(city);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    push(`/areas/${selectedCity.value}/routelist`);
  };

  return (
    <Card className="mt-10 w-auto inline-block">
      <CardHeader color="green" className="rounded-custom-shape">
        <span className="text-2xl">Find the Best Rock Climbing Routes</span>
      </CardHeader>
      <CardBody>
        <form onSubmit={onSubmit}>
          <div className="flex justify-around items-center">
            <Select
              defaultValue={selectedCountry}
              onChange={onSelectCountry}
              options={COUNTRIES}
              placeholder="Select Country"
              className="w-full m-2"
              value={selectedCountry}
            />
            <Select
              isDisabled={!selectedCountry}
              defaultValue={selectedCity}
              onChange={onSelectCity}
              options={cities}
              placeholder="Select City"
              className="w-full m-2"
              value={selectedCity}
            />
          </div>
          <div>
            <Button
              disabled={!(selectedCity && selectedCountry)}
              type="submit"
              color={selectedCity && selectedCountry ? "green" : "gray"}
              ripple="dark"
              className="m-4"
            >
              SEARCH
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default SearchRoutes;
