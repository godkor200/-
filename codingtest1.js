// function solution(x, n) {
//   let result = [];
//   result.push(x);
//   for (let i = 0; i < n - 1; i++) {
//     result.push(result[result.length - 1] + x);
//   }
//   return result;
// }

// let s = solution(2, 5);
// console.log("🚀 ~ file: codingtest1.js ~ line 10 ~ s", s);
function solution(N, stages) {
  const failRatio = getFail(N, stages);
  return failRatio.sort((a, b) => b.ratio - a.ratio).map((idx) => idx.idx);
}
function getFail(N, stages) {
  const temp = [];
  let result;
  let stagelen = stages.length;
  for (let i = 1; i <= N; i++) {
    let stage = stages.filter((e) => e === i).length;
    if (stage === 0) {
      result = 0;
    } else {
      result = stage / stagelen;
    }
    stagelen -= stage;
    temp.push({ idx: i, ratio: result });
  }
  return temp;
}
let a = solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
console.log("🚀 ~ file: codingtest1.js ~ line 32 ~ a", a);
