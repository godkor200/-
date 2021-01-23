function solution(n) {
  let subak = "수박";
  let result = "";
  for (let i = 1; i <= n; i++) {
    result = result + subak;
  }
  return result.slice(0, n);
}
let c = solution(4);
console.log("🚀 ~ file: 수박.js ~ line 19 ~ c", c);
