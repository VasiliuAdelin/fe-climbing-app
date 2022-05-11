export const formatFilters = (arr) => {
  const entriesArr = [...Object.entries(arr)];
  return entriesArr.map(([key, value]) => ({
    name: key,
    value,
    isChecked: false,
  }));
};

export const formatObjectSelect = (obj) => Object.entries(obj).map(([key, value]) => ({
  value: key,
  label: value,
}));

export const calculatedRating = (ratingArr) => {
  console.log(ratingArr);
  if (!ratingArr || ratingArr.length < 5) {
    return 0;
  }

  const sumElements = ratingArr.reduce((acc, curr, index) => acc + curr, 0);

  const sumRating = ratingArr.reduce(
    (acc, curr, index) => acc + curr * (index + 1),
    0,
  );

  return sumRating / sumElements;
};
