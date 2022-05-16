import { isArray, isEmpty } from 'lodash';
import TYPES from '../../types';

const { CRAGS } = TYPES;
const {
  GENRE_TYPE, GRADES_TYPES,
} = CRAGS;

export const formatFilters = (arr) => {
  const entriesArr = [...Object.entries(arr)];
  return entriesArr.map(([key, value]) => ({
    name: key,
    value,
    isChecked: false,
  }));
};

export const formatLatLngValue = (value) => {
  const data = {
    lat: 47.16042431949426,
    lng: 27.592333255011777,
    searchLink: 'https://www.google.com/maps/search/?api=1&query=47.5951518%2C-122.3316393',
  };

  if (!value) {
    return data;
  }

  const [lat, lng] = value.split(',');

  const formatedLat = Number(lat.trim());
  const formatedLng = Number(lng.trim());

  data.lat = formatedLat;
  data.lng = formatedLng;
  data.searchLink = `https://www.google.com/maps/search/?api=1&query=${formatedLat},${formatedLng}`;
  return data;
};

export const formatCragsIntoMarkers = (data) => {
  if (isEmpty(data) || !isArray(data)) {
    return [];
  }

  return data.map((crag) => {
    const {
      name = '', id, grade, type, assets, geoLocation, address, country, city,
    } = crag;

    const mainImage = assets[0] ? assets[0] : '';

    const { lat, lng, searchLink } = formatLatLngValue(geoLocation);

    const linkToBack = `/areas/${country}/${city}/routelist/${id}`;

    const payload = {
      name,
      id,
      lat,
      lng,
      grade: GENRE_TYPE[grade],
      type: GRADES_TYPES[type],
      mainImage,
      location: address,
      linkToGo: searchLink,
      linkToBack,
    };
    return payload;
  });
};

export const formatObjectSelect = (obj) => Object.entries(obj).map(([key, value]) => ({
  value: key,
  label: value,
}));

export const calculatedRating = (ratingArr) => {
  if (!ratingArr || ratingArr.length < 5) {
    return 0;
  }

  const sumElements = ratingArr.reduce((acc, curr) => acc + curr, 0);

  const sumRating = ratingArr.reduce(
    (acc, curr, index) => acc + curr * (index + 1),
    0,
  );

  return sumRating / sumElements;
};
