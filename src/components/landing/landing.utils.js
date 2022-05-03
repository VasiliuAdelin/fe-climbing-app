export const formatCountries = (countries) => {
  return Object.keys(countries).map((countryKey) => {
    const { name } = countries[countryKey];
    return { value: countryKey, label: name };
  });
};

export const formatCities = (countries, country) => {
  const { cities } = countries[country];
  return Object.keys(cities).map((cityKey) => ({
    value: cityKey,
    label: cities[cityKey],
  }));
};
