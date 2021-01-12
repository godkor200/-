// function getGCDLCM(n, m) {
//   const getGCD = (n, m) => {
//     if (m === 0) return n;
//     return getGCD(m, n % m);
//   };
//   const getLCM = (n, m) => {
//     return (n * m) / getGCD(n, m);
//   };
//   return [getGCD(n, m), getLCM(n, m)];
// }
// let a = getGCDLCM(10, 12);
// console.log("🚀 ~ file: codingtest-210107.js ~ line 12 ~ a", a);

function solution(numbers) {
  console.log(
    "🚀 ~ file: codingtest-210107.js ~ line 23 ~ solution ~ getAdd(numbers)",
    getAdd(numbers)
  );

  return getAdd(numbers)
    .sort((a, b) => a - b)
    .filter((item, idx, self) => self.indexOf(item) === idx);
}
const getAdd = (numbers) => {
  let temp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) {
        continue;
      } else {
        temp.push(numbers[i] + numbers[j]);
      }
    }
  }
  return temp;
};
let b = solution([5, 0, 2, 7]);
//console.log("🚀 ~ file: codingtest-210107.js ~ line 31 ~ a", b);

// function solution(answers) {
//   const math1 = [1, 2, 3, 4, 5];
//   const math2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const math3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//   const ansCount = [0, 0, 0];
//   for (let i = 0; i < answers.length; i++) {
//     if (math1[i % math1.length] === answers[i]) {
//       ansCount[0]++;
//     }
//     if (math2[i % math2.length] === answers[i]) {
//       ansCount[1]++;
//     }
//     if (math3[i % math3.length] === answers[i]) {
//       ansCount[2]++;
//     }
//   }

//   let result = [];
//   for (let j = 0; j < ansCount.length; j++) {
//     let max = Math.max(...ansCount);
//     if (ansCount[j] === max) {
//       result.push(j + 1);
//     }
//   }
//   return result;
// }

// let c = solution([1, 2, 3, 4, 5]);
// console.log("🚀 ~ file: codingtest-210107.js ~ line 46 ~ a", c);
