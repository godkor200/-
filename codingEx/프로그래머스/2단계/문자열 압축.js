function solution(s) {
  let temp = [];
  let result = [];
  let strArr = s.split('');
  if (s.length === 1) return 1;
  const cutStr = (strArr, cutNum) => {
    let cutPart = strArr.splice(0, cutNum).join('');
    temp.push(cutPart);
    return strArr.length === 0 ? temp : cutStr(strArr, cutNum);
  };

  const countStr = (strArr) => {
    for (let i = 1; i < strArr.length; i++) {
      let copyArr = strArr.slice();
      cutStr(copyArr, i);
      result.push(temp);
      temp = [];
    }
    let count = 1,
      strTemp = '';
    let res = [];
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[i].length; j++) {
        if (result[i][j] === result[i][j + 1]) {
          count++;
        } else {
          if (count !== 1) {
            strTemp += count + result[i][j];
            count = 1;
          } else {
            strTemp += result[i][j];
          }
        }
      }
      res.push(strTemp);
      strTemp = '';
    }
    return res.map((e) => e.length);
  };
  return Math.min(...countStr(strArr));
}

//console.log('1', solution('aabbaccc'));
//console.log('2', solution('ababcdcdababcdcd'));
// console.log('3', solution('abcabcdede'));
//console.log('4', solution('abcabcabcabcdededededede'));
// console.log('5', solution('xababcdcdababcdcd'));
console.log('6', solution('a'));
// const countSet = (arr) => {
//   let count = 1,
//     result = '';
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === arr[i][j + 1]) {
//         count++;
//       } else {
//         if (count !== 1) {
//           result += count + arr[i][j];
//           count = 1;
//         } else {
//           result += arr[i][j];
//         }
//       }
//     }
//     res.push(result);
//     result = '';
//   }
//   return res;
// };
// let r = countSet([
//   [
//     'a',
//     'b',
//     'a',
//     'b',
//     'c',
//     'd',
//     'c',
//     'd',
//     'a',
//     'b',
//     'a',
//     'b',
//     'c',
//     'd',
//     'c',
//     'd',
//   ],
//   ['ab', 'ab', 'cd', 'cd', 'ab', 'ab', 'cd', 'cd'],
//   ['aba', 'bcd', 'cda', 'bab', 'cdc', 'd'],
//   ['abab', 'cdcd', 'abab', 'cdcd'],
//   ['ababc', 'dcdab', 'abcdc', 'd'],
//   ['ababcd', 'cdabab', 'cdcd'],
//   ['ababcdc', 'dababcd', 'cd'],
//   ['ababcdcd', 'ababcdcd'],
//   ['ababcdcda', 'babcdcd'],
//   ['ababcdcdab', 'abcdcd'],
//   ['ababcdcdaba', 'bcdcd'],
//   ['ababcdcdabab', 'cdcd'],
//   ['ababcdcdababc', 'dcd'],
//   ['ababcdcdababcd', 'cd'],
//   ['ababcdcdababcdc', 'd'],
// ]);
// console.log('🚀 ~ file: 문자열 압축.js ~ line 101 ~ r', r);
