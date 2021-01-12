function solution(arr) {
  //필터링을 앞뒤 숫자를 비교해서 같이 않으면 리턴을 한다.
  // for(let i = 0 ; i < arr.length ; i++){
  //   if()
  // }
  //
  return arr.filter((value, index) => value !== arr[index + 1]);
}

console.log(
  "🚀 ~ file: hatesamenumber.js ~ line 7 ~ solution([1, 1, 3, 3, 0, 1, 1])",
  solution([1, 1, 3, 3, 0, 1, 1])
);

console.log(solution([4, 4, 4, 3, 3]));
