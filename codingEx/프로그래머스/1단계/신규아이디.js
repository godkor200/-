function solution(new_id) {
  let temp = [];
  //1단기
  new_id
    .toLowerCase()
    .split('')
    .map((e) => temp.push(step2(e)));
  temp = temp.filter((e) => e !== '');
  temp = step3(temp).filter((e) => e !== '');
  temp = step4(temp).filter((e) => e !== '');
  let result = temp.filter((e) => e !== '').join('');
  return (result.length >= 2 && result.length < 16) || !result
    ? step5(result)
    : step6(result);
}

function step2(new_id) {
  let arr = '~!@#$%^&*()=+[{]}:?,<>/';
  let eng = /^[a-z]*$/;
  for (let i = 0; i < arr.length; i++) {
    if (eng.test(new_id)) break;
    if (new_id === '-' || new_id === '_' || new_id === '.') break;
    if (arr[i] === new_id) {
      return '';
    }
  }
  return new_id;
}

function step3(temp) {
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === '.' && temp[i + 1] === '.' && temp[i + 2] === '.') {
      temp[i] = '.';
      temp[i + 1] = '';
      temp[i + 2] = '';
    } else if (temp[i] === '.' && temp[i + 1] === '.') {
      temp[i] = '.';
      temp[i + 1] = '';
    }
  }
  return temp;
}

function step4(temp) {
  if (temp[0] === '.' && temp[temp.length - 1] === '.') {
    temp[0] = '';
    temp[temp.length - 1] = '';
  } else if (temp[0] === '.') {
    temp[0] = '';
  } else if (temp[temp.length - 1] === '.') {
    temp[temp.length - 1] = '';
  }
  return temp;
}
function step5(temp) {
  if (!temp) return 'aaa';
  return temp.length === 1
    ? temp + temp + temp
    : temp.length === 2
    ? temp + temp[temp.length - 1]
    : temp;
}
function step6(char) {
  return char[14] === '.' ? char.slice(0, 14) : char.slice(0, 15);
}
console.log('🚀', solution('...!@BaT#*..y.abcdefghijklm'));
console.log('결과', solution('abcdefghijklmn.p'));
console.log('결과', solution('=.='));
console.log('결과', solution('z-+.^.'));
console.log('결과', solution('123_.def'));
/*
'~!@#$%^&*()=+[{]}:?,<>/' === 'aaa'
'.1.' ==='111'
*/
