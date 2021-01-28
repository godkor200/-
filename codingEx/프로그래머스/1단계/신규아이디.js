// function solution(new_id) {
//   let SpecialChar = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;
//   let dot = /[.]+/g;
//   let temp = new_id.toLowerCase().replace(SpecialChar, '').replace(dot, '.');
//   let result = dotRemove(temp);
//   return sliceText(result);
// }

// function dotRemove(temp) {
//   return temp[0] === '.' && temp[temp.length - 1] === '.'
//     ? temp.slice(1, temp.length - 1)
//     : temp[0] === '.'
//     ? temp.slice(1)
//     : temp[temp.length - 1] === '.'
//     ? temp.slice(0, temp.length - 1)
//     : !temp || temp.length === 0
//     ? 'a'
//     : temp;
// }

// function sliceText(result) {
//   if (result.length >= 16) {
//     result = result.slice(0, 15);
//   } else if (result.length === 2) {
//     result = result + result[result.length - 1];
//   } else if (result.length === 1) {
//     result = result + result + result;
//   } else if (result.length === 0) {
//     result = 'aaa';
//   }
//   return result[result.length - 1] === '.'
//     ? result.slice(0, result.length - 1)
//     : result;
// }
function solution(new_id) {
  let result = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/[.]+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/g, '');
  return result.length > 2
    ? result
    : result + result.charAt(result.length - 1).repeat(3 - result.length);
}
console.log('🚀', solution('...!@BaT#*..y.abcdefghijklm'));
console.log('결과', solution('abcdefghijklmn.p'));
console.log('결과', solution('=.='));
console.log('결과', solution('z-+.^.'));
console.log('결과', solution('123_.def'));
console.log('결과', solution('~!@#$%^&*()=+[{]}:?,<>/'));
console.log('결과', solution('.1.'));

/*
'~!@#$%^&*()=+[{]}:?,<>/' === 'aaa'
'.1.' ==='111'
*/
