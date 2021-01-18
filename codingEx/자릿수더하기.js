function solution(n) {
  let result = 0;
  let a = n.split("");
  console.log("🚀 ~ file: 자릿수더하기.js ~ line 4 ~ solution ~ a ", a);
  for (let i = 0; i < n.length; i++) {
    result += n[i];
  }
  return result;
}
let a = solution(123);
console.log("🚀 ~ file: 자릿수더하기.js ~ line 7 ~ a", a);
