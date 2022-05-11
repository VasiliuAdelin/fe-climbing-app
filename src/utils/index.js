/* eslint-disable import/prefer-default-export */
export const createArrayOfAlphabeticallyGrouped = (data) => Object.entries(
  data.reduce((memo, user) => {
    const fL = user.name[0].toUpperCase();
    const memoCopy = memo;
    if (fL in memoCopy) {
      memoCopy[fL].push(user);
    } else {
      memoCopy[fL] = [user];
    }
    return memoCopy;
  }, {}),
);
