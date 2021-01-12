const knapsack = function (weight, items) {
  let itemSort = items.sort((a, b) => b[1] - a[1]);
  console.log(
    "🚀 ~ file: 0-1Knapsack.js ~ line 3 ~ knapsack ~ itemSort",
    itemSort
  );
  let result = 0;
  let weightCount = 0;
  for (let i = 0; i < itemSort.length; i++) {
    if (weightCount <= weight) {
      weightCount = weightCount + itemSort[i][0];
      result = result + itemSort[i][1];
    } else {
      result = result - itemSort[i - 1][1];
      break;
    }
    return result;
  }
  if (itemSort[0][0] > weight) {
    return 0;
  }
};
weight = 40;
items = [
  [40, 10],
  [50, 200],
  [10, 30],
];
let output = knapsack(weight, items);
console.log(output);
