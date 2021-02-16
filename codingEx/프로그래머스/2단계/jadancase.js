// function solution(s) {
//   let result = '';
//   if (s[0] === ' ' && s[1] !== ' ') {
//     result += ' ';
//     result += s[1].toUpperCase();
//     for (let i = 2; i < s.length; i++) {
//       if (s[i] === ' ') {
//         result += ' ';
//       } else if (s[i] === ' ' && s[i + 1] !== ' ') {
//         result += ' ';
//         result += s[i + 1].toUpperCase();
//         i++;
//       } else {
//         result += s[i].toLowerCase();
//       }
//     }
//   } else {
//     result += s[0].toUpperCase();
//     for (let i = 1; i < s.length; i++) {
//       if (s[i] !== ' ') {
//         result += s[i].toLowerCase();
//       } else if (s[i] === ' ' && s[i + 1] !== ' ') {
//         result += ' ';
//         result += s[i + 1].toUpperCase();
//         i++;
//       } else if (s[i] === ' ') {
//         result += ' ';
//       }
//     }
//   }
//   return result;
// }
// function solution(s) {
//   return s
//     .split(' ')
//     .map((v) => {
//       console.log(v);
//       return v
//         .split('')
//         .map((a, i) => (i ? a.toLowerCase() : a.toUpperCase()))
//         .join('');
//     })
//     .join(' ');
// }

function solution(s) {
  return s
    .split(' ')
    .map((e) =>
      e
        .split('')
        .map((v, i) => (i ? v.toLowerCase() : v.toUpperCase()))
        .join('')
    )
    .join(' ');
}
console.log('🚀', solution('for the last week  '));
console.log(solution(' abc'));
console.log(solution(' hEllo    1woRld  ')); //=>" Hello    1world  "
