function solution(s) {
  let pcount = 0;
  let ycount = 0;
  s.toLowerCase()
    .split("")
    .forEach((ele) => {
      if (ele === "p") {
        pcount++;
      } else if (ele === "y") {
        ycount++;
      }
    });
  return pcount === 0 && ycount === 0 ? ture : pcount === ycount;
}
let s = solution("pPoooyY");
console.log("🚀 ~ file: 문자열 내 p와 y의 개수.js ~ line 14 ~ s", s);

// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function numPY(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
