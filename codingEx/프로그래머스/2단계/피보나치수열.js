// function solution(n) {
//   return getfibo(n) % 1234567;
// }

// function getfibo(n) {
//   if (n < 2) return n;
//   return solution(n - 1) + solution(n - 2);
// }

function solution(n) {
  let arr = [0, 1];
  for (let i = 1; i <= n; i++) {
    arr.push((arr[i - 1] + arr[i]) % 1234567);
  }
  return arr[n];
}
let r = solution(10);
console.log('🚀 ~ file: 피보나치수열.js ~ line 8 ~ r', r);
