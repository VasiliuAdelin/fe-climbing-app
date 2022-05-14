// eslint-disable-next-line import/prefer-default-export
export const formatTrainers = (data) => Object.keys(data).map((key) => {
  const label = data[key];
  return {
    label,
    value: key,
  };
});
