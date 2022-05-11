export const createArrayOfAlphabeticallyGrouped = (data) => Object.entries(
  data.reduce((memo, user) => {
    const fL = user.name[0].toUpperCase();
    if (fL in memo) {
      memo[fL].push(user);
    } else {
      memo[fL] = [user];
    }
    return memo;
  }, {}),
);
