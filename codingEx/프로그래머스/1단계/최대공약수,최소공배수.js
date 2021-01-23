function solution(n, m) {
  let GCD = getGCD(n, m);
  let LCM = Math.abs(n * m) / getGCD(n, m);
  return [GCD, LCM];
}

//최대공약수
// n = 1029
// m = 1071
function getGCD(n, m) {
  if (n === 0) return m;
  return getGCD(m % n, n);
}
let a = solution(3, 12);
console.log("🚀 ~ file: 최대공약수,최소공배수.js ~ line 18 ~ a", a);
