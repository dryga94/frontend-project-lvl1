export default (integer) => {
  for (let i = 2; i < Math.floor(integer / 2); i += 1) {
    if (integer % i === 0) {
      return false;
    }
  }

  return true;
};
