function solution(x, n) {
  let result = [];
  let temp = 0;
  for (let i = 0; i < n; i++) {
    temp += x;
    result.push(temp);
  }
  return result;
}
let a = solution(2, 5);
console.log("🚀 ~ file: 간격.js ~ line 12 ~ a", a);
