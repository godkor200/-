function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      result[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return result;
}

let r = solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);
console.log("🚀 ~ file: 행렬의 덧셈.js ~ line 17 ~ r", r);
