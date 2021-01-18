function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] === b[n] ? (a > b) - (a < b) : (a[n] > b[n]) - (a[n] < b[n])
  );
}

let e = solution(["abce", "abcd", "cdx"], 1);
console.log("🚀 ~ file: 문자열 내 마음대로 정렬하기.js ~ line 5 ~ e ", e);
/*
2. 해결 방법
sort()를 이용해서 정렬하자! 아스키코드 기준이기 때문에
“return (first > second) — (first < second);” 이렇게 리턴 값을 작성하면 일반적인 sort() 함수처럼 작동한다. 왜냐하면 앞에 숫자가 크면 1을 반환하고 뒤에 숫자가 크면 -1를 반환하기 때문이다.
sort 메서드 내용 추가 & 수정
비교 함수는 배열 안의 인접한 요소를 비교하는 역할이다. 비교 함수는 인수를 두 개 받는다. 첫 번째 인수는 인접한 왼쪽 요소고 두 번째 인수는 인접한 오른쪽 요소이다. 비교 함수를 function(a,b)라고 했을 때 비교 함수는 다음 규칙을 따라야 한다.
function(a,b) < 0 이면 a를 b보다 작은 인덱스로 정렬한다.
function(a,b) == 0 이면 a와 b의 순서를 바꾸지 않는다.
function(a,b) > 0 이면 b를 a보다 작은 인덱스로 정렬한다.
문제는 n번째 문자가 같을 경우인데 이때에는
“return (a > b) — (a < b);” 그냥 매개변수로 받은 a,b 문자열 전체를 비교해버리면 된다.
*/
