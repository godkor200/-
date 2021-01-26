/*
문제
문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자로 이루어진 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 공백이 있는 알파벳 문자열
출력
string 타입을 리턴해야 합니다.
주의 사항
단어는 공백 한 칸으로 구분합니다.
연속된 공백은 없다고 가정합니다.
빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
입출력 예시
let output = firstCharacter('hello world');
console.log(output); // --> "hw"

output = firstCharacter(
  'The community at Code States might be the biggest asset'
);
console.log(output); // --> "TcaCSmbtba"
*/
function firstCharacter(str) {
  let result = [];
  result.push(str[0]);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result.push(str[i + 1]);
    }
  }
  return result.join('');
}

let output1 = firstCharacter('hello world');
console.log(output1);

let output2 = firstCharacter(
  'The community at Code States might be the biggest asset'
);
console.log(output2);
