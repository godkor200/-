function solution(citations) {
  let index = 0;
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      index++;
    } else break;
  }
  return index;
}
// function solution(citations) {
//   let result = 0;
//   citations.sort((a, b) => b - a);
//   while (result <= citations.length) {
//     if (result + 1 <= citations[result]) result++;
//     else break;
//   }
//   return result;
// }
console.log(
  '🚀 ~ file: h-index.js ~ line 6 ~ solution([3, 0, 6, 1, 5])',
  solution([3, 0, 6, 1, 5])
);
console.log(
  '🚀 ~ file: h-index.js ~ line 6 ~ solution([3, 0, 6, 1, 5])',
  solution([47, 42, 32, 28, 24, 22, 17, 15, 10, 10, 8])
);
console.log(solution([10, 11, 12, 13]));
/*
[10, 11, 12, 13]
[1,2,3,4]
H-지수 구하는 방법

나의 h는 어떻게 구할 수 있을까? 우측의 표와 같이 자신이 저널에 등재한 
전체 논문중 많이 인용된 순으로 정렬한 후, 피인용수가 논문수와 같아지거나 
피인용수가 논문수보다 작아지기 시작하는 숫자가 바로 나의 h가 됩니다. 
이 표에서는 10이 H-지수가 되는 것입니다. 다시 말하여, 이 연구원은 논문 인용횟수가 10이 넘는 논문이 적어도 10편이 된다는 것을 의미합니다.

출처: [BRIC Bio통신원] [연구논문을 위한 핵심 10단계] H-지수(H-Index) 란 무엇인가? ( https://www.ibric.org/myboard/read.php?Board=news&id=270333 )
*/
