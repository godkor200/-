function solution(d, budget) {
  let team = d.sort((a, b) => a - b);
  let result = 0;
  let count = 0;
  for (let i = 0; i < team.length; i++) {
    count++;
    result += team[i];
    if (result >= budget) {
      break;
    }
  }
  return result > budget ? count - 1 : count;
}
let c = solution([1, 3, 2, 5, 4], 9);
console.log("c", c);
