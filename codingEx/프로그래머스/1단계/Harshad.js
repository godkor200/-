function solution(x) {
  return x %
    x
      .toString()
      .split("")
      .map((e) => Number(e))
      .reduce((a, c) => a + c) ===
    0
    ? true
    : false;
}
let r = solution(10);
console.log("🚀 ~ file: Harshad.js ~ line 10 ~ r", r);
