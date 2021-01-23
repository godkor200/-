function solution(a, b) {
  let result = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      result += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      result += i;
    }
  }
  return result;
}
let c = solution(5, 3);
console.log("🚀 ~ file: 두 정수 사이의 합.js ~ line 9 ~ c", c);
