/*
문제
연이율을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴해야 합니다.

입력
인자 1 : interestRate
number 타입의 연이율 (%)
출력
number 타입을 리턴해야 합니다.
입출력예시
let output = computeWhenDouble(7);
console.log(output); // --> 11

output = computeWhenDouble(10);
console.log(output); // --> 8
*/

function computeWhenDouble(interestRate) {
  return Math.ceil(72 / interestRate);
}
let output = computeWhenDouble(7);
console.log(output); // --> 11
function computeWhenDouble(interestRate) {
  let rate = 1 + interestRate / 100; // if 7% > 1.07
  let principal = 1;
  let year = 0;
  for (principal = 1; principal < 2; year++) {
    //
    principal = principal * rate;
  }
  return year;
  // 공식 principal * Rate = principal
}
