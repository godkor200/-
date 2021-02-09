function solution(n, m = n + 1) {
  let Number1Count = n.toString(2).match(/1/g).length;
  let plus1Count = m.toString(2).match(/1/g).length;
  return Number1Count === plus1Count ? m : solution(n, m + 1);
}

console.log(solution(15));
