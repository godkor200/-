function solution(n) {
  let result = 0;
  let sum = Math.sqrt(n) + 1;
  let num = Math.sqrt(n).toString().split("");
  for (let i = 0; i < num.length; i++) {
    if (num[i] === ".") {
      return -1;
    } else {
      result = sum * sum;
    }
  }
  return result;
}
let a = solution(4);
console.log("a", a);
