function solution(numbers) {
  let r = numbers
    .sort(
      (a, b) =>
        b.toString().repeat(4).slice(0, 4) - a.toString().repeat(4).slice(0, 4)
    )
    .map((a) => a + '')
    .join('');
  for (let i = 0; i < r.length; i++) {
    return r[i] === '0' ? '0' : r;
  }
}
solution([6, 10, 2]);
console.log('🚀', solution([3, 30, 34, 5, 9]));
console.log('🚀', solution([0, 0, 0, 0, 0, 0]));
