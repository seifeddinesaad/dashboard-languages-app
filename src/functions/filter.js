export const filterArray = (array, search, key) => {
  return array.filter((item) => {
    return item[key].toString().toLowerCase().includes(search.toLowerCase());
  });
};
