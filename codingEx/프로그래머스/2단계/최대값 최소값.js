function solution(s) {
  const NumberArr = s.split(' ').map((e) => Number(e));
  const maxNum = Math.max.apply(null, NumberArr);
  const minNum = Math.min.apply(null, NumberArr);
  return `${minNum} ${maxNum}`;
}
console.log(solution('1 2 3 4'));
console.log(solution('-1 -2 -3 -4'));
console.log(solution('-1 -1'));
