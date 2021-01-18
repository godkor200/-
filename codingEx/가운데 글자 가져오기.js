function solution(s) {
  return s.length % 2 === 1
    ? s[Math.floor(s.length / 2)]
    : s[s.length / 2 - 1] + s[s.length / 2];
}
let r = solution("qwer");
console.log("🚀 ~ file: 가운데 글자 가져오기.js ~ line 7 ~ r", r);
