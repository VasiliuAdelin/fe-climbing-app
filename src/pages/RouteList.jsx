import { useLayoutEffect } from "react";
import ComplexLayout from "../components/layouts/ComplexLayout";
import { useRouter } from "../hooks/useRouter";
import Breadcrumb from "../components/shared/Breadcrumb";
import Crags from "../components/crags/Crags";
import TYPES from "../types";

const { COUNTRIES } = TYPES;

export default function RouteList() {
  const { query, push } = useRouter();
  const { country, city } = query;

  const selectedCountry = COUNTRIES[country] || null;
  const selectedCity = selectedCountry ? selectedCountry.cities[city] : null;

  useLayoutEffect(() => {
    if (!selectedCountry || !selectedCity) {
      push("/");
    }
  }, [selectedCountry, selectedCity]);

  const routesBreadcrumb = [
    {
      name: "ClimbAround",
      icon: "home",
      urlTo: "/",
    },
    {
      name: selectedCity,
      icon: "people",
      urlTo: `/areas/${selectedCity}`,
    },
    {
      name: `All the routes from ${selectedCity}`,
      icon: "people",
      urlTo: "#",
    },
  ];

  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title={`All the routes from ${selectedCity}`}
      subtitle="Let's climb"
    >
      <Breadcrumb routes={routesBreadcrumb} />
      {selectedCity && <Crags city={city} country={country} />}
    </ComplexLayout>
  );
}
