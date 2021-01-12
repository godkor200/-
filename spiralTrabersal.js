const spiralTraversal = function (matrix) {
  let flat = [];
  for (let i = 0; i < matrix[0].length; i++) {
    flat.push(matrix[0][i]);
  }
  for (let i = 1; i < matrix.length; i++) {
    flat.push(matrix[i][matrix[i].length - 1]);
  }
  for (let i = matrix[matrix.length - 1].length; i >= 1; i--) {
    flat.push(matrix[matrix.length - 1][i - 1]);
  }
  for (let i = matrix[matrix.length - 1].length; i >= 1; i--) {
    flat.push(matrix[matrix.length - 1][i - 1]);
  }
  console.log("spiralTraversal -> flat", flat);
  return flat;
};

spiralTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
  [19, 20, 21],
  [22, 23, 24],
]);
