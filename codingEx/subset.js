//const subsetSum = function (set, bound) {};
// naive solution: O(2^N)
const subsetSum = function (set, bound) {
  const LENGTH = set.length;
  function pickOrNot(idxToCheck, left) {
    if (idxToCheck === LENGTH) return bound - left;

    if (set[idxToCheck] > left) return pickOrNot(idxToCheck + 1, left);
    if (set[idxToCheck] === left) return bound;

    return Math.max(
      pickOrNot(idxToCheck + 1, left - set[idxToCheck]),
      pickOrNot(idxToCheck + 1, left)
    );
  }

  return pickOrNot(0, bound);
};
