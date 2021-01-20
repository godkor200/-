function solution(arr) {
  return arr.length === 1
    ? [-1]
    : arr.filter((ele) => ele !== Math.min(...arr));
}
let c = solution([4, 3, 2, 1]);
console.log("🚀 ~ file: 제일작은수제거하기.js ~ line 5 ~ c", c);
