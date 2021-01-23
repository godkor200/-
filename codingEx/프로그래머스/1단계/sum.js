function solution(arr) {
  return arr.reduce((a, c) => a + c) / arr.length;
}
let a = solution([1, 2, 3, 4]);
console.log("🚀 ~ file: sum.js ~ line 5 ~ a", a);
