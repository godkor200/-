function solution(n) {
  let ans = String(n)
    .split("")
    .reverse()
    .map((n) => Number(n));
  return ans;
}
solution(12345);
//[5,4,3,2,1]
