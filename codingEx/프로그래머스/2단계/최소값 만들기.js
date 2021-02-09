function solution(A, B) {
  let result = 0;
  let sortA = A.sort((a, b) => a - b);
  let sortB = B.sort((a, b) => b - a);
  for (let i = 0; i < sortA.length; i++) {
    result += sortA[i] * sortB[i];
  }
  return result;
}
let r = solution([1, 4, 2], [5, 4, 4]);
console.log('🚀 ~ file: 최소값 만들기.js ~ line 12 ~ r', r);
