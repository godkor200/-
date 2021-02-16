function solution(arr1, arr2) {
  let result = [];
  let transposeArr = transpose(arr2);
  for (let i = 0; i < arr1.length; i++) {
    result.push([]);
    let temp = 0;
    for (let j = 0; j < arr1[i].length; j++) {
      temp += arr1[i][j] + transposeArr[i][j];
      result.push(temp);
    }
  }
  return result;
}
/*
[
  [2, 3, 2], 
  [4, 2, 4], 
  [3, 1, 4]
]

[
  [5, 4, 3], 
  [2, 4, 1], 
  [3, 1, 1]
]
awser = 
[
  [22, 22, 11], 
  [36, 28, 18], 
  [29, 20, 14]
]
*/
/*
let arr1 = [
  [1, 4],
  [3, 2],
  [4, 1],
];

let arr2 = [
  [3, 3],
  [3, 3],
];

awer = 
[
  [15, 15], 
  [15, 15], 
  [15, 15]
]
*/

const transpose = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < row; column++) {
      let temp = matrix[row][column];
      matrix[row][column] = matrix[column][row];
      matrix[column][row] = temp;
    }
  }
  return matrix;
};
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);
