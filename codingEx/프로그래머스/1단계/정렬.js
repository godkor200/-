function solution(n) {
  return Number(
    n
      .toString()
      .split("")
      .map((ele) => Number(ele))
      .sort((a, b) => b - a)
      .join("")
  );
}
let r = solution(118372);
console.log("r", r);
