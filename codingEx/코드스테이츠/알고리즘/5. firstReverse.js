/*firstReverse
문제
문자열을 입력받아 순서가 뒤집힌 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 문자열
출력
string 타입을 리턴해야 합니다.
입출력 예시
let output = firstReverse('codestates');
console.log(output); // "setatsedoc"

output = firstReverse('I love codestates');
console.log(output); // "setatsedoc evol I"
*/
function firstReverse(str) {
  return str.split('').reverse().join('');
}
let output = firstReverse('codestates');
console.log(output);
