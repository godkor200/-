const subsetSum = function (set, bound) {
  const result = 0;
  const sort = setSort(set);
  let prev = sort[0];
  for (let i = 1; i < sort.length; i++) {
    let curr = sort[i];
    if (prev === bound) {
      return prev;
    } else if (prev + curr === bound) {
      return prev + curr;
    }
    prev = curr;
  }
};
const setSort = function (set) {
  return set.sort((a, b) => a - b);
};

console.log(
  '🚀 ~ file: subsetSum.js ~ line 11 ~ subsetSum([3, 9, 8], 11)',
  subsetSum([3, 9, 8], 10)
);
