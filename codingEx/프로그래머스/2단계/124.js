function solution(n) {
  let obj = {
    1: 1,
    2: 2,
    0: 4,
  };
  n = n.toString();
  let result = '';
  let mor = n / 3;
  let name = n % 3;
  console.log('🚀 ~ file: 124.js ~ line 17 ~ solution ~ mor', mor);
  console.log('🚀 ~ file: 124.js ~ line 18 ~ solution ~ name', name);
  if (mor <= 1) {
    return obj[name];
  }
}
// console.log(solution(1));
// console.log(solution(2));
// console.log(solution(3));
solution(4);
solution(5);
solution(6);
solution(7);
solution(8);
solution(9);
solution(10);
solution(11);
solution(40);
solution(100);
