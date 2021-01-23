function solution(s) {
  let result = "";
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += " ";
      cnt = 0;
    } else if (cnt % 2 === 1) {
      result += s[i].toLowerCase();
      cnt++;
    } else {
      result += s[i].toUpperCase();
      cnt++;
    }
  }
  return result;
}
let a = solution("try hello world");
console.log("🚀 ~ file: 이상한문자.js ~ line 11 ~ a", a);
