const countIslands = function (grid) {
  if (grid.length === 0) return 0;
  let count = 0;
  let length = grid.length;
  let width = grid[0].length;
  function check(row, column) {
    grid[row][column] = "0";
    //check right
    if (column + 1 < width && grid[row][column + 1] === "1") {
      check(row, column + 1);
    }
    //check left
    if (column > 0 && grid[row][column - 1] === "1") {
      check(row, column - 1);
    }
    //check up
    if (row > 0 && grid[row - 1][column] === "1") {
      check(row - 1, column);
    }
    //check down
    if (row + 1 < length && grid[row + 1][column] === "1") {
      check(row + 1, column);
    }
  }
  for (let row = 0; row < length; row++) {
    for (let column = 0; column < width; column++) {
      if (grid[row][column] === "1") {
        count++;
        check(row, column);
      }
    }
  }
  return count;
};
