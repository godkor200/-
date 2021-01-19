function solution(n) {
  let result = 0;
  let num = n.toString();
  for (let i = 0; i < num.length; i++) {
    result += Number(num[i]);
  }
  return result;
}
let a = solution(123);
console.log("🚀 ~ file: 자릿수더하기.js ~ line 7 ~ a", a);
