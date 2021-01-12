// function solution(participant, completion) {
//   participant.sort();
//   completion.sort();
//   for (let i = 0; i < participant.length; i++) {
//     if (participant[i] !== completion[i]) return participant[i];
//   }
// }

// let a = solution(
//   ["mislav", "stanko", "mislav", "ana"],
//   ["stanko", "ana", "mislav"]
// );

// console.log("a", a);

function solution(arr, divisor) {
  let resultArr = div(arr, divisor);
  if (resultArr.length === 0) {
    return [-1];
  } else {
    return resultArr.sort((a, b) => a - b);
  }
}

const div = (arr, divisor) => {
  let resultArr = [];
  arr.forEach((ele) => {
    if (ele % divisor === 0) {
      resultArr.push(ele);
    }
  });
  return resultArr;
};
let result = solution([3, 2, 6], 10);
console.log("🚀 ~ file: codingtest-210108.js ~ line 26 ~ result", result);
