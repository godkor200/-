// function solution(s) {
//   if (s[0] === ')') return false;
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(') {
//       count++;
//     } else if (count > 0 && s[i] === ')') {
//       count--;
//     }
//   }
//   console.log(count);
//   return count === 0 ? true : false;
// }
function solution(s) {
  s = s.split('()').join('');
  console.log('🚀 ~ file: 올바른 괄호.js ~ line 16 ~ solution ~ s', s);
}
console.log(solution('()))((()'));
